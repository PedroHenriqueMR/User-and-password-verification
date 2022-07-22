function resultadoUser(resultUser){
    if(resultUser == "valid"){
        return "ok"
    }else if(resultUser == "incorrect"){
        return "incorrect"
    }
}

function resultadoSenha(resulSenha){
    if(resulSenha == "valid"){
        return "ok"
    }else if(resulSenha == "incorrect"){
        return "incorrect"
    }
}

export {resultadoUser, resultadoSenha};