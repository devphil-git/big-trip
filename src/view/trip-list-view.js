import { createElement } from '../render.js';

const TripListTemplate = () => '<ul class="trip-events__list"></ul>';

export default class TripListView {
  getTemplate() {
    return TripListTemplate();
  }

  getElement() {
    if (!this.element) {
      this.element = createElement(this.getTemplate());
    }
    return this.element;
  }
}
