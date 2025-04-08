"use client";
import { Editor } from "@monaco-editor/react";
import { useState } from "react";

export function CodeEditor({ existingCode }: any) {
  const [code, setCode] = useState("");
  // function handleEditorChange(value: string | undefined) {
  //   // Debounce Function
  //   debounce(() => saveToDatabase(code))
  // }
  return (
    <Editor
      height="90vh"
      defaultLanguage="javascript"
      defaultValue={existingCode}
      onChange={handleEditorChange}
    />
  );
}
