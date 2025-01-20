import { createElement } from '../render.js';

const filterFormTemplate = () => '<form class="trip-filters" action="#" method="get"></form>';

export default class FilterFormView {
  getTemplate() {
    return filterFormTemplate();
  }

  getElement() {
    if (!this.element) {
      this.element = createElement(this.getTemplate());
    }
    return this.element;
  }
}
