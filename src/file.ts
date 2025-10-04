import { readFile, unlink, writeFile } from "fs/promises";

console.log("teste");

// FS -> File System
// FS Promisse -> vai trabalhar com promisse do javascript
// Para colocar em uma linha nova usar '\n'

const exec = async () => {

  // Escrever arquivo

  // const list = ['Jeferson', 'Vinicius', 'Fernanda', 'Karine'];
  // const listTxt = list.join('\n');


  // console.log('Escrevendo arquivo...');
  // await writeFile("./teste.txt", listTxt);
  // console.log('Arquivo escrito com sucesso!');

  // Ler arquivo

  // const lerArquivo = await readFile('teste.txt', {encoding: 'utf8'}) // Na leitura ele armazena em binário

  // const list = lerArquivo.split('\n');

  // console.log(list);
  // console.log(lerArquivo);

  // Alterar arquivo -> ordem: ler, alterar, escrever

  // const lerArquivo = await readFile('teste.txt', {encoding: 'utf8'}) // Na leitura ele armazena em binário

  // const list = lerArquivo.split('\n');
  // list.push('João');

  // await writeFile("./teste.txt", list.join('\n'));

  // console.log(list);
  // console.log(lerArquivo);
  
  // Excluir arquivo

  await unlink('./teste.txt');
  console.log('Arquivo excluído com sucesso!');
  
}

exec();