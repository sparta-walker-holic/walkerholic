const cities = {
  강원도: [
    {
      city: '강릉시',
      lng: 128.878497222222,
      lat: 37.7491361111111,
    },
    {
      city: '동해시',
      lng: 129.116633333333,
      lat: 37.5219305555555,
    },
    {
      city: '삼척시',
      lng: 129.167488888888,
      lat: 37.4470861111111,
    },
    {
      city: '속초시',
      lng: 128.594166666666,
      lat: 38.204275,
    },
    {
      city: '원주시',
      lng: 127.922055555555,
      lat: 37.3390833333333,
    },
    {
      city: '춘천시',
      lng: 127.732311111111,
      lat: 37.8785416666666,
    },
    {
      city: '태백시',
      lng: 128.987997222222,
      lat: 37.1612277777777,
    },
  ],
  경기도: [
    {
      city: '고양시',
      lng: 126.777055555555,
      lat: 37.6559083333333,
    },
    {
      city: '과천시',
      lng: 126.9898,
      lat: 37.4263722222222,
    },
    {
      city: '광명시',
      lng: 126.866708333333,
      lat: 37.47575,
    },
    {
      city: '광주시',
      lng: 127.257786111111,
      lat: 37.4145055555555,
    },
    {
      city: '구리시',
      lng: 127.131863888888,
      lat: 37.591625,
    },
    {
      city: '군포시',
      lng: 126.9375,
      lat: 37.3586583333333,
    },
    {
      city: '김포시',
      lng: 126.717777777777,
      lat: 37.6124583333333,
    },
    {
      city: '남양주시',
      lng: 127.218633333333,
      lat: 37.6331777777777,
    },
    {
      city: '동두천시',
      lng: 127.062652777777,
      lat: 37.9009166666666,
    },
    {
      city: '부천시',
      lng: 126.766,
      lat: 37.5035917,
    },
    {
      city: '성남시',
      lng: 127.147719444444,
      lat: 37.4474916666666,
    },
    {
      city: '수원시',
      lng: 127.012222222222,
      lat: 37.3010111111111,
    },
    {
      city: '시흥시',
      lng: 126.805077777777,
      lat: 37.3773194444444,
    },
    {
      city: '안산시',
      lng: 126.846819444444,
      lat: 37.2985194444444,
    },
    {
      city: '안성시',
      lng: 127.281844444444,
      lat: 37.005175,
    },
    {
      city: '안양시',
      lng: 126.953355555555,
      lat: 37.3897,
    },
    {
      city: '양주시',
      lng: 127.047819444444,
      lat: 37.78245,
    },
    {
      city: '여주시',
      lng: 127.639622222222,
      lat: 37.2953583333333,
    },
    {
      city: '오산시',
      lng: 127.079641666666,
      lat: 37.1469138888888,
    },
    {
      city: '용인시',
      lng: 127.203844444444,
      lat: 37.2314777777777,
    },
    {
      city: '의왕시',
      lng: 126.970388888888,
      lat: 37.34195,
    },
    {
      city: '의정부시',
      lng: 127.035841666666,
      lat: 37.7352888888888,
    },
    {
      city: '이천시',
      lng: 127.443219444444,
      lat: 37.2754361111111,
    },
    {
      city: '파주시',
      lng: 126.781952777777,
      lat: 37.7570833333333,
    },
    {
      city: '평택시',
      lng: 127.114655555555,
      lat: 36.9894388888888,
    },
    {
      city: '포천시',
      lng: 127.202419444444,
      lat: 37.8921555555555,
    },
    {
      city: '하남시',
      lng: 127.217,
      lat: 37.5364972222222,
    },
    {
      city: '화성시',
      lng: 126.833530555555,
      lat: 37.1968166666666,
    },
  ],
  경상도: [
    {
      city: '거제시',
      lng: 128.623355555555,
      lat: 34.8773583333333,
    },
    {
      city: '경산시',
      lng: 128.743463888888,
      lat: 35.8220888888888,
    },
    {
      city: '경주시',
      lng: 129.227022222222,
      lat: 35.8531694444444,
    },
    {
      city: '구미시',
      lng: 128.346777777777,
      lat: 36.11655,
    },
    {
      city: '김천시',
      lng: 128.1158,
      lat: 36.1368972222222,
    },
    {
      city: '김해시',
      lng: 128.891666666666,
      lat: 35.2255055555555,
    },
    {
      city: '문경시',
      lng: 128.189019444444,
      lat: 36.5836305555555,
    },
    {
      city: '밀양시',
      lng: 128.748944444444,
      lat: 35.5007777777777,
    },
    {
      city: '사천시',
      lng: 128.066777777777,
      lat: 35.0002833333333,
    },
    {
      city: '상주시',
      lng: 128.161263888888,
      lat: 36.4079694444444,
    },
    {
      city: '안동시',
      lng: 128.731622222222,
      lat: 36.5654638888888,
    },
    {
      city: '양산시',
      lng: 129.039411111111,
      lat: 35.3319277777777,
    },
    {
      city: '영주시',
      lng: 128.626344444444,
      lat: 36.8029361111111,
    },
    {
      city: '영천시',
      lng: 128.940775,
      lat: 35.9700527777777,
    },
    {
      city: '진주시',
      lng: 128.109999999999,
      lat: 35.1770333333333,
    },
    {
      city: '창원시',
      lng: 128.6401544,
      lat: 35.2540033,
    },
    {
      city: '통영시',
      lng: 128.435277777777,
      lat: 34.8512583333333,
    },
    {
      city: '포항시',
      lng: 129.361666666666,
      lat: 36.0056861111111,
    },
  ],
  광주: [
    {
      city: '광산구',
      lng: 126.793668011574,
      lat: 35.1399583648888,
    },
    {
      city: '남구',
      lng: 126.902557242258,
      lat: 35.1330174880422,
    },
    {
      city: '동구',
      lng: 126.923090311574,
      lat: 35.1462777551683,
    },
    {
      city: '북구',
      lng: 126.901080587328,
      lat: 35.1812137957623,
    },
    {
      city: '서구',
      lng: 126.88950628089,
      lat: 35.1525164004977,
    },
  ],
  대구: [
    {
      city: '달서구',
      lng: 128.535063888888,
      lat: 35.8269277777777,
    },
    {
      city: '수성구',
      lng: 128.632866666666,
      lat: 35.8552083333333,
    },
    {
      city: '남구',
      lng: 128.597702040423,
      lat: 35.8462135079168,
    },
    {
      city: '달서구',
      lng: 128.532590453916,
      lat: 35.8299774381395,
    },
    {
      city: '달성군',
      lng: 128.431399499941,
      lat: 35.7747502893017,
    },
    {
      city: '동구',
      lng: 128.635558440423,
      lat: 35.8868272789712,
    },
    {
      city: '북구',
      lng: 128.582892353917,
      lat: 35.8858645969598,
    },
    {
      city: '서구',
      lng: 128.559160069259,
      lat: 35.8719405397309,
    },
    {
      city: '수성구',
      lng: 128.630701071107,
      lat: 35.858351478627,
    },
    {
      city: '중구',
      lng: 128.606174457614,
      lat: 35.8695272166858,
    },
  ],
  대전: [
    {
      city: '대덕구',
      lng: 127.417093340521,
      lat: 36.352183835655,
    },
    {
      city: '동구',
      lng: 127.454859584609,
      lat: 36.3120402777084,
    },
    {
      city: '서구',
      lng: 127.383415811453,
      lat: 36.3570729893642,
    },
    {
      city: '유성구',
      lng: 127.356136301599,
      lat: 36.3640558639158,
    },
    {
      city: '중구',
      lng: 127.421380984609,
      lat: 36.3258298947226,
    },
  ],
  부산: [
    {
      city: '강서구',
      lng: 128.982908333333,
      lat: 35.2091638888888,
    },
    {
      city: '금정구',
      lng: 129.094319444444,
      lat: 35.2400777777777,
    },
    {
      city: '남구',
      lng: 129.0865,
      lat: 35.1334083333333,
    },
    {
      city: '동구',
      lng: 129.059175,
      lat: 35.1358944444444,
    },
    {
      city: '동래구',
      lng: 129.085855555555,
      lat: 35.2018722222222,
    },
    {
      city: '부산진구',
      lng: 129.055319444444,
      lat: 35.1599527777777,
    },
    {
      city: '북구',
      lng: 128.992474999999,
      lat: 35.1941805555555,
    },
    {
      city: '사상구',
      lng: 128.993333333333,
      lat: 35.1494666666666,
    },
    {
      city: '사하구',
      lng: 128.977041666666,
      lat: 35.1014277777777,
    },
    {
      city: '서구',
      lng: 129.026377777777,
      lat: 35.0948361111111,
    },
    {
      city: '수영구',
      lng: 129.115375,
      lat: 35.1424666666666,
    },
    {
      city: '연제구',
      lng: 129.082075,
      lat: 35.1731861111111,
    },
    {
      city: '영도구',
      lng: 129.070186111111,
      lat: 35.0881166666666,
    },
    {
      city: '중구',
      lng: 129.034508333333,
      lat: 35.1032166666666,
    },
    {
      city: '해운대구',
      lng: 129.165808333333,
      lat: 35.1600194444444,
    },
    {
      city: '기장군',
      lng: 129.222287283017,
      lat: 35.2447754075554,
    },
  ],
  서울: [
    {
      city: '강남구',
      lng: 127.049555555555,
      lat: 37.514575,
    },
    {
      city: '강동구',
      lng: 127.125863888888,
      lat: 37.5273666666666,
    },
    {
      city: '강북구',
      lng: 127.027719444444,
      lat: 37.6369555555555,
    },
    {
      city: '강서구',
      lng: 126.851675,
      lat: 37.5481555555555,
    },
    {
      city: '관악구',
      lng: 126.953844444444,
      lat: 37.4753861111111,
    },
    {
      city: '광진구',
      lng: 127.084533333333,
      lat: 37.5357388888888,
    },
    {
      city: '구로구',
      lng: 126.889597222222,
      lat: 37.49265,
    },
    {
      city: '금천구',
      lng: 126.904197222222,
      lat: 37.4491083333333,
    },
    {
      city: '노원구',
      lng: 127.058388888888,
      lat: 37.6514611111111,
    },
    {
      city: '도봉구',
      lng: 127.049522222222,
      lat: 37.6658333333333,
    },
    {
      city: '동대문구',
      lng: 127.042141666666,
      lat: 37.571625,
    },
    {
      city: '동작구',
      lng: 126.941575,
      lat: 37.5096555555555,
    },
    {
      city: '마포구',
      lng: 126.910530555555,
      lat: 37.5607055555555,
    },
    {
      city: '서대문구',
      lng: 126.938897222222,
      lat: 37.5763666666666,
    },
    {
      city: '서초구',
      lng: 127.034811111111,
      lat: 37.4807861111111,
    },
    {
      city: '성동구',
      lng: 127.039,
      lat: 37.5606111111111,
    },
    {
      city: '성북구',
      lng: 127.020333333333,
      lat: 37.5863833333333,
    },
    {
      city: '송파구',
      lng: 127.107930555555,
      lat: 37.5117555555555,
    },
    {
      city: '양천구',
      lng: 126.868708333333,
      lat: 37.5142305555555,
    },
    {
      city: '영등포구',
      lng: 126.898341666666,
      lat: 37.5236111111111,
    },
    {
      city: '용산구',
      lng: 126.967522222222,
      lat: 37.5360944444444,
    },
    {
      city: '은평구',
      lng: 126.931241666666,
      lat: 37.5999694444444,
    },
    {
      city: '종로구',
      lng: 126.981641666666,
      lat: 37.5703777777777,
    },
    {
      city: '중구',
      lng: 126.999641666666,
      lat: 37.5610027777777,
    },
    {
      city: '중랑구',
      lng: 127.094777777777,
      lat: 37.6038055555555,
    },
  ],
  울산: [
    {
      city: '남구',
      lng: 129.330175357608,
      lat: 35.5440426532722,
    },
    {
      city: '동구',
      lng: 129.416691882745,
      lat: 35.5051699632486,
    },
    {
      city: '북구',
      lng: 129.361244971292,
      lat: 35.5827078312412,
    },
    {
      city: '울주군',
      lng: 129.242474811581,
      lat: 35.5223064790022,
    },
    {
      city: '중구',
      lng: 129.332816213431,
      lat: 35.5697122805921,
    },
  ],
  인천: [
    {
      city: '강화군',
      lng: 126.487841711623,
      lat: 37.7469290696865,
    },
    {
      city: '계양구',
      lng: 126.737743998125,
      lat: 37.5377072788857,
    },
    {
      city: '남구',
      lng: 126.650297226959,
      lat: 37.4636916934167,
    },
    {
      city: '남동구',
      lng: 126.730966889481,
      lat: 37.4497106167382,
    },
    {
      city: '동구',
      lng: 126.643244069288,
      lat: 37.47401607439,
    },
    {
      city: '미추홀구',
      lng: 126.650297226959,
      lat: 37.4636916934167,
    },
    {
      city: '부평구',
      lng: 126.721906848531,
      lat: 37.5078420372559,
    },
    {
      city: '서구',
      lng: 126.675961611619,
      lat: 37.5454637180429,
    },
    {
      city: '연수구',
      lng: 126.678265782781,
      lat: 37.4103812512024,
    },
    {
      city: '중구',
      lng: 126.621761699973,
      lat: 37.4738484305043,
    },
  ],
  전라도: [
    {
      city: '강진군',
      lng: 126.769197222222,
      lat: 34.6389111111111,
    },
    {
      city: '고창군',
      lng: 126.704108333333,
      lat: 35.4327388888888,
    },
    {
      city: '고흥군',
      lng: 127.287055555555,
      lat: 34.6080694444444,
    },
    {
      city: '곡성군',
      lng: 127.294108333333,
      lat: 35.2789555555555,
    },
    {
      city: '광양시',
      lng: 127.698177777777,
      lat: 34.9375361111111,
    },
    {
      city: '구례군',
      lng: 127.464933333333,
      lat: 35.1994583333333,
    },
    {
      city: '군산시',
      lng: 126.738844444444,
      lat: 35.9646416666666,
    },
    {
      city: '김제시',
      lng: 126.882752777777,
      lat: 35.8005749999999,
    },
    {
      city: '나주시',
      lng: 126.712866666666,
      lat: 35.0128388888888,
    },
    {
      city: '남원시',
      lng: 127.3925,
      lat: 35.4132555555555,
    },
    {
      city: '담양군',
      lng: 126.990163888888,
      lat: 35.318125,
    },
    {
      city: '목포시',
      lng: 126.394419444444,
      lat: 34.8087888888888,
    },
    {
      city: '무안군',
      lng: 126.4837,
      lat: 34.9873694444444,
    },
    {
      city: '무주군',
      lng: 127.662866666666,
      lat: 36.0038277777777,
    },
    {
      city: '보성군',
      lng: 127.082088888888,
      lat: 34.7683333333333,
    },
    {
      city: '부안군',
      lng: 126.735677777777,
      lat: 35.7285333333333,
    },
    {
      city: '순창군',
      lng: 127.139630555555,
      lat: 35.3713888888888,
    },
    {
      city: '순천시',
      lng: 127.489330555555,
      lat: 34.9476055555555,
    },
    {
      city: '신안군',
      lng: 126.381730555555,
      lat: 34.7898111111111,
    },
    {
      city: '여수시',
      lng: 127.664386111111,
      lat: 34.7573111111111,
    },
    {
      city: '영광군',
      lng: 126.514086111111,
      lat: 35.2741666666666,
    },
    {
      city: '영암군',
      lng: 126.698619444444,
      lat: 34.7969888888888,
    },
    {
      city: '완도군',
      lng: 126.757097222222,
      lat: 34.3078527777777,
    },
    {
      city: '완주군',
      lng: 127.149597222222,
      lat: 35.8429694444444,
    },
    {
      city: '익산시',
      lng: 126.959852777777,
      lat: 35.9452749999999,
    },
    {
      city: '임실군',
      lng: 127.284752777777,
      lat: 35.6080638888888,
    },
    {
      city: '장성군',
      lng: 126.786975,
      lat: 35.2988111111111,
    },
    {
      city: '장수군',
      lng: 127.5233,
      lat: 35.6442972222222,
    },
    {
      city: '장흥군',
      lng: 126.909108333333,
      lat: 34.678525,
    },
    {
      city: '전주시',
      lng: 127.121919444444,
      lat: 35.8091888888888,
    },
    {
      city: '정읍시',
      lng: 126.858111111111,
      lat: 35.5668722222222,
    },
    {
      city: '진도군',
      lng: 126.265544444444,
      lat: 34.48375,
    },
    {
      city: '진안군',
      lng: 127.426966666666,
      lat: 35.7887194444444,
    },
    {
      city: '함평군',
      lng: 126.518619444444,
      lat: 35.0627444444444,
    },
    {
      city: '해남군',
      lng: 126.601288888888,
      lat: 34.5704361111111,
    },
    {
      city: '화순군',
      lng: 126.988566666666,
      lat: 35.0614805555555,
    },
  ],
  제주: [
    {
      city: '서귀포시',
      lng: 126.512555555555,
      lat: 33.25235,
    },
    {
      city: '제주시',
      lng: 126.533208333333,
      lat: 33.4963111111111,
    },
  ],
  충청도: [
    {
      city: '계룡시',
      lng: 127.250930555555,
      lat: 36.2718361111111,
    },
    {
      city: '공주시',
      lng: 127.121119444444,
      lat: 36.4436138888888,
    },
    {
      city: '논산시',
      lng: 127.100911111111,
      lat: 36.1842027777777,
    },
    {
      city: '당진시',
      lng: 126.630252777777,
      lat: 36.89075,
    },
    {
      city: '보령시',
      lng: 126.614886111111,
      lat: 36.330575,
    },
    {
      city: '서산시',
      lng: 126.452163888888,
      lat: 36.7820972222222,
    },
    {
      city: '아산시',
      lng: 127.004641666666,
      lat: 36.7871055555555,
    },
    {
      city: '제천시',
      lng: 128.193152777777,
      lat: 37.1297694444444,
    },
    {
      city: '천안시',
      lng: 127.152466666666,
      lat: 36.804125,
    },
    {
      city: '청주시',
      lng: 127.511730555555,
      lat: 36.5839972222222,
    },
    {
      city: '충주시',
      lng: 127.928144444444,
      lat: 36.9881805555555,
    },
  ],
};

export default cities;
