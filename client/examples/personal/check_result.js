FlowRouter.template('/check_result', 'check_result');

Template.ex_login_custom.helpers({
    // userTone: function() {
    //     var totalCount = DB_TONE.count();
    //     var skipsize = Math.floor(Math.random() * totalCount);
    //     return DB_TONE.find().skip(skipsize).limit();
    // },
    toneInfo: function() {
        return DB_TONE.findOne({ton_tone: '여름 뮤트'});
    }
    
});

Template.check_result.events({
    'click #btn-chan1' :  function (evt) {
        var ton = DB_TONE.findOne({ton_tone:'여름 뮤트'}).ton_color
        $(evt.target).closest('.chan-color').css({"background-color":ton[0]})
    },
    'click #btn-chan2' :  function (evt) {
        var ton = DB_TONE.findOne({ton_tone:'여름 뮤트'}).ton_color
        $(evt.target).closest('.chan-color').css({"background-color":ton[1]})
    },
    'click #btn-chan3' :  function (evt) {
        var ton = DB_TONE.findOne({ton_tone:'여름 뮤트'}).ton_color
        $(evt.target).closest('.chan-color').css({"background-color":ton[2]})
    }
})