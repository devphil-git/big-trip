import { createElement } from '../render.js';

// const sortNames = ['Day', 'Event', 'Time', 'Price', 'Offers'];

const sortItemTemplate = (sortName = 'defaultName') => `
  <div class="trip-sort__item  trip-sort__item--offer">
    <input id="sort-offer" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-offer" disabled>
    <label class="trip-sort__btn" for="sort-offer">${sortName}</label>
  </div>
`;

export default class SortItemView {
  constructor(name) {
    this.name = name;
  }

  getTemplate() {
    return sortItemTemplate(this.name);
  }

  getElement() {
    if (!this.element) {
      this.element = createElement(this.getTemplate());
    }
    return this.element;
  }
}
