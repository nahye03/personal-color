FlowRouter.template('/check_result', 'check_result');

Template.ex_login_custom.helpers({
    userTone: function() {
        var totalCount = DB_TONE.count();
        var skipsize = Math.floor(Math.random() * totalCount);
        return DB_TONE.find().skip(skipsize).limit();
    }
});

// Meteor.methods({
//     changeColor : function(number){
//         var circle = document.getElementsByClassName('chan-color');
//         var colorarr = ['red','purple','blue']
//         circle.style.background=colorarr[number]
//     }
// })

Template.check_result.events({
    'click #btn-chan' :  function (evt) {
        $(evt.target).closest('.chan-color').css({"background-color":"RED"})
    }
})