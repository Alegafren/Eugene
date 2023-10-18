import { mergeProps, useSSRContext } from 'file://C:/Users/llonan/Desktop/WebSite/node_modules/vue/index.mjs';
import { ssrRenderAttrs } from 'file://C:/Users/llonan/Desktop/WebSite/node_modules/vue/server-renderer/index.mjs';
import { _ as _export_sfc } from './server.mjs';

const _sfc_main = {
  data() {
    return {
      c: 0
    };
  },
  methods: {}
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "wrapper" }, _attrs))} data-v-3733931d><button type="button" class="btn" data-v-3733931d><p class="number" data-v-3733931d>+</p></button><button type="button" class="btn" data-v-3733931d><p class="number" data-v-3733931d>-</p></button></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ScaleButtons.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_4 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-3733931d"]]);

export { __nuxt_component_4 as _ };
//# sourceMappingURL=ScaleButtons-14bc5f27.mjs.map
