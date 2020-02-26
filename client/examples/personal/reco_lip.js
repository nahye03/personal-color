FlowRouter.template('/reco_lip', 'reco_lip');

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


    // userInfo:function() {
    //     return Meteor.users.findOne({id:Meteor.user()._id})
    // }
});

Template.reco_lip_info.events({
    'click #btn_addcartOne' : function () {
        // var tonename = Session.get('tonename');
        var userInfo = Meteor.user();
        var cos_cnt = $('#inputGroupSelect04').val()
        var cos_name = $('#cm_name').val()

        // var target = document.getElementById("inputGroupSelect04");
        // var cos_cnt = target.options[target.selectedIndex].value
        // var cos_name = $('#cm_name').val()
        // var cos_name = $('.card-text').text().split("\n")[0];
        // var cos_image = $('.card-image-top').val();
        // var cos_name = DM_COSM.findOne({cm_class:"lip" , cm_tone:tonename})[0].cm_name;

        // Meteor.users.update({_id: userInfo._id}, {
        //     $set: { // 사용자 객체의 profile 프로퍼티는 사용자 기타 정보를 저장 하는 공통 된 위치 입니다.
        //         'cart.cos.name': cos_name,
        //         'cart.cos.cnt': cos_cnt,
        //     }
        // });

        DB_CART.insert({
            cart_user : userInfo._id,
            cos_cnt : cos_cnt,
            cos_name : cos_name
        })

        alert("장바구니에 추가되었습니다");
    }
});

