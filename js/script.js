//Static
var title_list = ["blockexplorer","miningpool","unusedcssremove","automatedpricetoi.c.o","vulnerabilitychecktool","websitecheckvulnerabilities","kakaotalkrestoretool","coupangsellerautomation","blogautopostaftercrawl","autoincreaseviewstoc.g.v"];
var cnt= 0;
var timer;
var imgadr;
var headArray;
var paraArray;
var now;
// 반복
$(document).ready(function(){
    setInterval(parserTitle,1000);
});

function parserTitle(){
    var title = $(".viewer-title-bar > div > p").text().replace(/ /gi, "").toLowerCase();

    var now_index = title_list.indexOf($(".viewer-title-bar > div > p").text().replace(/ /gi, "").toLowerCase());
    console.log(title);
    
    if (now_index == 0){
        imgadr= ['./img/project/blockexplorer/home.jpg','./img/project/blockexplorer/blocks.jpg','./img/project/blockexplorer/status.jpg','./img/project/blockexplorer/api.jpg'];
        headArray= ['HOME','BLOCKS', 'STATUS', 'JSON API'];
        paraArray= ['Bitcore Insight Block Explorer Main Page.',
            'Current Cryptocurrency view all Blocks', 
            'Current Cryptocurrency view information Status',
            'Insight-api'];
        
    }
    else if (now_index == 1){        
        imgadr= ['./img/project/miningpool/login.jpg','./img/project/miningpool/home.jpg','./img/project/miningpool/dashboard.jpg','./img/project/miningpool/api.jpg'];
        headArray= ['LOGIN','HOME', 'DASHBOARD', 'JSON API'];
        paraArray= ['PPLNS Mining Pool Login Page.',
            'PPLNS Mining Pool Home(index)', 
            'PPLNS Mining Pool and Miner Status',
            'PPLNS Global Status'];
    }
}

function sliderTimer()
{
  timer= setInterval(slider, 2500);
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
