var app = angular.module("mirpm", ["ngMaterial", "ngAnimate", "mdLightbox",
                                   "truncate", "ngSanitize", "ui.router"])
                 .config(function($mdThemingProvider) {
                     $mdThemingProvider.theme('default')
                                       .primaryPalette("red")
                                       .accentPalette("pink")
                                       .dark();
                     $mdThemingProvider.theme('light')
                                       .primaryPalette("red")
                                       .accentPalette("pink");
                 })
                 .config(['$sceDelegateProvider', function($sceDelegateProvider) {
                     $sceDelegateProvider.resourceUrlWhitelist([
                         'self'
                     ]);
                 }]);
