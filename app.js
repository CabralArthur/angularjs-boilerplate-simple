/* 
    Para criar uma aplicação angular eu defino ela com o angular.module,
    após isso, defino os pacotes que serão utilizados na aplicação, como o ui.router.
*/

const myApp = angular.module("boilerplateApp", ["ui.router"]);

/*
    Após isso é feita a configuração da aplicação,
    nesse caso, estamos definindo como se comportará o estado da aplicação
    com base na url ao qual á identificada.
*/

myApp.config(function($stateProvider) {
    $stateProvider.state({
        name: "home", //Quando esse estado estiver ativo
        url: "", //Essa url estará ativa...
        templateUrl: "views/home.html", // Esse html será renderizado
        controller: "HomeCtrl" // Utilizando esse controller
    });

    $stateProvider.state({
        name: "table-example", //Quando esse estado estiver ativo
        url: "/example", //Essa url estará ativa...
        templateUrl: "views/table-example.html", // Esse html será renderizado
        controller: "TableExampleCtrl" // Utilizando esse controller
    });
});
