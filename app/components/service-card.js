import Ember from 'ember';

export default Ember.Component.extend({
    actions: {
        goto(url) {
            //console.log(url);
            if (url)
                window.location.href = url;
        }
    }
});