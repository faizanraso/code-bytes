function EditorLanguage(language){
    var editorLanguage = "";
    var goBack = false;
    switch (language){
        case "Python":
            editorLanguage = "python";
            break;
        case "JavaScript":
            editorLanguage = "javascript";
            break;
        case "Java":
            editorLanguage = "java";
            break;
        case "C":
            editorLanguage = "c";
            break;
        case "C++":
            editorLanguage = "cpp";
            break;
        case "Ruby":
            editorLanguage = "ruby";
            break;
        case "R":
            editorLanguage = "r";
            break;
        case "PHP":
            editorLanguage = "php";
            break;
        case "HTML":
            editorLanguage = "html";
            break;
        case "Go":
            editorLanguage = "go";
            break;
        case "SQL":
            editorLanguage = "sql";
            break;
        case "Rust":
            editorLanguage = "rust";
            break;
        default:
            goBack = true;
    }
    return [editorLanguage, goBack];
}

export default EditorLanguage;