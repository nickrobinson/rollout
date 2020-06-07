import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | plan/index', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:plan/index');
    assert.ok(route);
  });
});
