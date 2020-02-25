FlowRouter.template('/community', 'community');

Template.community.onRendered(function () {
    Session.set('sortCondition',{createdAt: -1})

});


Template.community.helpers({
    boards: function () {
        return DB_POSTS.findAll({}, {sort: Session.get('sortCondition')});
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
    }
});