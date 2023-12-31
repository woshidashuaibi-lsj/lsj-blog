(() => {
  'use strict';
  const e = window.Vue,
    t = { class: 'demo' },
    n = { class: 'text' },
    c = {
      __name: 'app',
      setup(c) {
        const o = (0, e.reactive)({ count: 0 }),
          a = () => {
            o.count++;
          };
        return (c, s) => (
          (0, e.openBlock)(),
          (0, e.createElementBlock)('div', t, [
            (0, e.createElementVNode)(
              'div',
              n,
              'Count: ' + (0, e.toDisplayString)(o.count),
              1
            ),
            (0, e.createElementVNode)(
              'button',
              { class: 'btn', onClick: a },
              'Add'
            )
          ])
        );
      }
    };
  (0, e.createApp)(c).mount('#app');
})();
