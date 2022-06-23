/* Quando eu tenho uma função com return ela precisa de 
uma variável que recebe ela e depois essa variavel deve 
ser exibida através do comando de saída(console.log)
Já quando a função não tem return eu posso apenas chamar a função numa linha que ela será exibida.

obs: undefined e null é false( EX: no if (arg) po exemplo)

*/ 

/*DECLARANDO E DEFININDO FUNÇÕES*/

console.log("DECLARANDO E DEFININDO FUNÇÕES")

function testes(arg){
    console.log("Hello!",arg);
return 10;
};

function testes2(arg){
    console.log("Hello again!",arg);
};

let r= testes("Rodrigo");
console.log(r);
console.log("-----------------------")
testes2();
testes2("Rodrigo");
console.log("---------------------------");

/*o exemplo abaixo é de definiçaõ de funções. 
obs1: nesse caso se a condição arg for null ele considera falso e exibe undefined

obs2: os métodos anteriores são de declaração de função( não tem o let <nome>=...) essa forma sai do fluxo de controle pois sofre hoisted(vai pra cima no código).Já o método abaixo é de definição de função ( é mais controlado, não sofre hoisted) 
obs3: a declaração de variaveis com var tbm sofre hoisted porem a definição e valor não sofre.já o let ele não sofre hoisted nem na declaração

recomendação: USE MAIS LET DO QUE VAR*/

let teste3= function (arg){
    if (arg) {
        console.log("congrats", arg);
        return 20;
    };
};

console.log(teste3());
console.log(teste3("Souza"));
console.log("---------------------------")

/* em chamadas de função você pode passar menos valores
de parametros ele vai atribuir undefined para o valor que era esperado e não veio*/

/*voê tbm pode atribuir args default e aí se a função for chamada somente com um valor o outro será trabalhado com o default (variavel e atribuição de valor )pré-estabelecido (exemplo do  power)*/


/*escopo de variaveis*/

console.log("ESCOPO DE VARIÁVEL");

var y=0;
function teste4(){
    var x=1;
    z=2;
}
teste4();
console.log(z);
console.log("---------------------------")

/* nesse exemplo acima y tem escopo global(é local mas por estar fora de qualquer função o local=global), x tem escopo local(foi definida dentro da função e só vale nela) e z tem escopo global mas só passa a assumir esse escopo global depois da função ser chamada (linha 58)



/*escopo de variaveis definadas solta são globais no caso de variaveis soltas (sem let ou var) geradas dentro de funções a função precisa ser chamada antes (executada) para ela poder ganhar o escopo global.

já variaveis definaidas com const e let são escopos de bloco (só existe dentro de if,for ,while)

já variaveis definidas com var são de escopo local ou seja se for dentro da função tem escopo somente dentro da função se for definida fora tem escopo global*/

/*arrow function ou lambda expression*/

console.log("ARROW FUNCTION");

const square= (num)=>{ return num*num};
console.log(square(4));


function repeat(n,f){
    for(let i=0; i<n; i++){
        f(i);
    };
};

repeat(10,x=>{let p= Math.pow(x,2);
    console.log(`O quadrado de ${x} é ${p}`);
});

console.log("-----------------------------");
console.log("CLASSES E OBJETOS EM JS");
console.log("\n");


/*javascript não é orientada a objetos como java nem procedural como C. Ela é orientada a protótipos ou seja tem as regras de definição de objeto e quando se pede para criar um objeto ele vai se guiar ao protótipo que pode ser alterado sempre que desejarmos. Uma função é um objeto inclusive podemos usar palavras reservadas como this que é caracterítica de objetos.*/

/*Poposições PARA PERGUNTAR AO PROFESSOR:
-As classes criadas via functions não precisam de return no final.
-Classes em js são protótipos.
-Existem 3 tipos para se criar classes
-o this é usado para incluir atributos e métodos
-O prototype é usado para incluir somente métodos 
-EM JS uma função com variáveis internas(declaradas por var ou let) e funções internas é considerada uma classe(exemplo da aplicação do closure)
-Com o recurso prototype somente os objetos que forem instaciados depois da criação do novo método por esse recurso é que terão esse novo método*/


/*DEFININDO CLASSE AO MODO JS*/
console.log("DEFININDO CLASSE  AO MODO JS");

function MyClasse(value){
    this.idade=value;
    this.getAtributo= function(){
        return this.idade;
    };
    
};

let oMyClasse = new MyClasse(10);
console.log(oMyClasse.getAtributo());
console.log(typeof oMyClasse);


/*DEFININDO CLASSE  COM PROTOTYPE*/
console.log("DEFININDO CLASSE  COM PROTOTYPE");
function MyClasse2(value){
    this.idade=value;
}
MyClasse2.prototype.getAtributo=function(){
    return this.idade;
};

onMyClasse2=new MyClasse2(20);
console.log(onMyClasse2.getAtributo());

/*Para economizar meméria se usa a palavra prototype da seguinte forma: MyClasse.prototype.getAtributo=function...por exemplo. Nesse caso o método getAtributo do exemplo fica fora do objeto(então não haverá método getAtributo em cada objeto de myClasse criado) É semelhante a método estático em java pois todos os objetos usam um único método (esse criado por prototype)*/





/*DEFININDO CLASSE AO MODO JAVA*/
console.log("DEFININDO CLASSE  AO MODO JAVA");

class MyClasse3{
    constructor(value){
        this.idade=value;
    }
    getAtributo(){
        return this.idade;
    };
};

onMyClasse3=new MyClasse(30);
console.log(onMyClasse3.getAtributo());


console.log("----------------------------");
console.log("HERANÇA EM JS");

/*HERANÇA COM CALL*/
/*usado se a classe foi definida ao modo JS descrita mais acima*/

function MyClasse4(nome,idade){
    MyClasse.call(this,idade);
    this.nome=nome;
    this.getNome=function(){
        return this.nome;
    };
};
oMyClasse4=new MyClasse4("João",40);
console.log(oMyClasse4.getNome());

/*HERANÇA COM PROTOTYPE*/
/*Se tiver definido a classe ao modo prototype*/

function MyClasse5(nome){
    this.nome=nome;
};
MyClasse5.prototype=new MyClasse2(50);
MyClasse5.prototype.getNome=function(){
    return this.nome;
};

oMyClasse5=new MyClasse5("Maria");
console.log(oMyClasse5.getNome());

/*HERANÇA COM EXTEND E SUPER*/
/*se tiver definido a  classe ao modo java descrito acima*/

class MyClasse6 extends MyClasse3{
    constructor(nome,idade){
        super(idade);
        this.nome=nome;
    };
    getNome(){
        return this.nome;
    };
};

oMyClasse6=new MyClasse6("José",60);
console.log(oMyClasse6.getNome());

console.log("-------------------------");
console.log("ClOSURE");


function wrapValue(n){
    let local=n*2;
    return ()=> {return local};
};

let wrap1 = wrapValue(1);
console.log(wrap1());

/*no exemplo abaixo utiliza-se o recurso closure onde no retorno final da função principal, informa-se o que será público*/

function Pessoa(n) {
    var nome = n;

    function setNome(n) {
    nome = n;
    };

    function getNome() {
    return nome;
    };

    return {getNome};
};
let p = new Pessoa('Joao');
console.log(p.getNome());

/*Em java Script pode-se simular um encapsulamento e tornar métodos privados através do artifício de closure(fechamento)(mas a função não pode ser criada por this(PERGUNTAR AO PROFESSOR)).
O closure consiste em criar um acesso de uma varíavel ou método no retorno final da função. De forma prática, se for uma função com vários métodos, no final da classe eu coloco, no retorno, qual método eu quero que seja publico, o que for privado não é definido no retorno  da function */






