import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import { hash } from 'rsvp';

export default class PlanRoute extends Route {
  @service
  store;

  model(params) {
    return hash({
      plan: this.store.find('plan', params.plan_slug)
    })
  }
}
