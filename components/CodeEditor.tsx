"use client";
import React, { useEffect, useState } from 'react'
import { Resizable } from 're-resizable'
import AceEditor from 'react-ace'

// Languages
import 'ace-builds/src-noconflict/mode-javascript'
import 'ace-builds/src-noconflict/mode-python'
import 'ace-builds/src-noconflict/mode-java'
import 'ace-builds/src-noconflict/mode-csharp'
import 'ace-builds/src-noconflict/mode-html'
import 'ace-builds/src-noconflict/mode-css'
import 'ace-builds/src-noconflict/mode-typescript'
import 'ace-builds/src-noconflict/mode-php'
import 'ace-builds/src-noconflict/mode-ruby'
import 'ace-builds/src-noconflict/mode-c_cpp'

// Themes
import 'ace-builds/src-noconflict/theme-monokai'
import 'ace-builds/src-noconflict/theme-github'
import 'ace-builds/src-noconflict/theme-terminal'
import 'ace-builds/src-noconflict/theme-twilight'

interface Props {
    language: string
    theme: string
    icon: string
    backgroundColour: string
    padding?: string
}

function CodeEditor({
    language,
    theme,
    icon,
    backgroundColour,
    padding,
}: Props) {

    const defaultCode = `
// Create a variable and initialize it with a value or element
let myElement = document.getElementById('myElement');
// Check if the element is not null before adding an event listener
if (myElement !== null) {
  myElement.addEventListener('click', myFunction);
} else {
  console.log("Element not found!");

function myFunction() {
  console.log("Element clicked!");
}`

    const defaultTitle = 'Untitled'

    const [width, setWidth] = useState(1024);
    const [height, setHeight] = useState(500);
    const [code, setCode] = useState(defaultCode);
    const [title, setTitle] = useState(defaultTitle)

    const handleResize = (event: any, direction: any, ref: any, d: any) => {
        const newHeight = ref.style.height;
        setHeight(parseInt(newHeight, 10))
    }

    const updateWidthAsWindowWidth = () => {
        setWidth(window.innerWidth);
    }

    useEffect(() => {
        updateWidthAsWindowWidth();
        window.addEventListener('resize', updateWidthAsWindowWidth);

        return () => {
            window.removeEventListener('resize', updateWidthAsWindowWidth);
        }
    }, [])

    return (
        <div>
            <Resizable defaultSize={{
                width: width,
                height: height
            }}
                minHeight={400}
                minWidth={550}
                maxHeight={610}
                maxWidth={1024}
                onResize={handleResize}
                className='resize-container relative'
                style={{
                    background: backgroundColour,
                }}
            >
                <div className='code-block' style={
                    {
                        padding: padding,
                    }
                }>
                    <div className="handle handle-top absolute left-1/2 top-[-4px] h-2 w-2 rounded-full bg-slate-300 " ></div>
                    <div className="handle handle-bottom absolute left-1/2 bottom-[-4px] w-2 h-2 rounded-full
                        bg-slate-300 " ></div>
                    <div className="handle handle-left absolute left-[-4px] top-1/2 w-2 h-2 rounded-full 
                        bg-slate-300 " ></div>
                    <div className="handle handle-right absolute right-[-4px] top-1/2 w-2 h-2 rounded-full
                        bg-slate-300 " ></div>

                    <div className='code-title h-[52px] px-4 flex items-center justify-between bg-black bg-opacity-80'>
                        <div className='dots flex items-center gap-1'>
                            <div className='w-3 h-3 rounded-full bg-[#ff5656]'></div>
                            <div className='w-3 h-3 rounded-full bg-[#ffbc6a]'></div>
                            <div className='w-3 h-3 rounded-full bg-[#67f772]'></div>
                        </div>
                        <div className='input-control w-full'>
                            <input type="text" value={title} onChange={(e: any) => setTitle(e.target.value)} className='w-full leading-loose text-[hsla(0, 0%, 100%, 0.6)], outline-none font-medium text-center text-white bg-transparent' />
                        </div>
                        <div className='icon flex justify-center items-center p-1 bg-black bg-opacity-30 rounded-sm'>
                            <img className='' src={icon} alt="" />
                        </div>
                    </div>
                    <AceEditor
                        value={code}
                        fontSize={16}
                        mode={language}
                        theme={theme}
                        showGutter={false}
                        wrapEnabled={true}
                        height={`calc(${height}px - (${padding} * 2) - 52px`}
                        showPrintMargin={false}
                        highlightActiveLine={false}
                        editorProps={{ $blockScrolling: true }}
                        onChange={(value) => setCode(value)}
                        className='codeeditor-context'
                    />
                </div>
            </Resizable >
        </div >
    )
}

export default CodeEditor
