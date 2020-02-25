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
    }

});