// mongoose db
var mongoose = require('mongoose');	// mongoose module 사용
var Schema = mongoose.Schema;			// mongoose.Schema 객체 선언

mongoose.connect('mongodb://localhost/nailo'); 	// nailo db connect

// schedule Schema 정의
var schedule_schema = new Schema({
	id : String,
	index : Number,
	subject: String, // 스케줄이름
	date : Array,		// 이차원 배열로 데이터는 JSON으로 담긴다, 나의 여행 정보
						// type 으로 기차/도시/관광지/메모 구분
});		// end of schedule_schema
분
var documents = mongoose.model('schedules', schedule_schema);
// db 삽입을 위한 모델 선언

module.exports = {
	
	// schedule 을 생성하여 db 에 넣는다.
}
