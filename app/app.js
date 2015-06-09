define(["require", "exports", './DemoCtrl', 'angular'], function (require, exports, DemoCtrl_1, angular) {
    var app = angular.module('app', []);
    app.controller('DemoCtrl', DemoCtrl_1.DemoCtrl);
    angular.element(document).ready(function () {
        angular.bootstrap(document, ['app']);
    });
});
