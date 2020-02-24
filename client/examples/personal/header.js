FlowRouter.template('/header', 'header');


Template.header.events({
    'click #btn-mypage': function(evt) {
        alert("우측 상단의 Sign in 버튼을 통해 로그인/회원가입 해주세요!")
    }
})
