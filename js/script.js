//Static
title_list = ["blockexplorer","miningpool","unusedcssremove","automatedpricetoi.c.o","vulnerabilitychecktool","websitecheckvulnerabilities","kakaotalkrestoretool","coupangsellerautomation","blogautopostaftercrawl","autoincreaseviewstoc.g.v","soompay"];
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
        changeSummarize(now_index);
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
        
        "Auto Increase view to C.G.V",
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
    var des = ['<h1><a id="Block_Explorer_0"></a>Block Explorer</h1><p>Visit : <a href="http://explorer.soomcoin.net/insight" target="_blank">Soom Explorer</a></p><h3><a id="_Summary_Tech_4"></a>* Summary Tech</h3><ul><li>Customizing</li><li>Trouble Shooting</li><li>Manage to Docker Container</li></ul><h3><a id="_requirements_9"></a>* requirements</h3><ul><li>nvm 0.3+</li><li>npm 8+</li><li>nodejs 4+</li><li>python 3.*</li><li>sqlite3</li><li>bitcore-lib</li><li>insight-api</li><li>insight-ui</li></ul><h3><a id="_Description_19"></a>* Description</h3><blockquote><p><a href="http://fourthblockchain.org" target="_blank">Soompay</a>의 자사 코인인 SOOM Coin은<br>블록 생성 및 거래 추적등을 직관적으로 보기 위하여 개발한 블록 탐색기 입니다.<br>Bitpay에서 오픈소스 MIT 라이센스로 제공하는 <a href="https://github.com/bitpay/bitcore" target="_blank">Bitcore</a>와 <a href="https://github.com/bitpay/insight-api" target="_blank">Insight</a>를 사용하여 개발하였습니다.<br>촉박한 작업기간과 Node.JS를 처음 접해보는 극단적인 상황이었기에 더욱 애착이 느껴지는 작품입니다.</p></blockquote><blockquote><p>공개된 <a href="https://github.com/bitpay/insight-api" target="_blank">Insight</a> 코드상에는 이미 처리되지 않은 자잘한 오류조차 많았으며,<br>일단 붙이는 것에 초점을 맞추었고, Insight에서 제공하는 로컬 데몬 실행 방식이 아닌<br>Google 검색을 통해 얻은 정보로 JSON-RPC 통신 방식을 채택하였습니다.</p></blockquote><blockquote><p>예상보다 빠른 작업속도로 인하여 Insight-UI 버그로 알려진<br>특정 해상도 이하보다 낮을 경우 첫번째 지갑주소가 누락되는 현상을 수정하였습니다.<br>UI는 해당되는 텍스트를 변경하여 진행한 뒤, 자사의 디자인과 느낌을 살리기 위해<br>일부 CSS를 변경하였습니다.</p></blockquote><p>company wants to keep this source code private.</p>',
    '<h1><a id="Mining_Pool_0"></a>Mining Pool</h1><p>Visit : <a href="http://asic.soomcoin.net" target="_blank">Mining Pool Web</a></p><h3><a id="_Summary_Tech_4"></a>* Summary Tech</h3><ul><li>Exclusive development</li><li>Trouble Shooting</li><li>Async</li><li>Hash Algorighm</li></ul><h3><a id="_requirements_10"></a>* requirements</h3><ul><li>python 2.7.*</li><li>sqlite3</li><li>Twisted</li><li>Twisted Web</li><li>Django</li><li>gcc</li></ul><h3><a id="_Description_18"></a>* Description</h3><blockquote><p><a href="http://fourthblockchain.org" target="_blank">SOOMPAY Korea</a>의 자사 코인인 SOOM Coin은<br>사용자들의 블록 채굴 및 모니터링의 편의성을 제공하기 위하여 개발한 마이닝풀과 웹 사이트 입니다.</p></blockquote><blockquote><p>Open Source를 사용하여 <a href="https://en.bitcoin.it/wiki/Comparison_of_mining_pools" target="_blank">PPLNS</a> 기반의 마이닝 풀을 개발하였으며,<br>관련 코드는 비공개로 유치하고 있습니다.</p></blockquote><blockquote><p>블록체인을 2014년에 처음 인터넷을 통하여 이론으로만 접하다가<br>2017년 12월 SOOMPAY를 통하여 해당 관련 분야 개발에 처음 도전해보는 계기 였습니다.<br>마이닝 분야를 전담 개발하게 되었고, 처음에는 일반 블록체인과는 개념이 조금 다른<br>PPLNS를 사용하여 공유체인이라는 내용을 또 새롭게 알게되고 시행착오도 많았지만<br>채굴에 성공 한 후 여러 설정 값들을 변경하며 Bitcoin 계열의 1세대 코인은 대체로 연결할 수 있었습니다.</p></blockquote><blockquote><p>사용하는 오픈소스에서도 웹 모니터링 사이트를 제공하였지만, 자사에서 사용하기에는 원치 않는 부분도 있었고<br>로그인 기능을 지원하기 위하여 Django를 이용하여 새로 개발하게 되었습니다.<br>Front End / Back End 개발 및 일부 UX는 직접 진행하였고<br>전체적인 UX/UI Design은 yuae Jeon 디자이너 님께서 디자인 해주셨습니다.</p></blockquote><p>company wants to keep this source code private.</p>',
    '<h1><a id="Unused_CSS_Remove_0"></a>Unused CSS Remove</h1><h3><a id="_Summary_Tech_4"></a>* Summary Tech</h3><ul><li>Exclusive development</li></ul><h3><a id="_requirements_7"></a>* requirements</h3><ul><li>python 2.7.*</li><li>CSS Utils</li><li>CSS Parser</li><li>Regular Expression</li></ul><h3><a id="_Description_13"></a>* Description</h3><blockquote><p>CSS Optimze Tool 이나 사이트를 이용했을 때 사용의 제약이 생각보다 많거나,<br>제대로 처리되지 않는 불안정한 효과로 인해 직접 개발하게 된 유틸리티입니다.</p></blockquote><blockquote><p>CSS Utils를 사용하여 처음 CSS 파일을 파싱해왔을때 calc((100% - 100px) / 2) 와 같이<br>정규식을 이용한 파싱 방식을 채택하였지만, 괄호가 두번 들어가면 캐치가 안되는 현상이 있었고,<br>CSS Parser를 사용하여 파싱을 해오면 근본적인 더블 괄호의 문제는 해결되지만<br>@media query인 CSS3 문법 파싱이 안되는 문제로 인하여 결국 두가지를 사용하여 Merge하는 방법을 채택했습니다.</p></blockquote><blockquote><p>Merge를 했음에도 불구하고, @media 쿼리 내부에 존재하는 더블괄호는 파싱이 안되는 현상이 존재합니다.<br>지속적인 업데이트를 통해 발전 시켜나갈 예정입니다.<br>media 쿼리가 제대로 적용이 안되는 문제로 인해 !important를 강제로 설정하는 옵션을 선택하여<br>현상 유지가 가능하며, 프레임워크를 사용하여 class, id 등을 추가할 수 있기에 사용자 강제 예외 추가도 가능합니다.</p></blockquote><p>The source code is not publicized, and is being repared.</p>',
    '<h1><a id="Automated_Price_to_ICO_0"></a>Automated Price to I.C.O</h1><h3><a id="_Summary_Tech_4"></a>* Summary Tech</h3><ul><li>Exclusive development</li><li>Planning and development</li><li>Refactoring</li><li>Maintenance</li></ul><h3><a id="_requirements_10"></a>* requirements</h3><ul><li>python 3.5+</li><li>selenium</li><li>Chromedriver 2.42+</li><li>Django 1.2+</li></ul><h3><a id="_Description_16"></a>* Description</h3><blockquote><p>SOOMPAY Korea의 자사 코인인 SOOM Coin I.C.O FreeSale의 원활한 진행을 위해서<br>Bitcoin, Ethereum, SOOM Coin의 가격과 달러 환율 정보를 매일 같은시간 기준 측정을 위해<br>자동화를 진행하였고, 카카오톡 플러스 친구를 통해 가격 정보를 제공합니다.</p></blockquote><blockquote><p>Selenium을 활용하여 <a href="https://coinmarketcap.com/" target="_blank">Coin Market Cap</a>에서 제공되는 Bitcoin, Ethereum, SOOM Coin 가격을<br>파싱하고 캡쳐하여 자동 저장합니다.<br>Selenium 자체의 느린 문제로 인하여, Javascript 기능을 비활성화 하는 방식을 채택하였습니다.<br>Windows 10 레드스톤2 업데이트 이후 패치시마다, 빠른 시작 켜기가 자동으로 설정되는 문제가 있어,<br>이 문제를 해결하기 위해, vbs 스크립트와 배치파일을 이용하여 자동화 하였습니다. <a href="http://gmyankee.tistory.com/117" target="_blank">FastBoot disabled</a></p></blockquote><blockquote><p>1,2,3 차 FreeSale 시에는 Facebook Messenger를 통해 스크린샷과 가격정보를 계산하여<br>전달하는 방식을 채택하였습니다.</p></blockquote><blockquote><p>CRP Token FreeSale의 경우는 Django를 이용하여 직관성있는 URL을 생성한 REST-API로<br>KakaoTalk API로 제공중인 Plus 친구 기능을 이용하여 버튼 이벤트 발생시<br>오늘 일자의 가격 정보를 전달해주는 방식으로 변경하였습니다.</p></blockquote><p>The source code is not publicized, and is being prepared.</p>',
   '<h1><a id="Vulnerability_Check_Tool_0"></a>Vulnerability Check Tool</h1><p>visit : <a href="https://github.com/YankeeTube/Check-Win">Source</a></p><h3><a id="_Summary_Tech_3"></a>* Summary Tech</h3><ul><li>Planning and development</li><li>Maintenance</li></ul><h3><a id="_requirements_7"></a>* requirements</h3><ul><li>python 3.5+</li><li>requests</li><li>openpyxl</li><li>win32com</li><li>wmi</li><li>lxml</li><li>winstat</li></ul><h3><a id="_Description_16"></a>* Description</h3><blockquote><p>주요 정보 통신 기반 시설 Windows 주요 취약점 점검 82개 항목을 대상으로 개발한 자동화된 점검 스크립트 입니다.</p></blockquote><blockquote><p>실행 테스트는 현재 PC 제품군 Windows XP, 7, 8.1, 10에서 동작 확인하였으며,<br>서버 제품군에서는 Windows Server 2008, 2012 RS2, 2016에서 진행하였습니다.</p></blockquote><blockquote><p>취약점 점검 수행 후 결과 내용을 Excel 파일과 HTML 파일로 생성하며<br>사용자 PC 성능에 따라 수행 시간이 지연될 수 있습니다.</p></blockquote><h6><a id="_____26"></a>추가 예정 기능은 다음과 같습니다.</h6><blockquote><ul><li>1. Linux Version( Debian, Redhat, Arch )</li><li>2. CSV 파일 생성 / GUI 및 광고 추가</li><li>3. 해당 취약점에 대한 설명 / 취약 상태 발견시 조치 선택적 유무</li><li>4. 왜 취약으로 판단되는지에 대한 Description</li></ul></blockquote><p>This source code is public on the github.</p>',
    '<h1><a id="Web_Site_Check_Vulnerabilities_0"></a>Web Site Check Vulnerabilities</h1><h3><a id="_Summary_Tech_4"></a>* Summary Tech</h3><ul><li>Planning and development</li><li>Maintenance</li><li>Delete to Secure Code</li><li>Report</li></ul><h3><a id="_requirements_10"></a>* requirements</h3><ul><li>python 3.5+</li><li>selenium</li><li>WireShark</li><li>Sqlmap</li><li>Acunetix</li><li>Burp Suite</li><li>Falcon Proxy</li><li>DirBuster</li><li>Yasca</li></ul><h3><a id="_Description_21"></a>* Description</h3><blockquote><p><a href="https://kbu.ac.kr">경복대학교</a>에서 졸업 작품으로 진행한 웹 사이트 취약점 점검 입니다.</p><ul><li>Server : Vmware on Windows XP</li><li>Builder : Morning mall 2004 with APM</li></ul></blockquote><blockquote><p>취약점 점검 항목 선정은 주요정보통신기반 시설, 국정원 8대 취약점,<br>OWASP 10 - 2016등을 바탕으로 18개 항목을 선정하였습니다.</p></blockquote><blockquote><p>점검은 자동화와 수동 2가지 방식으로 진행되었으며,<br>사전에 일부 보안 코드 및 서버 보안 설정을 제거하여 진행한 모의 취약점 점검 진단입니다.</p></blockquote><blockquote><p>결과물은 다음과 같습니다.</p></blockquote><ul><li>계획서 : <a class="plan_view">View</a></li><li>보고서 : <a class="report_view">View</a></li><li>비디오 : <a class="video_view">View</a></li></ul><p>The source code is not publicized, and is being prepared.</p>',
    '<h1><a id="Vulnerability_Check_Tool_0"></a>Kakaotalk Restore Tool</h1><p>visit : <a href="https://gist.github.com/YankeeTube/1374530fa1b8df2eb0861be35269a19a" target="_blank">Source</a></p><h3><a id="_Summary_Tech_5"></a>* Summary Tech</h3><ul><li>Planning and development</li><li>File Header Analysis</li></ul><h3><a id="_requirements_9"></a>* requirements</h3><ul><li>python 3.*+</li><li>python-magic</li><li>python-magic-bin-0.4.14</li><li>shutil</li><li>ES File Explorer</li><li>Wireless network</li></ul><h3><a id="_Description_17"></a>* Description</h3><blockquote><p>카카오톡 캐시 폴더 내부를 보고있다가 유난히 용량이 크길래 파일을 열어 봤더니<br>파일 확장자는 있는데 확장자가 제거 되어 있길래 추가해보니 원본이 살아나는걸 보고 만들어서<br>오픈소스로 배포하게 되었습니다.<br>Windows 10 용으로 개발 하였다가, 7, 8.1도 쓸수 있게 magic 라이브러리를 수정하였습니다.<br>현재 PC로 옮겨와야 하는 불편한 과정이 있어 Application으로 스스로 처리할 수 있도록 개발중에 있습니다.</p></blockquote><blockquote><p>정말 우연찮게 발견하여 뜻밖의 쾌거를 이룬 작품이라 상상이상의 가치를 얻게 되었습니다.</p></blockquote><ul><li>파일 다운로드 : <a href="https://goo.gl/mPkQBG" target="_blank">Download</a></li><li>관련 내용 : <a href="http://gmyankee.tistory.com/131" target="_blank">View</a></li><li>관련 영상 : <a href="https://www.youtube.com/watch?v=zvrgCDUjHYQ&amp;t=36s" target="_blank">View</a></li></ul><p>This source code is public on the gist.<br>',
    '<h1><a id="Coupang_seller_automation_0"></a>Coupang seller automation</h1><h3><a id="_Summary_Tech_3"></a>* Summary Tech</h3><ul><li>Out Sourcing</li><li>Development</li></ul><h3><a id="_requirements_7"></a>* requirements</h3><ul><li>python 3.5+</li><li>selenium</li><li>chromedriver 2.30+</li><li>requests</li><li>Regular Expression</li><li>Beautiful Soup</li><li>logging</li></ul><h3><a id="_Description_16"></a>* Description</h3><blockquote><p>가장 처음으로 외주 작업을 진행해본 작품입니다.<br>생각했던것 보다 훨씬 많은 쿠팡 판매자 사이트의 엄청난 예외처리로 인해 덩달아 고생하며,<br>요청 수식을 적용하느라, 클라이언트와의 지속된 커뮤니케이션과 컨펌이 필요로하였고,<br>해당 작업으로 인하여 많은 성장을 하는 계기가 되었습니다.</p></blockquote><blockquote><p>클라이언트 분 께서 많은 이해를 해주셨고 원만한 소통을 통하여 작업을 진행하였기에<br>추후 추가 작업도 요청받을 수 있었습니다.</p></blockquote><blockquote><p>부족한 실력으로 저의 코드가 무엇이 부족한지 깨닫게 해주는 인상깊은 프로그램입니다</p></blockquote><p>client wants to keep this source code private.<br>',
    '<h1><a id="Blog_auto_post_after_Crawl_0"></a>Blog auto post after Crawl</h1><h3><a id="_Summary_Tech_3"></a>* Summary Tech</h3><ul><li>Out Sourcing</li><li>Development</li></ul><h3><a id="_requirements_7"></a>* requirements</h3><ul><li>python 3.5+</li><li>selenium</li><li>chromedriver 2.30+</li><li>requests</li><li>Regular Expression</li><li>Beautiful Soup</li><li>logging</li></ul><h3><a id="_Description_16"></a>* Description</h3><blockquote><p>두번째로 진행하였던 외주 작업입니다.<br>특정 사이트에서 경기 내용을 파싱하여 네이버 블로그에 자동 포스팅하면 되는 간단한 외주 인줄 알고,<br>얕봤다가 생각보다 많은 난항을 겪었던 케이스였습니다.</p></blockquote><blockquote><p>타이밍 또한 좋지 않아 네이버 블로그에서 Editor 버전이 1.0에서 2.0으로 변경되는 시기였습니다.</p></blockquote><blockquote><p>html 코드로 생성하여 붙여넣으려고 하였지만<br>네이버 블로그 에디터가 2.0에서는 제한적인 기능이 많았으며,<br>Editor를 1.0으로 사용하여 html 구문을 복사 하여도 네이버 측에서 XSS 공격을 방지하기 위한 JS가 존재하여 html 양식을 통째로 복사하여 사용할 수 없었습니다</p></blockquote><blockquote><p>해결 방안으로 데이터를 Ctrl + a / Ctrl + C를 이용하여 클립보드에 저장하였다가,<br>다시 네이버 블로그에서 Ctrl + V 작업을 진행하여 데이터 복사가 되는것을 확인하고<br>여러 관점에서 바라본다면 반드시 방법은 존재하다는것을 다시금 깨닫게 되는 계기였습니다.</p></blockquote><p>client wants to keep this source code private.<br>',
    '<h1><a id="Auto_Increase_views_to_CGV_0"></a>Auto Increase views to C.G.V</h1><h3><a id="_Summary_Tech_3"></a>* Summary Tech</h3><ul><li>Out Sourcing</li><li>Development</li></ul><h3><a id="_requirements_7"></a>* requirements</h3><ul><li>python 3.5+</li><li>MultiProcess</li><li>Threading</li><li>selenium</li><li>chromedriver 2.30+</li><li>requests</li><li>Regular Expression</li><li>Beautiful Soup</li><li>logging</li></ul><h3><a id="_Description_16"></a>* Description</h3><blockquote><p>세번째로 진행하였던 외주 작업입니다.</p></blockquote><blockquote><p>네이버 영화 페이지에서 C.G.V 신규 특정 영화를 선택하여<br>조회수를 증진 시키는 프로그램을 개발하는 내용이었습니다.</p></blockquote><blockquote><p>클라이언트 측에서 프록시 ip 2천개를 대여 하여 제공해주었고,<br>파이썬의 Thread를 사용하여 하기에는 싱글스레딩인 GIL이 문제가 되었지만,<br>Multiprocessing 기술을 사용하여 대체 작업이 가능하였습니다.<br>프록시 ip를 순차 적용하기 위해 Queue 자료구조 방식을 채택하여 개발하였으며</p></blockquote><blockquote><p>이전에 했던 작업들로 인하여 생각보다 큰 문제 없이 진행되었습니다.<br>추가로 클라이언트가 요구하였던 수식 계산후 DB 업데이트를 진행하는 작업을 진행하며,<br>멀티프로세싱과 Queue를 처음 실 사용 해보는 좋은 계기였습니다.</p></blockquote><p>client wants to keep this source code private.<br>'
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
  if(cnt == imgadr.length){
    cnt= 0;
  }else if(cnt > imgadr.length){
      cnt = 0;
  }

  var slider= document.getElementById('slider');
  slider.style.backgroundImage= "url(\'"+imgadr[cnt]+"\')";
  document.getElementById('sliderHeader').innerHTML= headArray[cnt];  //or append?
  document.getElementById('sliderPara').innerHTML= paraArray[cnt];
}

function next()
{
  clearInterval(timer);
  
  cnt++;
  if(cnt == imgadr.length){
    cnt= 0;
  }else if(cnt > imgadr.length){
      cnt = 0;
  }
    
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
