FlowRouter.template('/mypage_info', 'mypage_info');

Template.mypage_info.helpers({
    userInfo: function() {
        return Meteor.users.findOne({_id:Meteor.user()._id});
    }
});