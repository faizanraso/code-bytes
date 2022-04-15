import React, {useEffect, useState} from "react";
import Editor from "@monaco-editor/react";
import { Navigate, useParams } from "react-router-dom";
import {io} from 'socket.io-client';
import EditorLanguage from "./EditorLanguage";

function CodeEditor(){

    const language = useParams().languageSelected;
    const id = useParams().id;
    var editorLanguage = "";
    var goBack  = false;

    [editorLanguage, goBack] = EditorLanguage(language);

    const [socket, setSocket] = useState();
    const [code, updateCode] = useState();

    useEffect(()=>{
        setSocket(io('http://localhost:3001'));
        return () => {
            socket.disconnect();
        }
    }, []);
    
    useEffect(() => {
        if (socket == null || code == null) return
        socket.emit('get-document', id);
    }, [socket, code, id]);

    useEffect(()=> {
        if (socket == null || code == null) return;
        socket.emit('send-changes', code) 
    }, [socket, code]);

    useEffect(()=>{
        
        if (socket == null || code == null) return
        socket.on('receive-changes', code => {
            updateCode(code);
        });

        return () => { socket.off('receive-changes');}

    }, [socket,code]);

    return(
        <div className="ceditor-page-div">
            {goBack && <Navigate to="/language-selection" />}
            <div className="editor-div">  
                <Editor
                    height="100vh"
                    width="100vw"
                    theme="vs-dark"
                    defaultLanguage={editorLanguage}
                    onChange={(event)=>updateCode(event)}
                    value={code}
                />
            </div>
        </div>
    )
}

export default CodeEditor;
