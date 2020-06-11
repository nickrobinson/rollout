import Component from '@ember/component';
import { tracked } from '@glimmer/tracking';

export default class Badge extends Component {
  tagName = ''

  @tracked
  text = null;
}