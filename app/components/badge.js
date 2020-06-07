import Component from '@ember/component';
import { tracked } from '@glimmer/tracking';

export default class Badge extends Component {
  @tracked
  text = null;
}