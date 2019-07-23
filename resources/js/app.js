/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue');

import 'jquery';
import 'popper.js';
import 'bootstrap';
import 'gentelella/vendors/fastclick/lib/fastclick';
import 'gentelella/vendors/nprogress/nprogress';
import 'gentelella';
import Vue from 'vue';
import App from './App';
import router from './router';

Vue.config.productionTip = false;

require('gentelella/vendors/bootstrap/dist/css/bootstrap.min.css');
require('gentelella/vendors/font-awesome/css/font-awesome.min.css');
require('gentelella/vendors/nprogress/nprogress.css');
require('gentelella/build/css/custom.min.css');

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
});