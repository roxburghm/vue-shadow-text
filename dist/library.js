'use strict';

var vue = require('vue');

var script = {
    name: 'ShadowText',
    inheritAttrs: true,
    props: {
        shadowColor: { type: String, default: '#000000' },
        shadowSize: { type: String, default: "0.7em" }
    },
    computed: {
        shadowStyle() {
            return `text-shadow: ${this.shadowColor} 0 0 ${this.shadowSize};`;
        }
    }
  };

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (vue.openBlock(), vue.createElementBlock("div", {
    style: vue.normalizeStyle($options.shadowStyle)
  }, [
    vue.renderSlot(_ctx.$slots, "default")
  ], 4 /* STYLE */))
}

script.render = render;
script.__scopeId = "data-v-4a399ca6";
script.__file = "src/ShadowText.vue";

var components = { ShadowText: script };

const plugin = {
  install (Vue) {
    for (const prop in components) {
      if (components.hasOwnProperty(prop)) {
        const component = components[prop];
        console.log('Registered', component.name);
        Vue.component(component.name, component);
      }
    }
  }
};

module.exports = plugin;
