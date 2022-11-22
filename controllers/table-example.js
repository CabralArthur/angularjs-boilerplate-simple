myApp.controller("tableExampleCtrl", ['$scope', '$timeout', 'TableExampleService', function ($scope, $timeout, TableExampleService) {
    $scope.welcomeInfo = {
        title: 'Olha só, estamos em outra tela agora, e nem foi necessário fazer o reload, que massa, não?',
        subtitle: 'Espero que você compreenda o que eu faço aqui...',
    };
    
    const init = () => {
        $scope.loading = true;

        TableExampleService.getData().then(response => {
            $scope.usersTable = response.data;
        }).finally(() => {
            $timeout(() => {
                $scope.loading = false;
            }, 3000)
        });
    };

    init();
}]);
