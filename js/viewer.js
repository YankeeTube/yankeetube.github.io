$(document).ready(function(){
    setInterval(hideOverclass,100);
    $('.carousel').carousel({interval: 2000});
    
    $(".moreBtn").on("click",function(event){
        var title = $(".viewer-title-bar > div > p").text().replace(/ /gi, "").toLowerCase();
        var now_index = title_list.indexOf($(".viewer-title-bar > div > p").text().replace(/ /gi, "").toLowerCase());
        
       $(".overClass").css({"display":"block"});
        event.preventDefault();
        $('.viewer-sub-content').animate({scrollTop:$(this).offset().top}, 1000);
    });
    $(".viewer, .viewer-title-bar").on("click",function(){
        viewerClick();
    });
    $(".content, .title-bar, .title-bar > div").on("click",function(){
        contentClick();
    });
    
    
    $("div.current-folder-content > div > div").on("click",function(){
        if ($(".viewer").css("display") == "none"){
            $(".viewer").addClass('opend');
            $(".viewer").fadeToggle("fast");
            $(".viewer-title-bar").children('div').children('i').attr('class',$(this).children('i').attr('class'));
            $(".viewer-title-bar").children('div').children('p').text($(this).children('p').text());
            var content = Number($(".content").css("z-index"));
            $(".viewer").css({"z-index":Number(content+1)});
        }
        if ($(this).hasClass('type1') == true){
            divChange(0);
        }
        else if ($(this).hasClass('type2') == true){
            var edu_list = ["creditbank","kyeongbokuniversity","g4middleschool"];
            eduChange(edu_list.indexOf($(this).text().replace(/ /gi, "").replace(/\n/gi,"").toLowerCase()));
            divChange(1);
        }
        else if ($(this).hasClass('type3') == true){
            var cert_list = ["digitalforensic","informationsecurity","informationprocessing","ccna","networkmanagement","pcmaster","e-testprofessional","itq한글b","itqexcelb","itqpowerpointc"];
            divChange(2);
            certifiChange(cert_list.indexOf($(this).text().replace(/ /gi, "").replace(/\n/gi,"").toLowerCase()));
        }
        else if ($(this).hasClass('type4') == true){
            divChange(3);
        }
    else{
        divChange(-1);
    }
    });
});
function divChange(numb){
    $(".viewer-sub-content").children('div').each(function(index, item){
        if (index == numb){
           $(item).show();
        }
        else{
            $(item).hide();
        }
        if ($(".viewer-sub-content").children
            ('div').length <= 1){
            $(".viewer-sub-content").append("<div><p>코드 작성 중입니다.</p></div>");
        }
    });
}
function certifiChange(numb){
    var cert_thumb = [
        "<iframe src='https://drive.google.com/file/d/1JWII7LuGyXnmbb9-2ICv16kA7k3DQK3-/preview' width='100%' height='100%'></iframe>",
        
        "<iframe src='https://drive.google.com/file/d/1GvYeVMGKBnFdPZFYCxbhdJrbqDHZInyk/preview' width='100%' height='100%'></iframe>",
        
        "<iframe src='https://drive.google.com/file/d/1Fr7cX4CgRcg-rx2vInouNeMav1xxzwpt/preview' width='100%' height='100%'></iframe>",
        
        "<iframe src='https://drive.google.com/file/d/1ozU0T6kXd0mZsfk7HP13Yj4YI-dgvNGB/preview' width='100%' height='100%'></iframe>",
        
        "<iframe src='https://drive.google.com/file/d/1o6usa4e24fhPJc4RSvQyfBctEhM8ufuw/preview' width='100%' height='100%'></iframe>",
        
        "<iframe src='https://drive.google.com/file/d/1QbqgMMNdRq9nr2eUD21YvVOQCauxBjjC/preview' width='100%' height='100%'></iframe>",
        
        "<iframe src='https://drive.google.com/file/d/1KRSl93CgV317VqIEvKMUsezSYVuLcwGa/preview' width='100%' height='100%'></iframe>",
        
        "<iframe src='https://drive.google.com/file/d/1DIdxchRriPzr41Bpm13LdKwYWB34NFU5/preview' width='100%' height='100%'></iframe>",
        "<iframe src='https://drive.google.com/file/d/1DIdxchRriPzr41Bpm13LdKwYWB34NFU5/preview' width='100%' height='100%'></iframe>",
        "<iframe src='https://drive.google.com/file/d/1DIdxchRriPzr41Bpm13LdKwYWB34NFU5/preview' width='100%' height='100%'></iframe>"];
    console.log(cert_thumb[numb]);
    $(".thumbnail").css({"background":"url('')"});
    $(".thumbnail").html(cert_thumb[numb]);
    
    var cert_name = ["디지털 포렌식 전문가 2급","정보보안 산업기사","정보처리 산업기사","Cisco Certification Network Associate","네트워크 관리사 2급", "PC Master(정비사)","E-Test Professionals 엑셀","정보기술자격(ITQ) 한글 B급","정보기술자격(ITQ) Excel B급","정보기술자격(ITQ) PowerPoint C급"];
    var cert_division = ["필기","합격","합격","합격","합격","합격","합격","합격","합격","합격"];
    var cert_date = ["2017.10","2016.12.09","2016.05.06","2015.01.08","2016.06.07","2014.07.11","2014.12.02","2012.01.10","2011.12.08","2013.05.06"];
    var cert_issue = ["(사)한국포렌식학회","한국인터넷진흥원","한국산업인력공단","CISCO (시스코 시스템즈)","한국정보통신자격협회","한국정보평가협회","삼성SDS 멀티캠퍼스","한국생산성본부(KPC)","한국생산성본부(KPC)","한국생산성본부(KPC)"];
    
    $($($(".line-1")[4]).children('span')[1]).text(cert_name[numb]);
    $($($(".line-1")[5]).children('span')[1]).text(cert_division[numb]);
    $($($(".line-1")[6]).children('span')[1]).text(cert_date[numb]);
    $($($(".line-1")[7]).children('span')[1]).text(cert_issue[numb]);
    
}
function eduChange(numb){
    var edu_name = ["<a href='https://www.cb.or.kr/creditbank/base/nMain.do' target='_blank'>Credit Bank</a>","<a href='http://dept.kbu.ac.kr/association/AI017_VP_002.do?comtySeq=C20140116135056783268' target='_blank'>Kyeong Bok University</a>", "<a href='http://www.ggmt.hs.kr/144604/subMenu.do' target='_blank'>Kyeong gi Machine Industry Middle School</a>"];
    var edu_major = ["Information protection","IT Security","Energy Control"];
    var edu_division = ["Expecting to graduate","Graduation","Graduation"];
    var edu_period = ["2015.05 ~ 2019.02","2014.03 ~ 2018.02", "2011.03 ~ 2014.02"];
    $($($(".line-1")[0]).children('span')[1]).html(edu_name[numb]);
    $($($(".line-1")[1]).children('span')[1]).text(edu_major[numb]);
    $($($(".line-1")[2]).children('span')[1]).text(edu_division[numb]);
    $($($(".line-1")[3]).children('span')[1]).text(edu_period[numb]);
    
    var edu_thumb = ["./img/creditBank.png","./img/kbu.jpeg","./img/ggmt.jpg"];
    $(".thumbnail").empty();
    $(".thumbnail").css({"background":"url(" + edu_thumb[numb] + ")", 'background-repeat' : 'no-repeat', 'background-position':'center center','background-size':"contain"});
}

function viewerClick(){
    var viewer = Number($(".viewer").css("z-index"));
    var content = Number($(".content").css("z-index"));
    if ($(".viewer").hasClass('opend') == true){
        $(".viewer").removeClass('opend');
    }
    if (viewer < content){
        $(".viewer").css({"z-index":Number(viewer)+Number(content - viewer)+1});
    }
    else if (viewer == content){
        $(".viewer").css({"z-index":Number(viewer)+1});
    }
}

function contentClick(){
    var viewer = Number($(".viewer").css("z-index"));
    var content = Number($(".content").css("z-index"));
    if ($(".viewer").hasClass('opend') == false){
        if (content < viewer){
            $(".content").css({"z-index":Number(content)+Number(viewer - content)+1});
        }
        else if (content == viewer){
            $(".content").css({"z-index":Number(content)+1});
        }
    }
}

function hideOverclass(){
    if ($(".viewer").css("display") == "none"){
        $(".overClass").css({"display":"none"});
    }
}