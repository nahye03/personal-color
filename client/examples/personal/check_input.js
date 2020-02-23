FlowRouter.template('/check_input', 'check_input');

Template.cam.helpers({
    contents: function () {
        // CONTENTS 데이터베이스를 화면에 전달
        return DB_UPLOAD.findAll();
    },
    link: function () {
        // 저장 된 이미지 링크를 반환
        return DB_FILES.findOne({_id: this.file_id}).link();
    }
});

Template.cam.events({
    'click #btn-save': function (evt, inst) {
        // $('#btn-camera').attr('src',"");
        let name="examples/woman.png";
        // 파일 먼저 저장
        var file = $('#inp-file').prop('files')[0];   // 화면에서 선택 된 파일 가져오기
        var file_id = DB_FILES.insertFile(file);
        // DB 저장 시 파일의 _id와 name을 함께 저장
        DB_UPLOAD.insert({    // 컨텐츠 DB에 저장
            file_id: file_id                // 저장 된 파일의 _id
        });
        // 저장 후 화면 정리
        alert('저장 되었습니다.');

        name = $('#inp-file').val();
        $('#btn-camera').attr('src', name);
    },

    'click #btn-remove': function () {
        if (confirm('삭제 하시겠습니까?')) {
            DB_UPLOAD.remove({_id: this._id});  // 선택 컨텐츠를 DB에서 삭제
            alert('삭제 되었습니다.');
        }
    }
});
