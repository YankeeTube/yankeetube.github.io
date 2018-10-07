//Static
title_list = ["blockexplorer","miningpool","unusedcssremove","automatedpricetoi.c.o","vulnerabilitychecktool","websitecheckvulnerabilities","kakaotalkrestoretool","coupangsellerautomation","blogautopostaftercrawl","autoincreaseviewstoc.g.v"];
var cnt= 0;
var timer;
var imgadr;
var headArray;
var paraArray;
var now;
var buf;
// 반복
$(document).ready(function(){
    setInterval(parserTitle,1000);
});

function parserTitle(){
    var title = $(".viewer-title-bar > div > p").text().replace(/ /gi, "").toLowerCase();

    var now_index = title_list.indexOf($(".viewer-title-bar > div > p").text().replace(/ /gi, "").toLowerCase());
    if (now_index == buf){
        return;
    }
    if (now_index == 0){
        imgadr= ['./img/project/blockexplorer/home.jpg','./img/project/blockexplorer/blocks.jpg','./img/project/blockexplorer/status.jpg','./img/project/blockexplorer/api.jpg'];
        headArray= ['HOME','BLOCKS', 'STATUS', 'JSON API'];
        paraArray= ['Bitcore Insight Block Explorer Main Page.',
            'Current Cryptocurrency view all Blocks', 
            'Current Cryptocurrency view information Status',
            'Insight-api'];
        changeSummarize(now_index);
    }
    else if (now_index == 1){        
        imgadr= ['./img/project/miningpool/login.jpg','./img/project/miningpool/home.jpg','./img/project/miningpool/dashboard.jpg','./img/project/miningpool/api.jpg'];
        headArray= ['LOGIN','HOME', 'DASHBOARD', 'JSON API'];
        paraArray= ['PPLNS Mining Pool Login Page.',
            'PPLNS Mining Pool Home(index)', 
            'PPLNS Mining Pool and Miner Status',
            'PPLNS Global Status'];
        changeSummarize(now_index);
    }
    else if (now_index == 2){
        imgadr= ['./img/project/cssremover/start.PNG','./img/project/cssremover/important.PNG','./img/project/cssremover/sizecompare.PNG','./img/project/cssremover/result.PNG'];
        headArray= ['SIMPLE SCRIPT','IMPORTANT', 'SIZE COMP', 'WHITE SPACE'];
        paraArray= ['Unused CSS Remover',
            '@media query !important;', 
            'Reduce capacity',
            'Remove all white Space'];
        changeSummarize(now_index);
    }
    else if (now_index == 3){
         imgadr=['./img/project/ico/sourcecode.png','./img/project/ico/coinmarket.jpg','./img/project/ico/naver.jpg'];
        headArray = ['PART OF SOURCE CODE','Ethereum Price Parser','Exchange Rate Capture'];
        paraArray = ['I.C.O Evidence AutoScript','Ethereum Coin Crawl and Capture','Naver Exchange Rate Crawl and capture'];
    }
    else if (now_index == 4){
        imgadr= ['./img/project/checkwin/start.PNG','./img/project/checkwin/function.PNG','./img/project/checkwin/excel.PNG','./img/project/checkwin/html.jpg'];
        headArray= ['SIMPLE SCRIPT','VUNLER CHECK FUNC', 'RESULT ON EXCEL', 'RESULT ON HTML'];
        paraArray= ['Windows Vulnerability Check Tools',
            'Part of the function of the major information communication infrastructure vulnerability items', 
            'If you use ssd, your will get have a report in 5 seconds!',
            'No Excel? We also make html!'];
        changeSummarize(now_index);
    }
    else if (now_index == 5){
        imgadr= ['./img/project/sitevulner/checklist.PNG','./img/project/sitevulner/fish.PNG','./img/project/sitevulner/fish2.PNG','./img/project/sitevulner/result.PNG'];
        headArray= ['CHECK LIST','SESSION SAVE SCRIPT', 'SESSION HIJACKING', 'VUNLER RESULT'];
        paraArray= ['Web Site vunlerability Check list.',
            'Session Storage Scripts Using php!', 
            'Session hijacking on using js!',
            'part of the result'];
        changeSummarize(now_index);
    }
    else if (now_index == 6){
        imgadr= ['./img/project/kakaorestore/thumb.PNG','./img/project/kakaorestore/easystart.PNG','./img/project/kakaorestore/code.PNG','./img/project/kakaorestore/restore2.PNG'];
        headArray= ['KAKAOTALK','START SCRIPT', 'SIMPLE CODE', 'RESTORE RESULT'];
        paraArray= ['Attachment Expired Restore',
            'So Easy Starting!', 
            'Open Source So Very Simple Code',
            'Attachment restore result'];
        changeSummarize(now_index);
    }
    else if (now_index == 7){
        imgadr= ['./img/project/coupang/clientif.PNG','./img/project/coupang/code.PNG','./img/project/coupang/log.PNG','./img/project/coupang/code2.PNG'];
        headArray= ['OUTSOURCING','PART OF SOURCE CODE', 'LOG', 'PART OF SOURCE CODE2'];
        paraArray= ['First Outsourcing Web Automated',
            'so many indent... but not anymore!', 
            'Program Live Status Log',
            'There are no more inappropriate annotations.'];
        changeSummarize(now_index);
    }
    else if (now_index == 8){
        imgadr= ['./img/project/blogautopost/01.PNG','./img/project/blogautopost/03.PNG','./img/project/blogautopost/02.PNG'];
        headArray= ['PART OF SOURCE CODE', 'OUTSOURCING', 'PART OF SOURCE CODE2'];
        paraArray= ['Second Outsourcing Web Automated',
            'Requirements of Client', 
            'How to remove an ad pop-up window'];
        changeSummarize(now_index);
    }
    else if (now_index == 9){
        imgadr= ['./img/project/cgv/01.PNG','./img/project/cgv/02.PNG','./img/project/cgv/03.PNG'];
        headArray= ['PART OF SOURCE CODE', 'OUTSOURCING', 'PART OF SOURCE CODE2'];
        paraArray= ['Third Outsourcing Web Automated',
            'Requirements of Client', 
            'DB Update Content'];
        changeSummarize(now_index);
    }
    else{
        imgadr=['./img/project/image-not-found.jpg']
        headArray = ['Not Found!']
        paraArray = ['Image File does not found...']
    }
    buf = now_index;
}
function changeSummarize(now){
    var project = [
        "<a href='http://explorer.soomcoin.net/insight' target='_blank'>Block Explorer</a>", 
        
        "<a href='http://asic.soomcoin.net/' target='_blank'>Mining Pool</a>",
        
        "Unused CSS remove",
        
        "Automated Price to I.C.O",
        
        "<a href='https://github.com/YankeeTube/Check-Win' target='_blank'>Vulnerability Check Tool</a>",
        
        "Web Site Check Vulnerabilities",
        
        "<a href='https://github.com/YankeeTube/Kakao_recovery' target='_blank'>KakaoTalk Restore Tool</a>",
        
        "Coupang Seller automation",
        
        "Blog auto Post after crawl",
        
        "Auto Increase view to C.G.V"
    ];
    
    var from = [
        "<a href='http://fourthblockchain.org' target='_blank'>SOOMPAY KOREA</a>",
        "<a href='http://fourthblockchain.org' target='_blank'>SOOMPAY KOREA</a>", 
        "yuae Jeon",
        "<a href='http://fourthblockchain.org' target='_blank'>SOOMPAY KOREA</a>",
        "Personal",
        "<a href='https://kbu.ac.kr' target='_blank'>K.B.U</a>",
        "The Public",
        "Nondisclosure",
        "Nondisclosure",
        "Nondisclosure"
    ];
    var date = ["2018.08", "2018.03 ~ 2018.08", "2018.09", "2018.01", "2017.05 ~ 2017.11", "2017.04 ~ 2017.05", "2018.03", "2017.03", "2017.04", "2017.05"];
    var position = ["Engineer"];
    var role = ["Custom Development & Error Handling", "Exclusive Delveopment", "Exclusive Development","Planning and Development", "Planning and Development", "Plan, Build, Modify, Check, Report", "analysis, Development", "Development","Development","Development"];
    $(".summarize > p:nth-child(1) > span").html(project[now]);
    $(".summarize > p:nth-child(2) > span").html(from[now]);
    $(".summarize > p:nth-child(3) > span").html(date[now]);
    $(".summarize2 > p:nth-child(1) > span").html(position[0]);
    $(".summarize2 > p:nth-child(2) > span").html(role[now]);
    overclass(now);
    if ((now == 1) && ($(".summarize2").children('p').length == 2)){
        $(".summarize2").append("<p>Desigend by <span>yuae Jeon</span></p>");
        $(".summarize2 > p:nth-child(2)").css({"flex":1.2});
    }
    else{
        $(".summarize2 > p:nth-child(2)").removeAttr('style');
        $(".summarize2 > p:nth-child(3)").remove();
    }
}

function overclass(numb){
    var category = {
        "blockexplorer":[
            ["Node JS", "★★★☆☆","Bitcore-lib, Insight-API"],["CSS","★★☆☆☆","Insight-UI, Bootstrap CSS"],["HTML","★★★☆☆","Insight-UI"],
            ["Daemon","★★★☆☆","Soomcore Daemon, soom.conf"]
        ], 
        "miningpool":[
            ["Python","★★★★★","Nondisclosure"],
            ["Python Twisted","★★☆☆☆","Async, JSON-RPC"],
            ["Python Django","★★★★☆","BackEnd, Merge to Get JSON, Regular Expression"],
            ["CSS","★★★☆☆","Custom CSS, Bootstrap CSS"],["HTML","★★★★★","Self Write"],
            ["JS","★★★★☆","highchart.js, Self Write, JSON"]
        ],
        "unusedcss":[
            ["Python","★★★★☆","CSS Utils, CSS Parser, Beautiful Soup"],
            ["CSS","★★★★☆","Custom CSS, Bootstrap CSS"],
            ["HTML", "★★★★★", "Data Crawling"]
        ],
        "priceico":[
            ["Python","★★★★☆","Selenium, win32api, pillow, fbchat"],
            ["HTML","★★★★☆","Crawling"],
            ["CSS","★★★★☆","Crawling"],
        ],
        "vulner":[
            ["Python","★★★★☆","win32api, winreg"],
            ["Windows","★★★★☆","Registry, Add function, group policy, command"],
            ["CSS", "★☆☆☆☆","Crawling, Handwriting"],
            ["HTML","★★★☆☆","Handwriting"]
        ],
        "sitecheck":[
            ["Python","★★★★☆","Development to Stress Attack Tools"],
            ["Windows XP","★★★★☆","APM Server"],
            ["PHP","★★★★☆","Custom Build code(Remove Secure Code)"],
            ["JS","★★★☆☆","Custom Build code(Remove Secure Code)"]
        ],
        "kakao":[
            ["Python","★★★★☆","python-magic, python-magic-bin"],
            ["Analysis","★★★☆☆","Hex-Editor"]
        ],
        "coupang":[
            ["Python","★★☆☆☆","Selenium, logger"],
            ["JS","★★★★☆","Change constraints"],
            ["CSS","★★★★☆","Crawling"],
            ["HTML","★★★★☆","Crawling"]
        ],
        "blogpost":[
            ["Python","★★★☆☆","Selenium, PyHook"],
            ["HTML","★★★★★","Crawling"],
            ["CSS","★★★☆☆","Crawling"],
            ["JS","★★★☆☆","Change constraints"],
        ],
        "cgv":[
            ["Python","★★☆☆☆","multiprocessing, thread, proxy, selenium"],
            ["HTML","★★☆☆☆","Crawling"],
            ["CSS","★★★☆☆","Crawling"],
        ]
    };
    
    var boxs = "<div class='info-contents'><div><p></p></div><div><p></p></div><div><p></p></div></div>";
    
    $(".info-contents").each(function(){
        $(this).remove();
    });
    var cnt = 0;
    $.each(category[Object.keys(category)[numb]], function(key,value){
        $(".someinfo").append(boxs);
        $.each(value, function(index, item){
            $($($(".info-contents")[cnt]).children('div')[index]).children('p').text(item);
        });
        cnt +=1;
    });
    description(numb);
}
function description(numb){
    var des = ["<p>Description</p><p>Block Explorer Custom && Error Handling</p><p><a href='http://fourthblockchain.org' target='_blank'>SOOMPAY Korea</a> 의 자사 코인인 SOOM Coin의 블록 생성 및 거래 추적등을 위해 개발한 블록 탐색기 입니다.</p><p>Bitpay에서 오픈소스 MIT 라이센스로 제공하는<a href='https://github.com/bitpay/bitcore' target='_blank'>Bitcore</a>와 <a href='https://github.com/bitpay/insight-api' target='_blank'>Insight</a>를 활용하여 개발하였습니다.</p><br/><p>촉박한 작업기간과 Node JS를 잘 모르는 극단적인 상황이었기에 더욱 애착이 느껴지는 작품입니다.</p><br/><p>공개된 코드상에는 이미 처리되지 않은 자잘한 오류조차 많았으며, 일단 붙이는 것에 초점을 두었으며,</p><p>Insight에서 제공하는 로컬 실행 동기화 방식이 아닌 Google 검색을 통해 얻은 정보로 RPC 연결 방식을 지향하였고</p><p>예상보다 빠른 작업속도로 인하여 Insight-UI 자체의 고질적 문제인 특정 해상도 이하로 떨어질 경우 첫번째 지갑주소가 누락되는 현상을 수정하였습니다.</p><p>UI는 해당되는 텍스트를 변경하여 진행한 뒤, 같은 내용 다른느낌을 주기 위해 색상 및 로고를 변경하였습니다.</p>",
    "<p>Description</p><p>Exclusive development</p><p><a href='http://fourthblockchain.org' target='_blank'>SOOMPAY Korea</a> 의 자사 코인인 SOOM Coin의 블록 채굴 및 모니터링을 위해 개발한 마이닝풀과 웹 입니다.</p><p>Open Source를 사용하여 <a href='https://en.bitcoin.it/wiki/Comparison_of_mining_pools' target='_blank'>PPLNS</a>기반의 마이닝 풀을 개발하였으며, 관련 코드는 비공개로 유치하고 있습니다.</p><br/><p>블록체인을 2014년 이론으로만 접하다가 해당 분야 개발에 첫발을 내딛는 뜻깊은 시작점이었습니다, </p><br/><p>처음에는 일반 블록체인과는 개념이 조금 다른 PPLNS를 사용하여 시행착오도 많았지만, </p><p>채굴에 성공 한 후 여러 설정 값들을 변경하며 Bitcoin 계열의 1세대 코인은 대체로 연결할 수 있었습니다.</p><p>사용하는 오픈소스에서도 웹 모니터링을 지원하였지만, 자사에서 사용하기에는 원하지 않는 부분도 있었고, <br/>로그인 기능을 지원하기 위하여 Django를 이용하여 새로 개발하게 되었습니다.</p><br/><p>UI는 yuae Jeon 디자이너 님께서 디자인 해주셨습니다.</p>",
    "<p>Description</p><p>Exclusive development</p><p>CSS Optimze Tool 이나 사이트를 이용했을 때 사용의 제약이 생각보다 많거나, 제대로 처리되지 않는 불안정한 효과로 인해 직접 개발하게 된 유틸리티입니다.</p><br/><p>CSS Utils를 사용하여 처음 CSS 파일을 파싱해왔을때 calc((100% - 100px) / 2) 와 같이 정규식을 이용한 파싱 방식을 채택하여, 괄호가 두번 들어가면 캐치가 안되는 현상이 있었고,</p><p>CSS Parser를 사용하여 파싱을 해오면 더블 괄호의 문제는 해결되지만 @media query인 CSS3 문법 파싱이 안되는 문제로 인하여 결국 두가지를 사용하여 Merge하는 방법을 채택했습니다.</p><br/><p>Merge를 했음에도 불구하고, @media 쿼리 내부에 존재하는 더블괄호는 파싱이 안되는 현상이 존재합니다. <br/>추후 업데이트를 통해 발전 시켜나갈 예정입니다.</p><p>media 쿼리가 제대로 적용이 안되는 문제로 인해 !important를 강제로 설정하는 옵션을 선택하여 현상 유지가 가능하며, 프레임워크를 사용하여 class, id 등을 추가할 수 있기에 사용자 강제 예외 추가도 가능합니다.<p/>",
    "<p>Description</p><p>Planning and development</p><p><a href='http://fourthblockchain.org' target='_blank'>SOOMPAY Korea</a> 의 자사 코인인 SOOM Coin I.C.O의 원활한 진행을 위해서 Ethereum Coin 가격과 달러 환율 정보를 매일 같은시간 기준 측정을 위해 자동화 한 프로그램입니다.</p><br/><p>Selenium을 활용하여 <a href='https://coinmarketcap.com/' target='_blank'>Coinmarketcap</a>에서 제공되는 Ethereum Coin 가격을 파싱하고 캡쳐하여 자동 저장합니다.</p><p>Selenium 자체의 느린 문제로 인하여, Javascript 기능을 사용하지 않는 옵션을 추가하였습니다.</p><br/><p>Windows 10 레드스톤2 업데이트 이후 패치시마다, 빠른 시작 켜기가 자동으로 설정되는 문제가 있어, 이 문제를 해결하기 위해, vbs 스크립트와 배치파일을 이용하여 자동화 하였습니다.  <a href='http://gmyankee.tistory.com/117' target='_blank'>[보러 가기]</a></p><br/><p>해당 정보는 Facebook Messenger를 통해 스크린샷과 가격정보를 계산하여 전달하는 방식을 채택하였습니다.<p/>",
    "<p>Description</p><p>Planning and development</p><p>주요 정보 통신 기반 시설 Windows 주요 취약점 점검 82개 항목을 대상으로 개발한 자동화된 점검 스크립트 입니다.</p><br/><p>실행 테스트는 현재 PC 제품군 Windows XP, 7, 8.1, 10에서 동작 확인하였으며,</p><p>서버 제품군에서는 Windows Server 2008, 2012 RS2, 2016에서 진행하였습니다.</p><br/><p>취약점 점검 수행 후 결과 내용을 Excel 파일과 HTML 파일로 생성하며, <br/>사용자 PC 성능에 따라 수행 시간이 지연될 수 있습니다.</p><br/><p>추가 예정 기능은 다음과 같습니다.</p><ul><li>- Linux Version( Debian, Redhat, Arch )</li><li>- CSV 파일 생성 / GUI 및 광고 추가</li><li>- 해당 취약점에 대한 설명 / 취약 상태 발견시 조치 선택적 유무</li><li>- 왜 취약으로 판단되는지에 대한 Description</li></ul>",
    "<p>Description</p><p>Plan, build, modify, check, report</p><p><a href='https://kbu.ac.kr' target='_blank'>경복대학교</a>에서 졸업 작품으로 진행한 웹 사이트 취약점 점검 입니다.</p><br/><p>Server : Vmware on Windows XP // Builder : Morning mall 2004 / APM</p><p>취약점 점검 항목 선정은 주요정보통신기반 시설, 국정원 8대 취약점, OWASP 10 - 2016을 바탕으로 18개 항목 선정</p><br/><p>점검은 자동화와 수동 2가지 방식으로 진행되었으며, 사전에 일부 시큐어 코드 및 서버 보안 설정을 제거하여 진행한 모의 취약점 점검 진단 입니다.</p><br/><p>결과물은 다음과 같습니다.</p><ul><li>계획서 : <a class='plan_view'>View</a></li><li>보고서 : <a class='report_view''>View</a></li><li>비디오 : <a class='video_view'>View</a></li></ul>",
    "<p>Description</p><p>Analysis, Develop</p><p>카카오톡 캐시 폴더 내부를 보고있다가 유난히 용량이 크길래 파일을 까봤더니 파일 확장자는 있는데 확장자가 변경 또는 제거 되어 있길래 추가했더니 원본이 살아나는걸 보고 만들어서 오픈소스로 배포하게 되었습니다.</p><br/><p>Windows 10 용으로 개발 하였다가, 7, 8.1도 쓸수 있게 magic 라이브러리를 수정하였습니다.</p><p>현재 PC로 옮겨와야 하는 불편한 과정이 있어 Application으로 스스로 처리할 수 있도록 개발중에 있습니다.</p><br/><p>정말 우연찮게 발견하여 뜻밖의 쾌거를 이룬 작품이라 상상이상의 가치를 얻게 되었습니다.</p><br/><p>Result</p><ul><li>파일 다운로드 : <a href='https://goo.gl/mPkQBG' target='_blank'>Download</a></li><li>관련 내용 : <a href='http://gmyankee.tistory.com/131' target='_blank'>View</a></li><li>관련 영상 : <a href='https://www.youtube.com/watch?v=zvrgCDUjHYQ&t=36s' target='_blank'>View</a></li></ul>",
    "<p>Description</p><p>Development</p><p>가장 처음으로 외주 작업을 진행해본 작품입니다.</p><br/><p>생각했던것 보다 훨씬 많은 쿠팡 판매자 사이트의 엄청난 예외처리로 인해 덩달아 고생하며, 요청 수식을 적용하느라,</p><p>클라이언트와의 지속된 커뮤니케이션과 컨펌이 필요로하였고, 해당 작업으로 인하여 많은 성장을 하는 계기가 되었습니다.</p><br/><p>클라이언트 분 께서 많은 이해를 해주셨고 원만한 소통을 통하여 작업을 진행하였기에 <br/>추후 추가 작업도 요청받을 수 있었습니다.</p><br/><p>부족한 실력으로 저의 코드가 무엇이 부족한지 깨닫게 해주는 인상깊은 프로그램입니다.</p>",
    "<p>Description</p><p>Development</p><p>두번째로 진행하였던 외주 작업입니다.</p><br/><p>특정 사이트에서 경기 내용을 파싱하여 네이버 블로그에 자동 포스팅하면 되는 간단한 외주 인줄 알고, 얕봤다가 큰코를 다친 케이스였습니다.<p>결과적으로 네이버 블로그에서 에디터가 1.0에서 2.0으로 바뀐지 얼마안된 시기였습니다.</p><p>html 코드로 생성하여 붙여넣으려고 하였지만 네이버 블로그 에디터가 2.0에서는 제한적인 기능이 많았으며,</p><p>이를 1.0으로 사용하려 하여도 네이버 측에서 XSS 방어 코드가 JS 및 백엔드가 등재되어 있기 때문에<br/>이는 사용할 수 없었습니다.</p><br/><p>해결 방안으로 데이터를 Ctrl + a / Ctrl + C를 이용하여 다시 네이버 블로그에서 Ctrl + V 작업을 진행하여 데이터 복사가 되는것을 확인하고 반드시 길이 있다는것을 다시금 깨닫게 되는 계기였습니다.",
    "<p>Description</p><p>Development</p><p>세번째로 진행하였던 외주 작업입니다.</p><br/><p>네이버 영화 페이지에서 C.G.V 신규 특정 영화를 선택하여 조회수를 증진 시키는<br/>프로그램을 개발하는 작업이었습니다.</p><br/><p>클라이언트 측에서 프록시 ip 2천개를 대여 하여 제공해주었고, 파이썬의 GIL이 문제가 되었지만<br/>Multiprocessing 기술을 사용하여 대체 작업이 가능하였습니다.</p><p>프록시 ip를 순차 적용하기 위해 Queue 자료구조 방식을 채택하여 개발하였으며<br/>이전에 했던 작업들로 인하여 생각보다 큰 문제 없이 진행되었습니다.</p><br/><p>추가로 클라이언트가 요구하였던 수식 계산후 DB 업데이트를 진행하는 작업을 진행하며, 다 방면의 기술을 적용해보는 시간이었습니다.</p>"
    ];
    
    $(".descript").remove();
    $(".overClass").append("<div class='descript'></div>");
    $(".descript").html(des[numb]);
    
}

// Slider
function sliderTimer()
{
  timer= setInterval(slider, 2000);
}

function slider()
{
  cnt++;
  if(cnt == imgadr.length)
    cnt= 0;

  var slider= document.getElementById('slider');
  slider.style.backgroundImage= "url(\'"+imgadr[cnt]+"\')";
  document.getElementById('sliderHeader').innerHTML= headArray[cnt];  //or append?
  document.getElementById('sliderPara').innerHTML= paraArray[cnt];
}

function next()
{
  clearInterval(timer);
  
  cnt++; 
  if(cnt == imgadr.length)
    cnt= 0;
    
  var slider= document.getElementById('slider');
  slider.style.backgroundImage= "url(\'"+imgadr[cnt]+"\')";
  document.getElementById('sliderHeader').innerHTML= headArray[cnt];
  document.getElementById('sliderPara').innerHTML= paraArray[cnt];
  
  sliderTimer();
}

function prev()
{
console.log('prev');
  clearInterval(timer);
  
  cnt--;
  if(cnt == -1)
    cnt= imgadr.length-1;

  var slider= document.getElementById('slider');
  slider.style.backgroundImage= "url(\'"+imgadr[cnt]+"\')";
  document.getElementById('sliderHeader').innerHTML= headArray[cnt];
  document.getElementById('sliderPara').innerHTML= paraArray[cnt];
    
  sliderTimer();
}
