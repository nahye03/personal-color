FlowRouter.template('/check_result', 'check_result');

Template.check_result_info.helpers({
    toneInfo: function() {
        var userTone = Meteor.user().profile.p_ton
        return DB_TONE.findOne({ton_num: userTone});
    },
    link: function() {
        // 컨테츠 데이터베이스에 저장 되어 있는 파일(이미지)의 _id를 이용하여 실제 링크로 변환하여 전달
        var userInfo = Meteor.user();
        return DB_FILES.findOne({_id: userInfo.profile.p_file}).link();
    }
});

Template.check_result_info.events({
    'click #btn-chan1' :  function (evt) {
        var userTone = Meteor.user().profile.p_ton
        var ton = DB_TONE.findOne({ton_num:userTone}).ton_color
        $(evt.target).closest('.chan-color').css({"background-color":ton[0], "border-color":ton[0]})
    },
    'click #btn-chan2' :  function (evt) {
        var userTone = Meteor.user().profile.p_ton
        var ton = DB_TONE.findOne({ton_num:userTone}).ton_color
        $(evt.target).closest('.chan-color').css({"background-color":ton[1], "border-color":ton[1]})
    },
    'click #btn-chan3' :  function (evt) {
        var userTone = Meteor.user().profile.p_ton
        var ton = DB_TONE.findOne({ton_num:userTone}).ton_color
        $(evt.target).closest('.chan-color').css({"background-color":ton[2], "border-color":ton[2]})
    }
})