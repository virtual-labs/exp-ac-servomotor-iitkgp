 
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
		   document.getElementById('speed').value = '1029';
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
		
	document.getElementById('speed').value = '1015';
   },5000);	
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
	var speeddown = document.getElementById('speed').value -5 ;
	document.getElementById('speed').value = speeddown;
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
	var speeddown = document.getElementById('speed').value -5 ;
	document.getElementById('speed').value = speeddown;
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
	var speeddown = document.getElementById('speed').value -5 ;
	document.getElementById('speed').value = speeddown;
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
	var speeddown = document.getElementById('speed').value -5 ;
	document.getElementById('speed').value = speeddown;
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
	var speeddown = document.getElementById('speed').value -5 ;
	document.getElementById('speed').value = speeddown;
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
 if(document.getElementById('Tmassv').value == 20 && document.getElementById('conph').value == 220 ){//Ec=220v
	
	var wheel1 = document.getElementById("swheel");
	var wheel2 = document.getElementById("bwheel");
	wheel1.style["-webkit-animation-duration"] ="0.6s";
	wheel2.style["-webkit-animation-duration"] ="0.6s"; 
	setTimeout(function(){
		
	document.getElementById('speed').value = '1005';
   },5000); 	 
	 
 }
 if(document.getElementById('Tmassv').value == 20 && document.getElementById('conph').value == 200 ){//Ec=200v
 
	var wheel1 = document.getElementById("swheel");
	var wheel2 = document.getElementById("bwheel");
	wheel1.style["-webkit-animation-duration"] ="0.6s";
	wheel2.style["-webkit-animation-duration"] ="0.6s";
	 
	setTimeout(function(){
		
	document.getElementById('speed').value = '990';
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
	 
 } 
 
 
 
 if(document.getElementById('Tmassv').value == 40 && document.getElementById('conph').value == 220){//Ec=220v
 
    var wheel1 = document.getElementById("swheel");
	var wheel2 = document.getElementById("bwheel");
	wheel1.style["-webkit-animation-duration"] ="0.7s";
	wheel2.style["-webkit-animation-duration"] ="0.7s";
	setTimeout(function(){
		
	document.getElementById('speed').value = '972';
   },5000); 	 
	 
 }
 if(document.getElementById('Tmassv').value == 40 && document.getElementById('conph').value == 200){//Ec=200v
 
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
	 
 }
 
 
 
 
 if(document.getElementById('Tmassv').value == 50 && document.getElementById('conph').value == 220){//Ec=220v
 
    var wheel1 = document.getElementById("swheel");
	var wheel2 = document.getElementById("bwheel");
	wheel1.style["-webkit-animation-duration"] ="0.8s";
	wheel2.style["-webkit-animation-duration"] ="0.8s";
	setTimeout(function(){
		
	document.getElementById('speed').value = '960';
   },5000); 	 
	 
 }
 if(document.getElementById('Tmassv').value == 50 && document.getElementById('conph').value == 200){//Ec=200v
 
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
	 
 }
 
 
 
if(document.getElementById('Tmassv').value == 70 && document.getElementById('conph').value == 220){//Ec=220v

	var wheel1 = document.getElementById("swheel");
	var wheel2 = document.getElementById("bwheel");
	wheel1.style["-webkit-animation-duration"] ="0.9s";
	wheel2.style["-webkit-animation-duration"] ="0.9s";

	setTimeout(function(){
		
	document.getElementById('speed').value = '935';
   },5000); 	 
	 
 }
 if(document.getElementById('Tmassv').value == 70 && document.getElementById('conph').value == 200){//Ec=200v
 
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
	 
 } 
 
 
 
 if(document.getElementById('Tmassv').value == 100 && document.getElementById('conph').value == 220){//Ec=220v
 
    var wheel1 = document.getElementById("swheel");
	var wheel2 = document.getElementById("bwheel");
	wheel1.style["-webkit-animation-duration"] ="1s";
	wheel2.style["-webkit-animation-duration"] ="1s";
	setTimeout(function(){
		
	document.getElementById('speed').value = '896';
   },5000); 	 
	 
 }
 if(document.getElementById('Tmassv').value == 100 && document.getElementById('conph').value == 200){//Ec=200v
 
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
 
 
 
 if(document.getElementById('Tmassv').value == 120 && document.getElementById('conph').value == 220){//Ec=220v
 
	var wheel1 = document.getElementById("swheel");
	var wheel2 = document.getElementById("bwheel");
	wheel1.style["-webkit-animation-duration"] ="1.1s";
	wheel2.style["-webkit-animation-duration"] ="1.1s";
 

	setTimeout(function(){
		
	document.getElementById('speed').value = '863';
   },5000); 	 
	 
 }
 if(document.getElementById('Tmassv').value == 120 && document.getElementById('conph').value == 200){//Ec=200v
 
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
 
 
 
 if(document.getElementById('Tmassv').value == 140 && document.getElementById('conph').value == 220){//Ec=220v
 
	var wheel1 = document.getElementById("swheel");
	var wheel2 = document.getElementById("bwheel");
	wheel1.style["-webkit-animation-duration"] ="1.2s";
	wheel2.style["-webkit-animation-duration"] ="1.2s";
	setTimeout(function(){
		
	document.getElementById('speed').value = '837';
   },5000); 	 
	 
 }
 if(document.getElementById('Tmassv').value == 140 && document.getElementById('conph').value == 200){//Ec=200v
 
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
 
 
 
if(document.getElementById('Tmassv').value == 160 && document.getElementById('conph').value == 220){//Ec=220v

	var wheel1 = document.getElementById("swheel");
	var wheel2 = document.getElementById("bwheel");
	wheel1.style["-webkit-animation-duration"] ="1.3s";
	wheel2.style["-webkit-animation-duration"] ="1.3s";
	setTimeout(function(){
		
	document.getElementById('speed').value = '810';
   },5000); 	 
	 
 }
 if(document.getElementById('Tmassv').value == 160 && document.getElementById('conph').value == 200){//Ec=200v
 
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
 
 
 
 
 if(document.getElementById('Tmassv').value == 180 && document.getElementById('conph').value == 220){//Ec=220v
 
    var wheel1 = document.getElementById("swheel");
	var wheel2 = document.getElementById("bwheel");
	wheel1.style["-webkit-animation-duration"] ="1.4s";
	wheel2.style["-webkit-animation-duration"] ="1.4s";
	setTimeout(function(){
		
	document.getElementById('speed').value = '782';
   },5000); 	 
	 
 }
 if(document.getElementById('Tmassv').value == 180 && document.getElementById('conph').value == 200){//Ec=200v
 
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
	 
 }
 
 
 
 
 if(document.getElementById('Tmassv').value == 200 && document.getElementById('conph').value == 220){//Ec=220v
 
	var wheel1 = document.getElementById("swheel");
	var wheel2 = document.getElementById("bwheel");
	wheel1.style["-webkit-animation-duration"] ="1.5s";
	wheel2.style["-webkit-animation-duration"] ="1.5s";
 
 
	setTimeout(function(){
		
	document.getElementById('speed').value = '753';
   },5000); 	 
	 
 }
  if(document.getElementById('Tmassv').value == 200 && document.getElementById('conph').value == 200){//Ec=200v
  
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
	 
 }
 
 
 
 if(document.getElementById('Tmassv').value == 0 && document.getElementById('conph').value == 220){//Ec=220v
	
	var wheel1 = document.getElementById("swheel");
	var wheel2 = document.getElementById("bwheel");
	wheel1.style["-webkit-animation-duration"] ="0.5s";
	wheel2.style["-webkit-animation-duration"] ="0.5s";
	setTimeout(function(){
		
	document.getElementById('speed').value = '1028';
   },5000); 	 
	 
 }
 if(document.getElementById('Tmassv').value == 0 && document.getElementById('conph').value == 200){//Ec=200v
	
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
	 
 }
 
 
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
	
if(document.getElementById('conph').value == 220){
	
table1();	
}	
if(document.getElementById('conph').value == 200){
	
table2();	
}	
if(document.getElementById('conph').value == 180){
	
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
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 