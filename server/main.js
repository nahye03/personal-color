Meteor.startup(function () {
    // code to run on server at startup
    if (!Meteor.users.findOne({username: 'admin'})) {
        //유저(관리자) 생성 예
        Accounts.createUser({
            username: 'admin',
            email: 'admin@admin.admin',
            password: 'admin!24',
            profile: {
                //이름, 주소 등 원하는 사용자 데이터
                type: 'admin',
                name: '관리자'
            }
        });
    }

    if (!DB_COSM.findOne()) {

        //봄 라이트
        DB_COSM.insert({
            cm_name: '페리페라_최애쁨템',
            cm_cost: '7500',
            cm_tone: '봄 라이트',
            cm_class: 'lip',
        });
        DB_COSM.insert({
            cm_name: '입생로랑_아 레브르12호',
            cm_cost: '38000',
            cm_tone: '봄 라이트',
            cm_class: 'lip',
        });
        DB_COSM.insert({
            cm_name: '어퓨_PK07',
            cm_cost: '6500',
            cm_tone: '봄 라이트',
            cm_class: 'blusher',
        });
        DB_COSM.insert({
            cm_name: '로라메르시에_진저',
            cm_cost: '28000',
            cm_tone: '봄 라이트',
            cm_class: 'shadow',
        });
        DB_COSM.insert({
            cm_name: '슈에무라_코랄로즈',
            cm_cost: '37000',
            cm_tone: '봄 라이트',
            cm_class: 'lip',
        });
        DB_COSM.insert({
            cm_name: '베네피트_단델리온',
            cm_cost: '21000',
            cm_tone: '봄 라이트',
            cm_class: 'blusher',
        });
        DB_COSM.insert({
            cm_name: '나스_섹스어필',
            cm_cost: '31000',
            cm_tone: '봄 라이트',
            cm_class: 'blusher',
        });
        DB_COSM.insert({
            cm_name: '마몽드_크리미틴트컬러밤 인텐스 베이비로즈',
            cm_cost: '7000',
            cm_tone: '봄 라이트',
            cm_class: 'lip',
        });
        DB_COSM.insert({
            cm_name: '맥_레이디 앳 플레이',
            cm_cost: '60000',
            cm_tone: '봄 라이트',
            cm_class: 'lip',
        });
        DB_COSM.insert({
            cm_name: '맥_맹그로브',
            cm_cost: '25000',
            cm_tone: '봄 라이트',
            cm_class: 'lip',
        });
        DB_COSM.insert({
            cm_name: '미샤_모던섀도우 이탈프리즘 2호 미니캐리백',
            cm_cost: '5700',
            cm_tone: '봄 라이트',
            cm_class: 'shadow',
        });
        DB_COSM.insert({
            cm_name: '바비브라운_쉬머워시 아이새도우 로즈골드',
            cm_cost: '37000',
            cm_tone: '봄 라이트',
            cm_class: 'shadow',
        });
        DB_COSM.insert({
            cm_name: '바비브라운_쉬머워시 아이새도우 샴페인',
            cm_cost: '38000',
            cm_tone: '봄 라이트',
            cm_class: 'shadow',
        });
        DB_COSM.insert({
            cm_name: '베네피트_갤리포니아',
            cm_cost: '29000',
            cm_tone: '봄 라이트',
            cm_class: 'blusher',
        });
        DB_COSM.insert({
            cm_name: '베네피트_단델리온',
            cm_cost: '29000',
            cm_tone: '봄 라이트',
            cm_class: 'blusher',
        });
        DB_COSM.insert({
            cm_name: '세잔느_네추럴 치크N 12호',
            cm_cost: '7900',
            cm_tone: '봄 라이트',
            cm_class: 'blusher',
        });
        DB_COSM.insert({
            cm_name: '슈에무라_강남오렌지',
            cm_cost: '28900',
            cm_tone: '봄 라이트',
            cm_class: 'lip',
        });
        DB_COSM.insert({
            cm_name: '에뛰드_피치라떼',
            cm_cost: '2500',
            cm_tone: '봄 라이트',
            cm_class: 'shadow',
        });
        DB_COSM.insert({
            cm_name: '에뛰드_상큼자몽티',
            cm_cost: '2500',
            cm_tone: '봄 라이트',
            cm_class: 'shadow',
        });
        DB_COSM.insert({
            cm_name: '에뛰드_진저밀크티',
            cm_cost: '2500',
            cm_tone: '봄 라이트',
            cm_class: 'shadow',
        });
        DB_COSM.insert({
            cm_name: '페리페라_최애쁨템',
            cm_cost: '8100',
            cm_tone: '봄 라이트',
            cm_class: 'lip',
        });


        //봄 브라이트
        DB_COSM.insert({
            cm_name: '네이쳐리퍼블릭_바이플라워 블러셔 자몽솜사탕',
            cm_cost: '7000',
            cm_tone: '봄 브라이트',
            cm_class: 'blusher',
        });
        DB_COSM.insert({
            cm_name: '맥_렛츠스테이투게더',
            cm_cost: '27000',
            cm_tone: '봄 브라이트',
            cm_class: 'lip',
        });
        DB_COSM.insert({
            cm_name: '맥_트룰리에버래스팅',
            cm_cost: '22000',
            cm_tone: '봄 브라이트',
            cm_class: '',
        });
        DB_COSM.insert({
            cm_name: '맥_허니러스트',
            cm_cost: '27000',
            cm_tone: '봄 브라이트',
            cm_class: 'shadow',
        });
        DB_COSM.insert({
            cm_name: '미샤_모던섀도우 쉬머 캐치파이어',
            cm_cost: '4000',
            cm_tone: '봄 브라이트',
            cm_class: 'shadow',
        });
        DB_COSM.insert({
            cm_name: '슈에무라_강남오렌지',
            cm_cost: '28900',
            cm_tone: '봄 브라이트',
            cm_class: 'lip',
        });
        DB_COSM.insert({
            cm_name: '슈에무라_루즈 언리미티드 마뜨',
            cm_cost: '32000',
            cm_tone: '봄 브라이트',
            cm_class: 'lip',
        });
        DB_COSM.insert({
            cm_name: '아리따음_글램누드',
            cm_cost: '3400',
            cm_tone: '봄 브라이트',
            cm_class: 'shadow',
        });
        DB_COSM.insert({
            cm_name: '아리따움_썸데이',
            cm_cost: '3400',
            cm_tone: '봄 브라이트',
            cm_class: 'shadow',
        });
        DB_COSM.insert({
            cm_name: '아리따움_캐시미어',
            cm_cost: '3400',
            cm_tone: '봄 브라이트',
            cm_class: 'shadow',
        });
        DB_COSM.insert({
            cm_name: '에뛰드_러블리 쿠키블러셔 그레이프후르츠',
            cm_cost: '2800',
            cm_tone: '봄 브라이트',
            cm_class: 'blusher',
        });
        DB_COSM.insert({
            cm_name: '에뛰드_상큼자몽티',
            cm_cost: '2500',
            cm_tone: '봄 브라이트',
            cm_class: 'shadow',
        });
        DB_COSM.insert({
            cm_name: '에뛰드_사랑은모래성',
            cm_cost: '2500',
            cm_tone: '봄 브라이트',
            cm_class: 'shadow',
        });
        DB_COSM.insert({
            cm_name: '에뛰드_카페라떼우유많이',
            cm_cost: '2500',
            cm_tone: '봄 브라이트',
            cm_class: 'shadow',
        });
        DB_COSM.insert({
            cm_name: '조르지오아르마니_립마에스트로401',
            cm_cost: '28900',
            cm_tone: '봄 브라이트',
            cm_class: 'lip',
        });
        DB_COSM.insert({
            cm_name: '캔메이크_파우더치크 23호',
            cm_cost: '',
            cm_tone: '봄 브라이트',
            cm_class: 'blusher',
        });
        DB_COSM.insert({
            cm_name: '캔메이트_파우더치크 25호',
            cm_cost: '8000',
            cm_tone: '봄 브라이트',
            cm_class: 'blusher',
        });
        DB_COSM.insert({
            cm_name: '크리니크_멜론팝',
            cm_cost: '27000',
            cm_tone: '봄 브라이트',
            cm_class: 'blusher',
        });
        DB_COSM.insert({
            cm_name: '크리니크_진저팝',
            cm_cost: '27000',
            cm_tone: '봄 브라이트',
            cm_class: 'blusher',
        });
        DB_COSM.insert({
            cm_name: '페리페라_심장폭격',
            cm_cost: '9000',
            cm_tone: '봄 브라이트',
            cm_class: 'lip',
        });
        DB_COSM.insert({
            cm_name: '나스_드래곤걸',
            cm_cost: '19000',
            cm_tone: '봄 브라이트',
            cm_class: 'lip',
        });
        DB_COSM.insert({
            cm_name: '맥_루비우',
            cm_cost: '25000',
            cm_tone: '봄 브라이트',
            cm_class: 'lip',
        });
        DB_COSM.insert({
            cm_name: '페리페라_품절대란',
            cm_cost: '7000',
            cm_tone: '봄 브라이트',
            cm_class: 'lip',
        });
        DB_COSM.insert({
            cm_name: '로레알_링컨로즈',
            cm_cost: '17000',
            cm_tone: '봄 브라이트',
            cm_class: 'lip',
        });
        DB_COSM.insert({
            cm_name: '더샘_망고피치',
            cm_cost: '5000',
            cm_tone: '봄 브라이트',
            cm_class: 'blusher',
        });
        DB_COSM.insert({
            cm_name: '나스_섹스어필',
            cm_cost: '25000',
            cm_tone: '봄 브라이트',
            cm_class: 'blusher',
        });
        DB_COSM.insert({
            cm_name: '바비브라운_토스트',
            cm_cost: '26000',
            cm_tone: '봄 브라이트',
            cm_class: 'shadow',
        });
        DB_COSM.insert({
            cm_name: '아리따움_산타베이비',
            cm_cost: '11000',
            cm_tone: '봄 브라이트',
            cm_class: 'shadow',
        });
        DB_COSM.insert({
            cm_name: '베네피트_차차틴트',
            cm_cost: '24000',
            cm_tone: '봄 브라이트',
            cm_class: 'lip',
        });
        DB_COSM.insert({
            cm_name: '캔메이크_오렌지 마멀레이드',
            cm_cost: '16000',
            cm_tone: '봄 브라이트',
            cm_class: 'blusher',
        });


        //여름 라이트
        DB_COSM.insert({
            cm_name: '바비브라운_브라이트라즈베리',
            cm_cost: '27000',
            cm_tone: '여름 라이트',
            cm_class: 'lip',
        });
        DB_COSM.insert({
            cm_name: '크리니크_피그팝',
            cm_cost: '25000',
            cm_tone: '여름 라이트',
            cm_class: 'blusher',
        });
        DB_COSM.insert({
            cm_name: '클리오_시크브론즈',
            cm_cost: '15800',
            cm_tone: '여름 라이트',
            cm_class: 'shadow',
        });
        DB_COSM.insert({
            cm_name: '클리오_핀라이트',
            cm_cost: '9000',
            cm_tone: '여름 라이트',
            cm_class: 'shadow',
        });
        DB_COSM.insert({
            cm_name: '디올_157 magnify',
            cm_cost: '72000',
            cm_tone: '여름 라이트',
            cm_class: 'shadow',
        });
        DB_COSM.insert({
            cm_name: '디올_757 dream',
            cm_cost: '85000',
            cm_tone: '여름 라이트',
            cm_class: 'shadow',
        });
        DB_COSM.insert({
            cm_name: '디올_립글로우 퍼플',
            cm_cost: '37000',
            cm_tone: '여름 라이트',
            cm_class: 'lip',
        });
        DB_COSM.insert({
            cm_name: '에뛰드하우스_자색고구마라떼',
            cm_cost: '2500',
            cm_tone: '여름 라이트',
            cm_class: 'shadow',
        });
        DB_COSM.insert({
            cm_name: '루나_프라임',
            cm_cost: '9000',
            cm_tone: '여름 라이트',
            cm_class: 'shadow',
        });
        DB_COSM.insert({
            cm_name: '마크제이콥스_606일렉트릭로즈',
            cm_cost: '45000',
            cm_tone: '여름 라이트',
            cm_class: 'lip',
        });
        DB_COSM.insert({
            cm_name: '미샤_핑크벨',
            cm_cost: '7200',
            cm_tone: '여름 라이트',
            cm_class: 'shadow',
        });
        DB_COSM.insert({
            cm_name: '슈에무라_PK356',
            cm_cost: '39000',
            cm_tone: '여름 라이트',
            cm_class: 'lip',
        });
        DB_COSM.insert({
            cm_name: '입생로랑_루쥬 볼립떼 샤인49',
            cm_cost: '36000',
            cm_tone: '여름 라이트',
            cm_class: 'lip',
        });
        DB_COSM.insert({
            cm_name: '입생로랑_루쥬 볼립떼 샤인50',
            cm_cost: '36000',
            cm_tone: '여름 라이트',
            cm_class: 'lip',
        });
        DB_COSM.insert({
            cm_name: '베네피트_포지틴트',
            cm_cost: '22000',
            cm_tone: '여름 라이트',
            cm_class: 'lip',
        });
        DB_COSM.insert({
            cm_name: '미샤_페어리드림',
            cm_cost: '14800',
            cm_tone: '여름 라이트',
            cm_class: 'lip',
        });
        DB_COSM.insert({
            cm_name: '맥_풀 오브 조이',
            cm_cost: '30000',
            cm_tone: '여름 라이트',
            cm_class: 'blusher',
        });
        DB_COSM.insert({
            cm_name: '루나_스틱블러셔 4호',
            cm_cost: '9000',
            cm_tone: '여름 라이트',
            cm_class: 'blusher',
        });
        DB_COSM.insert({
            cm_name: '랑콤_이프노즈 아이섀도우 D02',
            cm_cost: '118000',
            cm_tone: '여름 라이트',
            cm_class: 'shadow',
        });
        DB_COSM.insert({
            cm_name: '에뛰드_자색고구마라떼',
            cm_cost: '2500',
            cm_tone: '여름 라이트',
            cm_class: 'shadow',
        });
        DB_COSM.insert({
            cm_name: '크리니크_플럼팝',
            cm_cost: '25000',
            cm_tone: '여름 라이트',
            cm_class: 'blusher',
        });


        //여름뮤트
        DB_COSM.insert({
            cm_name: '어퓨_VL01',
            cm_cost: '4400',
            cm_tone: '여름 뮤트',
            cm_class: 'blusher',
        });
        DB_COSM.insert({
            cm_name: '아리따움_모노파탈',
            cm_cost: '3500',
            cm_tone: '여름 뮤트',
            cm_class: 'shadow',
        });
        DB_COSM.insert({
            cm_name: '아리따움_얼쓰',
            cm_cost: '3500',
            cm_tone: '여름 뮤트',
            cm_class: 'shadow',
        });
        DB_COSM.insert({
            cm_name: '바비브라운_앤티크로즈',
            cm_cost: '38000',
            cm_tone: '여름 뮤트',
            cm_class: 'shadow',
        });
        DB_COSM.insert({
            cm_name: '크리니크_헤더팝',
            cm_cost: '25000',
            cm_tone: '여름 뮤트',
            cm_class: 'blusher',
        });
        DB_COSM.insert({
            cm_name: '클리오_매드매트립스틱 러셋로즈',
            cm_cost: '9500',
            cm_tone: '여름 뮤트',
            cm_class: 'lip',
        });
        DB_COSM.insert({
            cm_name: '디올_프리미어',
            cm_cost: '40000',
            cm_tone: '여름 뮤트',
            cm_class: 'lip',
        });
        DB_COSM.insert({
            cm_name: '디올_351 당상트',
            cm_cost: '40000',
            cm_tone: '여름 뮤트',
            cm_class: 'lip',
        });
        DB_COSM.insert({
            cm_name: '마몽드_벨벳로즈',
            cm_cost: '6500',
            cm_tone: '여름 뮤트',
            cm_class: 'lip',
        });
        DB_COSM.insert({
            cm_name: '나스_SIN',
            cm_cost: '34000',
            cm_tone: '여름 뮤트',
            cm_class: 'blusher',
        });
        DB_COSM.insert({
            cm_name: '나스_임패션드',
            cm_cost: '34000',
            cm_tone: '여름 뮤트',
            cm_class: 'blusher',
        });
        DB_COSM.insert({
            cm_name: '나스_푸쉬컨트롤',
            cm_cost: '27000',
            cm_tone: '여름 뮤트',
            cm_class: 'lip',
        });
        DB_COSM.insert({
            cm_name: '더샘_샘물블러셔 로즈핑크',
            cm_cost: '4900',
            cm_tone: '여름 뮤트',
            cm_class: 'blusher',
        });
        DB_COSM.insert({
            cm_name: '어반디케이_naked3',
            cm_cost: '42000',
            cm_tone: '여름 뮤트',
            cm_class: 'shadow',
        });
        DB_COSM.insert({
            cm_name: '나스_뤽상부르',
            cm_cost: '27000',
            cm_tone: '여름 뮤트',
            cm_class: 'lip',
        });
        DB_COSM.insert({
            cm_name: '나스_스키압',
            cm_cost: '29000',
            cm_tone: '여름 뮤트',
            cm_class: 'lip',
        });
        DB_COSM.insert({
            cm_name: '조르지오 아르마니_504호',
            cm_cost: '30000',
            cm_tone: '여름 뮤트',
            cm_class: 'lip',
        });
        DB_COSM.insert({
            cm_name: '나스_게이어티',
            cm_cost: '26000',
            cm_tone: '여름 뮤트',
            cm_class: 'blusher',
        });
        DB_COSM.insert({
            cm_name: '롬앤_썸머로즈',
            cm_cost: '8900',
            cm_tone: '여름 뮤트',
            cm_class: 'lip',
        });
        DB_COSM.insert({
            cm_name: '랑콤_압솔뤼루즈 264',
            cm_cost: '37000',
            cm_tone: '여름 뮤트',
            cm_class: 'lip',
        });
        DB_COSM.insert({
            cm_name: '나스_임패션드',
            cm_cost: '34000',
            cm_tone: '여름 뮤트',
            cm_class: 'blusher',
        });
        DB_COSM.insert({
            cm_name: '미샤_빈티지로브',
            cm_cost: '4800',
            cm_tone: '여름 뮤트',
            cm_class: 'blusher',
        });


        //가을 뮤트
        DB_COSM.insert({
            cm_name: '3ce_무드레시피 팔레트 플롯트위스트',
            cm_cost: '30000',
            cm_tone: '가을 뮤트',
            cm_class: 'shadow',
        });
        DB_COSM.insert({
            cm_name: '베네피트_코랄리스타',
            cm_cost: '34000',
            cm_tone: '가을 뮤트',
            cm_class: 'blusher',
        });
        DB_COSM.insert({
            cm_name: '베네피트_단델리온',
            cm_cost: '34000',
            cm_tone: '가을 뮤트',
            cm_class: 'blusher',
        });
        DB_COSM.insert({
            cm_name: '베네피트_슈가밤',
            cm_cost: '34000',
            cm_tone: '가을 뮤트',
            cm_class: 'blusher',
        });
        DB_COSM.insert({
            cm_name: '바비브라운_핑크팝',
            cm_cost: '42000',
            cm_tone: '가을 뮤트',
            cm_class: 'lip',
        });
        DB_COSM.insert({
            cm_name: '샤넬_440 아서',
            cm_cost: '39000',
            cm_tone: '가을 뮤트',
            cm_class: 'lip',
        });
        DB_COSM.insert({
            cm_name: '크리니크_누드팝',
            cm_cost: '25000',
            cm_tone: '가을 뮤트',
            cm_class: 'blusher',
        });
        DB_COSM.insert({
            cm_name: '크리니크_피그팝',
            cm_cost: '25000',
            cm_tone: '가을 뮤트',
            cm_class: 'blusher',
        });
        DB_COSM.insert({
            cm_name: '에스쁘아_아몬드라무르',
            cm_cost: '9000',
            cm_tone: '가을 뮤트',
            cm_class: 'shadow',
        });
        DB_COSM.insert({
            cm_name: '에뛰드하우스_카라멜라떼',
            cm_cost: '2500',
            cm_tone: '가을 뮤트',
            cm_class: 'shadow',
        });
        DB_COSM.insert({
            cm_name: '맥_허니러스트',
            cm_cost: '23000',
            cm_tone: '가을 뮤트',
            cm_class: 'shadow',
        });
        DB_COSM.insert({
            cm_name: '맥_런웨이히트',
            cm_cost: '26000',
            cm_tone: '가을 뮤트',
            cm_class: 'lip',
        });
        DB_COSM.insert({
            cm_name: '맥_베가스볼트',
            cm_cost: '26000',
            cm_tone: '가을 뮤트',
            cm_class: 'lip',
        });
        DB_COSM.insert({
            cm_name: '미샤_이탈프리즘22 메리문',
            cm_cost: '7800',
            cm_tone: '가을 뮤트',
            cm_class: 'shadow',
        });
        DB_COSM.insert({
            cm_name: '나스_돌체비타',
            cm_cost: '27000',
            cm_tone: '가을 뮤트',
            cm_class: 'lip',
        });
        DB_COSM.insert({
            cm_name: '입생로랑_베르니 아 레브르 12',
            cm_cost: '35900',
            cm_tone: '가을 뮤트',
            cm_class: 'lip',
        });
        DB_COSM.insert({
            cm_name: '입생로랑_베르니 아 레브르 비닐 407',
            cm_cost: '38000',
            cm_tone: '가을 뮤트',
            cm_class: 'lip',
        });
        DB_COSM.insert({
            cm_name: '입생로랑_베르니 아 레브르 비닐 412',
            cm_cost: '38000',
            cm_tone: '가을 뮤트',
            cm_class: 'lip',
        });
        DB_COSM.insert({
            cm_name: 'VDL_립플루이드 벨벳 601',
            cm_cost: '19800',
            cm_tone: '가을 뮤트',
            cm_class: 'lip',
        });
        DB_COSM.insert({
            cm_name: '맥_모카',
            cm_cost: '25000',
            cm_tone: '가을 뮤트',
            cm_class: 'lip',
        });
        DB_COSM.insert({
            cm_name: '바비브라운_프레쉬멜론',
            cm_cost: '29000',
            cm_tone: '가을 뮤트',
            cm_class: 'blusher',
        });
        DB_COSM.insert({
            cm_name: '베네피트_록카튜어',
            cm_cost: '32000',
            cm_tone: '가을 뮤트',
            cm_class: 'blusher',
        });
        DB_COSM.insert({
            cm_name: '에뛰드하우스_시럽빼고테이크아웃',
            cm_cost: '2500',
            cm_tone: '가을 뮤트',
            cm_class: 'shadow',
        });
        DB_COSM.insert({
            cm_name: '바비브라운_엔티크로즈',
            cm_cost: '38000',
            cm_tone: '가을 뮤트',
            cm_class: 'shadow',
        });


        //가을 딥
        DB_COSM.insert({
            cm_name: '나스_딥쓰롯',
            cm_cost: '31000',
            cm_tone: '가을 딥',
            cm_class: 'blusher',
        });
        DB_COSM.insert({
            cm_name: '나스_오르가즘',
            cm_cost: '31000',
            cm_tone: '가을 딥',
            cm_class: 'blusher',
        });
        DB_COSM.insert({
            cm_name: '나스_토리드',
            cm_cost: '31000',
            cm_tone: '가을 딥',
            cm_class: 'blusher',
        });
        DB_COSM.insert({
            cm_name: '롬앤_올댓재즈',
            cm_cost: '8900',
            cm_tone: '가을 딥',
            cm_class: 'lip',
        });
        DB_COSM.insert({
            cm_name: '마몽드_23 브릭로즈',
            cm_cost: '6800',
            cm_tone: '가을 딥',
            cm_class: 'lip',
        });
        DB_COSM.insert({
            cm_name: '마죠리카_주얼링아이즈 BR792',
            cm_cost: '17000',
            cm_tone: '가을 딥',
            cm_class: 'shadow',
        });
        DB_COSM.insert({
            cm_name: '맥_소바',
            cm_cost: '22000',
            cm_tone: '가을 딥',
            cm_class: 'shadow',
        });
        DB_COSM.insert({
            cm_name: '맥_칠리',
            cm_cost: '26000',
            cm_tone: '가을 딥',
            cm_class: 'lip',
        });
        DB_COSM.insert({
            cm_name: '맥_코크니',
            cm_cost: '26000',
            cm_tone: '가을 딥',
            cm_class: 'lip',
        });
        DB_COSM.insert({
            cm_name: '미샤_M매트 립루즈 루비스톤',
            cm_cost: '12000',
            cm_tone: '가을 딥',
            cm_class: 'lip',
        });
        DB_COSM.insert({
            cm_name: '세잔느_투컬러 아이섀도우 12호 핑크브라운',
            cm_cost: '9000',
            cm_tone: '가을 딥',
            cm_class: 'shadow',
        });
        DB_COSM.insert({
            cm_name: '스킨푸드_생과일 립앤치크 4호 무화과',
            cm_cost: '9000',
            cm_tone: '가을 딥',
            cm_class: 'blusher',
        });
        DB_COSM.insert({
            cm_name: '스킨푸드_생과일 착즙블러셔 3호 멜로우라즈베리',
            cm_cost: '9000',
            cm_tone: '가을 딥',
            cm_class: 'blusher',
        });
        DB_COSM.insert({
            cm_name: '아리따움_드레스코드',
            cm_cost: '3000',
            cm_tone: '가을 딥',
            cm_class: 'shadow',
        });
        DB_COSM.insert({
            cm_name: '아리따움_샤인픽스아이즈 9호 산타베이비',
            cm_cost: '10000',
            cm_tone: '가을 딥',
            cm_class: 'shadow',
        });
        DB_COSM.insert({
            cm_name: '에뛰드_달달한대추차',
            cm_cost: '2500',
            cm_tone: '가을 딥',
            cm_class: 'shadow',
        });
        DB_COSM.insert({
            cm_name: '에뛰드_시럽빼고테이크아웃',
            cm_cost: '2500',
            cm_tone: '가을 딥',
            cm_class: 'shadow',
        });
        DB_COSM.insert({
            cm_name: '에뛰드_카페라떼',
            cm_cost: '2500',
            cm_tone: '가을 딥',
            cm_class: 'shadow',
        });
        DB_COSM.insert({
            cm_name: '에뛰드_BR401 갈팡질팡레드',
            cm_cost: '7000',
            cm_tone: '가을 딥',
              cm_class: 'lip',
        });
        DB_COSM.insert({
            cm_name: '조르지오아르마니_립 마그넷 프리즈 406호 칠링핑크',
            cm_cost: '29000',
            cm_tone: '가을 딥',
            cm_class: 'lip',
        });
        DB_COSM.insert({
            cm_name: '질스튜어트_믹스블러쉬 컴팩트_ 2호 프레쉬 애프리콧',
            cm_cost: '50000',
            cm_tone: '가을 딥',
            cm_class: 'blusher',
        });
        DB_COSM.insert({
            cm_name: '캔메이크_글로우플로어치크 03 오렌지플라워',
            cm_cost: '11200',
            cm_tone: '가을 딥',
            cm_class: 'blusher',
        });
        DB_COSM.insert({
            cm_name: '크리니크_누드팝',
            cm_cost: '30000',
            cm_tone: '가을 딥',
            cm_class: 'blusher',
        });
        DB_COSM.insert({
            cm_name: '투페이스드_Love Flush Long-Lasting 16 Hour Blush_I will always love you',
            cm_cost: '38000',
            cm_tone: '가을 딥',
            cm_class: 'blusher',
        });
        DB_COSM.insert({
            cm_name: '맥_레이디데인저',
            cm_cost: '26000',
            cm_tone: '가을 딥',
            cm_class: 'lip',
        });
        DB_COSM.insert({
            cm_name: '나스_아모르',
            cm_cost: '36000',
            cm_tone: '가을 딥',
            cm_class: 'blusher',
        });
        DB_COSM.insert({
            cm_name: '베네피트_단델리온',
            cm_cost: '21000',
            cm_tone: '가을 딥',
            cm_class: 'blusher',
        });
        DB_COSM.insert({
            cm_name: '바비브라운_토스트',
            cm_cost: '37000',
            cm_tone: '가을 딥',
            cm_class: 'shadow',
        });
        DB_COSM.insert({
            cm_name: '맥_코크니',
            cm_cost: '26000',
            cm_tone: '가을 딥',
            cm_class: 'lip',
        });
        DB_COSM.insert({
            cm_name: '나스_오르가즘',
            cm_cost: '27000',
            cm_tone: '가을 딥',
            cm_class: 'lip',
        });
        DB_COSM.insert({
            cm_name: '나스_딥쓰롯',
            cm_cost: '27000',
            cm_tone: '가을 딥',
            cm_class: 'blusher',
        });
        DB_COSM.insert({
            cm_name: '에뛰드하우스_시럽빼고테이크아웃',
            cm_cost: '25000',
            cm_tone: '가을 딥',
            cm_class: 'shadow',
        });
        DB_COSM.insert({
            cm_name: '로라메르시에_진저',
            cm_cost: '34000',
            cm_tone: '가을 딥',
            cm_class: 'shadow',
        });

        //겨울 브라이트
        DB_COSM.insert({
            cm_name: '3ce_eye switch stuck',
            cm_cost: '15000',
            cm_tone: '겨울 브라이트',
            cm_class: 'shadow',
        });
        DB_COSM.insert({
            cm_name: '나스_나이아가라',
            cm_cost: '31000',
            cm_tone: '겨울 브라이트',
            cm_class: 'lip',
        });
        DB_COSM.insert({
            cm_name: '나스_드래곤걸',
            cm_cost: '27000',
            cm_tone: '겨울 브라이트',
            cm_class: 'lip',
        });
        DB_COSM.insert({
            cm_name: '더샘_샘물스마일 블러셔 망고피치',
            cm_cost: '4000',
            cm_tone: '겨울 브라이트',
            cm_class: 'lip',
        });
        DB_COSM.insert({
            cm_name: '로라메르시에_매트 아이컬러 캐시미어',
            cm_cost: '35000',
            cm_tone: '겨울 브라이트',
            cm_class: 'shadow',
        });
        DB_COSM.insert({
            cm_name: '로라메르시에_새틴 아이컬러 구아바',
            cm_cost: '31000',
            cm_tone: '겨울 브라이트',
            cm_class: 'shadow',
        });
        DB_COSM.insert({
            cm_name: '맥_루비우',
            cm_cost: '26000',
            cm_tone: '겨울 브라이트',
            cm_class: 'lip',
        });
        DB_COSM.insert({
            cm_name: '미샤_듀이 글로시 아이즈 그레이프캔디',
            cm_cost: '3400',
            cm_tone: '겨울 브라이트',
            cm_class: 'shadow',
        });
        DB_COSM.insert({
            cm_name: '베네피트_록카튜어',
            cm_cost: '32000',
            cm_tone: '겨울 브라이트',
            cm_class: 'shadow',
        });
        DB_COSM.insert({
            cm_name: '샤넬_루쥬 크레용 드 꿀뢰르 6호',
            cm_cost: '47500',
            cm_tone: '겨울 브라이트',
            cm_class: 'lip',
        });
        DB_COSM.insert({
            cm_name: '웨이크메이크_컬러스타일러 싱글치크 VL01',
            cm_cost: '11000',
            cm_tone: '겨울 브라이트',
            cm_class: 'blusher',
        });
        DB_COSM.insert({
            cm_name: '크리니크_플럼팝',
            cm_cost: '24000',
            cm_tone: '겨울 브라이트',
            cm_class: 'blusher',
        });
        DB_COSM.insert({
            cm_name: '나스_위',
            cm_cost: '27000',
            cm_tone: '겨울 브라이트',
            cm_class: 'lip',
        });
        DB_COSM.insert({
            cm_name: '디올_턴미디올',
            cm_cost: '46000',
            cm_tone: '겨울 브라이트',
            cm_class: 'lip',
        });
        DB_COSM.insert({
            cm_name: '조르지오아르마니_립마에스트로400',
            cm_cost: '30000',
            cm_tone: '겨울 브라이트',
            cm_class: 'lip',
        });
        DB_COSM.insert({
            cm_name: '맥_플랫아웃패뷸러스',
            cm_cost: '26000',
            cm_tone: '겨울 브라이트',
            cm_class: 'lip',
        });
        DB_COSM.insert({
            cm_name: '샤넬_루쥬알뤼르93',
            cm_cost: '40000',
            cm_tone: '겨울 브라이트',
            cm_class: 'lip',
        });
        DB_COSM.insert({
            cm_name: '나스_게이어티',
            cm_cost: '27000',
            cm_tone: '겨울 브라이트',
            cm_class: 'blusher',
        });
        DB_COSM.insert({
            cm_name: '나스_드래곤걸',
            cm_cost: '27000',
            cm_tone: '겨울 브라이트',
            cm_class: 'lip',
        });


        //겨울 딥
        DB_COSM.insert({
            cm_name: '나스_섹스어필',
            cm_cost: '26000',
            cm_tone: '겨울 딥',
            cm_class: 'shadow',
        });
        DB_COSM.insert({
            cm_name: '나스_드래곤걸',
            cm_cost: '26000',
            cm_tone: '겨울 딥',
            cm_class: 'lip',
        });
        DB_COSM.insert({
            cm_name: '마몽드_스틱섀도우 크리미 아이컬러밤 2호 써니글로우',
            cm_cost: '4400',
            cm_tone: '겨울 딥',
            cm_class: 'shadow',
        });
        DB_COSM.insert({
            cm_name: '맥_디바',
            cm_cost: '26000',
            cm_tone: '겨울 딥',
            cm_class: 'lip',
        });
        DB_COSM.insert({
            cm_name: '베네피트_차차틴트',
            cm_cost: '24000',
            cm_tone: '겨울 딥',
            cm_class: 'lip',
        });
        DB_COSM.insert({
            cm_name: '에뛰드_춤추는오로라',
            cm_cost: '3200',
            cm_tone: '겨울 딥',
            cm_class: 'shadow',
        });
        DB_COSM.insert({
            cm_name: '에뛰드_피치라떼',
            cm_cost: '2500',
            cm_tone: '겨울 딥',
            cm_class: 'shadow',
        });
        DB_COSM.insert({
            cm_name: '입생로랑_루쥬 볼립떼 샤인 19호',
            cm_cost: '34000',
            cm_tone: '겨울 딥',
            cm_class: 'lip',
        });
        DB_COSM.insert({
            cm_name: '정샘물_에센셜 치크 블러셔 페일라벤더',
            cm_cost: '17000',
            cm_tone: '겨울 딥',
            cm_class: 'blusher',
        });
        DB_COSM.insert({
            cm_name: '크리니크_팬지팝',
            cm_cost: '22000',
            cm_tone: '겨울 딥',
            cm_class: 'blusher',
        });
        DB_COSM.insert({
            cm_name: '페리페라_맑게물든 리퀴드 치크 뽀오얀 타로밀크',
            cm_cost: '5900',
            cm_tone: '겨울 딥',
            cm_class: 'blusher',
        });
        DB_COSM.insert({
            cm_name: '맥_fog and mist',
            cm_cost: '51000',
            cm_tone: '겨울 딥',
            cm_class: 'shadow',
        });
        DB_COSM.insert({
            cm_name: '바비브라운_헤더',
            cm_cost: '33000',
            cm_tone: '겨울 딥',
            cm_class: 'shadow',
        });
        DB_COSM.insert({
            cm_name: '맥_디바',
            cm_cost: '26000',
            cm_tone: '겨울 딥',
            cm_class: 'lip',
        });
        DB_COSM.insert({
            cm_name: '루나솔_초콜릿아이즈',
            cm_cost: '40000',
            cm_tone: '겨울 딥',
            cm_class: 'shadow',
        });
    }
});

