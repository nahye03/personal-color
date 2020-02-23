FlowRouter.template('/check_main', 'check_main');

Template.check_main.events({
    'click #btn-start': function(evt) {
        alert("로그인 해주세요!")
    }
})

