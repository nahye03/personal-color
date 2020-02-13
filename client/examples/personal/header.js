FlowRouter.template('/header', 'header');

Template.header.helpers({
    userInfo: function() {
        return Meteor.user();
    }
});
