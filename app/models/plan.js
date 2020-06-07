import Model, { attr } from '@ember-data/model';

export default class PlanModel extends Model {
  @attr author;
  @attr title;
  @attr operator;
  @attr overview;
  @attr status;
}
