/// <reference path="../typings/angularjs/angular.d.ts" />
import { DemoCtrl } from './DemoCtrl';
import * as angular from 'angular';

var app = angular.module('app', []);

app.controller('DemoCtrl', DemoCtrl);

angular.element(document).ready(() => {
    angular.bootstrap(document, ['app']);
});