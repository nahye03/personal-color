FlowRouter.template('/check_result', 'check_result');

var ran_ton = Math.floor(Math.random() * 8) + 1;

Template.check_result.helpers({
    // userTone: function() {gk
    //     var totalCount = DB_TONE.count();
    //     var skipsize = Math.floor(Math.random() * totalCount);
    //     return DB_TONE.find().skip(skipsize).limit();
    // },
    toneInfo: function() {
        return DB_TONE.findOne({ton_num: ran_ton});
    }
    
});

Meteor.methods({
    feature_li : function (ton_feat) {
        for(var i=0;i>ton_feat.length;i++){

        }
    }

})

Template.check_result.events({
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