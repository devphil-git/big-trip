import { createElement } from '../render.js';

const filterItemTemplate = (filterName = 'defaultName') => `
  <div class="trip-filters__filter">
    <input id="filter-everything" class="trip-filters__filter-input  visually-hidden" type="radio" name="trip-filter" value="everything">
    <label class="trip-filters__filter-label" for="filter-everything">${filterName}</label>
  </div>
`;

export default class FilterItemView {
  constructor(name) {
    this.name = name;
  }

  getTemplate() {

    return filterItemTemplate(this.name);
  }

  getElement() {
    if (!this.element) {
      this.element = createElement(this.getTemplate());
    }
    return this.element;
  }
}
