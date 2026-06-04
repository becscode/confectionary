let cliente;
let sequencialVenda = 0;
 const vendas = [];
 const colunaVendedor = 0;
 const colunaUser = 1;
 const colunaSenha = 2;
 const funcionarios = [
   [1, "gerente", "123"],
   [2, "vendedor1", "456"], 
   [3, "vendedor2", "789"]
];
 const colunaNome = 1;
 const colunaPreco = 3;
 const colunaTipo = 2;
 const colunaDesc = 4;
 const  produtos = [
    [1, "Baunilha", "Massa", 40,         "Bolo com massa de baunilha ", ""],
    [2, "Chocolate", "Massa", 40,        "Bolo com massa de chocolate", ""], 
    [3, "Baunilha", "Recheio", 30,       "Recheio de baunilha        ", ""],
    [4, "Chocolate", "Recheio", 30,      "Recheio de chocolate       ", ""],
    [5, "Morango", "Recheio", 30,        "Recheio de morango         ", ""], 
    [6, "Limão", "Recheio", 30,          "Recheio de limão           ", ""],
    [7, "Baunilha", "Cobertura", 20,     "Cobertura de baunilha      ", ""],
    [8, "Chocolate", "Cobertura", 20,    "Cobertura de chocolate     ", ""], 
    [9, "Morango", "Cobertura", 20,      "Cobertura de morango       ", ""],
    [10, "Brigadeiro", "Docinho", 1,     "Docinho de brigadeiro      ", ""],
    [11, "Bem-casado", "Docinho", 1,     "Docinho de bem-casado      ", ""],
    [12, "Moranguinho", "Docinho", 1,    "Docinho de moranguinho     ", ""],
    [13, "Beijinho", "Docinho", 1,       "Docinho de beijinho        ", ""],
    [14, "Coxinha", "Salgadinho", 1,     "Coxinhas                   ", ""],
    [15, "Canudinho", "Salgadinho", 1,   "Canudinhos                 ", ""],
    [16, "Pastelzinho", "Salgadinho", 1, "Pastelzinhos               ", ""],
    [17, "Enroladinho", "Salgadinho", 1, "Enroladinhos               ", ""],
    [18, "Empadinha", "Salgadinho", 1,   "Empadinhas                 ", ""],
];
function gerarChavePix() {
   let chave = "";
   for(let i = 0; i < 32; i++){
      chave += Math.floor(Math.random() * 10);
   }
   return chave;
}
function gerarCodigoBarras() {
   let codigo = "";
   for(let i = 0; i < 44; i++){
      codigo += Math.floor(Math.random() * 10);
   }
   return codigo;
}
function calcularPrazoEntrega(quantidade) {
   if(quantidade <= 10){
      return 2;
   }
   if(quantidade <= 30){
      return 4;
   }
   return 7;
}
function calcularTaxaEntrega(totalItens){
   if(totalItens <= 20){
      return 10;
   }
   if(totalItens <= 50){
      return 20;
   }
   return 30;
}
function calcularFaturamentoVendedor(nomeVendedor){
   let total = 0;
   for(let i = 0; i < vendas.length; i++){
      if(vendas[i][1] == nomeVendedor){
         total += vendas[i][4] * vendas[i][6];
      }
   }
   return total;
}
function calcularFaturamentoTotal(){
   let total = 0;
   for(let i = 0; i < vendas.length; i++){
      total += vendas[i][4] * vendas[i][6];
   }
   return total;
}
let senha;
let usuario;
function exibirTelaLogin () {
   usuario = prompt("digite seu login: ");
   senha = prompt("senha: ");
   const linhaIndex = funcionarios.findIndex(
      linha => linha[colunaUser] === usuario
   );
   if (linhaIndex != -1) {
      if (funcionarios[linhaIndex][colunaSenha] == senha){
         exibirTelaInicial();
      } else {
         console.log("usuario ou senha incorretos");
         exibirTelaLogin();
      }
   } else {
      console.log("usuario ou senha incorretos");
      exibirTelaLogin();
   }
}

function exibirTelaInicial (){
  console.log ("1- Nova Venda");   
  console.log ("2 - Deslogar");
  if ( usuario == "gerente") {
    console.log ("3 - Relatório Gerencial");    
  };
  let opcaoEscolhida = parseInt(prompt("escolha a opção acima: "));
   switch (opcaoEscolhida) {
  case 1:sequencialVenda += 1;cliente = prompt("nome do cliente: ");exibirMenu();break;
  case 2:exibirTelaLogin ();break;
  case 3:if ( usuario == "gerente") {imprimirRelatorioG ();};break;
  default:console.log("não há essa opção");
   }
}
function exibirMenu (){
  console.log ("MENU:");
  console.log ("1- Bolos");   
  console.log ("2 - Docinhos");   
  console.log ("3 - Salgadinhos");   
  console.log ("4 - Encerrar venda");  
 let opcaoEscolhida = parseInt(prompt("escolha a opção acima: "));
   switch (opcaoEscolhida) {
  case 1:exibirTelaMassa();break;
  case 2:exibirTelaDocinhos ();break;
  case 3:exibirTelaSalgadinhos ();break;
  case 4:imprimirNotaFiscal();exibirTelaInicial ();break;
  default:console.log("opção indisponível");
}
}
function exibirTelaMassa (){
console.log("MASSAS:");
console.log ("1- Baunilha");   
console.log ("2- Chocolate");    
console.log ("3- Cancelar");    
  let opcaoEscolhida = parseInt(prompt("escolha a opção acima: "));
   switch (opcaoEscolhida) {
  case 1:inserirVenda ("Baunilha", "Massa", 1); exibirTelaRecheio ();break;
  case 2:inserirVenda ("Chocolate", "Massa", 1); exibirTelaRecheio ();break;
  case 3:exibirMenu ();break;
  default:console.log("não há essa opção");
   }
}
function exibirTelaRecheio (){
console.log("RECHEIOS:");
console.log ("1- Baunilha");   
console.log ("2- Chocolate");    
console.log ("3- Morango");   
console.log ("4- Limão");   
console.log ("5- Não quero recheio");   
console.log ("6- Cancelar");   
  let opcaoEscolhida = parseInt(prompt("escolha a opção acima: "));
   switch (opcaoEscolhida) {
    case 1:inserirVenda ("Baunilha", "Recheio", 1);exibirTelaCobertura ();break;
  case 2:inserirVenda ("Chocolate", "Recheio", 1);exibirTelaCobertura ();break;
  case 3:inserirVenda ("Morango", "Recheio", 1);exibirTelaCobertura ();break;
  case 4:inserirVenda ("Limão", "Recheio", 1);exibirTelaCobertura ();break;
  case 5:exibirTelaCobertura ();break;
  case 6:exibirMenu ();break;
  default:console.log("não há essa opção");
   }
}
function exibirTelaCobertura (){
console.log("COBERTURAS:");
console.log ("1- Baunilha");   
console.log ("2- Chocolate");    
console.log ("3- Morango");   
console.log ("4- Não quero cobertura");   
console.log ("5- Cancelar");   
  let opcaoEscolhida = parseInt(prompt("escolha a opção acima: "));
   switch (opcaoEscolhida) {
    case 1:inserirVenda ("Baunilha", "Cobertura", 1);exibirMenu ();break;
  case 2:inserirVenda ("Chocolate", "Cobertura", 1);exibirMenu ();break;
  case 3:inserirVenda ("Morango", "Cobertura", 1);exibirMenu ();break;
  case 4:exibirMenu ();break;
  case 5:exibirMenu ();break;
  default:console.log("não há essa opção");
   }
}
function exibirTelaDocinhos () {
console.log("DOCINHOS:");
console.log ("1- Brigadeiro");   
console.log ("2- Bem-casado");    
console.log ("3- Moranguinho");   
console.log ("4- Beijinho");   
console.log ("5- Cancelar");   
  let opcaoEscolhida = parseInt(prompt("escolha a opção acima: "));
  let nome;
   switch (opcaoEscolhida) {
  case 1:nome = "Brigadeiro";break;
  case 2:nome = "Bem-casado";break;
  case 3:nome = "Moranguinho";break;
  case 4:nome = "Beijinho";break;
  case 5:exibirMenu ();break;
  default:console.log("não há essa opção");
   }
   let quantidadeDoce = parseInt(prompt("digite quantos docinhos: "));
    inserirVenda ( nome, "Docinho" , quantidadeDoce );
    exibirMenu ();
}
function exibirTelaSalgadinhos () {
console.log("SALGADINHOS:");
console.log ("1- Coxinha");   
console.log ("2- Canudinho");    
console.log ("3- Pastelzinho");   
console.log ("4- Enroladinho");
console.log ("5- Empadinha");
console.log ("6- Cancelar");   
  let opcaoEscolhida = parseInt(prompt("escolha a opção acima: "));
  let nome;
   switch (opcaoEscolhida) {
  case 1:nome = "Coxinha";break;
  case 2:nome = "Canudinho";break;
  case 3:nome = "Pastelzinho";break;
  case 4:nome = "Enroladinho";break;
  case 5:nome = "Empadinha";break;
  case 6:exibirMenu ();break;
  default:console.log("não há essa opção");
   }
   let quantidadeSalgado = parseInt(prompt("digite quantos salgadinhos: "));
    inserirVenda (nome , "Salgadinho", quantidadeSalgado );
    exibirMenu ();
}
function imprimirMatriz (matriz) {
     for (let i = 0; i < matriz.length; i++) {
        let linha = '';
     for (let j = 0; j < matriz[i].length; j++) {
    linha += matriz[i][j] + ' ';
  }
  console.log(linha);
}
}
function inserirVenda (nome1, tipo2, quant3) {
  let indexProd = produtos.findIndex(linhaProd => linhaProd[colunaNome] === nome1 && linhaProd[colunaTipo] === tipo2 );
    vendas.push([sequencialVenda, usuario, produtos[indexProd][colunaNome], produtos[indexProd][colunaTipo], produtos[indexProd][colunaPreco], produtos[indexProd][colunaDesc], quant3 ]); 
}
function consultarDesempenhoVendedor(vendedor) {
   for(let i = 0; i < vendas.length; i++) {
      if(vendas[i][1] == vendedor) {
         console.log("-",vendas[i][2],"(" + vendas[i][3] + ")","->",vendas[i][6],"un.");
      }
   }
}
function imprimirRelatorioG() {
   console.log("====================================");
   console.log("      RELATORIO GERENCIAL");
   console.log("====================================");
   for(let i = 0; i < funcionarios.length; i++){
      let vendedor = funcionarios[i][1];
      console.log("");
      console.log("VENDEDOR:", vendedor);
      console.log("");
      consultarDesempenhoVendedor(vendedor);
      console.log("");
      console.log("FATURAMENTO: R$",calcularFaturamentoVendedor(vendedor));
      console.log("------------------------------------");
   }
   console.log("");
   console.log(
      "FATURAMENTO TOTAL DO DIA: R$",
      calcularFaturamentoTotal()
   );
   console.log("====================================");
}
function totalAPagar (quant, precoUnit ) {
   return quant*precoUnit
}
function imprimirNotaFiscal () {
  let totalGeralNF = 0;
  let totalItens = 0;
  let desejaEntrega = prompt("Deseja entrega? (S para sim / N para não):");
let taxaEntrega = 0;
  const hoje = new Date();
  const numeroNota = Math.floor(Math.random() * 1000000);
  const chavePix = gerarChavePix();
  const codigoBarras = gerarCodigoBarras();
  console.log("==========================================");
  console.log("              NOTA FISCAL");
  console.log("==========================================");
  console.log("Cliente:", cliente);
  console.log("Data:", hoje.toLocaleDateString('pt-BR'));
  console.log("------------------------------------------");
  console.log("Descrição                Qtde  Total(R$)");
  console.log("------------------------------------------");
  for (let i = 0; i < vendas.length; i++) {
     if (vendas[i][0] == sequencialVenda) {
        totalItens += vendas[i][6];
        let subtotal = totalAPagar(
           vendas[i][6],
           vendas[i][4]);
        totalGeralNF += subtotal;
        console.log(vendas[i][2] + " (" + vendas[i][3] + ")","-",vendas[i][6],"un.","- R$",subtotal);
     }
  }
if(desejaEntrega.toUpperCase() == "S"){
   if(totalItens <= 20){
      taxaEntrega = 10;
   }
   else if(totalItens <= 50){
      taxaEntrega = 20;
   }
   else{
      taxaEntrega = 30;
   }
}
  let totalFinal = totalGeralNF + taxaEntrega;
  console.log("------------------------------------------");
  console.log("Subtotal: R$", totalGeralNF);
 if(taxaEntrega > 0){
   console.log("Taxa de entrega: R$", taxaEntrega);
}
else{
   console.log("Retirada no local");
}
console.log("TOTAL FINAL: R$",totalFinal);
  console.log("Prazo estimado:",calcularPrazoEntrega(totalItens),"dias");
  console.log("------------------------------------------");
  console.log("Nota Fiscal Nº:", numeroNota);
  console.log("Chave PIX:", chavePix);
  console.log("Código de Barras:", codigoBarras);
  console.log("==========================================");
}

exibirTelaLogin();
