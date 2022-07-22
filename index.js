import dados from "./Dados.js";
import {verificacaoUser ,verificacaoPassword} from "./Verificacao.js"
import { resultadoUser, resultadoSenha } from "./Resultado.js";

const resultUser = verificacaoUser(dados)
const resulSenha = verificacaoPassword(dados)

const user = resultadoUser(resultUser);
const password = resultadoSenha(resulSenha);

if(user == "ok" && password == "ok"){
    console.log("Welcome")
}else if(user == "incorrect" && password == "incorrect"){
    console.log("User: Invalid")
    console.log("Password: Invalid")
}else if(user == "incorrect"){
    console.log("Invalid User")
}else if(password == "incorrect"){
    console.log("Invalid Password")
};