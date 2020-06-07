import Route from "@ember/routing/route";
import { inject as service } from '@ember/service';
import { hash } from 'rsvp';

export default class extends Route {
  @service
  store;

  model() {
    return hash({
      plans: this.store.findAll('plan')
    })
  }
}
