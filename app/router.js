import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('admin', function() {
    this.route('categories', function() {
      this.route('show', { path: ':category_id'});
      this.route('new');
      this.route('edit', { path: ':category_id/edit'});
    });
    this.route('products');
  });
  this.route('messages', function() {
    this.route('show', { path: ':label/:id' });
    this.route('create');
    this.route('inbox');
    this.route('outbox');
  });
  this.route('warehouse');
});

export default Router;
