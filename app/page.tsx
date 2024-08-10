"use client";
import CodeEditor from "@/components/CodeEditor";
import Dropdown from "@/components/Dropdown";
import Footer from "@/components/Footer";
import { languages } from "@/utils/editor-languages";
import { backgrounds, paddings, themes } from "@/utils/editor-themes";
import html2canvas from "html2canvas";
import { Download } from "lucide-react";
import React, { useRef, useState } from "react";

export default function Home() {
  const editorRef = useRef(null);

  const [language, setLanguage] = useState(languages[0]);
  const [theme, setTheme] = useState(themes[0]);
  const [background, setBackground] = useState(backgrounds[0]);
  const [padding, setPadding] = useState(paddings[2]);

  const exportPng = async () => {
    const editorElement = editorRef.current;

    if (editorElement) {

      const handles = document.querySelectorAll('.handle');
      handles.forEach(handle => handle.style.display = 'none');

      const canvas = html2canvas(editorElement);
      const img = (await canvas).toDataURL('image/png').replace('image/png', 'image/octet-stream');

      const link = document.createElement('a');
      link.download = 'code.png';
      link.href = img;
      link.click();

      handles.forEach(handle => handle.style.display = 'block');
    }
  }

  return (
    <main className="h-[100vh] flex flex-col items-center justify-between">
      <header className="mt-6 flex gap-6 w-[940px] p-5 fixed top-0 left-1/2 translate-x-[-50%] z-10 bg-[#121616] text-white rounded border border-[#3c3c3c] shadow-md">
        <div>
          <p className='py-[5px] text-sm font-medium'>Language</p>
          <Dropdown currentItem={language} setCurrentItem={setLanguage} items={languages} />
        </div>
        <div>
          <p className='py-[5px] text-sm font-medium'>Code Theme</p>
          <Dropdown currentItem={theme} setCurrentItem={setTheme} items={themes} />
        </div>
        <div>
          <p className='py-[5px] text-sm font-medium'>Background</p>
          <Dropdown currentItem={background} setCurrentItem={setBackground} items={backgrounds} />
        </div>
        <div>
          <p className='py-[5px] text-sm font-medium'>Padding</p>
          <Dropdown currentItem={padding} setCurrentItem={setPadding} items={paddings} />
        </div>
        <div className='export-btn self-center ml-auto'>
          <button onClick={exportPng} className="flex items-center gap-4 py-2 px-3 bg-blue-400 rounded-md text-sm text-blue-400 bg-opacity-10 hover:bg-opacity-80 hover:text-slate-50 ease-in-out transition-all duration-300">
            <Download />
            Export PNG
          </button>
        </div>
      </header>
      <div className="code-editor mt-[14rem]" ref={editorRef}>
        <CodeEditor language={language.name} theme={theme.name} backgroundColour={background.color}
          padding={padding.name} icon={language.icon}
        />
      </div>
      <Footer />
    </main>
  );
}
