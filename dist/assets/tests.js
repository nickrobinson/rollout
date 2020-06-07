'use strict';

define("rollout/tests/integration/components/aspect-ratio-test", ["qunit", "ember-qunit", "@ember/test-helpers"], function (_qunit, _emberQunit, _testHelpers) {
  "use strict";

  (0, _qunit.module)('Integration | Component | aspect-ratio', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _qunit.test)('it renders', async function (assert) {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.set('myAction', function(val) { ... });
      await (0, _testHelpers.render)(Ember.HTMLBars.template(
      /*
        <AspectRatio />
      */
      {
        id: "WZ4Zk36y",
        block: "{\"symbols\":[],\"statements\":[[7,\"aspect-ratio\",[],[[],[]],null]],\"hasEval\":false,\"upvars\":[]}",
        meta: {}
      }));
      assert.equal(this.element.textContent.trim(), ''); // Template block usage:

      await (0, _testHelpers.render)(Ember.HTMLBars.template(
      /*
        
            <AspectRatio>
              template block text
            </AspectRatio>
          
      */
      {
        id: "9CH8LFtU",
        block: "{\"symbols\":[],\"statements\":[[1,1,0,0,\"\\n      \"],[7,\"aspect-ratio\",[],[[],[]],[[\"default\"],[{\"statements\":[[1,1,0,0,\"\\n        template block text\\n      \"]],\"parameters\":[]}]]],[1,1,0,0,\"\\n    \"]],\"hasEval\":false,\"upvars\":[]}",
        meta: {}
      }));
      assert.equal(this.element.textContent.trim(), 'template block text');
    });
  });
});
define("rollout/tests/integration/components/example-1/component-test", ["qunit", "ember-qunit", "@ember/test-helpers"], function (_qunit, _emberQunit, _testHelpers) {
  "use strict";

  (0, _qunit.module)('Integration | Component | example-1', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _qunit.test)('it renders', async function (assert) {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.set('myAction', function(val) { ... });
      await (0, _testHelpers.render)(Ember.HTMLBars.template(
      /*
        <Example1 />
      */
      {
        id: "8D5Gr40R",
        block: "{\"symbols\":[],\"statements\":[[7,\"example1\",[],[[],[]],null]],\"hasEval\":false,\"upvars\":[]}",
        meta: {}
      }));
      assert.equal(this.element.textContent.trim(), ''); // Template block usage:

      await (0, _testHelpers.render)(Ember.HTMLBars.template(
      /*
        
            <Example1>
              template block text
            </Example1>
          
      */
      {
        id: "S2up6po+",
        block: "{\"symbols\":[],\"statements\":[[1,1,0,0,\"\\n      \"],[7,\"example1\",[],[[],[]],[[\"default\"],[{\"statements\":[[1,1,0,0,\"\\n        template block text\\n      \"]],\"parameters\":[]}]]],[1,1,0,0,\"\\n    \"]],\"hasEval\":false,\"upvars\":[]}",
        meta: {}
      }));
      assert.equal(this.element.textContent.trim(), 'template block text');
    });
  });
});
define("rollout/tests/lint/app.lint-test", [], function () {
  "use strict";

  QUnit.module('ESLint | app');
  QUnit.test('app.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app.js should pass ESLint\n\n');
  });
  QUnit.test('components/final/aspect-ratio.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/final/aspect-ratio.js should pass ESLint\n\n');
  });
  QUnit.test('components/final/link.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/final/link.js should pass ESLint\n\n');
  });
  QUnit.test('controllers/application.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/application.js should pass ESLint\n\n');
  });
  QUnit.test('router.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'router.js should pass ESLint\n\n');
  });
  QUnit.test('routes/index.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/index.js should pass ESLint\n\n');
  });
  QUnit.test('styles/tailwind.config.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'styles/tailwind.config.js should pass ESLint\n\n');
  });
});
define("rollout/tests/lint/tests.lint-test", [], function () {
  "use strict";

  QUnit.module('ESLint | tests');
  QUnit.test('integration/components/aspect-ratio-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/aspect-ratio-test.js should pass ESLint\n\n');
  });
  QUnit.test('integration/components/example-1/component-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/example-1/component-test.js should pass ESLint\n\n');
  });
  QUnit.test('test-helper.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'test-helper.js should pass ESLint\n\n');
  });
});
define("rollout/tests/test-helper", ["rollout/app", "rollout/config/environment", "@ember/test-helpers", "ember-qunit"], function (_app, _environment, _testHelpers, _emberQunit) {
  "use strict";

  (0, _testHelpers.setApplication)(_app.default.create(_environment.default.APP));
  (0, _emberQunit.start)();
});
define('rollout/config/environment', [], function() {
  var prefix = 'rollout';
try {
  var metaName = prefix + '/config/environment';
  var rawConfig = document.querySelector('meta[name="' + metaName + '"]').getAttribute('content');
  var config = JSON.parse(decodeURIComponent(rawConfig));

  var exports = { 'default': config };

  Object.defineProperty(exports, '__esModule', { value: true });

  return exports;
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

});

require('rollout/tests/test-helper');
EmberENV.TESTS_FILE_LOADED = true;
//# sourceMappingURL=tests.map
