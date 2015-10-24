'use strict';

/**
 * @ngdoc overview
 * @name fireAdventures
 * @description
 * # fireAdventures
 *
 * Main module of the application.
 */
angular
  .module('fireAdventures', [
    'firebase',
    'angular-md5',
    'ui.router'
  ])
  .config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        controller: 'AuthCtrl as authCtrl',
        templateUrl: 'home/home.html'
      })
      .state('testimonials', {
        url: '/testimonials',
        controller: 'TestimonialCtrl as testimonialCtrl',
        templateUrl: 'testimonials/testimonial.html'
      });

    $urlRouterProvider.otherwise('/');
  })
  .constant('FirebaseUrl', 'https://adventures.firebaseio.com/');
