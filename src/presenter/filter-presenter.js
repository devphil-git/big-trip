import FilterFormView from '../view/filter-form-view.js';
import FilterItemView from '../view/filter-item-view';
import { render } from '../render.js';

const filtersNames = ['Everything', 'Future', 'Past'];

export default class FilterPresenter {
  filterFormComponent = new FilterFormView();

  init = (filterContainer) => {
    render(this.filterFormComponent, filterContainer);
    filtersNames.forEach((item) => {
      render(new FilterItemView(item), this.filterFormComponent.getElement());
    });
  };
}

