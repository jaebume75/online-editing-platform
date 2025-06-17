
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { UploadCloud, WandSparkles, Send } from "lucide-react";

export default function OnlineEditingPlatform() {
  const [file, setFile] = useState(null);
  const [instructions, setInstructions] = useState("");

  return (
    <div className="min-h-screen bg-white p-6">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-8">
          디지털 콘텐츠 편집 웹서비스 (AI 기반)
        </h1>

        <Tabs defaultValue="upload">
          <TabsList className="flex justify-center space-x-4 mb-6">
            <TabsTrigger value="upload">콘텐츠 업로드</TabsTrigger>
            <TabsTrigger value="edit">편집 요청</TabsTrigger>
            <TabsTrigger value="result">결과 확인</TabsTrigger>
          </TabsList>

          <TabsContent value="upload">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center gap-2 mb-4 text-lg font-medium">
                  <UploadCloud className="w-5 h-5" /> 콘텐츠 업로드
                </div>
                <Input type="file" onChange={(e) => setFile(e.target.files?.[0])} />
                {file && (
                  <p className="text-sm text-green-600 mt-2">
                    업로드 완료: {file.name}
                  </p>
                )}
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="edit">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center gap-2 mb-4 text-lg font-medium">
                  <WandSparkles className="w-5 h-5" /> 편집 요청사항 입력
                </div>
                <Textarea
                  placeholder="예: 색상 조정, 자막 추가, 배경 제거 등"
                  value={instructions}
                  onChange={(e) => setInstructions(e.target.value)}
                  className="mb-4"
                />
                <Button>
                  <Send className="w-4 h-4 mr-2" /> 편집 요청 제출
                </Button>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="result">
            <Card>
              <CardContent className="p-6 text-gray-600">
                <p>※ 현재 결과 확인 기능은 시연용으로 준비 중입니다. 추후 알림을 통해 제공 예정입니다.</p>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        <div className="text-center text-xs text-gray-400 mt-12">
          © 2025 박재범 디지털 편집 플랫폼. All rights reserved.
        </div>
      </div>
    </div>
  );
}
