import Ember from 'ember';

export default Ember.Route.extend({
    model() {
        return Ember.RSVP.hash({
            summaryText: `If new feed item from ${localStorage.getItem('feedurl')} then send me an email at ${localStorage.getItem('email')}`,
        });
    }
});