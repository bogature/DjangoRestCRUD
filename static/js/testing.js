

var ProductAplication = angular.module('ProductApp', []);

ProductAplication.controller("Products", function ($scope, $http) {

    function getCookie(name) {
    var cookieValue = null;
    if (document.cookie && document.cookie !== '') {
        var cookies = document.cookie.split(';');
        for (var i = 0; i < cookies.length; i++) {
            var cookie = jQuery.trim(cookies[i]);
            // Does this cookie string begin with the name we want?
            if (cookie.substring(0, name.length + 1) === (name + '=')) {
                cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                break;
            }
        }
    }
    return cookieValue;
    }

    $http.get('/api/product/all/').then(function (response) {
        $scope.products = response.data;
        console.log($scope.products);
    });

    this.insertProduct = function add() {
        var name = document.getElementById("ProductName").value;
        var price = document.getElementById("ProductPrice").value;

        console.log(name);
        console.log(price);

        var req = {
            method: 'POST',
            url: '/api/product/create/',
            headers: { "X-CSRFToken": getCookie("csrftoken") },
            data: {
                name: name,
                price: price
            }
        };
        $http(req).then(function (resp) {
            window.location.reload();
        })
    };


    function delete_article(pk){
        $.ajax({
            url: "/api/product/del/"+pk+"/",
            type: "DELETE",
            headers: { "X-CSRFToken": getCookie("csrftoken") }
        },new function (request) {
            window.location.reload();
        })

    }


    this.delProduct = function del(id) {
        console.log("del");
        delete_article(id);
    };

    this.updateProduct = function update(id) {
        var name = document.getElementById("ProductName").value;
        var price = document.getElementById("ProductPrice").value;

        var req = {
            method: 'PUT',
            url: '/api/product/upg/' + id +"/",
            headers: { "X-CSRFToken": getCookie("csrftoken") },
            data: {
                name: name,
                price: price
            }
        };
        $http(req).then(function (resp) {
            console.log(resp);
            window.location.reload();
        })
    };

});

ProductAplication.controller("Categorys", function ($scope, $http) {

    $http.get('/api/product/all/').then(function (response) {
        $scope.products = response.data;
        console.log($scope.products);
    });

    function getCookie(name) {
    var cookieValue = null;
    if (document.cookie && document.cookie !== '') {
        var cookies = document.cookie.split(';');
        for (var i = 0; i < cookies.length; i++) {
            var cookie = jQuery.trim(cookies[i]);
            // Does this cookie string begin with the name we want?
            if (cookie.substring(0, name.length + 1) === (name + '=')) {
                cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                break;
            }
        }
    }
    return cookieValue;
    }

    $http.get('/api/сategory/all/').then(function (response) {
        $scope.cat = response.data;
        console.log($scope.cat);
    });

    this.delCategory = function del(id) {
        console.log("Dell Category !");
        $.ajax({
            url: "/api/сategory/del/"+id+"/",
            type: "DELETE",
            headers: { "X-CSRFToken": getCookie("csrftoken") }
        }
        ,new function (request) {
            window.location.reload();
        })
    };

    this.insertCategory = function add() {
        console.log("Create Category !");
        var select = document.querySelector("#selectcateg");
        var values = [].map.call(select.selectedOptions, function(option) {
          return option.value;
        });
        console.log(values);



        var name = document.getElementById("CategoryName").value;

        var req = {
            method: 'POST',
            url: '/api/сategory/create/',
            headers: { "X-CSRFToken": getCookie("csrftoken") },
            data: {
                name: name,
                products: values
            }
        };

        $http(req).then(function (resp) {
            window.location.reload();
        })
    };

    this.updateCategory = function update(id) {
        console.log(id);
        console.log("Create Category !");

        var select = document.querySelector("#selectcateg");
        var values = [].map.call(select.selectedOptions, function(option) {
          return option.value;
        });
        console.log(values);

        var name = document.getElementById("CategoryName").value;

        var req = {
            method: 'PUT',
            url: '/api/сategory/upg/' + id +"/",
            headers: { "X-CSRFToken": getCookie("csrftoken") },
            data: {
                name: name,
                products: values
            }
        };

        $http(req).then(function (resp) {
            window.location.reload();
        })


    };

});

ProductAplication.controller("OrderItem", function ($scope, $http) {

    $http.get('/api/product/all/').then(function (response) {
        $scope.products = response.data;
    });

    function getCookie(name) {
    var cookieValue = null;
    if (document.cookie && document.cookie !== '') {
        var cookies = document.cookie.split(';');
        for (var i = 0; i < cookies.length; i++) {
            var cookie = jQuery.trim(cookies[i]);
            // Does this cookie string begin with the name we want?
            if (cookie.substring(0, name.length + 1) === (name + '=')) {
                cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                break;
            }
        }
    }
    return cookieValue;
    }


    $http.get('/api/order/item/all/').then(function (response) {
        $scope.order_item = response.data;
        console.log($scope.order_item);
    });

    this.insertOrderItem = function add() {
        console.log("Create OrderItem !");

        // var select = document.querySelector("#selectorderitem");
        // var values = [].map.call(select.selectedOptions, function(option) {
        //   return option.value;
        // });
        // console.log(values);

        var select = document.querySelector("#selectorderitem").value;
        console.log(select);

        var number = document.getElementById("OrderItemNumber").value;

        var req = {
            method: 'POST',
            url: '/api/order/item/create/',
            headers: { "X-CSRFToken": getCookie("csrftoken") },
            data: {
                number: number,
                product: select
            }
        };

        $http(req).then(function (resp) {
            window.location.reload();
        })
    };

    this.updateOrderItem = function update(id) {
        console.log("Update OrderItem !!!!");

        var select = document.querySelector("#selectorderitem").value;
        var number = document.getElementById("OrderItemNumber").value;

        var req = {
            method: 'PUT',
            url: '/api/order/item/upg/' + id +"/",
            headers: { "X-CSRFToken": getCookie("csrftoken") },
            data: {
                number: number,
                product: select
            }
        };

        $http(req).then(function (resp) {
            window.location.reload();
        })


    };

    this.delOrderItem = function del(id) {
        console.log("Dell Order!");
        $.ajax({
            url: "/api/order/item/del/"+id+"/",
            type: "DELETE",
            headers: { "X-CSRFToken": getCookie("csrftoken") }
        }
        ,new function (request) {
            window.location.reload();
        })
    };

});

ProductAplication.controller("Order", function ($scope, $http) {

    function getCookie(name) {
    var cookieValue = null;
    if (document.cookie && document.cookie !== '') {
        var cookies = document.cookie.split(';');
        for (var i = 0; i < cookies.length; i++) {
            var cookie = jQuery.trim(cookies[i]);
            // Does this cookie string begin with the name we want?
            if (cookie.substring(0, name.length + 1) === (name + '=')) {
                cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                break;
            }
        }
    }
    return cookieValue;
    }

    $http.get('/api/order/item/all/').then(function (response) {
        $scope.order_item = response.data;
        console.log($scope.order_item);
    });

    $http.get('/api/order/all/').then(function (response) {
        $scope.order_all = response.data;
        console.log($scope.order_all);
    });

    this.delOrder = function del(id) {
        console.log("Dell Order!");
        $.ajax({
            url: "/api/order/del/"+id+"/",
            type: "DELETE",
            headers: { "X-CSRFToken": getCookie("csrftoken") }
        }
        ,new function (request) {
            window.location.reload();
        })
    };

    this.insertOrder = function add() {
        console.log("Create Category !");
        var select = document.querySelector("#selectorder");
        var values = [].map.call(select.selectedOptions, function(option) {
          return option.value;
        });

        var dateControl = document.querySelector('input[type="datetime-local"]').value;

        var sum = document.getElementById("SumOrder").value;
        console.log(sum);

        var req = {
            method: 'POST',
            url: '/api/order/create/',
            headers: { "X-CSRFToken": getCookie("csrftoken") },
            data: {
                sum: sum,
                orders_items: values,
                datetime: dateControl
            }
        };

        $http(req).then(function (resp) {
            window.location.reload();
        })
    };

    this.updateOrder = function update(id) {
        console.log("Upd Order !");

        var select = document.querySelector("#selectorder");
        var values = [].map.call(select.selectedOptions, function(option) {
          return option.value;
        });

        var dateControl = document.querySelector('input[type="datetime-local"]').value;

        var sum = document.getElementById("SumOrder").value;

        var req = {
            method: 'PUT',
            url: '/api/order/upg/' + id +"/",
            headers: { "X-CSRFToken": getCookie("csrftoken") },
            data: {
                sum: sum,
                orders_items: values,
                datetime: dateControl
            }
        };

        $http(req).then(function (resp) {
            window.location.reload();
        })


    };



});


ProductAplication.controller("Report", function ($scope, $http) {

    $http.get('/api/get/report/').then(function (response) {
        $scope.reports = response.data;
        console.log($scope.reports);
    });

});