Meteor.startup(function() {
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

  DB_TONE.remove({});
  DB_COSM.remove({});
  DB_TONE.insert({
    ton_tone : '봄 라이트',
    ton_feature : [
      '눈화장은 최대한 옅게, 투명한 느낌이 들 정도로',
      '저채도의 컬러가 잘 어울림! 고채도는 MISS',
      '립은 촉촉한 제형이 GOOD',
      '립 컬러는 고명도 저채도가 BEST',
      '블러셔도 최대한 자제하는게 좋은 편',
      '밝고 여리여리한 파스텔톤',
      '자연스러운 브라운 톤 헤어'
    ],
    ton_best : [
      '내추럴 브라운 컬러 헤어',
      '최대한 투명한 섀도우',
      '눈화장은 연할수록 좋음',
      '뷰러로 속눈썹 강조',
      '흰끼도는 연살굿빛 블러셔',
      '연핑크, 연한살구립',
      '촉촉한 제형의 립'
    ],
    ton_worst : [
      '블랙 컬러 헤어',
      '입자가 큰 글리터',
      '고채도의 컬러',
      '선명한 색감의 섀도우',
      '짙은 메이크업',
      '선명하고 진한 블러셔',
      '저명도의 컬러'
    ],
    ton_people : [
      '송혜교','윤아','김태희'
    ],
    ton_makeup : [
      '립은 은은하게!',
      '옅은 살굿빛과 핑크빛 컬러로 은은하게 빛나는 립 연출',
      '블러셔는 화사하게!',
      '흰끼 섞인 고명도 저채도 컬러로 화사하게',
      '섀도우는 최대한 생략!',
      '섀도우는 최대한 생략하되, 옅은 음영 섀도우로 포인트'
    ],
    ton_color : [

    ]
  });
  DB_TONE.insert({
    ton_tone : '봄 브라이트',
    ton_feature : [
        '립 컬러는 옅은 색보다 진한 색이 더 예쁨',
        '아이 메이크업은 옅을수록 GOOD! 스모키 메이크업이 안 받음',
        '상큼하고 생기발랄한 이미지',
        '말린장미(MLBB)립을 바르면 칙칙해짐',
        '헤어 컬러는 밝은 컬러보다 흑갈색처럼 짙은 컬러가 BEST!',
        '파스텔 톤 보다 쨍한 컬러의 비비드 톤이 더 잘 받음',
        '쌩얼에 립 하나 바르고 나가도 예쁨'
    ],
    ton_best : [
        '짙은 브라운 컬러 헤어',
        '옅은 발색, 쉬머펄 섀도우',
        '애교살을 펄로 강조',
        '뷰러로 속눈썹 강조',
        '쨍한 레드 컬러 립',
        '오렌지레드 립',
        '또렷하고 깔끔한 아이라인'
    ],
    ton_worst : [
        '블랙 컬러 헤어',
        '밝은 탈색 헤어',
        '스모키 메이크업',
        '선명한 색감의 섀도우',
        '누드 립컬러',
        '선명하고 진한 블러셔',
        '말린장미, MLBB 립 컬러'
    ],
    ton_people : [
      '아이유','수지','레드벨벳 조이'
    ],
    ton_makeup : [
        '립은 선명하게!',
        '비비드한 체리핑크, 오렌지레드 컬러로 립에 포인트 주기',
        '블러셔는 은은하게!',
        '옅은 코랄빛 블러셔로 은은하게 포인트',
        '섀도우는 회대한 생략!',
        '최대한 옅은 색감과 적은 펄로 깔끔하게',
        '선명하고 깔끔한 아이라인으로 아이 메이크업에 포인트'
    ],
    ton_color : [

    ]
  });
  DB_TONE.insert({
    ton_tone : '겨울 브라이트',
    ton_feature : [
        '쿨 베이스의 고채도 컬러',
        '겨울쿨톤 중 가장 화려한 타입! 선명한 컬러의 스타일링',
        '블랙 앤 화이트라면 실패는 없다!',
        '블랙 컬러의 새프한 아이라인',
        '속눈썹을 강조하는 메이크업이 잘 어울림',
        '화려한 핫핑크, 핏빛 버건디, 핏빛 레드',
        '딥블랙 컬러 헤어가 베스트'
    ],
    ton_best : [
        '블랙 컬러 헤어',
        '화려한 패턴 스타일링',
        '핑크레드, 푸시아, 퍼플',
        '과감한 트임 디자인',
        '코발드 블루',
        '선명한 컬러로 포인트',
        '블랙 아이라이너'
    ],
    ton_worst : [
        '오렌지 컬러 헤어',
        '저채도 컬러',
        '음영 메이크업',
        '웜 베이스의 컬러',
        '브라운 톤 헤어',
        '부드러운 그라데이션',
        '내추럴 메이크업'
    ],
    ton_people : [
        '리한나','김옥빈'
    ],
    ton_makeup : [
        '립은 포인트!',
        '립에 힘주기',
        '블러셔는 립과 밸런스!',
        '쿨 핑크 컬러로 포인트줘서 립과 밸런스 맞추기',
        '섀도우는 쿨 그레이!',
        '쿨그레이로 아이메이크업하기'
    ],
    ton_color : [
    ]
  });
  DB_TONE.insert({
    ton_tone : '겨울 딥',
    ton_feature : [
        '푸른기가 도는 흑발',
        '차도녀의 대명사! 오피스룩이 찰떡콩떡',
        '흰 티에 청바지로 꾸민 듯 안 꾸민 듯 매력 어필 가능',
        '블랙 컬러의 아이라이너는 필수템',
        '샤프한 느낌의 올 블랙 스타일링',
        '푸른 버건디, 딥한 핏빛 립',
        '흰끼가 섞인 컬러는 완전 MISS!'
    ],
    ton_best : [
        '딥블랙 컬러 헤어',
        '저채도 저명도 컬러',
        '플럽, 버건디레드, 다크레드',
        '블랙 앤 화이트 오피스룩',
        '눈이 시린 화이트',
        '올 블랙 패션',
        '또렷하고 깔끔한 아이라인'
    ],
    ton_worst : [
        '옐로 베이스 컬러',
        '회색끼 도는 뮤트 컬러',
        '보헤미안 스타일',
        '곡선적이고 따뜻한 스타일',
        '브라운 톤 헤어',
        '흰끼 섞인 파스텔톤',
        '코랄 컬러'
    ],
    ton_people : [
        '문근영','김혜수'
    ],
    ton_makeup : [
        '립은 짙게 포인트!',
        '블러셔는 생략!',
        '블러셔는 쿨하게 생략하는게 딥톤 메이크업 꿀팁',
        '섀도우는 쿨베이지!',
        '쿨한 베이지로 눈가에 포인트'
    ],
    ton_color : [
    ]
  });
  DB_TONE.insert({
    ton_tone : '가을 뮤트',
    ton_feature : [
        '정적이고 우아한 이미지',
        '베이지, 브라운 등 뉴트럴 톤이 찰떡궁합',
        '저채도 컬러는 완전 착붙 컬러!',
        '코랄, 그중에서도 오렌지빛 핑크립',
        '마호가니, 카멜, 카키, 브론즈 컬러와 함께라면 무적'
    ],
    ton_best : [
        '초코브라운, 애쉬 컬러 헤어',
        '차분한 그레이시 컬러',
        '은은한 브라운 음영 섀도우',
        '베이지, 오렌지 블러셔',
        '중채도 말린 장미 립',
        '매트한 느낌의 메이크업',
        '뉴트럴 컬러 위주'
    ],
    ton_worst : [
        '딥브라운, 블랙 컬러 헤어',
        '오렌지 계열, 금발 헤어',
        '딥 블랙 의상',
        '푸른기 베이스 레드립',
        '보라색이 감도는 핑크',
        '비비드 컬러',
        '스모키 메이크업'
    ],
    ton_people : [
        '윤승아','블랙핑크 제니','이성경'
    ],
    ton_makeup : [
        '립은 MLBB!',
        '말린 장미나 벽돌색으로 포인트',
        '블러셔는 은은하게!',
        '말린 장미꽃같은 컬러로 은은하게 물들이기',
        '섀도우는 카멜, 베이지로 음영',
        '베이지 컬러는 넓은 영역, 카멜 컬러는 포인트'
    ],
    ton_color : [
    ]
  });
  DB_TONE.insert({
    ton_tone : '가을 딥',
    ton_feature : [
        '채도가 생명인 톤! 저채도, 저명도 컬러',
        '짙은 메이크업을 완벽하게 소화',
        '눈화장으로 팔색조 매력 어필 가능',
        '음영을 강조하는 메이크업이 착붙!',
        '레드, 고동색, 커피색 같은 짙은 브리운 컬러로 포인트',
        '크림, 토마토레드, 짙은 그린으로 부드러운 분위기'
    ],
    ton_best : [
        '골든브라운, 오렌지 헤어',
        '굵은 컬 웨이브 스타일링',
        '핏빛 레드 립',
        '옐로베이스의 색조',
        '와인색 계열 의상',
        '호피, 레트로 등 큰 패턴',
        '베이지, 브라운, 버건디'
    ],
    ton_worst : [
        '쿨블랙 컬러 헤어',
        '높은 채도의 블루',
        '쨍한 화이트',
        '파스텔 톤, 쿨베이스 컬러',
        '소녀스러운 스타일링',
        '보라끼 섞인 핑크',
        '비비드 컬러'
    ],
    ton_people : [
        '박시연','이효리','김민희'
    ],
    ton_makeup : [
        '립은 혈색있는 컬러!',
        '혈색과 가까운 컬러로 포인트',
        '블러셔는 어두운 복숭아빛!',
        '딥한 복숭아 컬러로 컬러감 더하기',
        '섀도우는 글리터!',
        '카멜브라운 글리터와 매트 섀도우 잘 섞어서 사용'
    ],
    ton_color : [
    ]
  });
  DB_TONE.insert({
    ton_tone : '여름 라이트',
    ton_feature : [
        '고명도의 컬러가 잘 어울립',
        '딸기우유 컬러를 소화해내는 능력',
        '그레이시한 느낌의 파스텔 돈이 BEST',
        '직선적인 느낌의 헤어 쉐입과 버진모에 가까운 블랙 컬러',
        '옐로 베이스의 음영 섀도우는 MISS! 부어보일 수 있음',
        '아이 메이크업은 힘을 빼고, 블러셔와 립으로 은은한 포인트',
        '이온음료처럼 청순하고 맑은 이미지'
    ],
    ton_best : [
        '버진모에 가까운 헤어컬러',
        '딸기 우유 컬러립',
        '그레이시한 베이지로 음영',
        '고명도 핑크 적극 활용',
        '투명한 느낌의 베이스',
        '블러셔는 연보라, 페일핑크',
        '탁하면서도 연한 컬러',
        '무채색 적극 활용'
    ],
    ton_worst : [
        '옐로 베이스 헤어 컬러',
        '오렌지 브라운 섀도우',
        '모든 저명도 컬러',
        '음영 메이크업',
        '코랄, 오렌지 계열 블러셔',
        '진한 아이메이크업',
        '컬러감이 강한 립',
        '고채도의 쨍한 컬러'
    ],
    ton_people : [
        '서지혜', '다이아 정채연','트와이스 다현'
    ],
    ton_makeup : [
        '립은 최대한 옅게!',
        '고명도늬 흰끼 섞인 핑크로 물드는 느낌으로 연출하기',
        '블러셔는 은은하게!',
        '딸기우유, 연보라 컬러로 수채화처럼 발색하기',
        '아이 메이크업은 래시와 라인 강조!',
        '블랙 마스카라와 붓펜 아이라이너로 눈매 강조하기'
    ],
    ton_color : [
    ]
  });
  DB_TONE.insert({
    ton_tone : '여름 뮤트',
    ton_feature : [
        '푸른기 도는 MLBB가 찰떡콩떡!',
        '눈이 시린 화이트보다 그레이톤의 화이트나 크림 컬러가 GOOD',
        '어떤 색이든 회색을 끼얹으션 소화 가능',
        '그레이를 위한, 그레이에 의한 타입',
        '명도에 따라 베스트 컬러 개인차가 큰 편'
    ],
    ton_best : [
        '차분한 스타일링',
        '안개 낀 듯, 탁한 톤',
        '중채도, 중명도 컬러',
        '그레이시한 말린장미 립',
        '인디 핑크 블러셔',
        '명도에 따른 개인차가 있음',
        '레이어드 컷',
        '애쉬 베이지, 애쉬 바이올렛'
    ],
    ton_worst : [
        '컬러감이 강한 헤어',
        '화려한 패턴 의상',
        '고채도, 저채도 컬러',
        '딥브라운',
        '노란기 들어간 컬러',
        '비비드 컬러',
        '빽빽한 뱅 앞머리',
        '무거운 느낌의 생머리'
    ],
    ton_people : [
        '전지현','민효린','김고은'
    ],
    ton_makeup : [
        '립은 그레이시한 MLBB!',
        '그레이 한스푼 끼얹은 말린 장미 컬러로 분위기 살리기',
        '블러셔는 인디 핑크!',
        '인디 핑크 블러셔로 신비롭고 차부한 연출',
        '섀도우는 그레이 베이지로 삼각존 채우기!',
        '그레이 베이지 컬러 섀도우로 삼각존을 채워 가볍게 눈매 교정'
    ],
    ton_color : [
    ]
  });

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

});








