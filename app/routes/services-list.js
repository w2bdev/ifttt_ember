import Ember from 'ember';


let services = [{
    title: "IFTTT",
    bColor: "#666666",
    imgUrl: "https://assets.ifttt.com/images/channels/1/icons/on_color_large.png",
    target: ""
}, {
    title: "Twitter",
    bColor: "#00ABEC",
    imgUrl: "https://assets.ifttt.com/images/channels/2/icons/on_color_large.png",
    target: ""
}, {
    title: "Date & Time",
    bColor: "#333333",
    imgUrl: "https://assets.ifttt.com/images/channels/3/icons/on_color_large.png",
    target: ""
}, {
    title: "Feed",
    bColor: "#EC7505",
    imgUrl: "https://assets.ifttt.com/images/channels/4/icons/on_color_large.png",
    target: "choose-service"
}, {
    title: "SMS",
    bColor: "#29BF12",
    imgUrl: "https://assets.ifttt.com/images/channels/5/icons/on_color_large.png",
    target: ""
}, {
    title: "Email",
    bColor: "#2468ff",
    imgUrl: "https://assets.ifttt.com/images/channels/6/icons/on_color_large.png",
    target: ""
}, {
    title: "Weather Underground",
    bColor: "#1E2023",
    imgUrl: "https://assets.ifttt.com/images/channels/7/icons/on_color_large.png",
    target: ""
}, {
    title: "Phone Call",
    bColor: "#2132FF",
    imgUrl: "https://assets.ifttt.com/images/channels/8/icons/on_color_large.png",
    target: ""
}, {
    title: "Delicious",
    bColor: "#3274D0",
    imgUrl: "https://assets.ifttt.com/images/channels/9/icons/on_color_large.png",
    target: ""
}, {
    title: "Facebook",
    bColor: "#3B579D",
    imgUrl: "https://assets.ifttt.com/images/channels/10/icons/on_color_large.png",
    target: ""
}, ];

export default Ember.Route.extend({
    model() {
        return services;
    }
});