 
   /* This HTML page and script files are developed by
    Piyali Chattopadhyay
    Project Scientist-Technical,
    Virtual Labs IIT Kharagpur.*/      

	
$(document).ready(function () {
    $(document).on('mouseenter', '#instcontrol', function () {                       
        $("#inst").show();

    })/*.on('mouseleave', '#instcontrol', function () {
        $("#inst").hide();
    });*/
});

/////////////////////////////////////////////ALL FUNCTIONS FOR ROTATING KNOBS///////////////////////////////////
var angle1= 0,angle2= 0,angle3= 0,angle4= 0,angle5= 0,angle6= 0,angle7= 0,angle8= 0,angle9= 0,angle10= 0;
function rotate1(){
	
	angle1++;
	var deg = angle1*20;
	//alert(deg);
	var knob1= document.getElementById('knob1');	
	knob1.style.transform="rotate("+deg+"deg)";
	 /*str1 = document.getElementById('span1').innerHTML;
	 sp = parseInt(str1 ,10)+n;
	 n++;
	 alert(sp);*/
	
   document.getElementById('dc1').stepUp(1);
   
   if( deg>200){
	alert('This is the highest value, can not rotate knob') ;  
	knob1.style.transform=null; 
	document.getElementById('dc1').value="4";
	angle=0;
	return;
   }
    
 }
 function rotate2(){
	
	angle1--;
	var deg = angle1*20;
	//alert(deg);
	var knob1= document.getElementById('knob1');	
	knob1.style.transform="rotate("+deg+"deg)";
	 /*str1 = document.getElementById('span1').innerHTML;
	 sp = parseInt(str1 ,10)+n;
	 n++;
	 alert(sp);*/
	
   document.getElementById('dc1').stepDown(1);
   
   if(deg<0 ){
	alert('This is the lowest value, can not rotate knob') ;  
	knob1.style.transform=null; 
	document.getElementById('dc1').value="4";
	angle=0;
	return;
   }
    
 }
 function rotate3(){
	
	angle2++;
	var deg = angle2*0.6;
	//alert(deg);
	var knob2= document.getElementById('knob2');	
	knob2.style.transform="rotate("+deg+"deg)";
	 /*str1 = document.getElementById('span1').innerHTML;
	 sp = parseInt(str1 ,10)+n;
	 n++;
	 alert(sp);*/
	
   document.getElementById('dcv').stepUp(1);
   
   if( deg>192){
	alert('This is the highest value, can not rotate knob') ;  
	knob2.style.transform=null; 
	document.getElementById('dcv').value="0";
	angle=0;
	return;
   }
    
 }
 function rotate4(){
	
	angle2--;
	var deg = angle2*0.6;
	//alert(deg);
	var knob2= document.getElementById('knob2');	
	knob2.style.transform="rotate("+deg+"deg)";
	 /*str1 = document.getElementById('span1').innerHTML;
	 sp = parseInt(str1 ,10)+n;
	 n++;
	 alert(sp);*/
	
   document.getElementById('dcv').stepDown(1);
   
   if(deg<0 ){
	alert('This is the lowest value, can not rotate knob') ;  
	knob2.style.transform=null; 
	document.getElementById('dcv').value="0";
	angle=0;
	return;
   }
    
 }
 function rotate5(){
	
	angle3++;
	var deg = angle3*10;
	//alert(deg);
	var knob3= document.getElementById('knob3');	
	knob3.style.transform="rotate("+deg+"deg)";
	 /*str1 = document.getElementById('span1').innerHTML;
	 sp = parseInt(str1 ,10)+n;
	 n++;
	 alert(sp);*/
	
   document.getElementById('dcc').stepUp(1);
   
   ///////////////////////////////////////////////////////////////////mass balance code through current knob//////////////////////////////////////////////////////////////////////
   if(document.getElementById('dcc').value == 0.2 && document.getElementById('Tmassv').value == 20 && document.getElementById('conph').value == 220){
	   
	   document.getElementById('dcv').value = 1.5;
	   document.getElementById('waterlevel').style.left = '51%';
   }
   if(document.getElementById('dcc').value == 0.4 && document.getElementById('Tmassv').value == 20 && document.getElementById('conph').value == 200){
	   
	   document.getElementById('dcv').value = 2.0;
	   document.getElementById('waterlevel').style.left = '51%';
   }
   if(document.getElementById('dcc').value == 0.4 && document.getElementById('Tmassv').value == 20 && document.getElementById('conph').value == 180){
	   
	   document.getElementById('dcv').value = 1.8;
	   document.getElementById('waterlevel').style.left = '51%';
   }
   
   
   if(document.getElementById('dcc').value == 0.5 && document.getElementById('Tmassv').value == 40 && document.getElementById('conph').value == 220){
	   
	   document.getElementById('dcv').value = 3.5;
	   document.getElementById('waterlevel').style.left = '51%';
   }
   if(document.getElementById('dcc').value == 0.6 && document.getElementById('Tmassv').value == 40 && document.getElementById('conph').value == 200){
	   
	   document.getElementById('dcv').value = 2.9;
	   document.getElementById('waterlevel').style.left = '51%';
   }
   if(document.getElementById('dcc').value == 0.6 && document.getElementById('Tmassv').value == 40 && document.getElementById('conph').value == 180){
	   
	   document.getElementById('dcv').value = 2.8;
	   document.getElementById('waterlevel').style.left = '51%';
   }
   
   
   if(document.getElementById('dcc').value == 0.7 && document.getElementById('Tmassv').value == 50 && document.getElementById('conph').value == 220){
	   
	   document.getElementById('dcv').value = 4.5;
	   document.getElementById('waterlevel').style.left = '51%';
   }
   if(document.getElementById('dcc').value == 0.7 && document.getElementById('Tmassv').value == 50 && document.getElementById('conph').value == 200){
	   
	   document.getElementById('dcv').value = 3.6;
	   document.getElementById('waterlevel').style.left = '51%';
   }
   if(document.getElementById('dcc').value == 0.8 && document.getElementById('Tmassv').value == 50 && document.getElementById('conph').value == 180){
	   
	   document.getElementById('dcv').value = 4.0;
	   document.getElementById('waterlevel').style.left = '51%';
   }
   
   
   if(document.getElementById('dcc').value == 0.8 && document.getElementById('Tmassv').value == 70 && document.getElementById('conph').value == 220){
	   
	   document.getElementById('dcv').value = 4.5;
	   document.getElementById('waterlevel').style.left = '51%';
   }
   if(document.getElementById('dcc').value == 0.9 && document.getElementById('Tmassv').value == 70 && document.getElementById('conph').value == 200){
	   
	   document.getElementById('dcv').value = 4.5;
	   document.getElementById('waterlevel').style.left = '51%';
   }
   if(document.getElementById('dcc').value == 0.9 && document.getElementById('Tmassv').value == 70 && document.getElementById('conph').value == 180){
	   
	   document.getElementById('dcv').value = 4.3;
	   document.getElementById('waterlevel').style.left = '51%';
   }
   
   
   
   if(document.getElementById('dcc').value == 1.0 && document.getElementById('Tmassv').value == 100 && document.getElementById('conph').value == 220){
	   
	   document.getElementById('dcv').value = 5.0;
	   document.getElementById('waterlevel').style.left = '51%';
   }
   if(document.getElementById('dcc').value == 1.1 && document.getElementById('Tmassv').value == 100 && document.getElementById('conph').value == 200){
	   
	   document.getElementById('dcv').value = 5.3;
	   document.getElementById('waterlevel').style.left = '51%';
   }
   if(document.getElementById('dcc').value == 1.1 && document.getElementById('Tmassv').value == 100 && document.getElementById('conph').value == 180){
	   
	   document.getElementById('dcv').value = 5.3;
	   document.getElementById('waterlevel').style.left = '51%';
   }
   
   
   if(document.getElementById('dcc').value == 1.2 && document.getElementById('Tmassv').value == 120 && document.getElementById('conph').value == 220){
	   
	   document.getElementById('dcv').value = 6.4;
	   document.getElementById('waterlevel').style.left = '51%';
   }
   if(document.getElementById('dcc').value == 1.2 && document.getElementById('Tmassv').value == 120 && document.getElementById('conph').value == 200){
	   
	   document.getElementById('dcv').value = 6.1;
	   document.getElementById('waterlevel').style.left = '51%';
   }
   if(document.getElementById('dcc').value == 1.2 && document.getElementById('Tmassv').value == 120 && document.getElementById('conph').value == 180){
	   
	   document.getElementById('dcv').value = 6.0;
	   document.getElementById('waterlevel').style.left = '51%';
   }
   
   
   if(document.getElementById('dcc').value == 1.3 && document.getElementById('Tmassv').value == 140 && document.getElementById('conph').value == 220){
	   
	   document.getElementById('dcv').value = 7.1;
	   document.getElementById('waterlevel').style.left = '51%';
   }
   if(document.getElementById('dcc').value == 1.3 && document.getElementById('Tmassv').value == 140 && document.getElementById('conph').value == 200){
	   
	   document.getElementById('dcv').value = 6.8;
	   document.getElementById('waterlevel').style.left = '51%';
   }
   if(document.getElementById('dcc').value == 1.3 && document.getElementById('Tmassv').value == 140 && document.getElementById('conph').value == 180){
	   
	   document.getElementById('dcv').value = 6.8;
	   document.getElementById('waterlevel').style.left = '51%';
   }
   
   
   if(document.getElementById('dcc').value == 1.4 && document.getElementById('Tmassv').value == 160 && document.getElementById('conph').value == 220){
	   
	   document.getElementById('dcv').value = 7.7;
	   document.getElementById('waterlevel').style.left = '51%';
   }
   if(document.getElementById('dcc').value == 1.5 && document.getElementById('Tmassv').value == 160 && document.getElementById('conph').value == 200){
	   
	   document.getElementById('dcv').value = 7.6;
	   document.getElementById('waterlevel').style.left = '51%';
   }
   if(document.getElementById('dcc').value == 1.6 && document.getElementById('Tmassv').value == 160 && document.getElementById('conph').value == 180){
	   
	   document.getElementById('dcv').value = 7.8;
	   document.getElementById('waterlevel').style.left = '51%';
   }
   
   
   if(document.getElementById('dcc').value == 1.7 && document.getElementById('Tmassv').value == 180 && document.getElementById('conph').value == 220){
	   
	   document.getElementById('dcv').value = 8.6;
	   document.getElementById('waterlevel').style.left = '51%';
   }
   if(document.getElementById('dcc').value == 1.7 && document.getElementById('Tmassv').value == 180 && document.getElementById('conph').value == 200){
	   
	   document.getElementById('dcv').value = 8.7;
	   document.getElementById('waterlevel').style.left = '51%';
   }
   if(document.getElementById('dcc').value == 1.8 && document.getElementById('Tmassv').value == 180 && document.getElementById('conph').value == 180){
	   
	   document.getElementById('dcv').value = 8.7;
	   document.getElementById('waterlevel').style.left = '51%';
   }
   
   
   if(document.getElementById('dcc').value == 1.8 && document.getElementById('Tmassv').value == 200 && document.getElementById('conph').value == 220){
	   
	   document.getElementById('dcv').value = 8.6;
	   document.getElementById('waterlevel').style.left = '51%';
   }
   if(document.getElementById('dcc').value == 1.9 && document.getElementById('Tmassv').value == 200 && document.getElementById('conph').value == 200){
	   
	   document.getElementById('dcv').value = 9.5;
	   document.getElementById('waterlevel').style.left = '51%';
   }
   if(document.getElementById('dcc').value == 2.1 && document.getElementById('Tmassv').value == 200 && document.getElementById('conph').value == 180){
	   
	   document.getElementById('dcv').value = 10.5;
	   document.getElementById('waterlevel').style.left = '51%';
   }
   
    if(document.getElementById('dcc').value == 0 ){
	   
	   document.getElementById('dcv').value = 0;
	   document.getElementById('waterlevel').style.left = '51%';
   }
   
   if( deg>200){
	alert('This is the highest value, can not rotate knob') ;  
	knob3.style.transform=null; 
	document.getElementById('dcc').value="0";
	angle=0;
	return;
   }
    
 }
 function rotate6(){
	
	angle3--;
	var deg = angle3*10;
	//alert(deg);
	var knob3= document.getElementById('knob3');	
	knob3.style.transform="rotate("+deg+"deg)";
	 /*str1 = document.getElementById('span1').innerHTML;
	 sp = parseInt(str1 ,10)+n;
	 n++;
	 alert(sp);*/
	
   document.getElementById('dcc').stepDown(1);
   
    ///////////////////////////////////////////////////////////////////mass balance code through current knob//////////////////////////////////////////////////////////////////////
   if(document.getElementById('dcc').value == 0.2 && document.getElementById('Tmassv').value == 20 && document.getElementById('conph').value == 220){
	   
	   document.getElementById('dcv').value = 1.5;
	   document.getElementById('waterlevel').style.left = '51%';
   }
   if(document.getElementById('dcc').value == 0.4 && document.getElementById('Tmassv').value == 20 && document.getElementById('conph').value == 200){
	   
	   document.getElementById('dcv').value = 2.0;
	   document.getElementById('waterlevel').style.left = '51%';
   }
   if(document.getElementById('dcc').value == 0.4 && document.getElementById('Tmassv').value == 20 && document.getElementById('conph').value == 180){
	   
	   document.getElementById('dcv').value = 1.8;
	   document.getElementById('waterlevel').style.left = '51%';
   }
   
   
   if(document.getElementById('dcc').value == 0.5 && document.getElementById('Tmassv').value == 40 && document.getElementById('conph').value == 220){
	   
	   document.getElementById('dcv').value = 3.5;
	   document.getElementById('waterlevel').style.left = '51%';
   }
   if(document.getElementById('dcc').value == 0.6 && document.getElementById('Tmassv').value == 40 && document.getElementById('conph').value == 200){
	   
	   document.getElementById('dcv').value = 2.9;
	   document.getElementById('waterlevel').style.left = '51%';
   }
   if(document.getElementById('dcc').value == 0.6 && document.getElementById('Tmassv').value == 40 && document.getElementById('conph').value == 180){
	   
	   document.getElementById('dcv').value = 2.8;
	   document.getElementById('waterlevel').style.left = '51%';
   }
   
   
   if(document.getElementById('dcc').value == 0.7 && document.getElementById('Tmassv').value == 50 && document.getElementById('conph').value == 220){
	   
	   document.getElementById('dcv').value = 4.5;
	   document.getElementById('waterlevel').style.left = '51%';
   }
   if(document.getElementById('dcc').value == 0.7 && document.getElementById('Tmassv').value == 50 && document.getElementById('conph').value == 200){
	   
	   document.getElementById('dcv').value = 3.6;
	   document.getElementById('waterlevel').style.left = '51%';
   }
   if(document.getElementById('dcc').value == 0.8 && document.getElementById('Tmassv').value == 50 && document.getElementById('conph').value == 180){
	   
	   document.getElementById('dcv').value = 4.0;
	   document.getElementById('waterlevel').style.left = '51%';
   }
   
   
   if(document.getElementById('dcc').value == 0.8 && document.getElementById('Tmassv').value == 70 && document.getElementById('conph').value == 220){
	   
	   document.getElementById('dcv').value = 4.5;
	   document.getElementById('waterlevel').style.left = '51%';
   }
   if(document.getElementById('dcc').value == 0.9 && document.getElementById('Tmassv').value == 70 && document.getElementById('conph').value == 200){
	   
	   document.getElementById('dcv').value = 4.5;
	   document.getElementById('waterlevel').style.left = '51%';
   }
   if(document.getElementById('dcc').value == 0.9 && document.getElementById('Tmassv').value == 70 && document.getElementById('conph').value == 180){
	   
	   document.getElementById('dcv').value = 4.3;
	   document.getElementById('waterlevel').style.left = '51%';
   }
   
   
   
   if(document.getElementById('dcc').value == 1.0 && document.getElementById('Tmassv').value == 100 && document.getElementById('conph').value == 220){
	   
	   document.getElementById('dcv').value = 5.0;
	   document.getElementById('waterlevel').style.left = '51%';
   }
   if(document.getElementById('dcc').value == 1.1 && document.getElementById('Tmassv').value == 100 && document.getElementById('conph').value == 200){
	   
	   document.getElementById('dcv').value = 5.3;
	   document.getElementById('waterlevel').style.left = '51%';
   }
   if(document.getElementById('dcc').value == 1.1 && document.getElementById('Tmassv').value == 100 && document.getElementById('conph').value == 180){
	   
	   document.getElementById('dcv').value = 5.3;
	   document.getElementById('waterlevel').style.left = '51%';
   }
   
   
   if(document.getElementById('dcc').value == 1.2 && document.getElementById('Tmassv').value == 120 && document.getElementById('conph').value == 220){
	   
	   document.getElementById('dcv').value = 6.4;
	   document.getElementById('waterlevel').style.left = '51%';
   }
   if(document.getElementById('dcc').value == 1.2 && document.getElementById('Tmassv').value == 120 && document.getElementById('conph').value == 200){
	   
	   document.getElementById('dcv').value = 6.1;
	   document.getElementById('waterlevel').style.left = '51%';
   }
   if(document.getElementById('dcc').value == 1.2 && document.getElementById('Tmassv').value == 120 && document.getElementById('conph').value == 180){
	   
	   document.getElementById('dcv').value = 6.0;
	   document.getElementById('waterlevel').style.left = '51%';
   }
   
   
   if(document.getElementById('dcc').value == 1.3 && document.getElementById('Tmassv').value == 140 && document.getElementById('conph').value == 220){
	   
	   document.getElementById('dcv').value = 7.1;
	   document.getElementById('waterlevel').style.left = '51%';
   }
   if(document.getElementById('dcc').value == 1.3 && document.getElementById('Tmassv').value == 140 && document.getElementById('conph').value == 200){
	   
	   document.getElementById('dcv').value = 6.8;
	   document.getElementById('waterlevel').style.left = '51%';
   }
   if(document.getElementById('dcc').value == 1.3 && document.getElementById('Tmassv').value == 140 && document.getElementById('conph').value == 180){
	   
	   document.getElementById('dcv').value = 6.8;
	   document.getElementById('waterlevel').style.left = '51%';
   }
   
   
   if(document.getElementById('dcc').value == 1.4 && document.getElementById('Tmassv').value == 160 && document.getElementById('conph').value == 220){
	   
	   document.getElementById('dcv').value = 7.7;
	   document.getElementById('waterlevel').style.left = '51%';
   }
   if(document.getElementById('dcc').value == 1.5 && document.getElementById('Tmassv').value == 160 && document.getElementById('conph').value == 200){
	   
	   document.getElementById('dcv').value = 7.6;
	   document.getElementById('waterlevel').style.left = '51%';
   }
   if(document.getElementById('dcc').value == 1.6 && document.getElementById('Tmassv').value == 160 && document.getElementById('conph').value == 180){
	   
	   document.getElementById('dcv').value = 7.8;
	   document.getElementById('waterlevel').style.left = '51%';
   }
   
   
   if(document.getElementById('dcc').value == 1.7 && document.getElementById('Tmassv').value == 180 && document.getElementById('conph').value == 220){
	   
	   document.getElementById('dcv').value = 8.6;
	   document.getElementById('waterlevel').style.left = '51%';
   }
   if(document.getElementById('dcc').value == 1.7 && document.getElementById('Tmassv').value == 180 && document.getElementById('conph').value == 200){
	   
	   document.getElementById('dcv').value = 8.7;
	   document.getElementById('waterlevel').style.left = '51%';
   }
   if(document.getElementById('dcc').value == 1.8 && document.getElementById('Tmassv').value == 180 && document.getElementById('conph').value == 180){
	   
	   document.getElementById('dcv').value = 8.7;
	   document.getElementById('waterlevel').style.left = '51%';
   }
   
   
   if(document.getElementById('dcc').value == 1.8 && document.getElementById('Tmassv').value == 200 && document.getElementById('conph').value == 220){
	   
	   document.getElementById('dcv').value = 8.6;
	   document.getElementById('waterlevel').style.left = '51%';
   }
   if(document.getElementById('dcc').value == 1.9 && document.getElementById('Tmassv').value == 200 && document.getElementById('conph').value == 200){
	   
	   document.getElementById('dcv').value = 9.5;
	   document.getElementById('waterlevel').style.left = '51%';
   }
   if(document.getElementById('dcc').value == 2 && document.getElementById('Tmassv').value == 200 && document.getElementById('conph').value == 180){
	   
	   document.getElementById('dcv').value = 10.5;
	   document.getElementById('waterlevel').style.left = '51%';
   }
   
    if(document.getElementById('dcc').value == 0 ){
	   
	   document.getElementById('dcv').value = 0;
	   document.getElementById('waterlevel').style.left = '51%';
   }
   
   if(deg<0 ){
	alert('This is the lowest value, can not rotate knob') ;  
	knob3.style.transform=null; 
	document.getElementById('dcc').value="0";
	angle=0;
	return;
   }
    
 }
 function rotate7(){
	
	angle4++;
	var deg = angle4*1.4;
	//alert(deg);
	var knob4= document.getElementById('knob4');	
	knob4.style.transform="rotate("+deg+"deg)";
	 /*str1 = document.getElementById('span1').innerHTML;
	 sp = parseInt(str1 ,10)+n;
	 n++;
	 alert(sp);*/
	
   document.getElementById('conph').stepUp(1);
   
   if( deg>182){
	alert('This is the highest value, can not rotate knob') ;  
	knob4.style.transform=null; 
	document.getElementById('conph').value="0";
	angle=0;
	return;
   }
    
 }
 function rotate8(){
	
	angle4--;
	var deg = angle4*1.4;
	//alert(deg);
	var knob4= document.getElementById('knob4');	
	knob4.style.transform="rotate("+deg+"deg)";
	 /*str1 = document.getElementById('span1').innerHTML;
	 sp = parseInt(str1 ,10)+n;
	 n++;
	 alert(sp);*/
	
   document.getElementById('conph').stepDown(1);
   
   if(deg<0 ){
	alert('This is the lowest value, can not rotate knob') ;  
	knob4.style.transform=null; 
	document.getElementById('conph').value="0";
	angle=0;
	return;
   }
    
 }
 function rotate9(){
	
	angle5++;
	var deg = angle5*2;
	//alert(deg);
	var knob5= document.getElementById('knob5');	
	knob5.style.transform="rotate("+deg+"deg)";
	 /*str1 = document.getElementById('span1').innerHTML;
	 sp = parseInt(str1 ,10)+n;
	 n++;
	 alert(sp);*/
	
   document.getElementById('refph').stepUp(2.6);
   //var refv = document.getElementById('refph').value;
   //document.getElementById('refph').value = ((refv * 260)/100) ;/// cause the value is in percentage in iit lab
   
   /*if( deg>200){
	alert('This is the highest value, can not rotate knob') ;  
	knob5.style.transform=null; 
	document.getElementById('refph').value="0";
	angle=0;
	return;
   }*/
    
 }
 function rotate10(){
	
	angle5--;
	var deg = angle5*2;
	//alert(deg);
	var knob5= document.getElementById('knob5');	
	knob5.style.transform="rotate("+deg+"deg)";
	 /*str1 = document.getElementById('span1').innerHTML;
	 sp = parseInt(str1 ,10)+n;
	 n++;
	 alert(sp);*/
	
   document.getElementById('refph').stepDown(2.6);
   //var refv = document.getElementById('refph').value;
   //document.getElementById('refph').value = ((refv * 260)/100) ;/// cause the value is in percentage in iit lab
   
   /*if(deg<0 ){
	alert('This is the lowest value, can not rotate knob') ;  
	knob5.style.transform=null; 
	document.getElementById('refph').value="0";
	angle=0;
	return;
   }*/
    
 }
 
 
function rotateSwheel() {
   var wheels = document.getElementById("swheel");
   var wheelb = document.getElementById("bwheel");
   wheels.classList.add("rotateSwheel");
   wheelb.classList.add("rotateSwheel");
   /*setTimeout(function(){
	   document.getElementById('swheel').classList.remove("rotateSwheel");
	   document.getElementById('bwheel').classList.remove("rotateSwheel");
   },10000);*/
}   
    
   
 /*function incrspeed(){
	var wheel = document.getElementById("swheel");
	wheel.style["-webkit-animation-duration"] ="0.5s"; 
	 
 }*/
 
 /*function rotateBwheel() {
   var wheel = document.getElementById("bwheel");
   wheel.classList.add("rotateBwheel");
} 
 function incrspeed(){
	var wheel = document.getElementById("bwheel");
	wheel.style["-webkit-animation-duration"] ="0.5s"; 
	 
 }*/
 
 /////////switch on off///////////////
 function OnOff(){
var myImage = document.getElementById('red_switch');	 
 if(myImage.src.match("./images/red_switch.png")){
	
	myImage.src = "./images/green_switch.png";	
	document.getElementById('dc1').style.color="#2DE84F";
	document.getElementById('dc1').value = "4";
	document.getElementById('knob1').style['pointer-events'] = "auto";
	document.getElementById('knob2').style['pointer-events'] = "auto";
	document.getElementById('knob3').style['pointer-events'] = "auto";
	document.getElementById('knob4').style['pointer-events'] = "auto";
	document.getElementById('knob5').style['pointer-events'] = "auto";
	
	
	document.getElementById('dcv').style.color="#2DE84F";
	document.getElementById('dcc').style.color="#2DE84F";
	document.getElementById('speed').style.color="#2DE84F";
	document.getElementById('conph').style.color="#2DE84F";
	document.getElementById('refph').style.color="#2DE84F";
	//document.getElementById('A1').style.color="#2DE84F";
	
	
	document.getElementById("swheel").style["-webkit-animation-duration"] ="infinite";
	document.getElementById("bwheel").style["-webkit-animation-duration"] ="infinite";
		rotateSwheel();	
		setTimeout(function(){
			Run2();
		  // document.getElementById('speed').value = '1029';
	   },5000);
	
	//}

 }
else if(myImage.src.match("./images/green_switch.png")){
	
	myImage.src = "./images/red_switch.png";
	document.getElementById('dc1').style.color="#A8AFB5";
	document.getElementById('knob1').style['pointer-events'] = "none";
	document.getElementById('knob2').style['pointer-events'] = "none";
	document.getElementById('knob3').style['pointer-events'] = "none";
	document.getElementById('knob4').style['pointer-events'] = "auto";
	document.getElementById('knob5').style['pointer-events'] = "auto";
	
	document.getElementById("swheel").style["-webkit-animation-duration"] ="0s";
	document.getElementById("bwheel").style["-webkit-animation-duration"] ="0s";
	setTimeout(function(){
	   document.getElementById('speed').value = '0';
   },2000);
	
	
	
	if((document.getElementById('dc1').value!=4) || (document.getElementById('dcv').value!=0) || (document.getElementById('dcc').value!=0))
	{
		alert("Please rotate knobs at minimum position!");
		myImage.src = "./images/green_switch.png";
		document.getElementById('knob1').style['pointer-events'] = "auto";
		document.getElementById('knob2').style['pointer-events'] = "auto";
		document.getElementById('knob3').style['pointer-events'] = "auto";
		document.getElementById('knob4').style['pointer-events'] = "auto";
		document.getElementById('knob5').style['pointer-events'] = "auto";
		
		document.getElementById('dc1').style.color="#2DE84F";
		document.getElementById('dcv').style.color="#2DE84F";
		document.getElementById('dcc').style.color="#2DE84F";
		document.getElementById('speed').style.color="#2DE84F";
		document.getElementById('conph').style.color="#2DE84F";
		document.getElementById('refph').style.color="#2DE84F";
		//document.getElementById('A1').style.color="#2DE84F";	
		
	}
	
	document.getElementById('dcv').style.color="#A8AFB5";
	document.getElementById('dcc').style.color="#A8AFB5";
	document.getElementById('speed').style.color="#A8AFB5";
	document.getElementById('conph').style.color="#2DE84F";
	document.getElementById('refph').style.color="#2DE84F";
	//document.getElementById('A1').style.color="#A8AFB5";	
}	 
	 
 }
 
 /////////////////////////////////////////////////////////////////////////CODE FOR DRAG DROP WEIGHT///////////////////////////////////////////////////
 var  Tmassv1=0,Tmassv2=0,Tmassv3=0,Tmassv4=0,Tmassv5=0;
 function allowDrop(ev) {
  ev.preventDefault();
}

function drag(ev) {
  ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
	
	
  ev.preventDefault();
  var data = ev.dataTransfer.getData("text");
  ev.target.appendChild(document.getElementById(data));
  
  if(data == "w10" && ev.target.id =="dropDiv"){
	  //weight animation
	document.getElementById("mplate").style.top = '9.5%';
    document.getElementById("dropDiv").style.top ='35.5%';
	document.getElementById("w10").style.top ='28.5%';
	// level indicator
	document.getElementById("waterlevel").style.left ='51.5%';
	
	
	  Tmassv1 = 10;
	//document.getElementById('Tmassv').value = Tmassv1;
	//alert(typeof(Tmassv));
		
	setTimeout(function(){
	Run2();	
	//document.getElementById('speed').value = '1015';
   },3000);	
 } 
 
 else if(data == "w10"  && ev.target.id =="dragDiv"){
	  //green();
	//document.getElementById("mplate").style.top = '9%';
    //document.getElementById("dropDiv").style.top ='35%';
	document.getElementById("w10").style.top ='12%';
	/*document.getElementById("w220").style.top ='0%';
	document.getElementById("w120").style.top ='0%';
	document.getElementById("w100").style.top ='0%';
	document.getElementById("w50").style.top ='0%';*/
	//document.getElementById("waterlevel").style.left ='51%';	
		
	 Tmassv1 = 0;	
	
	setTimeout(function(){
		Run2();
	//var speeddown = document.getElementById('speed').value -5 ;
	//document.getElementById('speed').value = speeddown;
   },3000);
 } 
 
 
 
 
 else if(data == "w220" && ev.target.id =="dropDiv"){
	  //green();
	document.getElementById("mplate").style.top = '10%';
    document.getElementById("dropDiv").style.top ='36%';
	document.getElementById("w220").style.top ='12%';
	// level indicator
	document.getElementById("waterlevel").style.left ='51.7%';
	
	 Tmassv2 = 20;
	 setTimeout(function(){
	Run2();	
	//document.getElementById('speed').value = '1015';
   },3000);	
	 
 } 
 
 else if(data == "w220"  && ev.target.id =="dragDiv"){
	  //green();
	/*document.getElementById("mplate").style.top = '9%';
    document.getElementById("dropDiv").style.top ='35%';
	document.getElementById("w10").style.top ='12%';*/
	document.getElementById("w220").style.top ='0%';
	/*document.getElementById("w120").style.top ='0%';
	document.getElementById("w100").style.top ='0%';
	document.getElementById("w50").style.top ='0%';
	document.getElementById("waterlevel").style.left ='51%';*/	
		
	 Tmassv2 = 0;	
	
	setTimeout(function(){
		Run2();
	//var speeddown = document.getElementById('speed').value -5 ;
	//document.getElementById('speed').value = speeddown;
   },3000);
 }
 
 
 else if(data == "w120" && ev.target.id =="dropDiv"){
	  //green();
	document.getElementById("mplate").style.top = '10%';
    document.getElementById("dropDiv").style.top ='36%';
	document.getElementById("w120").style.top ='12%';
	// level indicator
	document.getElementById("waterlevel").style.left ='51.7%';
	
	 Tmassv3 = 20;
	 setTimeout(function(){
	Run2();	
	//document.getElementById('speed').value = '1015';
   },3000);	
 }

else if(data == "w120"  && ev.target.id =="dragDiv"){
	  //green();
	/*document.getElementById("mplate").style.top = '9%';
    document.getElementById("dropDiv").style.top ='35%';
	document.getElementById("w10").style.top ='12%';
	document.getElementById("w220").style.top ='0%';*/
	document.getElementById("w120").style.top ='0%';
	/*document.getElementById("w100").style.top ='0%';
	document.getElementById("w50").style.top ='0%';
	document.getElementById("waterlevel").style.left ='51%';*/	
		
	 Tmassv3 = 0;	
	
	setTimeout(function(){
		Run2();
	//var speeddown = document.getElementById('speed').value -5 ;
	//document.getElementById('speed').value = speeddown;
   },3000);
 }


 
 
 else if(data == "w50" && ev.target.id =="dropDiv"){
	  //green();
	document.getElementById("mplate").style.top = '10.5%';
    document.getElementById("dropDiv").style.top ='36.5%';
	document.getElementById("w50").style.top ='12.5%';
	// level indicator
	document.getElementById("waterlevel").style.left ='52%';
	
	 Tmassv4 = 50;
	 setTimeout(function(){
	Run2();	
	//document.getElementById('speed').value = '1015';
   },3000);	
 }
 
 else if(data == "w50"  && ev.target.id =="dragDiv"){
	  //green();
	/*document.getElementById("mplate").style.top = '9%';
    document.getElementById("dropDiv").style.top ='35%';
	document.getElementById("w10").style.top ='12%';
	document.getElementById("w220").style.top ='0%';
	document.getElementById("w120").style.top ='0%';
	document.getElementById("w100").style.top ='0%';*/
	document.getElementById("w50").style.top ='0%';
	//document.getElementById("waterlevel").style.left ='51%';	
		
	 Tmassv4 = 0;	
	
	setTimeout(function(){
		Run2();
	//var speeddown = document.getElementById('speed').value -5 ;
	//document.getElementById('speed').value = speeddown;
   },3000);
 }
 
 
 
 else if(data == "w100" && ev.target.id =="dropDiv"){
	  //green();
	document.getElementById("mplate").style.top = '11%';
    document.getElementById("dropDiv").style.top ='37%';
	document.getElementById("w100").style.top ='13%';
	// level indicator
	document.getElementById("waterlevel").style.left ='53%';
	
	 Tmassv5 = 100;
	 setTimeout(function(){
	Run2();	
	//document.getElementById('speed').value = '1015';
   },3000);	
 }
 
else if(data == "w100"  && ev.target.id =="dragDiv"){
	  //green();
	/*document.getElementById("mplate").style.top = '9%';
    document.getElementById("dropDiv").style.top ='35%';
	document.getElementById("w10").style.top ='12%';
	document.getElementById("w220").style.top ='0%';
	document.getElementById("w120").style.top ='0%';*/
	document.getElementById("w100").style.top ='0%';
	//document.getElementById("w50").style.top ='0%';
	//document.getElementById("waterlevel").style.left ='51%';	
		
	 Tmassv5 = 0;	
	
	setTimeout(function(){
		Run2();
	//var speeddown = document.getElementById('speed').value -5 ;
	//document.getElementById('speed').value = speeddown;
   },3000);
} 
 
 document.getElementById('Tmassv').value = (Tmassv1+Tmassv2+Tmassv3+Tmassv4+Tmassv5) ;
 /////new add weights or combination of weights///////////
 
 if(document.getElementById('Tmassv').value==40){
	 
	document.getElementById("mplate").style.top = '10.2%';
    document.getElementById("dropDiv").style.top ='36.2%';
	document.getElementById("w120").style.top ='12.2%';
	document.getElementById("w220").style.top ='12.2%';
	// level indicator
	document.getElementById("waterlevel").style.left ='51.7%'; 
	 
	 
 }
 if(document.getElementById('Tmassv').value==70){
	 
	document.getElementById("mplate").style.top = '10.7%';
    document.getElementById("dropDiv").style.top ='36.7%';
	document.getElementById("w50").style.top ='12.7%';
	//document.getElementById("w220").style.top ='12.7%';
	// level indicator
	document.getElementById("waterlevel").style.left ='51.7%'; 
	 
	 
 }
 if(document.getElementById('Tmassv').value==120){
	 
	document.getElementById("mplate").style.top = '11.2%';
    document.getElementById("dropDiv").style.top ='37.2%';
	document.getElementById("w100").style.top ='13.2%';
	//document.getElementById("w220").style.top ='13.2%';
	// level indicator
	document.getElementById("waterlevel").style.left ='51.8%'; 
	 
	 
 }
 if(document.getElementById('Tmassv').value==140){
	 
	document.getElementById("mplate").style.top = '11.3%';
    document.getElementById("dropDiv").style.top ='37.3%';
	document.getElementById("w100").style.top ='13.3%';
	document.getElementById("w220").style.top ='13.3%';
	document.getElementById("w120").style.top ='13.3%';
	// level indicator
	document.getElementById("waterlevel").style.left ='51.8%';
	 
	 
 }
 if(document.getElementById('Tmassv').value==160){
	 
	document.getElementById("mplate").style.top = '11.4%';
    document.getElementById("dropDiv").style.top ='37.4%';
	document.getElementById("w100").style.top ='13.4%';
	document.getElementById("w50").style.top ='13.4%';
	document.getElementById("w10").style.top ='30%';
	// level indicator
	document.getElementById("waterlevel").style.left ='51.9%';
	 
	 
 }
 if(document.getElementById('Tmassv').value==180){
	 
	document.getElementById("mplate").style.top = '11.5%';
    document.getElementById("dropDiv").style.top ='37.5%';
	document.getElementById("w100").style.top ='13.5%';
	document.getElementById("w50").style.top ='13.5%';
	document.getElementById("w10").style.top ='30%';
	document.getElementById("w220").style.top ='14.3%';
	// level indicator
	document.getElementById("waterlevel").style.left ='51.8%';
	 
	 
 }
 if(document.getElementById('Tmassv').value==200){
	 
	document.getElementById("mplate").style.top = '11.8%';
    document.getElementById("dropDiv").style.top ='37.8%';
	document.getElementById("w100").style.top ='13.8%';
	document.getElementById("w50").style.top ='13.8%';
	document.getElementById("w10").style.top ='30%';
	document.getElementById("w220").style.top ='14.5%';
	document.getElementById("w120").style.top ='14.5%';
	// level indicator
	document.getElementById("waterlevel").style.left ='51.8%';
	 
	 
 }
 
 if(document.getElementById('Tmassv').value==0){
	 
	document.getElementById("mplate").style.top = '9%';
    document.getElementById("dropDiv").style.top ='35%';
	document.getElementById("w100").style.top ='0%';
	document.getElementById("w50").style.top ='0%';
	document.getElementById("w10").style.top ='12%';
	document.getElementById("w220").style.top ='0%';
	document.getElementById("w120").style.top ='0%';
	// level indicator
	document.getElementById("waterlevel").style.left ='51%';
	 
	 
 } 
 
 /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
 if(document.getElementById('Tmassv').value == 20 ){//Ec=220v
	
	var wheel1 = document.getElementById("swheel");
	var wheel2 = document.getElementById("bwheel");
	wheel1.style["-webkit-animation-duration"] ="0.6s";
	wheel2.style["-webkit-animation-duration"] ="0.6s"; 
	setTimeout(function(){
		Run2();
	//document.getElementById('speed').value = '1005';
   },5000); 	 
	 
 }
 /*if(document.getElementById('Tmassv').value == 20 ){//Ec=200v
 
	var wheel1 = document.getElementById("swheel");
	var wheel2 = document.getElementById("bwheel");
	wheel1.style["-webkit-animation-duration"] ="0.6s";
	wheel2.style["-webkit-animation-duration"] ="0.6s";
	 
	setTimeout(function(){
		Run2();
	//document.getElementById('speed').value = '990';
   },5000); 	 
	 
 }
 if(document.getElementById('Tmassv').value == 20 && document.getElementById('conph').value == 180 ){//Ec=180v
    var wheel1 = document.getElementById("swheel");
	var wheel2 = document.getElementById("bwheel");
	wheel1.style["-webkit-animation-duration"] ="0.6s";
	wheel2.style["-webkit-animation-duration"] ="0.6s";
	setTimeout(function(){
		
	document.getElementById('speed').value = '976';
   },5000); 	 
	 
 } */
 
 
 
 if(document.getElementById('Tmassv').value == 40){//Ec=220v
 
    var wheel1 = document.getElementById("swheel");
	var wheel2 = document.getElementById("bwheel");
	wheel1.style["-webkit-animation-duration"] ="0.7s";
	wheel2.style["-webkit-animation-duration"] ="0.7s";
	setTimeout(function(){
	Run2();	
	//document.getElementById('speed').value = '972';
   },5000); 	 
	 
 }
/* if(document.getElementById('Tmassv').value == 40 && document.getElementById('conph').value == 200){//Ec=200v
 
    var wheel1 = document.getElementById("swheel");
	var wheel2 = document.getElementById("bwheel");
	wheel1.style["-webkit-animation-duration"] ="0.7s";
	wheel2.style["-webkit-animation-duration"] ="0.7s";
	 
	setTimeout(function(){
		
	document.getElementById('speed').value = '962';
   },5000); 	 
	 
 }
 if(document.getElementById('Tmassv').value == 40 && document.getElementById('conph').value == 180){//Ec=180v
 
	var wheel1 = document.getElementById("swheel");
	var wheel2 = document.getElementById("bwheel");
	wheel1.style["-webkit-animation-duration"] ="0.7s";
	wheel2.style["-webkit-animation-duration"] ="0.7s";
	setTimeout(function(){
		
	document.getElementById('speed').value = '942';
   },5000); 	 
	 
 }*/
 
 
 
 
 if(document.getElementById('Tmassv').value == 50 ){//Ec=220v
 
    var wheel1 = document.getElementById("swheel");
	var wheel2 = document.getElementById("bwheel");
	wheel1.style["-webkit-animation-duration"] ="0.8s";
	wheel2.style["-webkit-animation-duration"] ="0.8s";
	setTimeout(function(){
	Run2();	
	//document.getElementById('speed').value = '960';
   },5000); 	 
	 
 }
 /*if(document.getElementById('Tmassv').value == 50 && document.getElementById('conph').value == 200){//Ec=200v
 
	var wheel1 = document.getElementById("swheel");
	var wheel2 = document.getElementById("bwheel");
	wheel1.style["-webkit-animation-duration"] ="0.8s";
	wheel2.style["-webkit-animation-duration"] ="0.8s";
	setTimeout(function(){
		
	document.getElementById('speed').value = '945';
   },5000); 	 
	 
 }
 if(document.getElementById('Tmassv').value == 50 && document.getElementById('conph').value == 180){//Ec=180v
 
	var wheel1 = document.getElementById("swheel");
	var wheel2 = document.getElementById("bwheel");
	wheel1.style["-webkit-animation-duration"] ="0.8s";
	wheel2.style["-webkit-animation-duration"] ="0.8s";
	setTimeout(function(){
		
	document.getElementById('speed').value = '927';
   },5000); 	 
	 
 }*/
 
 
 
if(document.getElementById('Tmassv').value == 70 ){//Ec=220v

	var wheel1 = document.getElementById("swheel");
	var wheel2 = document.getElementById("bwheel");
	wheel1.style["-webkit-animation-duration"] ="0.9s";
	wheel2.style["-webkit-animation-duration"] ="0.9s";

	setTimeout(function(){
	Run2();	
	//document.getElementById('speed').value = '935';
   },5000); 	 
	 
 }
 /*if(document.getElementById('Tmassv').value == 70 && document.getElementById('conph').value == 200){//Ec=200v
 
	var wheel1 = document.getElementById("swheel");
	var wheel2 = document.getElementById("bwheel");
	wheel1.style["-webkit-animation-duration"] ="0.9s";
	wheel2.style["-webkit-animation-duration"] ="0.9s";
 
	setTimeout(function(){
		
	document.getElementById('speed').value = '918';
   },5000); 	 
	 
 }
 if(document.getElementById('Tmassv').value == 70 && document.getElementById('conph').value == 180){//Ec=180v
 
	var wheel1 = document.getElementById("swheel");
	var wheel2 = document.getElementById("bwheel");
	wheel1.style["-webkit-animation-duration"] ="0.9s";
	wheel2.style["-webkit-animation-duration"] ="0.9s";
	setTimeout(function(){
		
	document.getElementById('speed').value = '892';
   },5000); 	 
	 
 } */
 
 
 
 if(document.getElementById('Tmassv').value == 100 ){//Ec=220v
 
    var wheel1 = document.getElementById("swheel");
	var wheel2 = document.getElementById("bwheel");
	wheel1.style["-webkit-animation-duration"] ="1s";
	wheel2.style["-webkit-animation-duration"] ="1s";
	setTimeout(function(){
	Run2();	
	//document.getElementById('speed').value = '896';
   },5000); 	 
	 
 }
 /*if(document.getElementById('Tmassv').value == 100 && document.getElementById('conph').value == 200){//Ec=200v
 
	var wheel1 = document.getElementById("swheel");
	var wheel2 = document.getElementById("bwheel");
	wheel1.style["-webkit-animation-duration"] ="1s";
	wheel2.style["-webkit-animation-duration"] ="1s";
 
	setTimeout(function(){
		
	document.getElementById('speed').value = '871';
   },5000); 	 
	 
 }
 if(document.getElementById('Tmassv').value == 100 && document.getElementById('conph').value == 180){//Ec=180v
 
	var wheel1 = document.getElementById("swheel");
	var wheel2 = document.getElementById("bwheel");
	wheel1.style["-webkit-animation-duration"] ="1s";
	wheel2.style["-webkit-animation-duration"] ="1s";
 
	setTimeout(function(){
		
	document.getElementById('speed').value = '841';
   },5000); 	 
	 
 }
 */
 
 
 if(document.getElementById('Tmassv').value == 120 ){//Ec=220v
 
	var wheel1 = document.getElementById("swheel");
	var wheel2 = document.getElementById("bwheel");
	wheel1.style["-webkit-animation-duration"] ="1.1s";
	wheel2.style["-webkit-animation-duration"] ="1.1s";
 

	setTimeout(function(){
	Run2();	
	//document.getElementById('speed').value = '863';
   },5000); 	 
	 
 }
 /*if(document.getElementById('Tmassv').value == 120 && document.getElementById('conph').value == 200){//Ec=200v
 
	var wheel1 = document.getElementById("swheel");
	var wheel2 = document.getElementById("bwheel");
	wheel1.style["-webkit-animation-duration"] ="1.1s";
	wheel2.style["-webkit-animation-duration"] ="1.1s";
 
	setTimeout(function(){
		
	document.getElementById('speed').value = '844';
   },5000); 	 
	 
 }
 if(document.getElementById('Tmassv').value == 120 && document.getElementById('conph').value == 180){//Ec=180v
 
	var wheel1 = document.getElementById("swheel");
	var wheel2 = document.getElementById("bwheel");
	wheel1.style["-webkit-animation-duration"] ="1.1s";
	wheel2.style["-webkit-animation-duration"] ="1.1s";
 
	setTimeout(function(){
		
	document.getElementById('speed').value = '807';
   },5000); 	 
	 
 }
 */
 
 
 if(document.getElementById('Tmassv').value == 140 ){//Ec=220v
 
	var wheel1 = document.getElementById("swheel");
	var wheel2 = document.getElementById("bwheel");
	wheel1.style["-webkit-animation-duration"] ="1.2s";
	wheel2.style["-webkit-animation-duration"] ="1.2s";
	setTimeout(function(){
	Run2();	
	//document.getElementById('speed').value = '837';
   },5000); 	 
	 
 }
 /*if(document.getElementById('Tmassv').value == 140 && document.getElementById('conph').value == 200){//Ec=200v
 
	var wheel1 = document.getElementById("swheel");
	var wheel2 = document.getElementById("bwheel");
	wheel1.style["-webkit-animation-duration"] ="1.2s";
	wheel2.style["-webkit-animation-duration"] ="1.2s";
	setTimeout(function(){
		
	document.getElementById('speed').value = '812';
   },5000); 	 
	 
 }
 if(document.getElementById('Tmassv').value == 140 && document.getElementById('conph').value == 180){//Ec=180v
 
	var wheel1 = document.getElementById("swheel");
	var wheel2 = document.getElementById("bwheel");
	wheel1.style["-webkit-animation-duration"] ="1.2s";
	wheel2.style["-webkit-animation-duration"] ="1.2s";
	setTimeout(function(){
		
	document.getElementById('speed').value = '773';
   },5000); 	 
	 
 }
 */
 
 
if(document.getElementById('Tmassv').value == 160 ){//Ec=220v

	var wheel1 = document.getElementById("swheel");
	var wheel2 = document.getElementById("bwheel");
	wheel1.style["-webkit-animation-duration"] ="1.3s";
	wheel2.style["-webkit-animation-duration"] ="1.3s";
	setTimeout(function(){
	Run2();	
	//document.getElementById('speed').value = '810';
   },5000); 	 
	 
 }
 /*if(document.getElementById('Tmassv').value == 160 && document.getElementById('conph').value == 200){//Ec=200v
 
	var wheel1 = document.getElementById("swheel");
	var wheel2 = document.getElementById("bwheel");
	wheel1.style["-webkit-animation-duration"] ="1.3s";
	wheel2.style["-webkit-animation-duration"] ="1.3s";
	setTimeout(function(){
		
	document.getElementById('speed').value = '769';
   },5000); 	 
	 
 }
 if(document.getElementById('Tmassv').value == 160 && document.getElementById('conph').value == 180){//Ec=180v
 
	var wheel1 = document.getElementById("swheel");
	var wheel2 = document.getElementById("bwheel");
	wheel1.style["-webkit-animation-duration"] ="1.3s";
	wheel2.style["-webkit-animation-duration"] ="1.3s"; 
	setTimeout(function(){
		
	document.getElementById('speed').value = '735';
   },5000); 	 
	 
 }
 
 */
 
 
 if(document.getElementById('Tmassv').value == 180 ){//Ec=220v
 
    var wheel1 = document.getElementById("swheel");
	var wheel2 = document.getElementById("bwheel");
	wheel1.style["-webkit-animation-duration"] ="1.4s";
	wheel2.style["-webkit-animation-duration"] ="1.4s";
	setTimeout(function(){
	Run2();	
	//document.getElementById('speed').value = '782';
   },5000); 	 
	 
 }
/* if(document.getElementById('Tmassv').value == 180 && document.getElementById('conph').value == 200){//Ec=200v
 
	var wheel1 = document.getElementById("swheel");
	var wheel2 = document.getElementById("bwheel");
	wheel1.style["-webkit-animation-duration"] ="1.4s";
	wheel2.style["-webkit-animation-duration"] ="1.4s";
	setTimeout(function(){
		
	document.getElementById('speed').value = '738';
   },5000); 	 
	 
 }
 if(document.getElementById('Tmassv').value == 180 && document.getElementById('conph').value == 180){//Ec=180v
 
	var wheel1 = document.getElementById("swheel");
	var wheel2 = document.getElementById("bwheel");
	wheel1.style["-webkit-animation-duration"] ="1.4s";
	wheel2.style["-webkit-animation-duration"] ="1.4s";
 
	setTimeout(function(){
		
	document.getElementById('speed').value = '703';
   },5000); 	 
	 
 }*/
 
 
 
 
 if(document.getElementById('Tmassv').value == 200 ){//Ec=220v
 
	var wheel1 = document.getElementById("swheel");
	var wheel2 = document.getElementById("bwheel");
	wheel1.style["-webkit-animation-duration"] ="1.5s";
	wheel2.style["-webkit-animation-duration"] ="1.5s";
 
 
	setTimeout(function(){
		Run2();
	//document.getElementById('speed').value = '753';
   },5000); 	 
	 
 }
 /* if(document.getElementById('Tmassv').value == 200 && document.getElementById('conph').value == 200){//Ec=200v
  
	var wheel1 = document.getElementById("swheel");
	var wheel2 = document.getElementById("bwheel");
	wheel1.style["-webkit-animation-duration"] ="1.5s";
	wheel2.style["-webkit-animation-duration"] ="1.5s";
	setTimeout(function(){
		
	document.getElementById('speed').value = '701';
   },5000); 	 
	 
 }
  if(document.getElementById('Tmassv').value == 200 && document.getElementById('conph').value == 180){//Ec=180v
  
	var wheel1 = document.getElementById("swheel");
	var wheel2 = document.getElementById("bwheel");
	wheel1.style["-webkit-animation-duration"] ="1.5s";
	wheel2.style["-webkit-animation-duration"] ="1.5s";
	setTimeout(function(){
		
	document.getElementById('speed').value = '668';
   },5000); 	 
	 
 }*/
 
 
 
 if(document.getElementById('Tmassv').value == 0 ){//Ec=220v
	
	var wheel1 = document.getElementById("swheel");
	var wheel2 = document.getElementById("bwheel");
	wheel1.style["-webkit-animation-duration"] ="0.5s";
	wheel2.style["-webkit-animation-duration"] ="0.5s";
	setTimeout(function(){
	Run2();	
	//document.getElementById('speed').value = '1028';
   },5000); 	 
	 
 }
/* if(document.getElementById('Tmassv').value == 0 && document.getElementById('conph').value == 200){//Ec=200v
	
	var wheel1 = document.getElementById("swheel");
	var wheel2 = document.getElementById("bwheel");
	wheel1.style["-webkit-animation-duration"] ="0.5s";
	wheel2.style["-webkit-animation-duration"] ="0.5s";
	setTimeout(function(){
		
	document.getElementById('speed').value = '1022';
   },5000); 	 
	 
 }
 if(document.getElementById('Tmassv').value == 0 && document.getElementById('conph').value == 180){//Ec=180v
	
	var wheel1 = document.getElementById("swheel");
	var wheel2 = document.getElementById("bwheel");
	wheel1.style["-webkit-animation-duration"] ="0.5s";
	wheel2.style["-webkit-animation-duration"] ="0.5s";
	setTimeout(function(){
		
	document.getElementById('speed').value = '1007';
   },5000); 	 
	 
 }*/
 
 
} 




///////////////////////////////////////////////////////////////////////////////Table Creation//////////////////////////////////////////////////////////////////////////////////////
 
 var tabrowindex = 1,tabrowindex2=1,tabrowindex3=1;
var arr1 = [],arr2=[],arr3=[];
var tabled1,tabled2,tabled3;

var chart;

// var showAlert;
//------------------------------------------------- Table Creation -----------------------------------------------//
function table1() {//Ec = 220v


    arr1[0] = tabrowindex ;
    arr1[1] = document.getElementById("Tmassv").value;
    arr1[2] = document.getElementById("speed").value;
    arr1[3] = parseFloat(arr1[2]*((2*Math.PI)/60)).toPrecision(5);
	arr1[4] = parseFloat(arr1[1]*1.875).toPrecision(5);
	
	document.getElementById('Vvalue1').value = $('#conph').val();
	tabled1 = document.getElementById("T1");
        
        var row = tabled1.insertRow(++tabrowindex);
   
    if (tabled1.rows.length <= 22) {
        
         // Row increment
        for (var q = 0; q < 5; q++) {

            var cell = row.insertCell(q);
            cell.innerHTML = arr1[q];

    }

    }

}    
 
function table2() {//Ec = 200v


    arr2[0] = tabrowindex2 ;
    arr2[1] = document.getElementById("Tmassv").value;
    arr2[2] = document.getElementById("speed").value;
    arr2[3] = parseFloat(arr2[2]*((2*Math.PI)/60)).toPrecision(5);
	arr2[4] = parseFloat(arr2[1]*1.875).toPrecision(5);
	
	document.getElementById('Vvalue2').value = $('#conph').val();
	tabled2 = document.getElementById("T2");
        
        var row = tabled2.insertRow(++tabrowindex2);
   
    if (tabled2.rows.length <= 22) {
        
         // Row increment
        for (var q = 0; q < 5; q++) {

            var cell = row.insertCell(q);
            cell.innerHTML = arr2[q];

    }

    }

}   
 
function table3() {//Ec = 180v


    arr3[0] = tabrowindex3 ;
    arr3[1] = document.getElementById("Tmassv").value;
    arr3[2] = document.getElementById("speed").value;
    arr3[3] = parseFloat(arr3[2]*((2*Math.PI)/60)).toPrecision(5);
	arr3[4] = parseFloat(arr3[1]*1.875).toPrecision(5);
	
	document.getElementById('Vvalue3').value = $('#conph').val();
	tabled3 = document.getElementById("T3");
        
        var row = tabled3.insertRow(++tabrowindex3);
   
    if (tabled3.rows.length <= 22) {
        
         // Row increment
        for (var q = 0; q < 5; q++) {

            var cell = row.insertCell(q);
            cell.innerHTML = arr3[q];

    }

    }

} 
function CreateTable(){
	
if(document.getElementById('obsn').value == 1){
	
table1();	
}	
if(document.getElementById('obsn').value == 2){
	
table2();	
}	
if(document.getElementById('obsn').value == 3){
	
table3();	
}	

}



  
/////////////////////////////////////////////////////////////////////Plot creation Torque vs. Speed////////////////////////////////////////////////////////////////////////// 



	var y = new Array();
    var yop = new Array();	
	var dataPoints1=[];
	var dataPoints2=[];
	var dataPoints3=[];
	
	function plot(){
	 document.getElementById('plotbucket').style.display  = "block"; 
	 document.getElementById('chartContainer').style.display  = "block";
 
    var table1 = document.getElementById('T1');
    for (var tabrowindex1 = 2; tabrowindex1 < table1.rows.length; tabrowindex1++) {
        var rwe1 = table1.rows[tabrowindex1].cells;

        dataPoints1.push({x: parseFloat((rwe1[3].innerHTML)), y: parseFloat(rwe1[4].innerHTML)});
    }
 
	var table2 = document.getElementById('T2');
    for (var tabrowindex2 = 2; tabrowindex2 < table2.rows.length; tabrowindex2++) {
        var rwe2 = table2.rows[tabrowindex2].cells;

        dataPoints2.push({x: parseFloat((rwe2[3].innerHTML)), y: parseFloat(rwe2[4].innerHTML)});
    }
	
	var table3 = document.getElementById('T3');
    for (var tabrowindex3 = 2; tabrowindex3 < table3.rows.length; tabrowindex3++) {
        var rwe3 = table3.rows[tabrowindex3].cells;

        dataPoints3.push({x: parseFloat((rwe3[3].innerHTML)), y: parseFloat(rwe3[4].innerHTML)});
    }
 
	var chart = new CanvasJS.Chart("chartContainer",
    {
      //animationEnabled: true,
		  //animationDuration: 10000, 
	  title:{
      text: "Torque Vs. Speed Plot "
	  
      },
	  
	  axisX:[
	  
	  {
        interlacedColor: "#B2F9FA",
        title: "Speed(rad/sec)"
      },
	  {/////X 2 axis invisible
			gridThickness: 0,
    tickLength: 0,
    lineThickness: 0,
    labelFormatter: function(){
      return " ";}
	  
		},
		
		{/////X 3 axis invisible
			gridThickness: 0,
    tickLength: 0,
    lineThickness: 0,
    labelFormatter: function(){
      return " ";}
	  
		}
	 ], 
	  
	  
	  
    axisY: 
	      {// Y axis
            title: "Torque(gm.cm)",
			
			//maximum:0.03,
        },
		
		
	data: [
      {        
        type: "spline",
		color:"#20BC67",
		showInLegend: true,
        legendText: "Ec=220v",
        dataPoints:dataPoints1
	
       },
       {        
        type: "spline",
		color:"#2E98CA",
		showInLegend: true,
        legendText: "Ec=200v",
        dataPoints:dataPoints2
	
       },
	   {        
        type: "spline",
		color:"#DE3B51",
		showInLegend: true,
        legendText: "Ec=180v",
        dataPoints:dataPoints3
	
       },
      ]	
	});

	chart.render();
	document.getElementById("exportChart").style.display = "block";
	document.getElementById("exportChart").addEventListener("click",function(){
	chart.exportChart({format: "jpg"})});	
	}
 
 function dltRow1(){
	 
	var table = document.getElementById('T1');
	var rowCount = table.rows.length;
	if(rowCount <= 2){
		alert("There is no row available to delete!");
		return;
		
	} 
	else{
		//delete last row
		table.deleteRow(rowCount-1);
	}	 
	 
 }
 
 function dltRow2(){
	 
	var table = document.getElementById('T2');
	var rowCount = table.rows.length;
	if(rowCount <= 2){
		alert("There is no row available to delete!");
		return;
		
	} 
	else{
		//delete last row
		table.deleteRow(rowCount-1);
	}	 
	 
 }
 
 function dltRow3(){
	 
	var table = document.getElementById('T3');
	var rowCount = table.rows.length;
	if(rowCount <= 2){
		alert("There is no row available to delete!");
		return;
		
	} 
	else{
		//delete last row
		table.deleteRow(rowCount-1);
	}	 
	 
 }
 
 function dltRow(){
	 
	 if(document.getElementById('conph').value == 220){
	
	dltRow1();	
	tabrowindex = tabrowindex-1;
	}	
	if(document.getElementById('conph').value == 200){
		
	dltRow2();
    tabrowindex2 = tabrowindex2-1;	
	}	
	if(document.getElementById('conph').value == 180){
		
	dltRow3();
	tabrowindex3 = tabrowindex3-1;
	}	
 }
 
 ///////////////////////////Transfer Function////////////////////////////////////////////
 
 var k,f,f0,J,Km,Tm ;
 
 function TF(){
	 
	J = parseFloat(7.64 * Math.pow(10,-4));
	f = parseFloat(1.45 * Math.pow(10,-4));
	
	// K = at an operating point speed the value of torque in Ec= 180v and Ec= 200v  substract them and deveded by control voltage diff, i.e 20v * 9.81 * 10^-5
	// f0 = a slope in the plot (y2 - y1 / x2-x1)* 9.81 * 10^-5
	// Km = K / (f+f0); motor gain constant 
	// Tm = J / (f+f0); motor time constant
	// Acc. to the lab report Km = 0.194 , Tm = 0.693
   if ( document.getElementById('chartContainer').style.display == "block"){	
    document.getElementById('tfn').value= "0.194";	
	document.getElementById('tfd').value= "0.639";	
 }
 
 } 
 
 
 /*function Run() {
	 
	//var position=[]; 
	var speed = [];
	var dataPoints = [];
	
	var km = 0.0605;///taking manual operating point	
	var Tm = 0.457; 
	 
	 var Ea =  math.multiply(document.getElementById('conph').value,2);
	 
	 var f = 50;
	 var w = math.multiply(2,math.pi,f);
	 var constant = math.pow(w,2);
	 var sconst = math.multiply(Tm,constant);
	 
	 var roots = math.polynomialRoot(constant,sconst,1,Tm);
	  var pol1 = roots[0];
	  var pol2 = roots[1];
	  var pol3 = roots[2];
	  console.log("pol1 = "+ pol1);
	  console.log("pol2 = "+ pol2);
	  console.log("pol3 = "+ pol3);
	  
	  var rhs = math.multiply(Ea,w,km);
	  
	  var A = math.divide(rhs,math.multiply(math.subtract(pol1,pol2), math.subtract(pol1,pol3))); 
	  var B = math.divide(rhs,math.multiply(math.subtract(pol2,pol1), math.subtract(pol2,pol3)));
	  var C = math.divide(rhs,math.multiply(math.subtract(pol3,pol1), math.subtract(pol3,pol2)));
	  
	 for( var t=0; t<=100; t+=0.1){
		 
	speed[t] = math.add(math.multiply(A,math.pow(math.e,math.multiply(pol1,t))), math.multiply(B,math.pow(math.e,math.multiply(pol2,t))), math.multiply(C,math.pow(math.e,math.multiply(pol3,t))));
	
    //speed[t] = math.add(B, math.multiply(C, math.divide(-1,Tm) , math.pow(math.e,-math.divide(t,Tm))));
	
	
	dataPoints.push({x:(t), y:(speed[t].re)});

		console.log('speed = '+ speed[t]);
		 
	 }
	 document.getElementById('plotbucket').style.display  = "block"; 
    document.getElementById('chartContainer').style.display  = "block"; 	
	var chart = new CanvasJS.Chart("chartContainer",
    {
      animationEnabled: true,
		  animationDuration: 10000, 
	  title:{
      text: "speed vs. time plot "
	  
      },
	  
	  axisX:{
        interlacedColor: "#DFDEDE",
        title: "Time(Sec)"
      },
    axisY: [
	      {/////output Y axis
            title: "speed",
			
			//maximum:0.03,
        },
		
		],
	data: [
      { 
		showInLegend: true,
		legendText: "Output Curve",
        type: "spline",
		color:"black",
        dataPoints:dataPoints
	
       },
       
      ]	
	});

	chart.render();	
	//document.getElementById("result").style.display = "block";
	document.getElementById("exportChart").style.display = "block";
	document.getElementById("exportChart").addEventListener("click",function(){
	chart.exportChart({format: "jpg"})});	
		
	 
 }*/
 ////////////////////////////////////////Actul simulation of speed//////////////////////////////////
 
 function Run2() {///step
	 
	//var position=[]; 
	var speed ;
	var dataPoints = [];
	
	var km = 0.0605;///taking manual operating point	
	var Tm = 0.457; 
	 
	 var Ea =  document.getElementById('conph').value;
	 
	 var f = 50;
	 var w = math.multiply(2,math.pi,f);
	 
	 if(document.getElementById('Tmassv').value == 0){
	 for( var t=0; t<=100; t++){
		 
	speed = math.multiply(math.multiply(Ea,km,8),math.subtract(1,math.pow(math.e,-math.divide(t,Tm))));//in rad/s
	
	var Rspeed = math.divide(math.multiply(speed,60),math.multiply(2,math.pi));
	
    //speed[t] = math.add(B, math.multiply(C, math.divide(-1,Tm) , math.pow(math.e,-math.divide(t,Tm))));
	
	
	//dataPoints.push({x:(t), y:(speed)});

		
		 
	 }
	 $('#speed').val(Rspeed);
	 }
	 
	 
	   if(document.getElementById('Tmassv').value != 0){
		  
		  for( var t=0; t<=100; t++){
		 
	speed = math.multiply(math.multiply(Ea,km,8),math.subtract(1,math.pow(math.e,-math.divide(t,Tm))));//in rad/s
	
	var Rspeed2 = math.divide(math.multiply(speed,60),math.multiply(2,math.pi));
	
    //speed[t] = math.add(B, math.multiply(C, math.divide(-1,Tm) , math.pow(math.e,-math.divide(t,Tm))));
	
	
	//dataPoints.push({x:(t), y:(speed)});

		
		 
	 }
	 //console.log('ol speed = '+ Rspeed);
	 
	 var weight = $('#Tmassv').val();
	 var spdcoeff = math.divide(weight,10);
	 
	 	
	///Linear interpolation
	
 if(Ea>=140 && Ea<=220){
	var x = Ea;///desired x or control voltage

///code for finding nearest lower value from array
var closest_low = [140,160,180,200,220].reduce((a, b) => {
    return Math.abs(b - x) < Math.abs(a - x) ? b : a;
});

///code for finding nearest higher value from array
var ary = [140,160,180,200,220];

var xhigh = getClosestValue(x,ary);///higher nearest
var xlow = closest_low;///lower nearest

///taking range of control voltage 140-220

if(xlow == 140 ){
	 var ylow = 36;///avg speed decrease for 140v
	 
}
if (xhigh == 140){
	var yhigh = 36;
}
if(xlow == 160) {
	 var ylow = 31;///avg speed decrease for 160v	 
}
if (xhigh == 160){
	var yhigh = 31;
}

if(xlow == 180) {
	 var ylow = 31;///avg speed decrease for 180v
	 
}
if (xhigh == 180){
	var yhigh = 31;
}
if(xlow == 200){
	 var ylow = 31;///avg speed decrease for 200v
	 
}
 if (xhigh == 200){
	 var yhigh = 31;
 }
if(xlow == 220) {
	 var ylow = 23;///avg speed decrease for 140v	 
}
if (xhigh == 220){
	var yhigh = 23;
}
	 console.log('xlow ='+ xlow);
	 console.log('ylow ='+ ylow);
	 console.log('xhigh ='+ xhigh);
	 console.log('yhigh ='+ yhigh);
	 var slope = math.divide(math.subtract(yhigh,ylow),math.subtract(xhigh,xlow));
	// console.log('slope = '+ slope);
	 
	 var spdrcoeff = math.add(ylow,math.multiply(slope,math.subtract(Ea,xlow)));	 
	 //console.log('spdrcoeff = '+ spdrcoeff);
	 
	 var drspeed = math.subtract(Rspeed2,math.multiply(spdcoeff,spdrcoeff));
	 //console.log('speed = '+ drspeed);
	
	$('#speed').val(drspeed);	
	}
	
	///linear extrapolation
	
	else if(Ea<140){
	var xlow = 140;
	var xhigh = 160;
	var ylow = 36;
	var yhigh = 31;
	
	var slope = math.divide(math.subtract(yhigh,ylow),math.subtract(xhigh,xlow));
	 //console.log('slope = '+ slope);
	 
	 var spdrcoeff = math.add(ylow,math.multiply(slope,math.subtract(Ea,xlow)));	 
	 //console.log('spdrcoeff = '+ spdrcoeff);
	 
	 var drspeed = math.subtract(Rspeed,math.multiply(spdcoeff,spdrcoeff));
	 //console.log('speed = '+ drspeed);
	
	$('#speed').val(drspeed);	
	
	}
	
	 
	 }
	 
	 
	 
	 
	 /*document.getElementById('plotbucket').style.display  = "block"; 
    document.getElementById('chartContainer').style.display  = "block"; 	
	var chart = new CanvasJS.Chart("chartContainer",
    {
      animationEnabled: true,
		  animationDuration: 10000, 
	  title:{
      text: "speed vs. time plot "
	  
      },
	  
	  axisX:{
        interlacedColor: "#DFDEDE",
        title: "Time(Sec)"
      },
    axisY: [
	      {/////output Y axis
            title: "speed",
			
			//maximum:0.03,
        },
		
		],
	data: [
      { 
		showInLegend: true,
		legendText: "Output Curve",
        type: "spline",
		color:"black",
        dataPoints:dataPoints
	
       },
       
      ]	
	});

	chart.render();	
	//document.getElementById("result").style.display = "block";
	document.getElementById("exportChart").style.display = "block";
	document.getElementById("exportChart").addEventListener("click",function(){
	chart.exportChart({format: "jpg"})});*/

	
		
	 
 }
 
 ///nearest high
 function getClosestValue(input, array){
  var tempArray = array;
  var index = tempArray.sort().findIndex((item) => {
    return input < item;
  });
  if(index >= 0) {
    return array[index];
  } else {
    return null; // no answer
  }
}
 
function LevelIndicate(){
	var w = $('#Tmassv').val();
	var dc = $('#dcc').val(); 
	
	///Linear interpolation according to weights
	
 if(w>=10 && w<=200){
	var x = w;///desired x or chosen weight

///code for finding nearest lower value from array
var closest_lowmass = [10,20,40,50,70,100,120,140,160,180,200].reduce((a, b) => {
    return Math.abs(b - x) < Math.abs(a - x) ? b : a;
});

///code for finding nearest higher value from array
var ary = [10,20,40,50,70,100,120,140,160,180,200];///weights array

var xhigh = getClosestValue(x,ary);///higher nearest value of weights
var xlow = closest_lowmass;///lower nearest value of weights

if(document.getElementById('conph').value == 220){
	///for 10 gm 
	if(xlow == 10&& dc == 0.2){
		
		$('#dcv').val(1.5);
		var ylowdc = 0.2;///dcc value
		var ylowdv = 1.5;///dcv value
		
	}
	if(xhigh == 10&& dc == 0.2){
		
		$('#dcv').val(1.5);
		var yhighdc = 0.2;///dcc value
		var yhighdv = 1.5;///dcv value
		
	}
	
	///for 20 gm 
	if(xlow == 20&& dc == 0.4){
		
		$('#dcv').val(2.5);
		var ylowdc = 0.4;///dcc value
		var ylowdv = 2.5;///dcv value
		
	}
	if(xhigh == 20&& dc == 0.4){
		
		$('#dcv').val(1.5);
		var yhighdc = 0.4;///dcc value
		var yhighdv = 2.5;///dcv value
		
	}
	
	///for 40 gm 
	if(xlow == 40&& dc == 0.5){
		
		$('#dcv').val(3.5);
		var ylowdc = 0.5;///dcc value
		var ylowdv = 3.5;///dcv value
		
	}
	if(xhigh == 40&& dc == 0.5){
		
		$('#dcv').val(3.5);
		var yhighdc = 0.5;///dcc value
		var yhighdv = 3.5;///dcv value
		
	}
	
	///for 50 gm 
	if(xlow == 50&& dc == 0.7){
		
		$('#dcv').val(4.5);
		var ylowdc = 0.7;///dcc value
		var ylowdv = 4.5;///dcv value
		
	}
	if(xhigh == 50&& dc == 0.7){
		
		$('#dcv').val(4.5);
		var yhighdc = 0.7;///dcc value
		var yhighdv = 4.5;///dcv value
		
	}
	
	///for 70 gm 
	if(xlow == 70&& dc == 0.8){
		
		$('#dcv').val(4.5);
		var ylowdc = 0.8;///dcc value
		var ylowdv = 4.5;///dcv value
		
	}
	if(xhigh == 70&& dc == 0.8){
		
		$('#dcv').val(4.5);
		var yhighdc = 0.8;///dcc value
		var yhighdv = 4.5;///dcv value
		
	}
	
	///for 100 gm 
	if(xlow == 100&& dc == 0.9){
		
		$('#dcv').val(5.0);
		var ylowdc = 0.9;///dcc value
		var ylowdv = 5.0;///dcv value
		
	}
	if(xhigh == 100&& dc == 0.9){
		
		$('#dcv').val(5.0);
		var yhighdc = 0.9;///dcc value
		var yhighdv = 5.0;///dcv value
		
	}
	
	///for 120 gm 
	if(xlow == 120&& dc == 1.2){
		
		$('#dcv').val(6.4);
		var ylowdc = 1.2;///dcc value
		var ylowdv = 6.4;///dcv value
		
	}
	if(xhigh == 120&& dc == 1.2){
		
		$('#dcv').val(6.4);
		var yhighdc = 1.2;///dcc value
		var yhighdv = 6.4;///dcv value
		
	}
	
	///for 140 gm 
	if(xlow == 140&& dc == 1.3){
		
		$('#dcv').val(7.1);
		var ylowdc = 1.3;///dcc value
		var ylowdv = 7.1;///dcv value
		
	}
	if(xhigh == 140&& dc == 1.3){
		
		$('#dcv').val(7.1);
		var yhighdc = 1.3;///dcc value
		var yhighdv = 7.1;///dcv value
		
	}
	
	///for 160 gm 
	if(xlow == 160&& dc == 1.4){
		
		$('#dcv').val(7.7);
		var ylowdc = 1.4;///dcc value
		var ylowdv = 7.7;///dcv value
		
	}
	if(xhigh == 160&& dc == 1.4){
		
		$('#dcv').val(7.7);
		var yhighdc = 1.4;///dcc value
		var yhighdv = 7.7;///dcv value
		
	}
	
	///for 180 gm 
	if(xlow == 180&& dc == 1.6){
		
		$('#dcv').val(8.6);
		var ylowdc = 1.6;///dcc value
		var ylowdv = 8.6;///dcv value
		
	}
	if(xhigh == 180&& dc == 1.6){
		
		$('#dcv').val(8.6);
		var yhighdc = 1.6;///dcc value
		var yhighdv = 8.6;///dcv value
		
	}
	
	///for 200 gm 
	if(xlow == 200&& dc == 1.7){
		
		$('#dcv').val(8.6);
		var ylowdc = 1.7;///dcc value
		var ylowdv = 8.6;///dcv value
		
	}
	if(xhigh == 200&& dc == 1.7){
		
		$('#dcv').val(8.6);
		var yhighdc = 1.7;///dcc value
		var yhighdv = 8.6;///dcv value
		
	}
   }
   ////////////////////////////////////////////////////////////control phae voltage = 200/////////////////////////////////
   if(document.getElementById('conph').value == 200){
	///for 10 gm 
	if(xlow == 10&& dc == 0.2){
		
		$('#dcv').val(1.3);
		var ylowdc = 0.2;///dcc value
		var ylowdv = 1.3;///dcv value
		
	}
	if(xhigh == 10&& dc == 0.2){
		
		$('#dcv').val(1.3);
		var yhighdc = 0.2;///dcc value
		var yhighdv = 1.3;///dcv value
		
	}
	
	///for 20 gm 
	if(xlow == 20&& dc == 0.4){
		
		$('#dcv').val(2.0);
		var ylowdc = 0.4;///dcc value
		var ylowdv = 2.0;///dcv value
		
	}
	if(xhigh == 20&& dc == 0.4){
		
		$('#dcv').val(2.0);
		var yhighdc = 0.4;///dcc value
		var yhighdv = 2.0;///dcv value
		
	}
	
	///for 40 gm 
	if(xlow == 40&& dc == 0.6){
		
		$('#dcv').val(2.9);
		var ylowdc = 0.6;///dcc value
		var ylowdv = 2.9;///dcv value
		
	}
	if(xhigh == 40&& dc == 0.6){
		
		$('#dcv').val(2.9);
		var yhighdc = 0.6;///dcc value
		var yhighdv = 2.9;///dcv value
		
	}
	
	///for 60 gm 
	if(xlow == 60&& dc == 0.7){
		
		$('#dcv').val(3.6);
		var ylowdc = 0.7;///dcc value
		var ylowdv = 3.6;///dcv value
		
	}
	if(xhigh == 60&& dc == 0.7){
		
		$('#dcv').val(3.6);
		var yhighdc = 0.7;///dcc value
		var yhighdv = 3.6;///dcv value
		
	}
	
	///for 80 gm 
	if(xlow == 80&& dc == 0.9){
		
		$('#dcv').val(4.5);
		var ylowdc = 0.9;///dcc value
		var ylowdv = 4.5;///dcv value
		
	}
	if(xhigh == 80&& dc == 0.9){
		
		$('#dcv').val(4.5);
		var yhighdc = 0.9;///dcc value
		var yhighdv = 4.5;///dcv value
		
	}
	
	///for 100 gm 
	if(xlow == 100&& dc == 1.0){
		
		$('#dcv').val(5.3);
		var ylowdc = 1.0;///dcc value
		var ylowdv = 5.3;///dcv value
		
	}
	if(xhigh == 100&& dc == 1.0){
		
		$('#dcv').val(5.3);
		var yhighdc = 1.0;///dcc value
		var yhighdv = 5.3;///dcv value
		
	}
	
	///for 120 gm 
	if(xlow == 120&& dc == 1.2){
		
		$('#dcv').val(6.1);
		var ylowdc = 1.2;///dcc value
		var ylowdv = 6.1;///dcv value
		
	}
	if(xhigh == 120&& dc == 1.2){
		
		$('#dcv').val(6.1);
		var yhighdc = 1.2;///dcc value
		var yhighdv = 6.1;///dcv value
		
	}
	
	///for 140 gm 
	if(xlow == 140&& dc == 1.3){
		
		$('#dcv').val(6.8);
		var ylowdc = 1.3;///dcc value
		var ylowdv = 6.8;///dcv value
		
	}
	if(xhigh == 140&& dc == 1.3){
		
		$('#dcv').val(6.8);
		var yhighdc = 1.3;///dcc value
		var yhighdv = 6.8;///dcv value
		
	}
	
	///for 160 gm 
	if(xlow == 160&& dc == 1.5){
		
		$('#dcv').val(7.6);
		var ylowdc = 1.5;///dcc value
		var ylowdv = 7.6;///dcv value
		
	}
	if(xhigh == 160&& dc == 1.5){
		
		$('#dcv').val(7.6);
		var yhighdc = 1.5;///dcc value
		var yhighdv = 7.6;///dcv value
		
	}
	
	///for 180 gm 
	if(xlow == 180&& dc == 1.7){
		
		$('#dcv').val(8.7);
		var ylowdc = 1.7;///dcc value
		var ylowdv = 8.7;///dcv value
		
	}
	if(xhigh == 180&& dc == 1.7){
		
		$('#dcv').val(8.7);
		var yhighdc = 1.7;///dcc value
		var yhighdv = 8.7;///dcv value
		
	}
	
	///for 200 gm 
	if(xlow == 200&& dc == 1.9){
		
		$('#dcv').val(9.5);
		var ylowdc = 1.9;///dcc value
		var ylowdv = 9.5;///dcv value
		
	}
	if(xhigh == 200&& dc == 1.9){
		
		$('#dcv').val(9.5);
		var yhighdc = 1.9;///dcc value
		var yhighdv = 9.5;///dcv value
		
	}
   }
  ////////////////////////////////////////////////////////////control phase voltage = 180/////////////////////////////////
   if(document.getElementById('conph').value == 180){
	///for 10 gm 
	if(xlow == 10&& dc == 0.3){
		
		$('#dcv').val(1.6);
		var ylowdc = 0.3;///dcc value
		var ylowdv = 1.6;///dcv value
		
	}
	if(xhigh == 10&& dc == 0.3){
		
		$('#dcv').val(1.6);
		var yhighdc = 0.3;///dcc value
		var yhighdv = 1.6;///dcv value
		
	}
	
	///for 20 gm 
	if(xlow == 20&& dc == 0.4){
		
		$('#dcv').val(1.8);
		var ylowdc = 0.4;///dcc value
		var ylowdv = 1.8;///dcv value
		
	}
	if(xhigh == 20&& dc == 0.4){
		
		$('#dcv').val(1.8);
		var yhighdc = 0.4;///dcc value
		var yhighdv = 1.8;///dcv value
		
	}
	
	///for 40 gm 
	if(xlow == 40&& dc == 0.5){
		
		$('#dcv').val(2.8);
		var ylowdc = 0.5;///dcc value
		var ylowdv = 2.8;///dcv value
		
	}
	if(xhigh == 40&& dc == 0.5){
		
		$('#dcv').val(2.8);
		var yhighdc = 0.6;///dcc value
		var yhighdv = 2.8;///dcv value
		
	}
	
	///for 60 gm 
	if(xlow == 60&& dc == 0.8){
		
		$('#dcv').val(4.0);
		var ylowdc = 0.8;///dcc value
		var ylowdv = 4.0;///dcv value
		
	}
	if(xhigh == 60&& dc == 0.8){
		
		$('#dcv').val(4.0);
		var yhighdc = 0.8;///dcc value
		var yhighdv = 4.0;///dcv value
		
	}
	
	///for 80 gm 
	if(xlow == 80&& dc == 0.9){
		
		$('#dcv').val(4.3);
		var ylowdc = 0.9;///dcc value
		var ylowdv = 4.3;///dcv value
		
	}
	if(xhigh == 80&& dc == 0.9){
		
		$('#dcv').val(4.3);
		var yhighdc = 0.9;///dcc value
		var yhighdv = 4.3;///dcv value
		
	}
	
	///for 100 gm 
	if(xlow == 100&& dc == 1.1){
		
		$('#dcv').val(5.3);
		var ylowdc = 1.1;///dcc value
		var ylowdv = 5.3;///dcv value
		
	}
	if(xhigh == 100&& dc == 1.1){
		
		$('#dcv').val(5.3);
		var yhighdc = 1.1;///dcc value
		var yhighdv = 5.3;///dcv value
		
	}
	
	///for 120 gm 
	if(xlow == 120&& dc == 1.2){
		
		$('#dcv').val(6.0);
		var ylowdc = 1.2;///dcc value
		var ylowdv = 6.0;///dcv value
		
	}
	if(xhigh == 120&& dc == 1.2){
		
		$('#dcv').val(6.0);
		var yhighdc = 1.2;///dcc value
		var yhighdv = 6.0;///dcv value
		
	}
	
	///for 140 gm 
	if(xlow == 140&& dc == 1.3){
		
		$('#dcv').val(6.8);
		var ylowdc = 1.3;///dcc value
		var ylowdv = 6.8;///dcv value
		
	}
	if(xhigh == 140&& dc == 1.3){
		
		$('#dcv').val(6.8);
		var yhighdc = 1.3;///dcc value
		var yhighdv = 6.8;///dcv value
		
	}
	
	///for 160 gm 
	if(xlow == 160&& dc == 1.5){
		
		$('#dcv').val(7.8);
		var ylowdc = 1.5;///dcc value
		var ylowdv = 7.8;///dcv value
		
	}
	if(xhigh == 160&& dc == 1.5){
		
		$('#dcv').val(7.8);
		var yhighdc = 1.5;///dcc value
		var yhighdv = 7.8;///dcv value
		
	}
	
	///for 180 gm 
	if(xlow == 180&& dc == 1.7){
		
		$('#dcv').val(8.7);
		var ylowdc = 1.7;///dcc value
		var ylowdv = 8.7;///dcv value
		
	}
	if(xhigh == 180&& dc == 1.7){
		
		$('#dcv').val(8.7);
		var yhighdc = 1.7;///dcc value
		var yhighdv = 8.7;///dcv value
		
	}
	
	///for 200 gm 
	if(xlow == 200&& dc == 2.1){
		
		$('#dcv').val(10.5);
		var ylowdc = 2.1;///dcc value
		var ylowdv = 10.5;///dcv value
		
	}
	if(xhigh == 200&& dc == 2.1){
		
		$('#dcv').val(10.5);
		var yhighdc = 2.1;///dcc value
		var yhighdv = 10.5;///dcv value
		
	}
   } 
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
 }
	var slopedc = math.divide(math.subtract(yhighdc,ylowdc),math.subtract(xhigh,xlow));
	 //console.log('slope = '+ slope);
	 
	 var dccValue = math.add(ylowdc,math.multiply(slopedc,math.subtract(w,xlow)));	 
	 //console.log('spdrcoeff = '+ spdrcoeff); 
	 
	 var slopedv = math.divide(math.subtract(yhighdv,ylowdv),math.subtract(xhigh,xlow));
	 //console.log('slope = '+ slope);
	 	 
	 var dcvValue = math.add(ylowdv,math.multiply(slopedv,math.subtract(w,xlow)));	 
	 //console.log('spdrcoeff = '+ spdrcoeff); 
	 
	 if(document.getElementById('dcc').value == dccValue && document.getElementById('dcv').value == dcvValue){
		document.getElementById('waterlevel').style.left = '51%';		 
	 }
	 
}
 
