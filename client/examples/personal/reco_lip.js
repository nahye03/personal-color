FlowRouter.template('/reco_lip', 'reco_lip');


Template.reco_lip_info.onRendered(function () {

});

Template.reco_lip_info.helpers({

    toneInfo: function() {
        var userTone = Meteor.user().profile.p_ton;

        if (userTone == 1) tonename= "봄 라이트";
        if (userTone == 2) tonename= "봄 브라이트";
        if (userTone == 3) tonename= "여름 라이트";
        if (userTone == 4) tonename= "여름 뮤트";
        if (userTone == 5) tonename= "가을 뮤트";
        if (userTone == 6) tonename= "가을 딥";
        if (userTone == 7) tonename= "겨울 브라이트";
        if (userTone == 8) tonename= "겨울 딥";

        var tone =DB_TONE.findOne({ton_num: userTone});

        Session.set('tonename',tonename);
        return tone;
    },

    COSInfo: function() {
        var tonename = Session.get('tonename');
        return DB_COSM.findAll({cm_tone:tonename, cm_class:"lip"});
    },

    UserInfo:function() {
        return Meteor.users.findOne({id:Meteor.user()._id})
    }
});

Template.mypage_info.events({
    'click #btn-addcart' : function () {

        var userInfo = Meteor.user();
        var username = $('#username').val();
        var p_name = $('#p_name').val();
        var p_birth = $('#p_birth').val();
        var p_email = $('#email').val();
        alert('장바구니에 담겼습니다.');

        // Meteor.users.update({_id: userInfo._id}, {
        //     $set: { // 사용자 객체의 profile 프로퍼티는 사용자 기타 정보를 저장 하는 공통 된 위치 입니다.
        //         'username': username,
        //         'profile.p_name': p_name,
        //         'profile.p_birth': p_birth,
        //         'emails.0.address' : p_email,
        //         'profile.p_phone': p_phone,
        //         'profile.p_home': p_home,
        //         'profile.p_zip': p_zip
        //     }
        // });
    },
});

