function checkInput(text){
    return /^[A-Za-z\s]+$/.test(text)
}
export{ checkInput}