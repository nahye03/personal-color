// DB = new Mongo.Collection('db');   //데이터베이스 객체 생성 예제
//예제와 테스트를 위한 데이터베이스

DB_TONE = new Mongo.Collection('DB_TONE');
// DB_POSTS = new Mongo.Collection('DB_POSTS');
DB_COSM = new Mongo.Collection('DB_COSM');
// DB_UPLOAD = new Mongo.Collection('DB_UPLOAD');
DB_CART = new Mongo.Collection('DB_CART');

// Meteor.users.allow({  //client에서 사용자 정보를 제어 할 수 있도록 추가.
//     update: function() {return true;},
//     remove: function() {return true;}
// });
//
// Mongo.Collection.prototype.findAll = function(selector, options) {  //find의 fetch 후 array 반납 함수
//     if (!selector) {selector = {}};
//     if (!options) {options = {}};
//     _.extend(options, {limit: 1000});   //priority on last element. min-limit for unlimited using.
//     return this.find(selector, options).fetch();
// };
//
