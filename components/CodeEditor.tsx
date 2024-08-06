"use client";
import React from 'react'
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

function CodeEditor() {
    return (
        <div>
            <Resizable>
                <div>
                    <AceEditor
                        value='function() { console.log("Hello World") }function() { console.log("Hello World") }function() { console.log("Hello World") }function() { console.log("Hello World") }'
                        name='code-editor-1'
                        fontSize={16}
                        theme='monokai'
                        showGutter={false}
                        wrapEnabled={true}
                        showPrintMargin={false}
                        highlightActiveLine={false}
                        editorProps={{ $blockScrolling: true }}
                        className='code-editor'
                    />
                </div>
            </Resizable>
        </div>
    )
}

export default CodeEditor
