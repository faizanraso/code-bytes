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
    const [socket, setSocket] = useState(io('127.0.0.1:3001'));

    //setup socket.io on client side
    useEffect(()=>{
        socket.on("connect", () => {
            socket.emit("join", id);
        });
        return()=> {socket.disconnect()}
    }, [socket]);

    //send changes to server
    useEffect(() => {
        if (socket == null || code == null) return
        socket.emit('send-changes', code);
    }, [code, socket]);

    //receive changes from server
    useEffect(() => {
        if (socket == null || code == null) return

        const handler = newCode => {
            updateCode(newCode);
        };
        socket.on('receive-changes', handler);
        return() => {socket.off('receive-changes', handler)}

    }, [code, socket]);

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
