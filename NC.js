function grow()
{	
	document.getElementById('NSITulatorWrapper').style.borderRadius='0px';
	document.getElementById('NSITulatorWrapper').style.width='370px';
	document.getElementById('NSITulatorWrapper').style.height='395px';
	document.getElementById('NSITulatorWrapper').style.transition='all 0.5s ease-in-out';
	document.getElementById('NSITulatorWrapper').style.WebkitTransition='all 0.5s ease-in-out';
	document.getElementById('NSITulatorWrapper').style.MozTransition='all 0.5s ease-in-out';
	document.getElementById('NSITulatorWrapper').style.OTransition='all 0.5s ease-in-out';
	document.getElementById('NSITulatorWrapper').style.MsTransition='all 0.5s ease-in-out';
}
function check($s,$b)
{
	document.getElementById('eB').style.display='none';
	document.getElementById('NSITulatorWrapper').style.border='2px solid #009999';
	if($s == 'Semester' || $b =='Branch')
	{
		document.getElementById('NSITulatorWrapper').style.border='2px solid red';
		document.getElementById('eB').style.border="2px solid red";
		document.getElementById('eB').style.backgroundColor='#FF9999';	
		document.getElementById('eB').style.display='block';
		document.getElementById('eB').innerHTML = '<b> Invalid Entries </b>';
		return;
	}
	loadForm($s,$b);
}
function loadForm($s,$b)
{
	document.getElementById('stdDetails').style.display='none';
	document.getElementById('markSheet').innerHTML=
	'<table id="mS"><tbody id="mSB"><tr><td><label>Theory</label><span class="fields"><input id="th1"><input id="th2"><input id="th3"><input id="th4"><input id="th5"></span></td></tr><tr><td><label>Practical 1</label><span class="fields"><input id="pr1-1"><input id="pr1-2"><input id="pr1-3"><input id="pr1-4"><input id="pr1-5"></span></td></tr><tr><td><label>Practical 2</label><span  class="fields"><input id="pr2-1"><input id="pr2-2"><input id="pr2-3"></span></td></tr><tr><td><label>Practical 3</label><span  class="fields"><input id="pr3"></span></td></tr><td><label>Vocational 1</label><span  class="fields"><input id="vs1"></span></td></tr><td><label>Vocational 2</label><span  class="fields"><input id="vs2"></span></td></tr></tbody></table>	<button id="msBtn" class="Btn" onclick="calc();">Calculate</button><button id="msBtn" class="Btn" onclick="back();">Back</button>';
	
	if($s=='1')
	{
		document.getElementById('pr1-2').style.visibility='hidden';
		document.getElementById('pr1-3').style.visibility='hidden';
		document.getElementById('pr1-4').style.visibility='hidden';
		document.getElementById('pr1-5').style.visibility='hidden';
		document.getElementById('pr3').style.visibility='hidden';
		document.getElementById('vs1').style.visibility='hidden';
		document.getElementById('vs2').style.visibility='hidden';
	}

	if($s=='2')
	{
		document.getElementById('pr1-5').style.visibility='hidden';
		document.getElementById('pr2-1').style.visibility='hidden';
		document.getElementById('pr2-2').style.visibility='hidden';
		document.getElementById('pr2-3').style.visibility='hidden';
		document.getElementById('pr3').style.visibility='hidden';
		document.getElementById('vs1').style.visibility='hidden';
		document.getElementById('vs2').style.visibility='hidden';
		if($b=='MPAE')
		{
				document.getElementById('vs1').style.visibility='visible';
		}
		if($b =='ECE')
		{
			document.getElementById('pr1-4').style.visibility='hidden';
			document.getElementById('pr2-1').style.visibility='visible';
		}
		if($b =='IT')
		{
			document.getElementById('vs1').style.visibility='visible';
			document.getElementById('pr1-4').style.visibility='hidden';
		}	
	}

	if($s=='3')
	{
		document.getElementById('pr1-4').style.visibility='hidden';
		document.getElementById('pr1-5').style.visibility='hidden';
		document.getElementById('pr2-2').style.visibility='hidden';
		document.getElementById('pr2-3').style.visibility='hidden';
		document.getElementById('pr3').style.visibility='hidden';
		document.getElementById('vs2').style.visibility='hidden';
		if($b=='MPAE'|| $b=='BT')
			document.getElementById('pr1-4').style.visibility='visible';
		if($b=='IT' || $b=='MPAE' || $b=='BT')
			document.getElementById('pr2-1').style.visibility='hidden';
		if($b=='BT')
			document.getElementById('vs1').style.visibility='hidden';
	}

	if($s=='4')
	{
		document.getElementById('pr2-1').style.visibility='hidden';
		document.getElementById('pr2-2').style.visibility='hidden';
		document.getElementById('pr2-3').style.visibility='hidden';
		document.getElementById('pr3').style.visibility='hidden';

		if($b=='MPAE')
			document.getElementById('pr1-5').style.visibility='hidden';
		if($b=='BT')
		{
			document.getElementById('pr1-5').style.visibility='hidden';
			document.getElementById('pr1-4').style.visibility='hidden';
			document.getElementById('vs2').style.visibility='hidden';
		}
		if($b=='IT')
		{  
			document.getElementById('vs2').style.visibility='hidden';
			document.getElementById('vs1').style.visibility='hidden';
		}
	}

	if($s=='5')
	{   
		document.getElementById('pr1-5').style.visibility='hidden';
		document.getElementById('pr2-1').style.visibility='hidden';
		document.getElementById('pr2-2').style.visibility='hidden';
		document.getElementById('pr2-3').style.visibility='hidden';
		document.getElementById('pr3').style.visibility='hidden';
		document.getElementById('vs2').style.visibility='hidden';
		if($b=='COE' || $b=='ECE' || $b=='IT' || $b=='ICE')
			document.getElementById('pr1-4').style.visibility='hidden';  
	}

	if($s=='6')
	{
		document.getElementById('pr1-5').style.visibility='hidden';
		document.getElementById('pr2-1').style.visibility='hidden';
		document.getElementById('pr2-2').style.visibility='hidden';
		document.getElementById('pr2-3').style.visibility='hidden';
		document.getElementById('pr3').style.visibility='hidden';
		if($b=='COE' || $b=='ECE' || $b=='ICE')
			document.getElementById('pr1-4').style.visibility='hidden';
		if($b=='BT')
		{    
			document.getElementById('vs1').style.visibility='hidden';
				document.getElementById('vs2').style.visibility='hidden';
		}
		if($b=='IT')
				document.getElementById('vs2').style.visibility='hidden';
	}

	if($s=='7')
	{
		document.getElementById('pr1-5').style.visibility='hidden';
		document.getElementById('pr2-2').style.visibility='hidden';
		document.getElementById('pr2-3').style.visibility='hidden';
		document.getElementById('pr3').style.visibility='hidden';
		document.getElementById('vs2').style.visibility='hidden';
		if($b=='COE'||$b=='ICE'||$b=='BT')
			document.getElementById('pr1-4').style.visibility='hidden';
		if($b=='ECE'||$b=='MPAE')
			document.getElementById('pr2-1').style.visibility='hidden';
	}

	if($s=='8')
	{
		document.getElementById('th5').style.visibility='hidden';
		document.getElementById('th4').style.visibility='hidden';
		document.getElementById('pr1-2').style.visibility='hidden';
		document.getElementById('pr1-3').style.visibility='hidden';
		document.getElementById('pr1-4').style.visibility='hidden';
		document.getElementById('pr1-5').style.visibility='hidden';
		document.getElementById('pr2-2').style.visibility='hidden';
		document.getElementById('pr2-3').style.visibility='hidden';
			document.getElementById('vs2').style.visibility='hidden';
		if($b=='BT')
		{  
			document.getElementById('th4').style.visibility='visible';
			document.getElementById('vs1').style.visibility='hidden';
		}
		if($b=='MPAE')
		{   
			document.getElementById('pr1-2').style.visibility='visible';
			document.getElementById('pr1-3').style.visibility='visible';
			document.getElementById('pr3').style.visibility='hidden';
		}
}
		
}
function back()
{
	document.getElementById('markSheet').innerHTML='';
	document.getElementById('stdDetails').style.display='block';
	document.getElementById('eB').style.display='none';
}
function calc()
{
	var th = new Array();
	var pr1 = new Array();
	var pr2 = new Array();
	var pr3 = vals('pr3');;
	var vs1 = vals('vs1');; 
	var vs2 = vals('vs2');;
	var s = document.getElementById('Sem').value;
	var b;
	var sum = 0.0;
	var i;

	if(document.getElementById('Branch').value == 'COE')
		b = 1;
	else if(document.getElementById('Branch').value == 'ECE')
		b = 2;
	else if(document.getElementById('Branch').value == 'IT')
		b = 3;
	else if(document.getElementById('Branch').value == 'ICE')
		b = 4;
	else if(document.getElementById('Branch').value == 'MPAE')
		b = 5;
	else if(document.getElementById('Branch').value == 'BT')
		b = 6;
	
	th[0] = vals('th1');
	th[1] = vals('th2');
	th[2] = vals('th3');
	th[3] = vals('th4');
	th[4] = vals('th5');
	
	pr1[0] = vals('pr1-1');
	pr1[1] = vals('pr1-2');
	pr1[2] = vals('pr1-3');
	pr1[3] = vals('pr1-4');
	pr1[4] = vals('pr1-5');
	
	pr2[0] = vals('pr2-1');
	pr2[1] = vals('pr2-2');
	pr2[2] = vals('pr2-3');
	
	
	if(th[0] == -1 || th[1] == -1 ||th[2] == -1 ||th[3] == -1 ||th[4] == -1 ||pr1[0] == -1 ||pr1[1] == -1 ||pr1[2] == -1 ||pr1[3] == -1 ||pr1[4] == -1 ||pr2[0] == -1 ||pr2[1] == -1 ||pr2[2] == -1 ||pr3 == -1 ||vs1 == -1 ||vs2 == -1)
		return;
	// Calcs
	if(s<8)
	{
			if(s==5 && b==5)
			{
				for(i=0;i<5;i++)
				sum+=(th[i]*4);
			}
			else if(s==7 && b==4)
				for(i=0;i<5;i++)
						sum+=(th[i]*4);
			else 
			for(i=0;i<5;i++)
						sum+=(th[i]*4);
	}


	if(s==8)
	{
		if(b==6)
			for(i=0;i<4;i++)
				sum+=(th[i]*4);
		else
			for(i=0;i<3;i++)
				 sum+=(th[i]*4);
	}	

	// VS 1 
	
	if(s==2)
	{
		if(b==5)
				sum+=(vs1*1);
		else if(b==3)
				sum+=(vs1*2);
	}
		
	if(s==3 && b!=6)
			sum+=(vs1*1);
	if(s==4)
	{
		if(b==6)
			sum+=(vs1*2);
		else
			sum+=(vs1*1);
	}
	if(s==5)
	{
		if(b==6)
			sum+=(vs1*2);
		else
			sum+=(vs1*1);
	}
	if(s==6 && b!=6)
		sum+=(vs1*1);
	if(s==7)
	{
		if(b==3)
			sum+=(vs1*2);
		else
			
				sum+=(vs1*1);
	}
	if(s==8 && b!=6)
	{
		if(b==3)
			sum+=(vs1*2);
		else
			sum+=(vs1*1);
	}

	// VS 2
	
	if(s==4 && (b!=3 && b!=6))
		sum+=(vs2*1);
	if(s==6 && (b!=3 && b!=6))
	{    
		if(b==1 || b==2 || b==4)
			sum+=(vs2*2);
		else 
			sum+=(vs2*1); 
	}	
		
	// PR 1
	
	if(s==1)
		{
			   if(b!=5 || b!=6)
				for(i=0;i<3;i++)
				sum+=(pr1[i]*3);
else for(i=0;i<4;i++)
				sum+=(pr1[i]*3);
}
	if(s==2)
	{
          if(b==2) {
               sum += ((pr1[0]*2) + (pr1[1]*2) + (pr1[2]*4));
          }
		else if(b ==3)
			for(i=0;i<3;i++)
				sum+=(pr1[i]*2);
		else if(b!=6)
			for(i=0;i<4;i++)
				sum+=(pr1[i]*2);
		else if (b==6)
			for(i=0;i<4;i++)
				sum+=(pr1[i]*2);
	}
	if(s==3)
	{
		if(b==5 || b==6)
			for(i=0;i<4;i++)
				sum+=(pr1[i]*2);
		else
			for(i=0;i<3;i++)
				sum+=(pr1[i]*2);
	}
	if(s==4)
	{
		if(b==5)
			for(i=0;i<4;i++)
				sum+=(pr1[i]*2);    
		else if(b==6)
			for(i=0;i<3;i++)
				sum+=(pr1[i]*2);
		else
			for(i=0;i<5;i++)
				sum+=(pr1[i]*2);
	}
	if(s==5)
	{
		if(b==5||b==6)
			for(i=0;i<4;i++)
				sum+=(pr1[i]*2);
		else
			for(i=0;i<3;i++)
				sum+=(pr1[i]*2);
	}
	if(s==6)
	{
		if(b==1 || b==2 || b==4)
			for(i=0;i<3;i++)
				sum+=(pr1[i]*2);
		else
			for(i=0;i<4;i++)
				sum+=(pr1[i]*2);
	}
	if(s==7)
	{
		if(b==1||b==6||b==4)
			for(i=0;i<3;i++)
				sum+=(pr1[i]*2);
		else
			for(i=0;i<4;i++)
				sum+=(pr1[i]*2);
	}
	if(s==8)
	{
		if(b==5)
			 for(i=0;i<3;i++)
				sum+=(pr1[i]*2);
		else if(b==3)
			 for(i=0;i<2;i++)
				sum+=(pr1[i]*2);
		else
			 for(i=0;i<1;i++)
				sum+=(pr1[i]*2);
	}

	// PR 2 
	
	if(s==1)
		for(i=0;i<3;i++)
				sum+=(pr2[i]*2);
	if(s==2 && b==2)
		for(i=0;i<1;i++)
				sum+=(pr2[i]*2);
	if(s==3 && (b==1 || b==2 || b==4))
		for(i=0;i<1;i++)
				sum+=(pr2[i]*3);
	if(s==7)
	{
		if(b==1 || b==4)
			for(i=0;i<1;i++)
				sum+=(pr2[i]*3);
		else if(b==3 || b==6)
			for(i=0;i<1;i++)
				sum+=(pr2[i]*4);
	}
	if(s==8)
		for(i=0;i<1;i++)
				sum+=(pr2[i]*8);
				
	// PR 3
	
	if(s==8 && b!=5)
	{
		if(b==2)
			 for(i=0;i<1;i++)
				sum+=(pr3*3);
		else
			for(i=0;i<1;i++)
				sum+=(pr3*4);
	}
 // Percentage Calculation 
	
	/*26.1 31.1 34.1 32.3 27.8 28.8 29.10 30.11  */
	
	//26
	if(s==8 && b==2)
	   sum=sum/26;
	//31
	else if(s==7 && b==6)
		sum=sum/31;
	//34
	else if(s==7 && b==3)
		sum=sum/34;
	//32
	else if(s==4 && (b==1||b==2||b==4))
		sum=sum/32;
	//27
	else if((s==3 && b==3) || (s==5 && ( b==1 || b==2 || b==3 || b==4)) || (s==8 && (b==1 || b==4 || b==5)))
		sum=sum/27;  
	//28
	else if( (s==2 &&( b==1 || b==3 ||b==4 ||b==6) ) || ( (s==3 || s==4 || s==6 ) && b==6) || (s==8 && b==3) )
		sum=sum/28;
	//29
	else if((s==1) || (s==2 && b==5) || (s==3 && b==5) || (s==5 && b==5) || (s==6 && (b==1 || b==2 || b==3 || b==4)) || (s==7 &&(b==2 || b==5)))
		sum=sum/29;
	//30
	else
		sum=sum/30;

	sum = sum.toPrecision(5); 
	
	if(sum >= 40)
	{
		document.getElementById('NSITulatorWrapper').style.border='2px solid green';
		document.getElementById('eB').style.border='2px solid green';
		document.getElementById('eB').style.backgroundColor='#ADEBAD';		
		document.getElementById('eB').style.display='block';
		document.getElementById('eB').innerHTML = '<b> Your Percentage : '+sum+'</b>';
	}
	else
	{
		document.getElementById('NSITulatorWrapper').style.border='2px solid red';
		document.getElementById('eB').style.display='block';
		document.getElementById('eB').style.border="2px solid red";
		document.getElementById('eB').style.backgroundColor='#FF9999';	
		document.getElementById('eB').innerHTML = '<b> Your Percentage : '+sum+'</b>';
	}
}

function vals($sub)
{

	var s = document.getElementById($sub);
	if(s.style.visibility != 'hidden')
	{
		if(s.value == '')
			return 0.0;
		if(s.value > 100 || s.value < 0)
		{
			document.getElementById('NSITulatorWrapper').style.border='2px solid red';
			document.getElementById('eB').style.backgroundColor='#FF9999';	
			document.getElementById('eB').style.border='2px solid red';
			document.getElementById('eB').style.display='block';
			document.getElementById('eB').innerHTML = '<b>Stop exaggerating!</b>';
			return -1;
		}
		else
			return s.value;
	}
	else 
		return 0.0;
}