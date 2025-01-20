import { createElement } from '../render.js';

const submitButtonTemplate = () => '<button class="visually-hidden" type="submit">Accept filter</button>';

export default class SubmitButtonView {
  getTemplate() {
    return submitButtonTemplate();
  }

  getElement() {
    return createElement(this.getTemplate());
  }
}
