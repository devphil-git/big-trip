import { render } from '../render';
import SortFormView from '../view/sort-form-view.js';
import TripListView from '../view/trip-list-view.js';
import TripPointView from '../view/trip-point-view.js';

// const sortNames = ['Day', 'Event', 'Time', 'Price', 'Offers'];

export default class TripPresenter {
  sortFormComponent = new SortFormView();
  tripListComponent = new TripListView();

  init = (sortContainer) => {
    render(this.sortFormComponent, sortContainer);
    render(this.tripListComponent, sortContainer);
    for(let i = 0; i < 3; i++) {
      render(new TripPointView(), this.tripListComponent.getElement());
    }
  };
}
