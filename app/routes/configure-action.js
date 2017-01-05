import Ember from 'ember';

export default Ember.Route.extend({
    actions: {
        submit: () => {
            console.log('submitted', this.configuration);
            //to do :validation
            //set configure service
            localStorage.setItem('email', 'bin5661@gmail.com');
            window.location.href = "summary";
        }
    }
});