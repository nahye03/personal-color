FlowRouter.template('/reco_lip', 'reco_lip');

var tone;

Template.reco_lip_info.onRendered(function () {

});

Template.reco_lip_info.helpers({
    toneInfo: function() {
        var userTone = Meteor.user().profile.p_ton;
        tone =DB_TONE.findOne({ton_num: userTone});
        return tone;
    },

    COSInfo: function() {

        return DB_COSM.findAll({cm_tone: "가을 뮤트", cm_class:"lip"});
    },


});