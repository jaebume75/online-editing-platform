
import { useState } from 'react';
import React from 'react';

export function Tabs({ defaultValue, children }) {
  const [value, setValue] = useState(defaultValue);
  return <div>{React.Children.map(children, child =>
    child.type.name === 'TabsContent'
      ? value === child.props.value && child
      : child.type.name === 'TabsList'
      ? React.cloneElement(child, { value, setValue })
      : child)}</div>;
}

export function TabsList({ children, value, setValue }) {
  return <div className='flex gap-2 mb-4'>{React.Children.map(children, child =>
    React.cloneElement(child, { isActive: value === child.props.value, onClick: () => setValue(child.props.value) }))}</div>;
}

export function TabsTrigger({ value, onClick, isActive, children }) {
  return <button onClick={onClick} className={`px-4 py-2 rounded ${isActive ? 'bg-blue-500 text-white' : 'bg-gray-200 text-black'}`}>{children}</button>;
}

export function TabsContent({ value, children }) {
  return <div>{children}</div>;
}
