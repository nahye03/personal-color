FlowRouter.template('/check_input', 'check_input');

Template.check_input.helpers({
    contents: function () {
        // CONTENTS 데이터베이스를 화면에 전달
        return DB_UPLOAD.findOne();
    },
    link: function () {
        // 저장 된 이미지 링크를 반환
        return DB_FILES.findOne({_id: this.file_id}).link();
    }
});

Template.check_input.events({
    'click #btn-save': function (evt, inst) {
        var file = $('#inp-file').prop('files')[0];   // 화면에서 선택 된 파일 가져오기
        var file_id = DB_FILES.insertFile(file);
        DB_UPLOAD.insert({
            file_id: file_id                // 저장 된 파일의 _id
        });
        // 저장 후 화면 정리
        alert('저장 되었습니다.');
        $('#btn-camera').hide()
    },

    'click #btn-check': function (evt) {
        var userInfo = Meteor.user();
        var ran_ton = Math.floor(Math.random() * 8) + 1;
        DB_UPLOAD.remove({_id: this._id})
        Meteor.users.update({_id: userInfo._id},{
            $set : {
                'profile.p_ton' : ran_ton
            }
        });
    }

    // 'click #btn-remove': function () {
    //     if (confirm('삭제 하시겠습니까?')) {
    //         DB_UPLOAD.remove({_id: this._id});  // 선택 컨텐츠를 DB에서 삭제
    //         alert('삭제 되었습니다.');
    //     }
    // }
});
