import Vue from 'vue'
import Element from 'element-ui'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css'
import 'element-ui/lib/theme-chalk/base.css';
import CollapseTransition from 'element-ui/lib/transitions/collapse-transition';

Vue.use(Element)
Vue.use(ElementUI);
Vue.use(Element, { size: 'small', zIndex: 3000 });

Vue.component(CollapseTransition.name, CollapseTransition)