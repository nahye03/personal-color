FlowRouter.template('/check_result_info', 'check_result_info');

var ran_ton = Math.floor(Math.random() * 8) + 1;

Template.check_result_info.helpers({
    toneInfo: function() {
        return DB_TONE.findOne({ton_num: ran_ton});
    }

});

Template.check_result_info.events({
    'click #btn-chan1' :  function (evt) {
        var ton = DB_TONE.findOne({ton_num:ran_ton}).ton_color
        $(evt.target).closest('.chan-color').css({"background-color":ton[0]})
    },
    'click #btn-chan2' :  function (evt) {
        var ton = DB_TONE.findOne({ton_num:ran_ton}).ton_color
        $(evt.target).closest('.chan-color').css({"background-color":ton[1]})
    },
    'click #btn-chan3' :  function (evt) {
        var ton = DB_TONE.findOne({ton_num:ran_ton}).ton_color
        $(evt.target).closest('.chan-color').css({"background-color":ton[2]})
    }
})