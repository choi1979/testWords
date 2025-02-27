var middleVoca = (function(){
    // 카운트 상태를 유지하기 위한 자유 변수이다.
    var counter = 0;
    var word = ['deserve','survive','create','describe','blame','compare','examine','select','hesitate','declare','pretend','struggle','explore','slip','astonish','disappoint','attract','celebrate','explode','include','exclude','protect','introduce','produce','chase','invade','scratch','crash','stare','scare','grab','gaze','guard','discuss','shrug','sniff','scream','rid','surround','affect','carve','invent','search','abuse','owe','bless','graduate','replace','collect','arrest','prove','yell','leak','behave','wrap','locate','charge','review','refuse','complain','warn','bend','suffer','whisper','prepare','roar','float','drag','overhear','slide','suck','bother','treat','destroy','accept','depend','nod','remove','beat','clap','feed','obtain','drown','remind','occur','ache','repeat','sigh','pray','follow','hate','frighten','shout','mention','waste','borrow','complete','earn','exist','boast','culture','experience','education','symbol','effect','liberty','affair','comfort','tradition','source','revolution','pollution','system','triumph','respect','communication','foundation','glory','situation','competition','effort','section','solution','honor','unity','population','direction','dialog','republic','method','increase','decrease','amount','prairie','ancestor','voyage','sculpture','sculptor','instrument','activity','fund','accident','adventure','view','superstition','habit','wealth','treasure','universe','adult','feast','resource','ruin','monument','information','appetite','unification','mystery','wage','thermometer','burden','series','appointment','clue','debt','hydrogen','oxygen','control','uniform','design','damage','custom','traffic','oath','sophomore','temperature','limit','statue','furniture','parade','public','pilgrim','greeting','language','opinion','athlete','supply','surface','electricity','spirit','purpose','passion','project','government','interest','funeral','senior','junior','democracy','general','admiral','edge','biology','danger','advice','mammal','grade','pause','pronunciation','stress','contest','horizon','principal','trouble','scar','balance','proverb','individual','character','environment','victory','talent','semester','election','inning','hollow','virtue','cemetery','relay','exchange','merchant','saying','refrigerator','crack','judge','slave','settler','fare','gesture','planet','type','secretary','devil','scholar','pardon','kindergarten','detective','license','palace','spade','square','fountainpen','harvest','tool','sword','magazine','stadium','care','beauty','museum','congratulation','memory','delight','passenger','skill','journey','ceremony','hobby','president','address','continent','mankind','giant','site','marble','stem','torch','composer','trick','flight','castle','envelope','pal','vacation','desert','event','theater','stage','error','area','base','basement','evil','atom','poet','mind','climate','suburb','throat','voice','valley','Puritan','feather','amateur','nation','puzzle','rear','battle','riddle','laundry','shower','navy','Mars','gallery','guest','folk','problem','jewel','garage','fault','lantern','import','export','angle','petal','stripe','pulse','powder','flood','bush','branch','hero','heaven','exit','beast','century','coeducation','twin','wound','metal','insect','track','excellent','competent','religious','worth','favorite','upset','entire','primary','similar','precious','normal','relative','popular','compulsory','curious','independent','intimate','delicious','valuable','grave','elementary','crazy','contrary','regular','social','straight','noble','anxious','international','greedy','stupid','silly','lonely','dirty','various','private','vain','sore','fierce','firm','solar','smart','single','diligent','serious','fresh','empty','mild','amazing','charming','boring','patient','huge','tiny','tough','foreign','modern','expensive','harmful','calm','special','familiar','nervous','brave','steady','except','hardly','otherwise','however','together','ahead','instead','quite','almost','forward','since','once','whether','unless','though','while','usually','along','without','behind','beyond','below','toward','explain','wear','amuse','suppose','leap','bury','engage','sow','lift','bow','rub','bite','vote','hop','imagine','allow','offer','wish','obey','dig','choose','receive','bet','hurt','burn','sink','decide','beg','reply','tear','flow','remember','appear','breathe','whistle','continue','check','sail','wake','agree','hang','record','drop','climb','add','shine','invite','join','hide','bring','wink','roll','pull','push','guess','belong','happen','pick','shake','fill','fight','fear','carry','dive','win','ride','need','build','hurry','return','believe','surprise','gather','throw','smell','spend','pitch','pop','excuse','hit','tie','stay','enjoy','close','arrive','travel','worry','marry','expect','understand','dye','smoke','lend','shut','sleep','lay','paint','spell','sell','invest','seek','broadcast','cure','howl','halt','joy','revival','million','crop','shade','canal','wagon','fact','concert','rule','suitcase','weight','hurrah감만세!(=hurray)','mail','hay','log','hut','tax','lesson','flame','shape','chest','chain','coast','circle','heart','fever','trust','whisker','prison','blood','loaf','list','fence','enemy','thief','data','soldier','musician','capital','course','diary','squirrel','dawn','shadow','ditch','crew','stomach','neighbor','servant','hunger','tomb','taste','sign','stair','trip','brain','trumpet','speech','thumb','horn','chief','trousers','prince','force','sight','space','wool','expressway','science','examination','jar','salt','death','saw','swing','alarm','grain','eraser','alphabet','shoulder','nephew','niece','library','factory','giraffe','hawk','pigeon','bowl','scene','life','earth','pill','math','ocean','price','row','schedule','machine','route','ivy','candle','joke','corn','pet','robber','cheek','clerk','cookie','army','nurse','master','lock','moment','sheet','monk','teenager','closet','handle','guide','bar','ostrich','knee','cricket','deck','bit','silk','jean','cotton','drum','sand','shock','march','cage','whole','change','department','office','ticket','energy','idea','hospital','noise','sample','example','plenty','luck','comedy','health','history','forest','stream','future','state','temple','dictionary','grammar','college','husband','daughter','captain','booth','iceberg','bubble','bottom','prize','bean','engineer','photographer','subway','fog','answer','diningroom','step','heat','bone','lamb','rate','report','turtle','bay','holiday','center','cash','wolf','operator','fur','shore','owl','hunter','pumpkin','handshake','bike','beach','God','cough','shell','business','restaurant','sheep','officer','hometown','coil','ceiling','turkey','towel','chopstick','seat','board','goal','drugstore','rat','butterfly','flute','couple','beer','background','bottle','body','group','village','beef','load','coin','bookstore','label','port','sunrise','sunshine','wedding','crown','seed','coal','comb','dream','sugar','mile','flashlight','vegetable','mouse','wood','war','belt','tourist','airport','passport','plate','stone','downtown','cousin','tooth','potato','blanket','attention','nail','letter','beggar','bedside','deer','bill','doll','pepper','frog','tower','bridge','cloth','post','snake','job','town','fun','bathroom','tail','mayor','piece','fruit','British','French','German','sale','rope','umbrella','dollar','mistake','birth','pilot','none','front','present','nickname','telephone','pair','weather','word','hole','plane','livingroom','gun','meat','grass','watch','nap','fantasy','harmony','soul','kite','ancient','nuclear','necessary','common','inner','thirsty','thin','gray','famous','industrial','silent','absent','flat','main','wild','wet','blind','dumb','sharp','terrible','grand','homesick','bound','fat','strange','pleasant','handsome','dear','sweet','dull','weak','honest','elder','such','able','loud','simple','clever','proud','foolish','possible','enough','wise','wide','successful','clear','clean','deep','cheap','certain','important','stormy','TRUE','sad','gay','merry','colorful','wonderful','peaceful','angry','dry','wrong','heavy','quiet','several','alone','crowded','excited','alive','brown','different','difficult','interesting','unlike','least','afraid','cool','kind','sick','useless','busy','early','past','dark','cloudy','low','fancy','essential','native','sincerely','fortunately','finally','immediately','especially','else','actually','tightly','recently','rapidly','politely','rudely','further','frankly','properly','hastily','rather','altogether','suddenly','mostly','correctly','nearly','badly','exactly','apart','afterward','later','maybe','perhaps','probably','either','neither','besides','anyway','sometime','twice','indeed','seldom','upsidedown','rarely','air','gift','company','bear','season','promise','order','match','attend','station','nature','party','art','sentence','turn','scale','tongue','command','right','reason','pass','plant','notice','part','deal','press','reach','case','end','degree','everything','somebody','nobody','hand','might(조)may의과거형','lot','chance','fast','ground','want','will(조)~일것이다','ball','duty','cause','blow','dish','term','draw','study','drive','break','quarter','race','save','field','exercise','note','mine','side','toll','safe','store','stand','meet','observe','head','fine','practice','regard','raise','help','object','count','matter','cost','tell','miss','read','run','spring','mean','strike','move','become','land','cover','fall','gain','sound','sort','lose','steal','say','own','stick','shoot','lead','date','touch','fail','hold','make','remain','rest','good','minute','bright','pretty','short','net','fit','novel','due','lean','fair','poor','free','even','long','last','well','subject','but','over','after','equal','school','issue','figure','spot'];
    var voca = {deserve:"받을가치가있다,~할만하다",survive:"살아남다,~보다오래살다",create:"창조하다",describe:"묘사하다",blame:"비난하다,책망하다 비난",compare:"비교하다,비유하다,비교되다",examine:"시험하다,검사하다,진찰하다",select:"고르다 선발한",hesitate:"망설이다,주저하다",declare:"선언하다,발표하다",pretend:"~인체하다",struggle:"싸우다,분투노력하다",explore:"탐험하다",slip:"미끄러지다,살짝움직이다",astonish:"놀라게하다",disappoint:"실망시키다",attract:"끌다",celebrate:"축하하다,찬양하다",explode:"폭발하다",include:"포함하다",exclude:"제외하다,배제하다",protect:"보호하다(=guard)",introduce:"소개하다,도입하다",produce:"생산하다",chase:"쫓다 추적",invade:"침입하다,몰려가다",scratch:"할퀴다,긁다",crash:"충돌하다,추락하다 충돌,추락",stare:"응시하다",scare:"위협하다,놀라게하다,놀라다",grab:"움켜잡다",gaze:"응시하다,바라보다",guard:"지키다 경계,경비원",discuss:"토론하다",shrug:"어깨를으쓱하다",sniff:"냄새맡다",scream:"날카롭게소리치다 날카로운소리",rid:"제거하다",surround:"둘러싸다",affect:"영향을주다",carve:"새기다,조각하다",invent:"발명하다",search:"찾다 수색",abuse:"남용하다,학대하다 남용,학대",owe:"신세를지고있다,빚이있다",bless:"축복하다",graduate:"졸업하다",replace:"제자리에놓다,~을대신하다",collect:"모으다,수집하다",arrest:"체포하다 체포",prove:"증명하다,~로판명되다",yell:"외치다",leak:"새다",behave:"행동하다(=act),얌전히굴다",wrap:"싸다,포장하다",locate:"위치하다",charge:"청구하다 대가,책임",review:"복습하다,재검토하다 복습,재검토",refuse:"거절하다",complain:"불평하다",warn:"경고하다",bend:"구부리다",suffer:"겪다,괴로워하다",whisper:"속삭이다 속삭임",prepare:"준비하다",roar:"으르렁거리다",float:"뜨다,띄우다",drag:"질질끌다",overhear:"엿듣다",slide:"미끄러지다,남몰래움직이다",suck:"빨다",bother:"괴롭히다",treat:"다루다,대우하다",destroy:"파괴하다",accept:"받아들이다,받다",depend:"~에의지하다,~에달려있다(~on)",nod:"끄덕이다 끄덕임",remove:"옮기다,치우다",beat:"때리다,이기다",clap:"(손뼉을)치다,툭치다",feed:"먹을것을주다,기르다",obtain:"얻다(=get,win)",drown:"(물에)빠져죽다,빠지다,빠뜨리다",remind:"생각나게하다",occur:"일어나다,생각이나다",ache:"아프다 아픔",repeat:"되풀이하다",sigh:"한숨쉬다 한숨",pray:"빌다,기도하다",follow:"따르다,따라가다",hate:"미워하다,싫어하다",frighten:"깜짝놀라게하다",shout:"외치다",mention:"말하다",waste:"낭비하다 낭비",borrow:"빌리다,차용하다",complete:"완성하다(=finish) 완전한",earn:"일하여벌다,얻다",exist:"존재하다",boast:"자랑하다 자랑",culture:"문화,교양",experience:"경험",education:"교육",symbol:"상징",effect:"결과,영향,효과",liberty:"자유(=freedom)",affair:"사건,일",comfort:"안락,위안",tradition:"전통,풍습",source:"출처,근원",revolution:"혁명,회전",pollution:"오염",system:"조직,체계,제도",triumph:"승리(=victory)",respect:"존경 존경하다",communication:"전달,교통",foundation:"기초,근거,설립",glory:"영광",situation:"위치,상황",competition:"경쟁",effort:"노력",section:"부분(=part),구역,(신문의)면",solution:"해결,용해",honor:"명예,경의 존경하다",unity:"통일,일치",population:"인구",direction:"방향,지시",dialog:"대화",republic:"공화국",method:"방법",increase:"증가 증가하다",decrease:"감소 감소하다",amount:"총액,양 (총계)~이되다",prairie:"대초원",ancestor:"조상,선조",voyage:"항해,여행 항해하다",sculpture:"조각(품)",sculptor:"조각가",instrument:"기구",activity:"활동",fund:"기금",accident:"사고,뜻밖의사건",adventure:"모험",view:"경치,의견",superstition:"미신",habit:"습관,버릇",wealth:"재산,부(富)",treasure:"보물",universe:"우주,전세계",adult:"어른 어른의",feast:"축제,향연,잔치",resource:"(~s)자원,수단",ruin:"파멸,(~s)폐허 파멸시키다",monument:"기념비,기념물",information:"정보,지식,통지",appetite:"식욕",unification:"통일",mystery:"신비,불가사의,추리소설",wage:"임금 (전쟁따위를)하다",thermometer:"온도계",burden:"짐 짐을지우다(=load)",series:"연속,시리즈(단수·복수동형)",appointment:"임명,약속",clue:"실마리,단서",debt:"빚,은혜",hydrogen:"수소",oxygen:"산소",control:"통제,지배",uniform:"제복 같은모양의",design:"계획,설계 계획하다,디자인하다",damage:"손해,손상",custom:"관습,습관",traffic:"교통",oath:"맹세,선서(oaths)",sophomore:"2학년생",temperature:"온도,체온",limit:"제한,한계 제한하다",statue:"조각상",furniture:"가구",parade:"행렬",public:"공공의,공중의 공중(사회)",pilgrim:"순례자",greeting:"인사,축하,(~s)인사말,인사장",language:"언어",opinion:"의견",athlete:"운동선수",supply:"공급 공급하다",surface:"표면 표면의",electricity:"전기",spirit:"정신",purpose:"목적",passion:"열정",project:"계획 계획하다",government:"정부,정치",interest:"이익,흥미,관심 흥미를갖게하다",funeral:"장례식",senior:"선배,연장자 손위의",junior:"후배,연소자 손아래의",democracy:"민주주의,민주정치",general:"장군,육군대장 일반적인",admiral:"해군대장,제독",edge:"날,가장자리",biology:"생물학",danger:"위험",advice:"충고",mammal:"포유동물",grade:"등급,학년",pause:"중지 멈추다",pronunciation:"발음",stress:"강조,압박 강조하다",contest:"경쟁,경기",horizon:"수평선,지평선",principal:"교장,장(長) 주요한",trouble:"근심,고생 수고를끼치다",scar:"상처,흔적",balance:"균, 균형을유지하다",proverb:"속담,격언",individual:"개인 개인의,개개의",character:"특성,인격,문자,인물",environment:"환경",victory:"승리",talent:"재주,재능,탤런트",semester:"학기",election:"선거",inning:"회(回)",hollow:"구덩이,우묵한곳 속이빈",virtue:"미덕,장점",cemetery:"묘지",relay:"교대 교대하다",exchange:"교환 교환하다",merchant:"상인",saying:"격언,속담",refrigerator:"냉장고",crack:"갈라진금 금가(게하)다",judge:"재판관,심판관 재판하다,판단하다",slave:"노예",settler:"이주민,정착민",fare:"요금",gesture:"몸짓,손짓",planet:"행성",type:"유형,활자 타이프를치다",secretary:"비서",devil:"악마",scholar:"학자cf.scholarship 장학금,학식",pardon:"용서 용서하다",kindergarten:"유치원",detective:"탐정 탐정의",license:"면허(증)",palace:"궁전",spade:"삽",square:"정사각형,광장 네모의",fountainpen:"만년필",harvest:"수확,추수 수확하다",tool:"도구",sword:"칼,검",magazine:"잡지",stadium:"경기장,스타디움",care:"걱정,조심",beauty:"아름다움,미인",museum:"박물관",congratulation:"축하",memory:"기억(력)",delight:"기쁨,즐거움 기쁘게하다",passenger:"승객",skill:"솜씨,숙련",journey:"여행(=travel)",ceremony:"의식",hobby:"취미",president:"대통령,사장,회장",address:"주소,연설 주소를쓰다,연설하다",continent:"대륙",mankind:"인류,인간",giant:"거인 거대한",site:"부지,위치,장소(=place)",marble:"대리석",stem:"줄기",torch:"횃불",composer:"작곡가",trick:"계략,속임수,장난",flight:"비행",castle:"성(城)",envelope:"봉투",pal:"친구(=friend)",vacation:"휴가",desert:"사막 버리다",event:"사건,",theater:"극장",stage:"단계,무대",error:"잘못,과오",area:"지역,면적",base:"기초,토대 기초를두다",basement:"지하실",evil:"악 나쁜",atom:"원자",poet:"시인",mind:"마음,생각 걱정하다,싫어하다",climate:"기후,풍토",suburb:"(the~s)교외",throat:"목구멍",voice:"목소리",valley:"골짜기,계곡",Puritan:"청교도 청교도의",feather:"깃털",amateur:"아마추어,비전문가",nation:"국가,국민",puzzle:"수수께끼 당황하게하다",rear:"뒤쪽(=back) 기르다",battle:"전투,싸움",riddle:"수수께끼",laundry:"세탁소",shower:"소나기,샤워",navy:"해군",Mars:"화성",gallery:"화랑,미술관",guest:"손님(=visitor)",folk:"사람들,가족",problem:"문제",jewel:"보석",garage:"차고",fault:"결점,잘못",lantern:"랜턴,초롱불",import:"수입(품) 수입하다",export:"수출(품) 수출하다",angle:"각도,관점",petal:"꽃잎",stripe:"줄무늬",pulse:"맥박",powder:"가루,화약",flood:"홍수 넘쳐흐르다",bush:"수풀,덤불",branch:"가지,지점",hero:"영웅,(남자)주인공(heroes)",heaven:"하늘,천국",exit:"출구",beast:"짐승(=animal)",century:"세기,100년",coeducation:"남녀공학",twin:"쌍둥이의한사람,(~s)쌍둥이",wound:"상처,부상 상처를입히다",metal:"금속",insect:"곤충",track:"지나간자국,선로",excellent:"뛰어난,우수한",competent:"유능한,충분한",religious:"종교적인",worth:"~의가치가있는 가치",favorite:"좋아하는 마음에드는사람(것)",upset:"기분이상한,화가난",entire:"전체의(=whole)",primary:"주요한,초보의,본래의",similar:"비슷한,같은모양의",precious:"귀중한",normal:"정상의,보통의",relative:"상대적인,관계가있는 친척",popular:"인기있는,유행의",compulsory:"의무적인,필수적인",curious:"호기심이강한,이상한",independent:"독립의,독립한",intimate:"친밀한",delicious:"맛있는",valuable:"귀중한",grave:"중대한 무덤",elementary:"초보의",crazy:"미친(=mad),열광적인",contrary:"반대의 반대",regular:"규칙적인",social:"사회의,사회적인",straight:"똑바른 똑바로",noble:"고귀한,고상한",anxious:"걱정되는,열망하는",international:"국제적인",greedy:"탐욕스러운",stupid:"어리석은(=foolish)",silly:"어리석은(=stupid)",lonely:"고독한,쓸쓸한",dirty:"더러운 더럽히다",various:"여러가지의",private:"개인의,사적인",vain:"헛된,무익한,허영심이강한",sore:"아픈 상처",fierce:"사나운,맹렬한",firm:"굳은,견고한",solar:"태양의 sun태양",smart:"멋진,영리한",single:"단하나의,독신의",diligent:"부지런한",serious:"진지한,중대한,심각한",fresh:"새로운,신선한",empty:"빈",mild:"온화한,상냥한(=gentle)",amazing:"놀라운",charming:"매력적인(=attractive)",boring:"지루한,따분한",patient:"참을성있는 환자",huge:"거대한",tiny:"아주작은",tough:"단단한,질긴,어려운",foreign:"외국의",modern:"현대의",expensive:"값비싼",harmful:"해로운",calm:"평온한,침착한",special:"특별한",familiar:"친한,잘알고있는",nervous:"신경질적인,신경의,초조한",brave:"용감한",steady:"확고한,한결같은,착실한",except:"~을제외하고는 제외하다",hardly:"거의~아니다(=scarcely)",otherwise:"다른경우라면,그렇지않으면",however:"아무리~해도 그러나",together:"함께",ahead:"앞에,앞으로",instead:"그대신에",quite:"매우,아주",almost:"거의(=nearly)",forward:"앞으로,앞쪽에",since:"~이래 그후",once:"한번,한때",whether:"~인지어떤지",unless:"~하지않으면(=if~not)",though:"비록~이지만(=although)",while:"~하는동안",usually:"보통,대개",along:"~을따라서 따라,따라죽",without:"~없이",behind:"~의뒤에 뒤에",beyond:"~의저쪽에,~을넘어서",below:"~의아래에 아래에(로)",toward:"~쪽으로",explain:"설명하다",wear:"입다,착용하다",amuse:"즐겁게하다,웃기다",suppose:"가정하다,상상하다,생각하다",leap:"뛰다(=jump)",bury:"묻다",engage:"약속하다,고용하다,약혼하다",sow:"씨를뿌리다",lift:"들어올리다",bow:"머리를숙이다,절하다 절,인사",rub:"비비다,문지르다",bite:"물다,물어뜯다",vote:"투표하다 투표,투표권",hop:"뛰다",imagine:"상상하다,생각하다",allow:"허락하다",offer:"제공하다",wish:"원하다 소원",obey:"복종하다",dig:"파다",choose:"고르다,선택하다",receive:"받다(=accept)",bet:"(돈을)걸다",hurt:"상처를입히다",burn:"타다,태우다",sink:"가라앉다",decide:"결정하다,결심하다",beg:"구걸하다,청하다",reply:"대답하다 대답",tear:"찢다,찢어지다 (~s)눈물",flow:"흐르다,넘쳐흐르다",remember:"기억하다,생각해내다",appear:"나타나다,~인것같다",breathe:"호흡하다",whistle:"휘파람을불다 휘파람,기적",continue:"계속하다",check:"저지하다,대조하다 저지,대조",sail:"항해하다 돛",wake:"깨다,깨우다",agree:"동의하다",hang:"걸다,매달다",record:"기록하다 기록",drop:"떨어지다,떨어뜨리다",climb:"기어오르다,오르다",add:"더하다,보태다",shine:"빛나다",invite:"초대하다",join:"결합하다,참가하다",hide:"숨기다,숨다",bring:"가져오다,데려오다",wink:"눈을깜박이다,눈짓하다",roll:"구르다,굴리다",pull:"끌다(=draw),당기다",push:"밀다",guess:"추측하다 추측",belong:"~에속하다,~의것이다",happen:"일어나다,생기다,우연히~하다",pick:"고르다,따다,줍다",shake:"흔들다,떨다",fill:"채우다,가득차다",fight:"싸우다 전투",fear:"두려워하다 두려움,걱정",carry:"나르다,운반하다",dive:"(물속으로)뛰어들다",win:"이기다,얻다",ride:"타다,타고가다 승차,타기",need:"필요로하다 필요",build:"짓다,건축하다",hurry:"서두르다,재촉하다",return:"돌아가다〔오다〕,돌려주다",believe:"믿다 belief믿음",surprise:"놀라게하다 놀람",gather:"모으다",throw:"던지다",smell:"냄새맡다",spend:"소비하다,지내다",pitch:"던지다 pitcher투수",pop:"펑하고소리나다,탁튀다",excuse:"용서하다,변명하다 변명",hit:"치다",tie:"매다,묶다 넥타이",stay:"머무르다 체류",enjoy:"즐기다",close:"닫다,(눈을)감다 가까운",arrive:"도착하다",travel:"여행하다 여행",worry:"걱정하다,괴롭히다",marry:"결혼하다",expect:"기대하다,~이라고생각하다",understand:"이해하다,알다",dye:"물들이다 물감",smoke:"담배피우다 연기",lend:"빌려주다",shut:"닫다(=close)",sleep:"자다 잠",lay:"놓다,눕히다",paint:"그리다,페인트를칠하다 페인트",spell:"철자를쓰다 한동안,주문(呪文)",sell:"팔다,팔리다",invest:"투자하다,부여하다",seek:"찾다,구하다 찾기,수색",broadcast:"방송하다 방송",cure:"치료하다,고치다 치료(법)",howl:"짖다,울부짖다 짖는소리",halt:"멈추다(=stop)",joy:"기쁨(=pleasure)",revival:"부활",million:"백만,다수",crop:"농작물,수확",shade:"그늘",canal:"운하",wagon:"짐마차",fact:"사실",concert:"음악회,연주회",rule:"규칙,습관 지배하다,규정하다",suitcase:"여행가방",weight:"무게,중량",hurrah:"만세!(=hurray)",mail:"우편(물) 우송하다",hay:"건초",log:"통나무",hut:"오두막집",tax:"세금 과세하다",lesson:"학과,수업,교훈",flame:"불꽃 타오르다",shape:"모양",chest:"가슴,상자",chain:"사슬 사슬로매다",coast:"해안",circle:"원,집단 회전하다",heart:"심장,마음",fever:"열,열병",trust:"신용,신뢰 신용하다,신뢰하다",whisker:"구레나룻",prison:"감옥",blood:"피,혈액",loaf:"빵한덩어리(loaves)",list:"명부,목록",fence:"울타리",enemy:"적(enemies)",thief:"도둑(thieves)",data:"자료,데이터(datum의복수형)",soldier:"군인,병사",musician:"음악가cf.music 음악",capital:"수도,자본 주요한",course:"진로,과정",diary:"일기(diaries)",squirrel:"다람쥐",dawn:"새벽,시작 날이새다",shadow:"그림자",ditch:"도랑",crew:"승무원",stomach:"위",neighbor:"이웃사람",servant:"하인",hunger:"굶주림",tomb:"무덤,묘",taste:"맛,취미 맛을보다",sign:"신호,기호 신호하다,서명하다",stair:"계단",trip:"여행(=journey)",brain:"뇌,두뇌",trumpet:"나팔,트럼펫",speech:"말,연설",thumb:"엄지손가락",horn:"뿔,경적",chief:"우두머리 주요한,최고의",trousers:"바지",prince:"왕자",force:"힘,폭력,병력 강요하다",sight:"광경,시력,경치",space:"공간,우주",wool:"양모",expressway:"고속도로",science:"과학",examination:"시험,조사,검사",jar:"항아리",salt:"소금",death:"죽음,사망",saw:"톱",swing:"그네,진동",alarm:"놀람,경보 놀라게하다,경보하다",grain:"곡식,낟알",eraser:"지우개",alphabet:"알파벳,문자",shoulder:"어깨",nephew:"조카",niece:"조카딸",library:"도서관,도서실",factory:"공장",giraffe:"기린",hawk:"매",pigeon:"비둘기",bowl:"사발,그릇",scene:"장면,현장",life:"생명,생활,일생(lives)",earth:"지구,땅,흙",pill:"알약",math:"수학(=mathematics)",ocean:"대양(大洋)",price:"값,가격",row:"줄,열(=line) 배를젓다",schedule:"예정(표) ~할예정이다",machine:"기계",route:"길(=road)",ivy:"담쟁이덩굴",candle:"양초",joke:"농담 농담을하다",corn:"곡물",pet:"애완동물 사랑하는",robber:"강도",cheek:"뺨,볼",clerk:"사무원,점원",cookie:"쿠키",army:"육군,군대",nurse:"간호사",master:"주인 정복하다,정통하다",lock:"자물쇠 자물쇠를채우다,잠그다",moment:"순간",sheet:"(침대의)시트,(종이)한장",monk:"승려",teenager:"십 소년〔소녀〕",closet:"벽장",handle:"손잡이 다루다",guide:"안내자,안내서 안내하다",bar:"막대기,빗장",ostrich:"타조",knee:"무릎",cricket:"크리켓(경기)",deck:"갑판",bit:"조금,작은조각",silk:"비단",jean:"진(옷감),(~s)진바지",cotton:"솜,목화",drum:"북",sand:"모래,(~s)모래사장",shock:"충격 충격을주다",march:"행진(곡) 행진하다",cage:"새장,우리",whole:"전, 전부의",change:"변화,교환,잔돈 변화하다,바꾸다",department:"부(部),국,(백화점의)매장",office:"사무실,회사",ticket:"표,입장권",energy:"힘,정력,활기",idea:"생각,이념",hospital:"병원",noise:"소음,소리",sample:"견본,샘플",example:"예,보기",plenty:"풍부,많음",luck:"행운",comedy:"희극,코미디",health:"건강",history:"역사",forest:"숲",stream:"흐름,시내 흐르다",future:"미래 미래의",state:"상태,주(州),국가",temple:"절,사원",dictionary:"사전",grammar:"문법",college:"단과대학,전문학교",husband:"남편cf.wife 아내",daughter:"딸cf.son 아들",captain:"우두머리,선장,주장",booth:"작은방,오두막집",iceberg:"빙산",bubble:"거품",bottom:"밑바닥,밑",prize:"상,상품",bean:"콩",engineer:"기사,기술자",photographer:"사진사",subway:"지하도,지하철",fog:"안개",answer:"대답(=reply) 대답하다",diningroom:"식당",step:"걸음,한걸음 걷다(=walk)",heat:"열,더위 뜨겁게하다",bone:"뼈",lamb:"새끼양",rate:"비율,속도,요금",report:"보고(서) 보고하다",turtle:"거북,바다거북",bay:"만",holiday:"휴일,휴가",center:"중심,중심지",cash:"현금 (수표를)현금으로바꾸다",wolf:"늑대(wolves)",operator:"기사,교환수",fur:"부드러운털,모피",shore:"물가,해안",owl:"올빼미",hunter:"사냥꾼",pumpkin:"호박",handshake:"악수",bike:"자전거(=bicycle)",beach:"해안(=seashore)",God:"신",cough:"기침 기침을하다",shell:"껍질,조개",business:"사업,일,사무",restaurant:"식당",sheep:"양(sheep)",officer:"공무원,장교",hometown:"고향",coil:"감긴것,(전기)코일 둘둘감다",ceiling:"천장",turkey:"칠면조",towel:"수건,타월",chopstick:"(~s)젓가락",seat:"좌석 앉히다 cf.sit, 앉다",board:"판자,뱃전",goal:"목표,골",drugstore:"약국,편의점",rat:"쥐",butterfly:"나비",flute:"플루트,피리",couple:"한쌍,부부",beer:"맥주",background:"배경",bottle:"병",body:"몸,신체",group:"집단,무리",village:"마을",beef:"쇠고기",load:"짐,부담 짐을싣다",coin:"동전,화폐",bookstore:"서점",label:"꼬리표,라벨,상표",port:"항구",sunrise:"해돋이,일출",sunshine:"햇빛",wedding:"결혼식,결혼",crown:"왕관",seed:"씨 씨를뿌리다",coal:"석탄",comb:"빗 빗질하다",dream:"꿈",sugar:"설탕",mile:"마일(약1,609미터)",flashlight:"(카메라의)플래시,손전등",vegetable:"채소,야채",mouse:"생쥐(mice)",wood:"나무,(종종~s)숲",war:"전쟁",belt:"허리띠,띠",tourist:"관광객,여행자",airport:"공항",passport:"여권",plate:"접시",stone:"돌",downtown:"도심지,번화가 번화가로,상가로",cousin:"사촌",tooth:"이,치아(teeth)",potato:"감자(potatoes)",blanket:"담요",attention:"주의,주목",nail:"손톱,발톱",letter:"편지,문자",beggar:"거지",bedside:"침대곁",deer:"사슴(단수,복수같음)",bill:"계산서,지폐",doll:"인형",pepper:"후추",frog:"개구리",tower:"탑",bridge:"다리",cloth:"천,직물",post:"우편(물)(=mail) 우체통에넣다",snake:"뱀",job:"직업,일",town:"읍,도시,도회지",fun:"재미,즐거움 재미있는",bathroom:"욕실",tail:"꼬리",mayor:"시장(市長)",piece:"조각",fruit:"과일",British:"영국의 영국인",French:"프랑스의 프랑스인,프랑스어",German:"독일의 독일인,독일어",sale:"판매,염가판매",rope:"밧줄",umbrella:"우산",dollar:"달러",mistake:"잘못,착각",birth:"출생",pilot:"조종사,안내인 안내하다",none:"아무도~아니다",front:"앞부분,정면",present:"현재,선물 출석한",nickname:"별명,애칭",telephone:"전화 전화를걸다",pair:"한쌍",weather:"날씨",word:"낱말",hole:"구멍",plane:"비행기(airplane의줄인말)",livingroom:"거실",gun:"총",meat:"고기cf.fish 물고기,생선",grass:"풀,잔디",watch:"손목시계,주의 주의해서보다",nap:"낮잠 졸다,낮잠자다",fantasy:"공상,환상",harmony:"조화,화합",soul:"영혼,사람",kite:"연,솔개(조류)",ancient:"고대의",nuclear:"핵의",necessary:"필요한",common:"공통의,보통의",inner:"안쪽의",thirsty:"목마른",thin:"얇은,야윈",gray:"회색의 회색",famous:"유명한",industrial:"산업의,공업의",silent:"침묵의,조용한",absent:"결석한,없는",flat:"평평한",main:"주요한",wild:"야생의,난폭한",wet:"젖은",blind:"눈먼",dumb:"벙어리의",sharp:"날카로운",terrible:"끔찍한,무서운",grand:"웅장한,화려한",homesick:"향수병의,향수에잠긴",bound:"~행(行)의,~에가려고하는",fat:"살찐 지방",strange:"이상한,낯선",pleasant:"즐거운,유쾌한",handsome:"잘생긴,멋진",dear:"친애하는,사랑하는,값비싼 비싸게",sweet:"단,달콤한",dull:"무딘,우둔한",weak:"약한",honest:"정직한",elder:"손위의,연상의",such:"그러한,이러한",able:"~할수있는,유능한",loud:"큰목소리의,시끄러운",simple:"단순한,간단한",clever:"영리한",proud:"자랑스러운,오만한",foolish:"어리석은",possible:"가능한",enough:"충분한 충분히",wise:"현명한",wide:"넓은 널리",successful:"성공한",clear:"맑은,명백한 제거하다",clean:"깨끗한",deep:"깊은 깊게",cheap:"값싼",certain:"확실한,어떤(=one)",important:"중요한",stormy:"폭풍의",TRUE:"진실한",sad:"슬픈",gay:"명랑한,화려한",merry:"즐거운",colorful:"화려한,다채로운",wonderful:"놀랄만한,훌륭한",peaceful:"평화로운",angry:"화난",dry:"마른",wrong:"나쁜,틀린",heavy:"무거운",quiet:"조용한",several:"여럿의",alone:"홀로,다만~뿐(=only) 홀로",crowded:"붐비는,혼잡한",excited:"흥분한",alive:"살아있는",brown:"갈색의 갈색",different:"다른",difficult:"어려운",interesting:"흥미있는",unlike:"같지않은 ~과는다른",least:"가장적은,최소한의(little의최상급)",afraid:"무서워하여",cool:"시원한,냉정한",kind:"친절한 종류(=sort)",sick:"병든,싫증난",useless:"쓸모없는",busy:"바쁜",early:"이른 일찍이",past:"과거의 과거, ~을지나서",dark:"어두운 어둠",cloudy:"흐린,구름이많은",low:"낮은 낮게",fancy:"멋진 공상,좋아함, 생각하다",essential:"본질적인,필수의",native:"타고난,태어난",sincerely:"진심으로",fortunately:"다행히,운좋게",finally:"마지막으로,마침내(=atlast)",immediately:"곧,즉시",especially:"특히",else:"그밖에",actually:"실제로,정말로",tightly:"단단히",recently:"최근에(=lately)",rapidly:"빨리,신속히(=quickly)",politely:"공손히",rudely:"무례하게",further:"더멀리,게다가 더먼",frankly:"솔직히",properly:"제대로,적당히",hastily:"급히,서둘러서",rather:"오히려,약간",altogether:"전혀,대체로",suddenly:"갑자기",mostly:"대개,대부분",correctly:"정확히",nearly:"거의(=almost)",badly:"나쁘게,매우,몹시",exactly:"정확히(=correctly),꼭",apart:"떨어져서,따로",afterward:"후에,나중에",later:"후에,나중에 더늦은",maybe:"아마(=perhaps)",perhaps:"아마(=probably)",probably:"아마",either:"어느한쪽의",neither:"~도…도아니다(nor와함께써서)",besides:"게다가,그밖에 ~외에는",anyway:"어쨌든,아무튼(=anyhow)",sometime:"언젠가",twice:"두번",indeed:"참으로",seldom:"좀처럼~않다",upsidedown:"거꾸로",rarely:"드물게,좀처럼…하지않는(=seldom)",air:"공기,비행기,방송 방송하다",gift:"선물,타고난재능",company:"친구,사귐,회사",bear:"낳다,참다,열매를맺다 곰",season:"계절,한창때 간을맞추다",promise:" 약속(하다), 가망,유망",order:" 명령(하다),주문(하다), 순서",match:"성냥,시합 어울리다,당해내다",attend:"참석하다,주의하다,시중들다",station:"역,서(署),소(所),국(局)",nature:"자연,천성,성질",party:"파티,일행,정당",art:"미술,예술,기술",sentence:"문장,판결 판결하다,선고하다",turn:"돌다,돌리다,변화하다 회전,차례",scale:"규모,저울",tongue:"혀,언어,말씨",command:" 명령(하다),지휘(하다)",right:"오른쪽,권리,정의 바로",reason:"이유,이성",pass:"지나가다,합격하다,(식탁)건네주다",plant:"식물,공장 (식물을)심다",notice:"통지,예고 알아차리다",part:"부분,역할 헤어지다",deal:"다루다,나눠주다,거래하다 거래",press:"누르다 출판물,언론계",reach:"도착하다,(손을뻗어)집어주다 범위",case:"상자,경우,사건",end:"끝,목적 끝내다",degree:"정도,학위,도(온도,각도)",everything:"모든것 가장중요한것",somebody:"어떤사람,누군가",nobody:"아무도~아니다 보잘것없는사람",hand:"손 건네주다,주다",might:"(조)may의과거형,힘",lot:"많음,토지,제비",chance:"기회,가능성 우연히~하다",fast:"빠른, 단식(하다)",ground:"땅,운동장,근거",want:"원하다 부족",will:"(조)~일것이다,의지,유언(장)",ball:"공,무도회",duty:"의무,세금",cause:"원인 일으키다,야기하다",blow:"바람이불다 타격",dish:"접시,요리,음식",term:"기간,용어,조건",draw:"끌어당기다,(그림을)그리다,뽑다",study:"공부,서재 공부하다",drive:"운전하다,내몰다,쫓다",break:"부수다,어기다",quarter:"4분의1,15분,(~s)숙소",race:"경주,인종,민족",save:"구하다,저축하다,절약하다",field:"들,경기장,분야",exercise:" 운동(하다),연습(하다),행사(하다)",note:"적어두다 짧은편지,지폐",mine:"나의것 광산",side:"쪽,옆구리,자기편",toll:"통행료,사상자수",safe:"안전한 금고",store:"가게,상점 저장하다",stand:"서다,참다",meet:"만나다,만족시키다",observe:"관찰하다,(법률등을)지키다",head:"머리 앞장서다,(~향해)나아가다",fine:"훌륭한,날씨가맑은 벌금",practice:"연습,실제,실행 연습하다,실행하다",regard:"간주하다 (~s)안부",raise:"올리다,기르다,모금하다",help:"돕다,피하다(=avoid)",object:"물건,목적 반대하다",count:"세다,계산하다,중요하다",matter:"일,문제,물질 중요하다,관계가있다",cost:"비용 ~의비용이들다,걸리다",tell:"말하다,영향을주다,구별하다",miss:"놓치다,그리워하다",read:"읽다,~라고쓰여있다",run:"달리다,경영하다,출마하다",spring:"봄,샘 튀어오르다",mean:"의미하다 중간의",strike:"치다,생각나다,파업하다",move:"움직이다,이사하다,감동시키다",become:"되다,어울리다",land:"육지,나라 상륙하다",cover:"표지,덮개 덮다,~에걸치다",fall:"떨어지다 가을,(~s)폭포",gain:"얻다,(시계가)빨리가다 이익",sound:"소리 ~하게들리다, 건전한",sort:"종류(=kind) 분류하다",lose:"잃다,지다,(시계가)늦게가다",steal:"훔치다,몰래~하다",say:"말하다,~라고쓰여있다",own:"자기자신의(것) 소유하다",stick:"지팡이 찌르다,달라붙다",shoot:"쏘다,사격하다,사진을찍다",lead:"인도하다,~한생활을하다 납",date:"날짜,데이트 비롯되다(~from)",touch:"닿다,감동시키다 ~한느낌",fail:"실패하다,~하지못하다,쇠약해지다",hold:"(손에)잡다,개최하다",make:"만들다,~이되다 형(型)",remain:"남다,여전히~대로이다 (~s)유적",rest:"쉬다 휴식,(the~)나머지",good:"좋은,상당한 이익,(~s)상품",minute:"분(分) 사소한,세심한",bright:"밝은,영리한",pretty:"예쁜 꽤,상당히",short:"짧은,키가작은,부족한",net:"그물 순(純)~",fit:"적당한,알맞은,건강이좋은",novel:"소설 신기한,기발한",due:"만기가된,~에기인하는",lean:"야윈(=thin) 기대다",fair:"공평한,꽤많은 전시회",poor:"가난한,불쌍한,서투른",free:"자유로운,한가한,무료의",even:"~조차도,훨씬 짝수의",long:"길이가긴 갈망하다,동경하다",last:"맨마지막의,최근의 계속하다",well:"잘 건강한, 우물",subject:"주제,학과 지배를받는",but:"그러나 ~을제외하고, 다만",over:"~위에,~이상 끝나고",after:"~뒤에,~을본떠서,~을추구하여",equal:"똑같은,평등한 ~와같다",school:"학교,수업",issue:"발행,논쟁(점),~판(版)",figure:"숫자,모습,인물",spot:"얼룩,장소 즉석의"}

    var wordNumArr = [];    // 현재 모드의 단어 배열
    var vocaNum = 0;        // 진행 중인 모드의 단어 index

    var notStudyWords=[];   // 학습하지 않은 단어
    var knownWords = [];    // 학습한 단어 - 아는 단어
    var unknownWords=[];    // 학습한 단어 - 모르는 단어

    var mode = 0;  // 0:전체, 1:모르는것, 2 : 아는것    

    $(document).ready(function() {
        getStudyInfo();

        modeSet(mode, 'init');

        $('.card').on('click', function(event) {
            console.log('card click');
            // event.preventDefault();
            const card = $('.card');
            const front = $('.front');
            const back = $('.back');
            if (card.hasClass('flip')) {
                card.removeClass('flip');
                back.hide();
                front.show();
            } else {
                card.addClass('flip');
                front.hide();
                back.show();
            }
        });
        $('.dic').on('click', function(event){
            const wordStr = word[wordNumArr[vocaNum]];
            openPopup();
            searchWord(wordStr);
        });
        $('.close').on('click', function(event){
            closePopup();
        });
        
        let startX=0;
        let endX=0;
        $('.card').on('touchstart', function(e) {
            startX = e.originalEvent.changedTouches[0].pageX;
        });
        // card의 터리 드래그에는 반응하지 않게 하기
        $('.card').on('touchmove', function(e) {
            e.preventDefault();
        });      

        $('.card').on('touchend', function(e) {
            endX = e.originalEvent.changedTouches[0].pageX;
            if (startX - endX > 50) {
                // 좌측으로 플리킹  -- 모르는 단어
                $(this).animate({opacity: 0, marginLeft: '-100px'}, 500, function() {
                    $(this).hide();
                    //전체
                    if(mode == 0){
                        //학습 안된 단어
                        // 학습 안된 단어 배열에서 삭제
                        notStudyWords.splice(vocaNum, 1);
                        // 모르는 단어배열로 push
                        if (!unknownWords.includes(wordNumArr[vocaNum])) {
                            unknownWords.push(wordNumArr[vocaNum]);
                            unknownWords.sort();
                        }
                        // 단어 번호 삭제
                        wordNumArr.splice(vocaNum, 1);
                    }else if(mode == 1){
                        //모르는 단어
                        // 모르는 단어를 모르는 단어쪽으로 넘기면 아무일도 일어나지 않는다
                        // 다음 단어
                        vocaNum++;
                        // unknownWords.sort();
                    }else if(mode == 2) {
                        //아는 단어
                        // console.log(vocaNum,wordNumArr);
                        // 아는 단어배열에서 삭제
                        knownWords.splice(vocaNum, 1);
                        // 모르는 단어 배열에 추가하고 정렬정
                        if (!unknownWords.includes(wordNumArr[vocaNum])) {
                            unknownWords.push(wordNumArr[vocaNum]);
                            unknownWords.sort();
                        }
                        // 단어번호 삭제
                        wordNumArr.splice(vocaNum, 1);
                    }
                    reSetPositionVoca($(this));
                });
                console.log('left');
            } else if (endX - startX > 50) {
                // 우측으로 플리킹  -- 아는 단어
                $(this).animate({opacity: 0, marginLeft: '100px'}, 500, function() {
                    $(this).hide();
                    //전체
                    if(mode == 0){
                        //학습 안된 단어
                        // 학습 안된 단어 배열에서 삭제
                        notStudyWords.splice(vocaNum, 1);
                        // 아는 단어배열로 push
                        if (!knownWords.includes(wordNumArr[vocaNum])) {
                            knownWords.push(wordNumArr[vocaNum]);
                        }
                        // 단어 번호 삭제
                        wordNumArr.splice(vocaNum, 1);
                    }else if(mode == 1){
                        // 모르는 단어
                        // 모른는 단어 배열에서 삭제
                        unknownWords.splice(vocaNum, 1);
                        // 아는 단어 배열에 추가하고 정렬
                        // console.log(unknownWords.includes(word[wordNumArr[vocaNum]]));
                        if (!knownWords.includes(wordNumArr[vocaNum])) {
                            knownWords.push(wordNumArr[vocaNum]);
                            knownWords.sort();
                        }
                        // 단어 번호 삭제
                        wordNumArr.splice(vocaNum, 1);
                    }else if(mode == 2){
                        // 아는 단어를 아는 단어쪽으로 넘기면 아무일도 일어나지 않는다
                        // 다음 단어
                        vocaNum++
                    }

                    reSetPositionVoca($(this));
                });
                console.log('right');
            }
        });

        $('.button').on('click', function(event) {        
            console.log('button clicked!'+(event.currentTarget.className == 'button button1'));
            // event.preventDefault();
            if(event.currentTarget.className == 'button button0'){
                // 전체 단어
                modeSet(0, 'change');
            }else if(event.currentTarget.className == 'button button1'){
                // 모르는 단어
                modeSet(1,'change');
            }else if(event.currentTarget.className == 'button button2'){
                // 기억한 단어
                modeSet(2,'change');
            }else if(event.currentTarget.className == 'button resetbutton'){
                // 초기화
                modeSet(999, 'change');
            }
        });
        $('.speak_button').on('click', function(event) {
            if(event.currentTarget.className == 'speak_button speak1'){

                speakWord();
            }else if(event.currentTarget.className == 'speak_button speak2'){
                speakWordNkorean()
            }
        });
    });
    function openPopup() {
        document.getElementById("popup").style.display = "block";
    }

    function closePopup() {
        document.getElementById("popup").style.display = "none";
    }
    function reSetPositionVoca(target){
        console.log('reSetPositionVoca  :  '+ target);
        target.animate({opacity: 100, marginLeft: '0px'}, 1, function() {
            changeVoca();
            saveStudyInfo();
            $(this).show();
        });
    }
    function changeVoca(){
        console.log(vocaNum+"   ::   "+ wordNumArr.length);
        if(vocaNum == wordNumArr.length) vocaNum = 0;
        console.log('word : '+ word[vocaNum]);
        console.log('unknownWords : '+ JSON.stringify(unknownWords));
        console.log('knownWords : '+ JSON.stringify(knownWords));
        if(wordNumArr.length == 0) {
            alert('저장된 단어가 없습니다.2');
            modeSet(0, 'change');
        }else if(wordNumArr.length == 1){
            console.log('wordNumArr.length = '+ wordNumArr.length);
            console.log('word[wordNumArr[0] = '+word[wordNumArr[0]]);
            $(`#card-0 .front span`).text(word[wordNumArr[0]]);
            $(`#card-0 .back span`).text(voca[word[wordNumArr[0]]]);
            $(`#card-1 .front span`).text(word[wordNumArr[0]]);
            $(`#card-1 .back span`).text(voca[word[wordNumArr[0]]]);
        }else{
            for(var i =0; i <2; i++){
                $(`#card-${i} .front span`).text((word[wordNumArr[vocaNum + i]]) ? word[wordNumArr[vocaNum + i]] : word[wordNumArr[0]]);
                $(`#card-${i} .back span`).text((voca[word[wordNumArr[vocaNum+i]]])?voca[word[wordNumArr[vocaNum+i]]] : voca[word[wordNumArr[0]]]);
                // console.log($(`#card-${i} .front span`).text()+"   //   "+ $(`#card-${i} .back span`).text());
                // console.log(voca[word[wordNumArr[vocaNum+i]]]);
            }
        }
        $('.currentP').text(vocaNum+1);
        $('.totalP').text(wordNumArr.length);
    }
    function initStudyArray(){
        $.each(Array(word.length), function (index) {
            notStudyWords.push(index);
        });
    }

    function getStudyInfo() {
        //로컬 스토리지 사용 하여 학습 진행을 저장
        if (typeof (Storage) !== "undefined") {
            var a = localStorage.getItem("knownWords");
            var b = localStorage.getItem("unknownWords");
            var notStudyWord = localStorage.getItem("notStudyWord");
            var modeStr = localStorage.getItem("mode");
            // console.log("getStudyInfo : "+modeStr);
            mode = (modeStr) ? parseInt(modeStr) : 0;
            if (a) knownWords = JSON.parse(a);
            if (b) unknownWords = JSON.parse(b);
            if (notStudyWord){
                notStudyWords = JSON.parse(notStudyWord);
            }else{
                initStudyArray();
            }
        } else {
            console.log('Sorry! No Web Storage support..');
        }
    }
    function saveStudyInfo() {
        //로컬 스토리지 사용 하여 학습 진행을 저장
        if (typeof (Storage) !== "undefined") {
            localStorage.setItem("knownWords", JSON.stringify(knownWords));
            localStorage.setItem("unknownWords", JSON.stringify(unknownWords));
            localStorage.setItem("notStudyWord", JSON.stringify(notStudyWords));
            localStorage.setItem("mode", JSON.stringify(mode));

        } else {
            console.log('Sorry! No Web Storage support..');
        }
    }

    function modeSet(num,str){
        console.log('modeSet : '+num+'  str : '+str);
        if((num == 1 && unknownWords.length == 0) || (num == 2 && knownWords.length == 0)) {
            if(str == 'change') {
                alert('저장된 단어가 없습니다. 1');
                // mode = 0;
                return;
            }else{
                num = 0;
            }
        }
        wordNumArr = [];
        $(".card").removeClass('button'+mode);
        mode = num;
        switch(num) {
            case 0 :
                wordNumArr = JSON.parse(JSON.stringify(notStudyWords));
                break;
            case 1 :
                wordNumArr = JSON.parse(JSON.stringify(unknownWords));
                break;
            case 2 :
                wordNumArr = JSON.parse(JSON.stringify(knownWords));
                break;
            case 999 :
                notStudyWords=[];   
                knownWords = [];    
                unknownWords=[]; 
                initStudyArray()
                wordNumArr = JSON.parse(JSON.stringify(notStudyWords));
                mode = 0;
                // saveStudyInfo();
                break;
        }
        // console.log(wordNumArr, word[wordNumArr[vocaNum]]);
        if(str == 'init') {
            makingCard(wordNumArr);
            $(".card").addClass('button'+num);
        }
        else if(str == 'change') {
            $(".card").addClass('button'+num);
            changeCard(wordNumArr);
        }
        saveStudyInfo();
    }
    function makingCard(wordNumArr){
        // console.log('wordNumArr  :  '+ wordNumArr.length);
        const cardContainer = $('.card-container');
        const numCards = 5;

        for (let i = 0; i < numCards; i++) {
            const cardId = `card-${i}`;
            const card = $('<div>').addClass('card').attr('id', cardId);
            card.css({
                'z-index': numCards - i,
                // 'transform': `translateZ(${-i}px)`
            });
            if (i > 1) {
                const prevCard = $(`#card-${i - 1}`);
                const leftValue = parseInt(prevCard.css('left')) - 2;
                card.css('left', `${leftValue}px`);
            }

            const frontSpan = $('<span>').text(word[wordNumArr[i]]);
            const backSpan = $('<span>').text(voca[word[wordNumArr[i]]]);

            const front = $('<div>').addClass('front').append(frontSpan);
            const back = $('<div>').addClass('back').append(backSpan);
            card.append(front).append(back);
            cardContainer.append(card);
        }
        $('.currentP').text(vocaNum+1);
        $('.totalP').text(wordNumArr.length);

    }
    function changeCard(wordNumArr){
        vocaNum = 0;
        // const numCards = wordNumArr.length > 5 ? 5 :  wordNumArr.length;
        const numCards = 5;
        // console.log('changeCard  ::  wordNumArr  :  '+ wordNumArr.length);
        $('.currentP').text(vocaNum+1);
        $('.totalP').text(wordNumArr.length);
        for (let i = 0; i < numCards; i++) {
            // console.log('>>>>>>>>  ::  vocaNum  :  '+ word[wordNumArr[vocaNum+i]], wordNumArr[vocaNum+i]);
            if(word[wordNumArr[vocaNum+i]]){
                $(`#card-${i} .front span`).text(word[wordNumArr[vocaNum+i]]);
                $(`#card-${i} .back span`).text(voca[word[wordNumArr[vocaNum+i]]]);
            }else{
                $(`#card-${i} .front span`).text('');
                $(`#card-${i} .back span`).text('');
            }
        }
    }
    function speakWord() {        
        // console.log(vocaNum+'  ,  '+ word[wordNumArr[vocaNum]]);
        const utterance = new SpeechSynthesisUtterance(word[wordNumArr[vocaNum]]);
        utterance.lang = 'en-US'; // 언어 설정 (영어)
        speechSynthesis.speak(utterance);        
    }
    function speakWordNkorean() {        
        // console.log(vocaNum+'  ,  '+ voca[word[wordNumArr[vocaNum]]]);
        const utteranceEng = new SpeechSynthesisUtterance(word[wordNumArr[vocaNum]]);
        utteranceEng.lang = 'en-US'; // 언어 설정 (영어)
        const utteranceKor = new SpeechSynthesisUtterance(voca[word[wordNumArr[vocaNum]]]);
        utteranceKor.lang = 'ko-KR'; // 언어 설정 (영어)
        speechSynthesis.speak(utteranceEng);       
        utteranceEng.onend = () => {
            speechSynthesis.speak(utteranceKor);
        }; 
    }

    async function searchWord(wordStr) {
        const word = wordStr;
        if (!word) return alert("단어를 입력하세요!");

        const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;

        try {
            const response = await fetch(url);
            const data = await response.json();

            if (!Array.isArray(data)) {
                document.getElementById("meaningBox").innerHTML = `<p>❌ 단어를 찾을 수 없습니다.</p>`;
                return;
            }

            let resultHTML = `<h3>📌 단어: ${word}</h3>`;

            data.forEach(entry => {
                entry.meanings.forEach(meaning => {
                    resultHTML += `<h4>🔹 품사: ${meaning.partOfSpeech}</h4>`;
                    meaning.definitions.forEach((def, index) => {
                        resultHTML += `<p><strong>${index + 1}. 뜻:</strong> ${def.definition}</p>`;
                        if (def.example) {
                            resultHTML += `<p>📖 <em>예문:</em> ${def.example}</p>`;
                        }
                    });
                });
            });

            // 결과 표시
            document.getElementById("meaningBox").innerHTML = resultHTML;
            // document.getElementById("meaning").innerText = `str`;


        } catch (error) {
            console.error("오류 발생:", error);
            alert("데이터를 불러오는 중 오류가 발생했습니다.");
        }
    }


    // 클로저를 반환한다.
    return {
        get_voca : function(){
            return voca;
        },
        get_word : function(){
            return word;
        },
    };
}());




