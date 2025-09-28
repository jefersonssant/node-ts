import type { RequestHandler } from "express";

//MIDDLEWARE  -> Uma função que vamos usar no nosso sistema e ela é executada no meio do caminho da execução de outra função. Uma função que vai interferir no meio da requisição.

// Middle -> Do inglês significa meio

export const interferir: RequestHandler = (req, res, next) => {
  console.log("EXECUTOU");
  let logged = false;

  if (logged) {
    next()
  }else  {
    res.status(403).json({error: "Middleware não permitiu"})
  }

  // next()
  
}//O middleware é que vai decidir quando a execução acaba e quando vai prosseguir. A função next vai permitir o prosseguimento da requisição ping. Caso não for permitir o prosseguimento, poderíamos colocar um res.json({error: " Middleware não permitiu "}). Podemos usar para verificação de login, etc...