import Route from '@ember/routing/route';

export default Route.extend({

  model() {
    return this.store.createRecord('message', { label: 'outbox'});
  },

  actions: {
    send(message) {
      this.controller.set('showSpinner', true);
      message
        .save()
        .then(() => this.transitionTo('messages.outbox'))
        .finally(() => this.controller.set('showSpinner', false));
    },

    willTransition(transition) {
      if (this.controller.get('model.isNew')) {
        const sure = window.confirm('are you sure?');
        if (!sure) {
          transition.abort();
        } else {
          this.controller.get('model').rollbackAttributes();
        }
      }
    }
  }
});
