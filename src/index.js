let jasmMemory = {

}

function exeCode(el) {
    document.getElementById("log").value = "";
    const code = el.target.value

    const codeBlock = code.split("\n")

    // 命令 対象 引数...

    codeBlock.forEach(block => {
        const blockAt = block.split(" ");

        if (blockAt[0] === "LOG") {
            log(blockAt[1], blockAt[2])
        }else if (blockAt[0] === "EXE") {
            const result = eval(blockAt[1]);
        }
    });
}

document.getElementById("code").addEventListener("input", exeCode)

function log(text, mode) {
    text = text.replace("\\s", " ");

    if (mode === "0") {
        document.getElementById("log").value += text;
    }else {
        document.getElementById("log").value += text + "\n";
    }
}