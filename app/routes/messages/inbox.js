import Route from '@ember/routing/route';

export default Route.extend({

  model() {
    // return this.store.query('message', { label = 'inbox' });
    const messages = this.store.peekAll('message');
    return messages.filter(message => message.get('label') === 'inbox');
  }
});
