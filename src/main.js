import FilterPresenter from './presenter/filter-presenter.js';
import TripPresenter from './presenter/trip-presenter.js';

const tripControlElement = document.querySelector('.trip-controls__filters');
const tripEventsElement = document.querySelector('.trip-events');

const filterPresenter = new FilterPresenter();
const tripPresenter = new TripPresenter();

filterPresenter.init(tripControlElement);
tripPresenter.init(tripEventsElement);
