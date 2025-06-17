
import { useState } from "react";
import { Input } from "./components/Input";
import { Textarea } from "./components/Textarea";
import { Button } from "./components/Button";
import { Card, CardContent } from "./components/Card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "./components/Tabs";

export default function OnlineEditingPlatform() {
  const [file, setFile] = useState(null);
  const [instructions, setInstructions] = useState("");

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-8">
          디지털 콘텐츠 편집 웹서비스 (AI 기반)
        </h1>

        <Tabs defaultValue="upload">
          <TabsList>
            <TabsTrigger value="upload">콘텐츠 업로드</TabsTrigger>
            <TabsTrigger value="edit">편집 요청</TabsTrigger>
            <TabsTrigger value="result">결과 확인</TabsTrigger>
          </TabsList>

          <TabsContent value="upload">
            <Card>
              <CardContent>
                <h2 className="text-xl font-semibold mb-2">콘텐츠 업로드</h2>
                <Input type="file" onChange={(e) => setFile(e.target.files?.[0])} />
                {file && <p className="text-sm text-green-600 mt-2">업로드 완료: {file.name}</p>}
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="edit">
            <Card>
              <CardContent>
                <h2 className="text-xl font-semibold mb-2">편집 요청</h2>
                <Textarea
                  placeholder="예: 색상 보정, 자막 추가, 배경 제거 등"
                  value={instructions}
                  onChange={(e) => setInstructions(e.target.value)}
                />
                <Button className="mt-4">편집 요청 제출</Button>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="result">
            <Card>
              <CardContent>
                <p className="text-gray-600">※ 결과 확인 기능은 추후 제공될 예정입니다.</p>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        <div className="text-center text-xs text-gray-500 mt-12">
          © 2025 박재범 디지털 편집 플랫폼. All rights reserved.
        </div>
      </div>
    </div>
  );
}
