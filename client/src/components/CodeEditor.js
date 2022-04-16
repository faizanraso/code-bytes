import React, {useEffect, useState} from "react";
import Editor from "@monaco-editor/react";
import { Navigate, useParams } from "react-router-dom";
import EditorLanguage from "./EditorLanguage";
const { io } = require("socket.io-client");

function CodeEditor(){

    const id = useParams().id;
    const language = useParams().languageSelected;
    const [code, updateCode] = useState();
    const [editorLanguage, goBack] = EditorLanguage(language);
    var socket;

    useEffect(()=>{
        socket = io('http://localhost:3001');
        socket.on("connect", () => {
            socket.emit("room", id);
        });

        return()=>{
            socket.disconnect();
        }
    },[]);

    useEffect(() => {
        socket.emit('send-changes', code);
    }, [code]);


    return(
        <div className="editor-page-div">
            {goBack && <Navigate to="/language-selection" />}
            <div className="editor-div">  
                <Editor
                    height="100vh"
                    width="100vw"
                    theme="vs-dark"
                    defaultLanguage={editorLanguage}
                    onChange={(e) => updateCode(e)}
                    value={code}
                />
            </div>
        </div>
    )
}

export default CodeEditor;
