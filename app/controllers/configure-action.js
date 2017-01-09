import Ember from 'ember';

export default Ember.Controller.extend({
    emailAddress: '',

    isValid: Ember.computed.match('emailAddress', /^.+@.+\..+$/),
    isDisabled: Ember.computed.not('isValid'),

    actions: {
        saveAction() {
            const email = this.get('emailAddress');
            localStorage.setItem('email', email);
            window.location.href = "summary";
        }
    }
});