FlowRouter.template('/mypage_info', 'mypage_info');

Template.mypage_info.helpers({
    userInfo: function() {
        return Meteor.users.findOne({_id:Meteor.user()._id});
    }
});


Template.mypage_info.events({
    'click #btn-update1' : function () {
        var userInfo = Meteor.user();
        var username = $('#username').val();
        var p_name = $('#p_name').val();
        var p_birth = $('#p_birth').val();

        Meteor.users.update({_id: userInfo._id}, {
            $set: { // 사용자 객체의 profile 프로퍼티는 사용자 기타 정보를 저장 하는 공통 된 위치 입니다.
                'username': username,
                'profile.p_name': p_name,
                'profile.p_birth': p_birth
            }
        });
        alert('사용자 프로파일을 수정 하였습니다.');
    },

    'click #btn-update2' : function () {
        var userInfo = Meteor.user();
        var p_phone = $('#p_phone').val();
        var p_email = $('#p_email').val();


        Meteor.users.update({_id: userInfo._id}, {
            $set: { // 사용자 객체의 profile 프로퍼티는 사용자 기타 정보를 저장 하는 공통 된 위치 입니다.
                'emails.0.address' : p_email,
                'profile.p_phone': p_phone
            }
        });
        alert('사용자 프로파일을 수정 하였습니다.');
    },
    'click #btn-update3' : function () {
        var userInfo = Meteor.user();
        var p_home = $('#p_home').val();
        var p_zip = $('#p_zip').val();

        Meteor.users.update({_id: userInfo._id}, {
            $set: { // 사용자 객체의 profile 프로퍼티는 사용자 기타 정보를 저장 하는 공통 된 위치 입니다.
                'profile.p_home': p_home,
                'profile.p_zip': p_zip
            }
        });
        alert('사용자 프로파일을 수정 하였습니다.');
    },
    'click #btn-update4' : function () {
        var userInfo = Meteor.user();
        var username = $('#username').val();
        var p_name = $('#p_name').val();
        var p_birth = $('#p_birth').val();
        // var p_email = $('#email').val();
        var p_phone = $('#p_phone').val();
        var p_home = $('#p_home').val();
        var p_zip = $('#p_zip').val();

        Meteor.users.update({_id: userInfo._id}, {
            $set: { // 사용자 객체의 profile 프로퍼티는 사용자 기타 정보를 저장 하는 공통 된 위치 입니다.
                'username': username,
                'profile.p_name': p_name,
                'profile.p_birth': p_birth,
                'emails.0.address' : p_email,
                'profile.p_phone': p_phone,
                'profile.p_home': p_home,
                'profile.p_zip': p_zip
            }
        });
        alert('사용자 프로파일을 모두 수정 하였습니다.');
    },

})