import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('services-list');
  this.route('choose-service');
  this.route('configure-service');
  this.route('that');
  this.route('action-list');
  this.route('choose-action');
  this.route('configure-action');
  this.route('summary');
});

export default Router;
