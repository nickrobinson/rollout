import Component from '@glimmer/component';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';
import { tracked } from '@glimmer/tracking';

export default class PlanEditSheetComponent extends Component {
  @service
  router;

  @tracked
  isEditing = false;

  get primaryButtonText() {
    return this.args.isEditing ? "Save" : "Edit";
  }

  get isSaveDisabled() {
    return this.isEditing && !this.args.plan.hasDirtyAttributes;
  }

  @action
  edit() {
    this.isEditing = true;
  }

  @action
  save() {
    this.args.plan.save();
    this.isEditing = false;
  }
}
