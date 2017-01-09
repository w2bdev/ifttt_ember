import Ember from 'ember';

export default Ember.Controller.extend({
    feedUrl: '',

    isValid: Ember.computed.match('feedUrl', /https?:\/\/(?:www\.|(?!www))[^\s\.]+\.[^\s]{2,}|www\.[^\s]+\.[^\s]{2,}/),
    isDisabled: Ember.computed.not('isValid'),

    actions: {
        saveService() {
            const url = this.get('feedUrl');
            localStorage.setItem('feedurl', url);
            window.location.href = "that";
        }
    }
});