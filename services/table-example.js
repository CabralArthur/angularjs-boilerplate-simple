myApp.service("TableExampleService", function ($http) {
    const getData = () => {
      return $http.get('http://jsonplaceholder.typicode.com/users');
    };
  
    return {
        getData
    };
});
  