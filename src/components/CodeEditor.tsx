"use client";
import { Editor } from "@monaco-editor/react";
import { useState } from "react";

export function CodeEditor({ existingCode }: any) {
  const [code, setCode] = useState("");

  function handleEditorChange(value: string | undefined) {
    if (value !== undefined) {
      setCode(value); 
      console.log("Editor content changed:", value);
    }
  }

  return (
    <Editor
      height="90vh"
      defaultLanguage="javascript"
      defaultValue={existingCode}
      onChange={handleEditorChange}
    />
  );
}
