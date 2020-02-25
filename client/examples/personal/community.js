FlowRouter.template('/community', 'community');

Template.community.onRendered(function () {
    Session.set('sortCondition',{createdAt: -1})
    Session.set('selTone', {})

});


Template.community.helpers({
    boards: function () {
        return DB_POSTS.findAll(Session.get('selTone'), {sort: Session.get('sortCondition')});
    },
    YMD: function () {
        return this.createdAt.toStringYMD();
    },
    HMS: function () {
        return this.createdAt.toStringHMS();
    }
});

Template.community.events({
    'click #btn-remove': function () {
        if (confirm('삭제 하시겠습니까?')) {
            DB_POSTS.remove({_id: this._id});
            alert('삭제 되었습니다.');
        }
    },
    'click #btn-sort-count' : function () {
        Session.set('sortCondition',{readCount:-1})
    },
    'click #btn-sort-date' : function () {
        Session.set('sortCondition',{createdAt: -1})
    },
    'click #btn-only-spring' : function () {
        Session.set('selTone', {tone:'봄'})
    },
    'click #btn-only-summer' : function () {
        Session.set('selTone', {tone:'여름'})
    },
    'click #btn-only-fall' : function () {
        Session.set('selTone', {tone:'가을'})
    },
    'click #btn-only-winter' : function () {
        Session.set('selTone', {tone:'겨울'})
    },
    'click #btn-only-all' : function () {
        Session.set('selTone', {})
    }
});