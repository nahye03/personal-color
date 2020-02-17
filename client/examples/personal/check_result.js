FlowRouter.template('/check_result', 'check_result');

Template.ex_login_custom.helpers({
    userInfo: function() {
        return Meteor.users.findOne({_id:Meteor.user()._id});
    }
});