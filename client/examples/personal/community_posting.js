FlowRouter.template('/community_posting/:_id', 'community_posting');


Template.community_posting.onRendered(function() {
  $('#editor').summernote({
    popover: {},
    minHeight: 200,
    maximumImageFileSize: 1048576*10
  });
});

Template.community_posting.helpers({
  post: function() {
    var _id = FlowRouter.getParam('_id');
    if(_id === 'newPosting') {
      return {};    //새글 작성일때는 화면에 비어있는 데이터를 제공.
    }

    Meteor.setTimeout(function() { //화면 에디터에 편집 모드를 초기화 하기 위한 트릭
      $('#editor').summernote('reset')
    });

    return DB_POSTS.findOne({_id: _id});
  }
});

Template.community_posting.events({
  'click #btn-save': function() {
    var name = $('#inp-name').val();
    var title = $('#inp-title').val();
    var html = $('#editor').summernote('code');
    var tone = $('#inp-tone').val()

    if(!title) {
      return alert('제목은 반드시 입력 해 주세요.');
    }
    var _id = FlowRouter.getParam('_id');
    if( _id === 'newPosting') {
      DB_POSTS.insert({
        createdAt: new Date(),
        name: name,
        title: title,
        content: html,
        readCount: 0,
        tone: tone
      })
    } else {
      var post = DB_POSTS.findOne({_id: _id});
      post.name = name;
      post.title = title;
      post.content = html;
      post.tone = tone;
      DB_POSTS.update({_id: _id}, post);
    }

    alert('저장하였습니다.');
    $('#inp-name').val('');
    $('#inp-title').val('');
    $('#inp-tone').val('');
    $('#editor').summernote('reset');
    window.history.back();
  },
})