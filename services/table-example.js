myApp.service("TableExampleService", function ($http) {
    const getData = () => {
      return $http.get('https://jsonplaceholder.typicode.com/users');
    };
  
    return {
        getData
    };
});
  