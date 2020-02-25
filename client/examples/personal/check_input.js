FlowRouter.template('/check_input', 'check_input');

Template.check_input.helpers({
    userInfo : function(){
        return Meteor.user();
    },
    link: function() {
        // 컨테츠 데이터베이스에 저장 되어 있는 파일(이미지)의 _id를 이용하여 실제 링크로 변환하여 전달
        var userInfo = Meteor.user();
        return DB_FILES.findOne({_id: userInfo.profile.p_file}).link();
    }
});

Template.check_input.events({
    'click #btn-save': function (evt, inst) {

        var file = $('#inp-file').prop('files')[0];   //화면에서 선택 된 파일 가져오기
        var file_id = DB_FILES.insertFile(file);

        var userInfo = Meteor.user()
        Meteor.users.update({_id: userInfo._id}, {
            $set: { // 사용자 객체의 profile 프로퍼티는 사용자 기타 정보를 저장 하는 공통 된 위치 입니다.
                'profile.p_file': file_id
            }
        });
        // 저장 후 화면 정리
        alert('저장 되었습니다.');
    },

    'click #btn-check': function (evt) {
        var userInfo = Meteor.user();
        var ran_ton = Math.floor(Math.random() * 8) + 1;
        DB_UPLOAD.remove({});
        Meteor.users.update({_id: userInfo._id},{
            $set : {
                'profile.p_ton' : ran_ton
            }
        });
    }
});
