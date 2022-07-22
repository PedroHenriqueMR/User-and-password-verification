function verificacaoUser(dados){

    const usuario = dados[0]

    if (usuario == "P_H_M_"){
        return "valid";
    }else{
        return "incorrect";
    };
};


function verificacaoPassword(dados){

    const senha = dados[1]

    if (senha == 123456){
        return "valid";
    }else{
        return "incorrect";
    };
};

export {verificacaoUser ,verificacaoPassword};