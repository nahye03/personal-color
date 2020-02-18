FlowRouter.template('/check_result', 'check_result');

Template.ex_login_custom.helpers({
    userTone: function() {
        var totalCount = DB_TONE.count();
        var skipsize = Math.floor(Math.random() * totalCount);
        return DB_TONE.find().skip(skipsize).limit();
    }
});