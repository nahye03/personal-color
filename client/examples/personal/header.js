FlowRouter.template('/header', 'header');


Template.header.events({
    'click #btn-mypage': function(evt) {
        alert("로그인 해주세요!")
    }
})
