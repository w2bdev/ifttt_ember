import Ember from 'ember';

export default Ember.Route.extend({
    actions: {
        submit: () => {
            console.log('submitted', this.configuration);
            //to do :validation
            //set configure service
            localStorage.setItem('feedurl', 'http://feeds.bbci.co.uk/sport/football/rss.xml?edition=uk');
            window.location.href = "that";
        }
    }
});