
import Vue from 'vue'
import { redraw } from "./redraw/index.js"
import { toback } from "./toback/index.js"
Vue.directive('redraw', redraw);
Vue.directive('toback', toback);
