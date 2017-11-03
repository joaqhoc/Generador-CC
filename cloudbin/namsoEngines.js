function namsoG(){
	init();
	$("#generar").bind("click", function(){namsogo(document.console.ccp.value,document.console.tr.value);showSave();});
	$("#ccpN").bind("change", function(){fillter();});
	$("#ccToBin").bind("click", function(){ccToBin();});
	$("#a0").bind("click", function(){$("#menu-sub").toggle("slow");});
	$("#a1").bind("click", function(){showMe(1);});
	$("#a2").bind("click", function(){showMe(2);});
	$("#a3").bind("click", function(){showMe(3);});
	$("#a4").bind("click", function(){showMe(4);});
	$("#a5").bind("click", function(){showMe(5);});
	$("#a6").bind("click", function(){showMe(6);});
	$("#a7").bind("click", function(){showMe(7);});
	$("#a8").bind("click", function(){showMe(8);});
	$("#a9").bind("click", function(){showMe(9);});
	$("#a10").bind("click", function(){showMe(10);});
	$("#a11").bind("click", function(){showMe(11);});
	$("#a12").bind("click", function(){showMe(12);});
	$("#a13").bind("click", function(){showMe(13);});
	$("#a14").bind("click", function(){showMe(14);});
	$("#a15").bind("click", function(){showMe(15);});
	$("#a16").bind("click", function(){showMe(16);});
	$("#Enviar").bind("click", function(){buscador();});
	$("#cleanText").bind("click", function(){cleanText();});
	$('#dnperm').bind('click',function(){notify()});
	$('#getProxys').bind('click',function(){searchProxy()});
	$('#crearmail').bind('click',function(){crearmail()});
	$('#checkmail').bind('click',function(){checkmail()});
	$('#fakeG').bind('click',function(){getFakeUser()});
	$('#checkwhois').bind('click',function(){checkwhois()});
	$('#nuevaT').bind('click',function(){nuevaINE()});
	$('#img').bind('change',function(){pasteLink(1)});
	$('#img-fondo').bind('change',function(){pasteLink(2)});
	$('#downYou').bind('click',function(){downloadTY()});
	$('#YetDork').bind('click',function(){namsoDork()});
	$('#StopYetDork').bind('click',function(){stopnamsoDork()});
	$('#dorkpushString').bind('keypress',function(){sugerirDork()});
	$('#checkProxy').bind('click',function(){checkProxy()});
	$('#rRegistrar').bind('click',function(){register()});
	$('#fIngresar').bind('click',function(){login()});
	$('#cPB').bind('click',function(){changePass()});
	$('#renewC1').bind('click',function(){renewCaptcha(1)});
	$('#renewC2').bind('click',function(){renewCaptcha(2)});
	$('#cEN').bind('click',function(){cambiarTema()});
	$('#imgF').bind('change',function(){imgF()});
	$('#verifyCC').bind('click',function(){verifyCC()});
	showMe(1);
}

function showSave(){
	$('#saveCMe').html('<div class="p"><div class="Ilabel"><i class="fa fa-floppy-o"></i> Guardar en un archivo</div><input type="text" class="input_text" id="nameTXT" size="28" placeholder="NamsoFile" maxlength="25"></div><a class="Lbutton" onclick="guardarTXT()"><i class="fa fa-cloud"></i> Guardar</a>');
}

function guardarTXT(){
	$.ajax({
		type: "POST",
		url: 'motor/guardarTXT.php',
		dataType: 'html',
		data: {n: $("#nameTXT").val(),t: $("#output2").val()},
	})
	.done(function(data) {
		$("#saveCMe").html(data);
	})
}

function showMe(id){
	for(var a=1;a<=16;a++){
		if(a!=id)$('#'+a).hide();
		else $('#'+a).slideDown("medium");
	}
}

var tw;

function init(){
	undefined="Indefinida";
	tw=0;
	mkCClist();
}

function fillter(){
	var bin = $("#ccpN").val();
	$.ajax({
		url: 'motor/autocomplete.php',
		type: 'POST',
		dataType: 'html',
		data:{autocomplete:$("#ccpN").val()}
	})
	.done(function(data) {
		$("#ccpN").val(data)
	});
}

function rnd(frN,toN){
	var rN=Math.floor(Math.random()*(toN+1-frN))+frN;
	return rN;
}

function unilenS(aS,ul,fc,p){
	var rS=""+aS; ul*=1.0;
	if(fc=="" || fc==null){fc="0";}
	if(p=="" || p==null){p=0;}
	var rL=rS.length;
	if(rL<ul){
		for(var i=1;i<=ul-rL;i++){
			if(p==0) rS=""+fc+rS;
			else rS+=""+fc;
		}
	}
	return rS;
}

function namsogo(p1,tr){
	tr*=1.0; 
	if(tr<1 || tr==null) tr=1;
	document.console.output2.value="";
	var ccghm=document.console.ccghm.value;
	if(ccghm<1) ccghm=1;
	else if(ccghm>1000)	ccghm=1000;
	document.console.ccghm.value=ccghm;
	if(p1!="" && p1!=null){
		var out='';
		var jou;
		for(jou=0;jou<4;jou++){if(document.console.ccoudatfmt.options[jou].selected){break;}}
		if(jou==2)
			var out=out+"<xml>\n";
		else if(jou==3)	
			var out=out+"{\n";
		for(var k=1;k<=ccghm;k++){
			if(p1=='rnd')
				p=c[Math.floor(Math.random()*(mxcards+1-2))+2];
			else 
				p=p1;
			var cn=chkCard(p);
			for(var i=tr;i>=1;i--){
				document.console.output2.value="Generando...";
				var cdi=sbtStringSpRnd(p,"x","0123456789");
				var cf=sbtString(cdi," -/abcdefghijklmnopqrstuvwyzABCDEFGHIJLMNOPQRSTUVWYZ");
				var clcd=chkLCD(cf);
				var ccck=chkCCCksum(cf,cn);
				if(clcd && ccck)break;
			}
			if(clcd && ccck){
				var cn=chkCard(cdi);
				var ccnspc="";
				var j;
				for(j=0;j<=3;j++){if(document.console.ccnsp.options[j].selected){break;}}
				if(j==1) ccnspc=" ";
				else if(j==2) ccnspc="-";
				var cdif="";
				for(var i=1;i<=cdi.length;i++){
					var aS=midS(cdi,i,1); 
					if(aS==" ")	aS=ccnspc;
					cdif+=aS;
				}
				if(document.console.ccexpdat.checked && document.console.emeses.value=='rnd' && document.console.eyear.value=='rnd'){
					var dnowi=new Date(); 
					var mes=unilenS(rnd(1,12),2,'0',0);
					var year=(dnowi.getFullYear()+rnd(2,5));
				}else if(document.console.ccexpdat.checked && document.console.emeses.value!='rnd' && document.console.eyear.value=='rnd'){
					var dnowi=new Date();
					var mes=document.console.emeses.value;
					var year=(dnowi.getFullYear()+rnd(2,5));
				}else if(document.console.ccexpdat.checked && document.console.emeses.value=='rnd' && document.console.eyear.value!='rnd'){
					var dnowi=new Date(); 
					var mes=unilenS(rnd(1,12),2,'0',0);
					var year=document.console.eyear.value;
				}else if(document.console.ccexpdat.checked && document.console.emeses.value!='rnd' && document.console.eyear.value!='rnd'){
					var mes=document.console.emeses.value;
					var year=document.console.eyear.value;
				}else var ccexp='';
				if(document.console.eccv.value=='rnd' && document.console.ccvi.checked){
					var binC=cdif.toString(); 
					var tipo = parseInt(binC.substring(0,1));
					if(tipo==3) var eccv=(Math.floor(Math.random() * (9998 - 1102 + 1)) + 1102);
					else var eccv=(Math.floor(Math.random() * (998 - 112 + 1)) + 112);
				}
				else if(document.console.eccv.value!='rnd' && document.console.ccvi.checked)var eccv=document.console.eccv.value;
				else var eccv='';
				if(jou==0){
					var out=out+=cdif;
					if(document.console.ccexpdat.checked) var out=out+="|"+mes+'|'+year;
					if(document.console.ccvi.checked) var out=out+="|"+eccv;
					if(document.console.ccbank.checked) var out=out+="|"+cn+"\n";
					else var out=out+="\n";
				}else if(jou==1){
					var out=out+=cdif;
					if(document.console.ccvi.checked) var out=out+=", "+eccv;
					if(document.console.ccexpdat.checked) var out=out+=", "+mes+'/'+year;		
					if(document.console.ccbank.checked) var out=out+=", "+cn+"\n";
					else var out=out+="\n";
				}else if(jou==2){
					var out=out+"<CreditCard>\n";
					if(document.console.ccbank.checked) var out=out+"<CardNetwork>"+cn+"<\/CardNetwork>\n";
					var out=out+"<CardNumber>"+cdif+"<\/CardNumber>\n";
					if(document.console.ccvi.checked) var out=out+"<CardCCV2>"+eccv+"<\/CardCCV2>\n";
					if(document.console.ccexpdat.checked) var out=out+"<CardExpDate>"+mes+"/"+year+"<\/CardExpDate>\n";
					var out=out+"<\/CreditCard>\n";
				}else if(jou==3){
					var out=out+"{\n";
					var out=out+"\"CreditCard\":{\n";
					if(document.console.ccbank.checked) var out=out+"\"CardNetwork\": \""+cn+"\"\n";
					var out=out+"\"CardNumber\": \""+cdif+"\"\n";
					if(document.console.ccvi.checked) var out=out+"\"CardCCV2\": \""+eccv+"\"\n";
					if(document.console.ccexpdat.checked) var out=out+"\"CardExpDate\": \""+mes+"/"+year+"\"\n";
					var out=out+"}\n";
					var out=out+"}";
					if(k<ccghm)	var out=out+",";
					var out=out+"\n";
				}
			}else var out="No se encontraron tarjetas para este bin";
		}
		if(jou==2) var out=out+"</xml>";
		else if(jou==3) var out=out+"}";
		document.console.output2.value=out;
	}
}

function chkCard(cdi) {
	cdi+="";
	if (c[1]==undefined || c[1]==null || c[1]=="") {mkCClist();}
	var ccn=0; var cn="Desconocido"
	var cf=sbtString(cdi," -/abcdefghijklmnopqrstuvwyzABCDEFGHIJLMNOPQRSTUVWYZ");
	if (leftS(cf,1)=="4") {cf=leftS(cf,8);}
	for (var i=1;i<=tw;i++) {
		var cct=sbtString(c[i]," -/abcdefghijklmnopqrstuvwyzABCDEFGHIJLMNOPQRSTUVWYZ");
		if (leftS(cf,1)=="4") {cct=leftS(cct,8);}
		var ccc=cmpPattern(cf,cct);
		if (ccc) {ccn=i; break;}
	}
	if (ccn>0) {cn=cd[i];}
	return cn;
}


function chkCCCksum(cf,cn){
	var r=false;
	var w="21";
	var ml="";
	var j=1;
	for(var i=1;i<=cf.length-1;i++){
		var m=midS(cf,i,1)*midS(w,j,1);
		m=sumDigits(m);
		ml+=""+m;
		j++; 
		if(j>w.length) j=1;
	}
	var ml2=sumDigits(ml,-1); 
	var ml1=(sumDigits(ml2,-1)*10-ml2)%10;
	if(ml1==rightS(cf,1)) r=true;
	return r;
}

function chkLCD(cf){
	var r=false; cf+="";
	var bl=isdiv(cf.length,2);
	var ctd=0;
	for(var i=1;i<=cf.length;i++){
		var cdg=midS(cf,i,1);
		if(isdiv(i,2)!=bl){
			cdg*=2; 
			if(cdg>9) cdg-=9;
		}
		ctd+=cdg*1.0;
	}
	if(isdiv(ctd,10)) r=true;
	return r;
}

function mkCClist(){
	tw=450;
	c=new makeArray(tw); 
	cd=new makeArray(tw);
	var i=1;
	c[i]="37xxxxxxxxxxxxx"; cd[i]="AmEx"; i++;
	c[i]="3782xxxxxxxxxxx"; cd[i]="AmEx Small Corporate Card"; i++;
	c[i]="3787xxxxxxxxxxx"; cd[i]="AmEx Small Corporate Card"; i++;
	c[i]="37x8xxxxxxxxxxx"; cd[i]="AmEx Gold"; i++;
	c[i]="37x37xxxxxxxxxx"; cd[i]="AmEx Platinum"; i++;
	c[i]="37xxxxxxxx11xxx"; cd[i]="AmEx issued since 1995"; i++;
	c[i]="30xxxxxxxxxxxx"; cd[i]="Diners Club"; i++;
	c[i]="31xxxxxxxxxxxx"; cd[i]="Diners Club"; i++;
	c[i]="35xxxxxxxxxxxx"; cd[i]="Diners Club"; i++;
	c[i]="36xxxxxxxxxxxx"; cd[i]="Diners Club"; i++;
	c[i]="38xxxxxxxxxxxx"; cd[i]="Carte Blanche"; i++;
	c[i]="35xxxxxxxxxxxxxx"; cd[i]="JCB (Japanese Credit Bureau)"; i++;
	c[i]="400314xxxxxxxxxx"; cd[i]="Visa Debit-Banca Monte Dei Paschi Di Siena (Italy)"; i++;
	c[i]="400315xxxxxxxxxx"; cd[i]="Visa-Banca Monte Dei Paschi Di Siena (Italy)"; i++;
	c[i]="40240238xxxxxxxx"; cd[i]="Visa Gold-Bank of America"; i++;
	c[i]="4019xxxxxxxxxxxx"; cd[i]="Visa CV/Gold-Bank of America"; i++;
	c[i]="4024xxxxxxxxxxxx"; cd[i]="Visa PV-Bank of America"; i++;
	c[i]="4040xxxxxxxxxxxx"; cd[i]="Visa CV-Wells Fargo"; i++;
	c[i]="4048xxxxxxxxxxxx"; cd[i]="Visa CV"; i++;
	c[i]="40240071xxxxxxxx"; cd[i]="Visa-Wells Fargo"; i++;
	c[i]="4013xxxxxxxxxxxx"; cd[i]="Visa-Citibank"; i++;
	c[i]="4019xxxxxxxxxxxx"; cd[i]="Visa-Bank of America"; i++;
	c[i]="402360xxxxxxxxxx"; cd[i]="Visa Electron Prepaid-Poste Italiane (Italy)"; i++;
	c[i]="4024xxxxxxxxxxxx"; cd[i]="Visa-Bank of America"; i++;
	c[i]="4027xxxxxxxxxxxx"; cd[i]="Visa-Rockwell Federal Credit Union"; i++;
	c[i]="4032xxxxxxxxxxxx"; cd[i]="Visa-Household Bank"; i++;
	c[i]="4052xxxxxxxxxxxx"; cd[i]="Visa-First Cincinnati"; i++;
	c[i]="4060xxxxxxxxxxxx"; cd[i]="Visa-Associates National Bank"; i++;
	c[i]="4070xxxxxxxxxxxx"; cd[i]="Visa-Security Pacific"; i++;
	c[i]="4071xxxxxxxxxxxx"; cd[i]="Visa-Colonial National Bank"; i++;
	c[i]="4094xxxxxxxxxxxx"; cd[i]="Visa-A.M.C. Federal Credit Union"; i++;
	c[i]="4113xxxxxxxxxxxx"; cd[i]="Visa-Valley National Bank"; i++;
	c[i]="4114xxxxxxxxxxxx"; cd[i]="Visa-Chemical Bank"; i++;
	c[i]="4121xxxxxxxxxxxx"; cd[i]="Visa-Pennsylvania State Employees Credit Union"; i++; 
	c[i]="4121xxxxxxxxxxxx"; cd[i]="Visa CV-Signet Bank"; i++;
	c[i]="4122xxxxxxxxxxxx"; cd[i]="Visa-Union Trust"; i++;
	c[i]="4125xxxxxxxxxxxx"; cd[i]="Visa-Marine Midland"; i++;
	c[i]="4128xxxxxxxxx"; cd[i]="Visa CV-Citibank"; i++;
	c[i]="4128xxxxxxxxxxxx"; cd[i]="Visa CV-Citibank"; i++;
	c[i]="4131xxxxxxxxxxxx"; cd[i]="Visa-State Street Bank"; i++;
	c[i]="4225xxxxxxxxxxxx"; cd[i]="Visa-Chase Manhattan Bank"; i++;
	c[i]="4226xxxxxxxxxxxx"; cd[i]="Visa-Chase Manhattan Bank"; i++;
	c[i]="4231xxxxxxxxxxxx"; cd[i]="Visa-Chase Lincoln First Classic"; i++;
	c[i]="4232xxxxxxxxxxxx"; cd[i]="Visa-Chase Lincoln First Classic"; i++;
	c[i]="4239xxxxxxxxxxxx"; cd[i]="Visa-Corestates"; i++;
	c[i]="4241xxxxxxxxxxxx"; cd[i]="Visa-National Westminster Bank"; i++;
	c[i]="4250xxxxxxxxxxxx"; cd[i]="Visa-First Chicago Bank"; i++;
	c[i]="4253xxxxxxxxxxxx"; cd[i]="Visa-Consumers Edge"; i++;
	c[i]="42545123xxxxxxxx"; cd[i]="Visa Premier card-Security First"; i++;
	c[i]="4254xxxxxxxxxxxx"; cd[i]="Visa-Security First"; i++;
	c[i]="4271382xxxxxxxxx"; cd[i]="Visa PV-Citibank"; i++;
	c[i]="4271xxxxxxxxxxxx"; cd[i]="Visa-Citibank/Citicorp"; i++;
	c[i]="4301xxxxxxxxxxxx"; cd[i]="Visa-Monogram Bank"; i++;
	c[i]="4302xxxxxxxxxxxx"; cd[i]="Visa-H.H.B.C."; i++;
	c[i]="4311xxxxxxxxxxxx"; cd[i]="Visa-First National Bank of Louisville"; i++;
	c[i]="4317xxxxxxxxxxxx"; cd[i]="Visa-Gold Dome"; i++;
	c[i]="4327xxxxxxxxxxxx"; cd[i]="Visa-First Atlanta"; i++;
	c[i]="4332xxxxxxxxxxxx"; cd[i]="Visa-First American Bank"; i++;
	c[i]="4339xxxxxxxxxxxx"; cd[i]="Visa-Primerica Bank"; i++;
	c[i]="4342xxxxxxxxxxxx"; cd[i]="Visa-N.C.M.B. / Nations Bank"; i++;
	c[i]="4356xxxxxxxxxxxx"; cd[i]="Visa-National Bank of Delaware"; i++;
	c[i]="4368xxxxxxxxxxxx"; cd[i]="Visa-National West"; i++;
	c[i]="4387xxxxxxxxxxxx"; cd[i]="Visa-Bank One"; i++;
	c[i]="4388xxxxxxxxxxxx"; cd[i]="Visa-First Signature Bank & Trust"; i++;
	c[i]="4401xxxxxxxxxxxx"; cd[i]="Visa-Gary-Wheaton Bank"; i++;
	c[i]="4413xxxxxxxxxxxx"; cd[i]="Visa-Firstier Bank Lincoln"; i++;
	c[i]="4418xxxxxxxxxxxx"; cd[i]="Visa-Bank of Omaha"; i++;
	c[i]="4421xxxxxxxxxxxx"; cd[i]="Visa-Indiana National Bank"; i++;
	c[i]="4424xxxxxxxxxxxx"; cd[i]="Visa-Security Pacific National Bank"; i++;
	c[i]="4428xxxxxxxxxxxx"; cd[i]="Visa-Bank of Hoven"; i++;
	c[i]="4436xxxxxxxxxxxx"; cd[i]="Visa-Security Bank & Trust"; i++;
	c[i]="4443xxxxxxxxxxxx"; cd[i]="Visa-Merril Lynch Bank & Trust"; i++;
	c[i]="4447xxxxxxxxxxxx"; cd[i]="Visa-AmeriTrust"; i++;
	c[i]="4448020xxxxxx"; cd[i]="Visa Premier card"; i++;
	c[i]="4452xxxxxxxxxxxx"; cd[i]="Visa-Empire Affiliates Federal Credit Union"; i++;
	c[i]="4498xxxxxxxxxxxx"; cd[i]="Visa-Republic Savings"; i++;
	c[i]="4502xxxxxxxxxxxx"; cd[i]="Visa-C.I.B.C."; i++;
	c[i]="4503xxxxxxxxxxxx"; cd[i]="Visa-Canadian Imperial Bank"; i++;
	c[i]="4506xxxxxxxxxxxx"; cd[i]="Visa-Belgium A.S.L.K."; i++;
	c[i]="4510xxxxxxxxxxxx"; cd[i]="Visa-Royal Bank of Canada"; i++;
	c[i]="4520xxxxxxxxxxxx"; cd[i]="Visa-Toronto Dominion of Canada"; i++;
	c[i]="4537xxxxxxxxxxxx"; cd[i]="Visa-Bank of Nova Scotia"; i++;
	c[i]="4538xxxxxxxxxxxx"; cd[i]="Visa-Bank of Nova Scotia"; i++;
	c[i]="4539xxxxxxxxxxxx"; cd[i]="Visa-Barclays (UK)"; i++;
	c[i]="4543xxxxxxxxxxxx"; cd[i]="Visa-First Direct"; i++;
	c[i]="4544xxxxxxxxxxxx"; cd[i]="Visa-T.S.B. Bank"; i++;
	c[i]="4556xxxxxxxxxxxx"; cd[i]="Visa-Citibank"; i++;
	c[i]="4564xxxxxxxxxxxx"; cd[i]="Visa-Bank of Queensland"; i++;
	c[i]="4673xxxxxxxxxxxx"; cd[i]="Visa-First Card"; i++;
	c[i]="4678xxxxxxxxxxxx"; cd[i]="Visa-Home Federal"; i++;
	c[i]="4707xxxxxxxxxxxx"; cd[i]="Visa-Tompkins County Trust"; i++;
	c[i]="47121250xxxxxxxx"; cd[i]="Visa-IBM Credit Union"; i++;
	c[i]="4719xxxxxxxxxxxx"; cd[i]="Visa-Rocky Mountain"; i++;
	c[i]="4721xxxxxxxxxxxx"; cd[i]="Visa-First Security"; i++;
	c[i]="4722xxxxxxxxxxxx"; cd[i]="Visa-West Bank"; i++;
	c[i]="4726xxxxxxxxxxxx"; cd[i]="Visa CV-Wells Fargo"; i++;
	c[i]="4783xxxxxxxxxxxx"; cd[i]="Visa-AT&T's Universal Card"; i++;
	c[i]="4784xxxxxxxxxxxx"; cd[i]="Visa-AT&T's Universal Card"; i++;
	c[i]="4800xxxxxxxxxxxx"; cd[i]="Visa-M.B.N.A. North America"; i++;
	c[i]="4811xxxxxxxxxxxx"; cd[i]="Visa-Bank of Hawaii"; i++;
	c[i]="4819xxxxxxxxxxxx"; cd[i]="Visa-Macom Federal Credit Union"; i++;
	c[i]="4820xxxxxxxxxxxx"; cd[i]="Visa-IBM Mid America Federal Credit Union"; i++;
	c[i]="4833xxxxxxxxxxxx"; cd[i]="Visa-U.S. Bank"; i++;
	c[i]="4842xxxxxxxxxxxx"; cd[i]="Visa-Security Pacific Washington"; i++;
	c[i]="4897xxxxxxxxxxxx"; cd[i]="Visa-Village Bank of Chicago"; i++;
	c[i]="4921xxxxxxxxxxxx"; cd[i]="Visa-Hong Kong National Bank"; i++;
	c[i]="4929xxxxxxxxxxxx"; cd[i]="Visa CV-Barclay Card (UK)"; i++;
	c[i]="45399710xxxxxxxx"; cd[i]="Visa-Banco di Napoli (Italy)"; i++;
	c[i]="4557xxxxxxxxxxxx"; cd[i]="Visa-BNL (Italy)"; i++;
	c[i]="4908xxxxxxxxxxxx"; cd[i]="Visa-Carta Moneta-CARIPLO/Intesa (Italy)"; i++;
	c[i]="4xxx9x604015xxxx"; cd[i]="Visa-Carta Sì-Unipol Banca (Italy)"; i++;
	c[i]="4xxx9x144046xxxx"; cd[i]="Visa-Carta Sì-Banco di Sardegna (Italy)"; i++;
	c[i]="4xxx9xxx40xxxxxx"; cd[i]="Visa-Carta Sì (Italy)"; i++;
	c[i]="4532xxxxxxxxxxxx"; cd[i]="Visa-Credito Italiano (Italy)"; i++;
	c[i]="45475900xxxxxxxx"; cd[i]="Visa Gold-bank ganadero BBV (Colombia)"; i++;
	c[i]="4916xxxxxxxxxxxx"; cd[i]="Visa-MBNA Bank"; i++;
	c[i]="4xxxxxxxxxxxxx"; cd[i]="Visa"; i++;
	c[i]="4xxxxxxxxxxxxxxx"; cd[i]="Visa"; i++;
	c[i]="5031xxxxxxxxxxxx"; cd[i]="MasterCard-Maryland of North America"; i++;
	c[i]="5100xxxxxxxxxxxx"; cd[i]="MasterCard-Southwestern States Bankard Association"; i++;
	c[i]="5110xxxxxxxxxxxx"; cd[i]="MasterCard-Universal Travel Voucher"; i++;
	c[i]="5120xxxxxxxxxxxx"; cd[i]="MasterCard-Western States Bankard Association"; i++;
	c[i]="5130xxxxxxxxxxxx"; cd[i]="MasterCard-Eurocard France"; i++;
	c[i]="5140xxxxxxxxxxxx"; cd[i]="MasterCard-Mountain States Bankard Association"; i++;
	c[i]="5150xxxxxxxxxxxx"; cd[i]="MasterCard-Credit Systems Inc."; i++;
	c[i]="5160xxxxxxxxxxxx"; cd[i]="MasterCard-Westpac Banking Corporation"; i++;
	c[i]="5170xxxxxxxxxxxx"; cd[i]="MasterCard-Midamerica Bankard Association"; i++;
	c[i]="5172xxxxxxxxxxxx"; cd[i]="MasterCard-First Bank Card Center"; i++;
	c[i]="518xxxxxxxxxxxxx"; cd[i]="MasterCard-Computer Communications of America"; i++;
	c[i]="519xxxxxxxxxxxxx"; cd[i]="MasterCard-Bank of Montreal"; i++;
	c[i]="5201xxxxxxxxxxxx"; cd[i]="MasterCard-Mellon Bank N.A."; i++;
	c[i]="5202xxxxxxxxxxxx"; cd[i]="MasterCard-Central Trust Company N.A."; i++;
	c[i]="5204xxxxxxxxxxxx"; cd[i]="MasterCard-Security Pacific National Bank"; i++;
	c[i]="5205xxxxxxxxxxxx"; cd[i]="MasterCard-Promocion y Operacion S.A."; i++;
	c[i]="5206xxxxxxxxxxxx"; cd[i]="MasterCard-Banco Nacional do Mexico"; i++;
	c[i]="5207xxxxxxxxxxxx"; cd[i]="MasterCard-New England Bankard Association"; i++;
	c[i]="5208xxxxxxxxxxxx"; cd[i]="MasterCard-Million Card Service Co. Ltd."; i++;
	c[i]="5209xxxxxxxxxxxx"; cd[i]="MasterCard-The Citizens & Southern National Bank"; i++;
	c[i]="5210xxxxxxxxxxxx"; cd[i]="MasterCard-Kokunai Shinpan Company Ltd."; i++;
	c[i]="5211xxxxxxxxxxxx"; cd[i]="MasterCard-Chemical Bank Delaware"; i++;
	c[i]="5212xxxxxxxxxxxx"; cd[i]="MasterCard-F.C.C. National Bank"; i++;
	c[i]="5213xxxxxxxxxxxx"; cd[i]="MasterCard-The Bankcard Association Inc."; i++;
	c[i]="5215xxxxxxxxxxxx"; cd[i]="MasterCard-Marine Midland Bank N.A."; i++;
	c[i]="5216xxxxxxxxxxxx"; cd[i]="MasterCard-Old Kent Bank & Trust Co."; i++;
	c[i]="5217xxxxxxxxxxxx"; cd[i]="MasterCard-Union Trust"; i++;
	c[i]="5218xxxxxxxxxxxx"; cd[i]="MasterCard-Citibank/Citicorp"; i++;
	c[i]="5219xxxxxxxxxxxx"; cd[i]="MasterCard-Central Finance Co. Ltd."; i++;
	c[i]="5220xxxxxxxxxxxx"; cd[i]="MasterCard-Sovran Bank/Central South"; i++;
	c[i]="5221xxxxxxxxxxxx"; cd[i]="MasterCard-Standard Bank of South Africa Ltd."; i++;
	c[i]="5222xxxxxxxxxxxx"; cd[i]="MasterCard-Security Bank & Trust Company"; i++;
	c[i]="5223xxxxxxxxxxxx"; cd[i]="MasterCard-Trustmark National Bank"; i++;
	c[i]="5224xxxxxxxxxxxx"; cd[i]="MasterCard-Midland Bank"; i++;
	c[i]="5225xxxxxxxxxxxx"; cd[i]="MasterCard-First Pennsylvania Bank N.A."; i++;
	c[i]="5226xxxxxxxxxxxx"; cd[i]="MasterCard-Eurocard Ab"; i++;
	c[i]="5227xxxxxxxxxxxx"; cd[i]="MasterCard-Rocky Mountain Bankcard System Inc."; i++;
	c[i]="5228xxxxxxxxxxxx"; cd[i]="MasterCard-First Union National Bank of North Carolina"; i++;
	c[i]="5229xxxxxxxxxxxx"; cd[i]="MasterCard-Sunwest Bank of Albuquerque N.A."; i++;
	c[i]="5230xxxxxxxxxxxx"; cd[i]="MasterCard-Harris Trust & Savings Bank"; i++;
	c[i]="5231xxxxxxxxxxxx"; cd[i]="MasterCard-Badische Beamtenbank EG"; i++;
	c[i]="5232xxxxxxxxxxxx"; cd[i]="MasterCard-Eurocard Deutschland"; i++;
	c[i]="5233xxxxxxxxxxxx"; cd[i]="MasterCard-Computer Systems Association Inc."; i++;
	c[i]="5234xxxxxxxxxxxx"; cd[i]="MasterCard-Citibank Arizona"; i++;
	c[i]="5235xxxxxxxxxxxx"; cd[i]="MasterCard-Financial Transaction System Inc."; i++;
	c[i]="5236xxxxxxxxxxxx"; cd[i]="MasterCard-First Tennessee Bank N.A."; i++;
	c[i]="5254xxxxxxxxxxxx"; cd[i]="MasterCard-Bank of America"; i++;
	c[i]="5273xxxxxxxxxxxx"; cd[i]="MasterCard(can be Gold)-Bank of America"; i++;
	c[i]="5286xxxxxxxxxxxx"; cd[i]="MasterCard-Home Federal"; i++;
	c[i]="5291xxxxxxxxxxxx"; cd[i]="MasterCard-Signet Bank"; i++;
	c[i]="5329xxxxxxxxxxxx"; cd[i]="MasterCard-Maryland of North America"; i++;
	c[i]="533875xxxxxxxxxx"; cd[i]="MasterCard Prepaid-PayPal / Lottomaticard (Italy)"; i++;
	c[i]="5410xxxxxxxxxxxx"; cd[i]="MasterCard-Wells Fargo"; i++;
	c[i]="5412xxxxxxxxxxxx"; cd[i]="MasterCard-Wells Fargo"; i++;
	c[i]="5419xxxxxxxxxxxx"; cd[i]="MasterCard-Bank of Hoven"; i++;
	c[i]="5424xxxxxxxxxxxx"; cd[i]="MasterCard-Citibank/Citicorp"; i++;
	c[i]="543013xxxxxxxxxx"; cd[i]="MasterCard-BNL/BNP Paribas (Italy)"; i++;
	c[i]="5434xxxxxxxxxxxx"; cd[i]="MasterCard-National Westminster Bank"; i++;
	c[i]="5465xxxxxxxxxxxx"; cd[i]="MasterCard-Chase Manhattan"; i++;
	c[i]="52550114xxxxxxxx"; cd[i]="MasterCard-Banco di Sardegna (Italy)"; i++;
	c[i]="530693xxxxxxxxxx"; cd[i]="MasterCard-Bancolombia Cadenalco (Colombia)"; i++;
	c[i]="5406251xxxxxxxxx"; cd[i]="MasterCard-Banco de Occidente (Colombia)"; i++;
	c[i]="5426xxxxxxxxxxxx"; cd[i]="MasterCard-Granahorrar (Colombia)"; i++;
	c[i]="5406xxxxxxxxxxxx"; cd[i]="MasterCard-Granahorrar (Colombia)"; i++;
	c[i]="581149xxxxxxxxxx"; cd[i]="Maestro-BNL/BNP Paribas (Italy)"; i++;
	c[i]="5xxxxxxxxxxxxxxx"; cd[i]="MasterCard/Access/Eurocard"; i++;
	c[i]="6013xxxxxxxxxxxx"; cd[i]="Discover-MBNA Bank"; i++;
	c[i]="60xxxxxxxxxxxxxx"; cd[i]="Discover"; i++;
	mxcards=i-1;
}

// Powered by NamsoSoluciones

function leftS(aS,n){
	aS+="";
	var rS="";
	if(n>=1) rS=aS.substring(0,n);
	return rS;
}

function rightS(aS,n){
	aS+="";
	var rS="";
	if(n>=1) rS=aS.substring(aS.length-n,aS.length);
	return rS;
}

function midS(aS,n,n2){
	aS+="";
	var rS="";
	if(n2==null || n2=="") n2=aS.length;
	n*=1; n2*=1;
	if(n<0) n++;
	rS=aS.substring(n-1,n-1+n2);
	return rS;
}

function linstr(aS,bS){
	aS+=""; bS+="";
	var r=false;
	if(leftS(aS,bS.length)==bS) r=true;
	return r;
}

function sbtString(s1,s2){
	var ous=""; s1+=""; s2+="";
	for(var i=1;i<=s1.length;i++){
		var c1=s1.substring(i-1,i);
		var c2=s2.indexOf(c1);
		if(c2==-1) ous+=c1;
	}
	return ous;
}

function sbtStringSpRnd(s1,s2,bS){
	if(bS==null || bS==""){bS="0123456789";}
	var ous="";
	bS+="";
	for(var i=1;i<=s1.length;i++){
		var c1=s1.substring(i-1,i);
		var c2=s2.indexOf(c1);
		if(c2==-1) ous+=c1;
		else ous+=midS(bS,Math.floor(Math.random()*(bS.length-1))+1,1);
	}
	return ous;
}

function cmpPattern(a,p,x){
	if(x=="" || x==null) x="x";
	if(x=="X") x="x";
	x=""+x.substring(0,1); 
	a+=""; 
	p+="";
	r=false; 
	mc=0;
	if(a.length==p.length){
		for(var i=1;i<=a.length;i++){
			a1=midS(a,i,1); p1=midS(p,i,1);
			if(a1==p1 || p1==x) mc++;
		}
	}
	if(mc==a.length) r=true;
	return r;
}

function isdiv(a,b){
	if(b==null) b=2;
	a*=1.0; b*=1.0;
	var r=false;
	if(a/b==Math.floor(a/b)) r=true;
	return r;
}

function sumDigits(n,m){
	if(m==0 || m==null) m=1;
	n+="";
	if(m>0){
		while (n.length>m){
			var r=0;
			for(var i=1;i<=n.length;i++){r+=1.0*midS(n,i,1);}
			n=""+r;
		}
	}else{
		for(var j=1;j<=Math.abs(m);j++){
			var r=0;
			for(var i=1;i<=n.length;i++){r+=1.0*midS(n,i,1);}
			n=""+r;
		}
	}
	r=n;
	return r;
}

function makeArray(n){
	this.length=n;
	for(var i=1;i<=n;i++){this[i]=0;}
	return this;
}

function cleanText(){
	var confirmar=confirm("¿Estas seguro de eliminar las tarjetas generadas?");
	if (confirmar) $('#output2').val('');
}

function addToCC(cc){
	var bin=$("#"+cc+"z2").html(),ccout=0;
	for(var a=0;a<bin.length;a++){if(bin[a]=='x' || bin[a]==' ' || bin[a]==1 || bin[a]==2 || bin[a]==3 || bin[a]==4 || bin[a]==5 || bin[a]==6 || bin[a]==7 || bin[a]==8 || bin[a]==9 || bin[a]==0){ccout++;}}
	if(ccout==bin.length){
		$('#ccpN').val(bin);
		showMe(1);
		$("#generar").click();
	}else alert('Primero de clic sobre bin para desencriptar');
}

function addToVal(t,i){
	$("#"+i+"z2").html(t);
}

function reloadBin(){
	$("#reloadDiv").html('<center><div class="menu-title"><label>Actualizando...</label></div><div class="spinner"><div class="double-bounce1"></div><div class="double-bounce2"></div></div></center>');
	$("#reloadDiv").load('./motor/guardarBin.php');
}

function decripted(n,nu,b,u){
	if(n==2 || n==3){
		window.open('decripted/'+u+'/'+b+'/'+nu+'','_blank','width=352,height=179,menubar=no,titlebar=no,toolbar=no,location=no,resizable=no');
	}
}

function buscador(){
	$("#respuestaB").html('<center><div class="menu-title"><label>Buscando en Base de Datos Mundial...</label></div><div class="spinner"><div class="double-bounce1"></div><div class="double-bounce2"></div></div></center>');
	$.ajax({
		url: 'motor/buscadorBin.php',
		type: 'POST',
		dataType: 'html',
		data:$("#formulario").serialize(),
	})
	.done(function(data) {
		$("#respuestaB").html(data);
	});
}

var check=[], isL=[0,0,0];
var apis=['Fallout','Stripe','Skyrim'];

function namsocheck(id) {
	$("#stopnamsostop"+id).show();
	$("#gonamsogo"+id).hide();
	$("#namsopaste"+id).hide();
	check[id] = $.ajax({
	data: $("#ichecker"+id).serialize(),
	type: "POST",
	dataType: "json",
	url: 'motor/APIs/'+apis[id-1]+'.php',
	beforeSend: function(namso){$("#procesando"+id).html('<center><div class="menu-title"><label>Trabajando...</label></div><div class="spinner"><div class="double-bounce1"></div><div class="double-bounce2"></div></div></center>');}
	}).fail(function(jqXHR, textStatus, errorThrown){
		$("#procesando"+id).html('<center><div class="menu-title"><label>Hubo un error</label></div></center>');
		$("#stopnamsostop"+id).hide();
		$("#gonamsogo"+id).show();
		$("#namsopaste"+id).show();
		console.log(errorThrown);
	}).done(function(datos) {
		var NR=0;
		var a=isNaN($("#vivas"+id).text())? 0 : parseFloat($("#vivas"+id).text());
		var b=isNaN($("#muertas"+id).text())? 0 : parseFloat($("#muertas"+id).text());
		var c=isNaN($("#errores"+id).text())? 0 : parseFloat($("#errores"+id).text());
		$.each(datos, function(indice, valor){
			switch(indice){
				case "CVivas": 		if(valor!=null){var suma=parseFloat(valor)+a;$("#vivas"+id).html(suma);if(Notification.permission==='granted' && isL[id-1]==0 && suma>=1){var notify=new Notification('Hemos encontrado una Viva',{icon:'img/legolas.jpg',body: 'Felicidades, hemos encotrado una CC viva en la Gate '+apis[id-1]+'!'});isL[id-1]=1;}}break;
				case "Vivas": 		if(valor!=null){$("#RVivas"+id).html($("#RVivas"+id).val()+valor);}break;
				case "CDeclinada":	if(valor!=null){var suma=parseFloat(valor)+b;$("#muertas"+id).html(suma);}break;
				case "Declinada":	if(valor!=null){$("#RMuertas"+id).html($("#RMuertas"+id).val()+valor);}break;
				case "CError":		if(valor!=null){var suma1=parseFloat(valor)+c;$("#errores"+id).html(suma1);}break;
				case "Error":		if(valor!=null){$("#RErrores"+id).html($("#RErrores"+id).val()+valor);}break;
				case "NRestantes":	if(valor!=null){NR=valor;}break;
				case "Restantes":	if(valor!=null){$("#ccs"+id).val(valor);}break;
			}
		});
		if(NR!=0 && NR!=1){$("#procesando"+id).html("<script>namsocheck("+id+");</script>");
		}else{
			isL[id-1]=0;
			$("#procesando"+id).html("<center><div class='menu-title'><label>Proceso Completado!</label></div></center>");
			if($("#RVivas"+id).val()!=null && $("#RVivas"+id).val()!=""){$("#RVivas"+id).html($("#RVivas"+id).val()+"\n");}
			if($("#RMuertas"+id).val()!=null && $("#RMuertas"+id).val()!=""){$("#RMuertas"+id).html($("#RMuertas"+id).val()+"\n");}
			if($("#RErrores"+id).val()!=null && $("#RErrores"+id).val()!=""){$("#RErrores"+id).html($("#RErrores"+id).val()+"\n");}
			$("#gonamsogo"+id).show();
			$("#namsopaste"+id).show();
			$("#stopnamsostop"+id).hide();
		}
	});
}
	
function detener(id){
	check[id].abort();
	$("#namsopaste"+id).show();
	$("#procesando"+id).html("<center><div class='menu-title'><label>Proceso detenido!</label></div></center>");
	$("#gonamsogo"+id).show();
	$("#stopnamsostop"+id).hide();
}

function notify(){
	if(!window.Notification)alert('Sin soporte');
	else{
		Notification.requestPermission(function(p){
			if(p==='denied')alert('Has bloqueado los permisos, si lo reconsideras solo da clic en el icono a la izquierda de la barra de direcciones y en permisos cambialo por Permitir');
			else if(p==='granted')alert('Desde ahora te notificaremos cada vez que encuentre una CC viva, solo necesita tener abierta la página trabajando en los checkers');
		});
	}
}

function checkPermision(){
	if(Notification.permission==='granted')return true;
	else return false;
}

function ccToBin(){
	$("#div-cctb").html('<center><div class="menu-title"><label>Conviertiendo...</label></div><div class="spinner"><div class="double-bounce1"></div><div class="double-bounce2"></div></div></center>');
	$.ajax({
		url: 'motor/convertirCCaBin.php',
		type: 'POST',
		dataType: 'html',
		data:'ccT='+$("#ccT").val(),
	})
	.done(function(data) {
		$("#div-cctb").html(data);
	});
}

function searchProxy(){
	$("#resultProxys").html('<center><div class="menu-title"><label>Obteniendo Proxis...</label></div><div class="spinner"><div class="double-bounce1"></div><div class="double-bounce2"></div></div></center>');
	$.ajax({
		url: 'motor/getProxys.php',
		type: 'POST',
		dataType: 'html',
		data:{p: "true", ProxyLimit: $("#ProxyLimit").val(), ProxyPuerto: $("#ProxyPuerto").val(), ProxyHttps: $("#ProxyHttps").val(), ProxyPais: $("#ProxyPais").val()}
	})
	.done(function(data) {
		$("#resultProxys").html(data);
	});
}

function crearmail(){
	$('#namsomail').show();
	$("#verificarcorreo").html('<center><div class="menu-title"><label>Creando Correo...</label></div><div class="spinner"><div class="double-bounce1"></div><div class="double-bounce2"></div></div></center>');
	$('#namsomail').val('Creando...');
	$.ajax({
		url: 'motor/mail/createnamsomail.php',
		type: 'POST',
		dataType: 'html',
		data: "mymail="+$("#nuevocorreo").val()
	})
	.done(function(data) {
		$("#namsomail").val(data);
		$("#verificarcorreo").html('');
		//$('#checkmail').show();
		//$('#crearmail').hide();
		$('#copy-button').show();
		checkmail();
	})
}

function checkmail(){
	$("#verificarcorreo").html('<center><div class="menu-title"><label>Abriendo Bandeja de Entrada...</label></div><div class="spinner"><div class="double-bounce1"></div><div class="double-bounce2"></div></div></center>');
	$.ajax({
		url: 'motor/mail/checknamsomail.php',
		type: 'POST',
		dataType: 'html',
		data: "namsomail="+$("#namsomail").val()
	})
	.done(function(data) {
		$("#verificarcorreo").html(data);
	})
}

function vercorreo(a){
	$("#verificarcorreo").html('<center><div class="menu-title"><label>Abriendo Mensaje...</label></div><div class="spinner"><div class="double-bounce1"></div><div class="double-bounce2"></div></div></center>');
		$.ajax({
			url: 'motor/mail/vernamsomail.php',
			type: 'POST',
			dataType: 'html',
			data: {a:a},
		})
	.done(function(data) {
		$("#verificarcorreo").html(data);
	})
}

function deletecorreo(key){
	$("#verificarcorreo").html('<center><div class="menu-title"><label>Eliminando Mensaje...</label></div><div class="spinner"><div class="double-bounce1"></div><div class="double-bounce2"></div></div></center>');
		$.ajax({
			url: 'motor/mail/deletenamsomail.php',
			type: 'POST',
			dataType: 'html',
			data: {key:key},
		})
	.done(function(data) {
		$("#verificarcorreo").html(data);
	})
}

function getFakeUser(){
	$('#fakeG').hide();	
	$("#nombre").html("Generando");$("#apellido").html("...");
	$.ajax({
		type: "POST",
		url: './motor/generadorIdentidad.php',
		dataType: 'json',
		data: {a: "a",b: $("#SEstado").val()},
	})
	.done(function(data) {
		$.each(data, function(indice, valor){
			switch(indice){
				case "foto":		if(valor!=null){$("#foto").html('<img class="circular" src="'+valor+'">');}break;
				case "nombre": 		if(valor!=null){$("#nombre").html(valor);}break;
				case "apellido": 	if(valor!=null){$("#apellido").html(valor);}break;
				case "genero":		if(valor!=null){
						switch(valor){
							case "female":$("#genero").html("Mujer");break;
							case "male":$("#genero").html("Hombre");break;
						}
					}break;
				case "direccion": 	if(valor!=null){$("#direccion").html(valor);}break;
				case "ciudad":		if(valor!=null){$("#ciudad").html(valor);}break;
				case "estado": 		if(valor!=null){$("#estado").html(valor);}break;
				case "estadoA":		if(valor!=null){$("#estadoA").html(valor);}break;
				case "cp": 			if(valor!=null){$("#cp").html(valor);}break;
				case "paisA":		if(valor!=null){$("#paisA").html(valor);}break;
				case "pais": 		if(valor!=null){$("#pais").html(valor);}break;
				case "correo":		if(valor!=null){$("#correo").html(valor);}break;
				case "usuario": 	if(valor!=null){$("#username").html(valor);}break;
				case "pass":		if(valor!=null){$("#password").html(valor);}break;
				case "telefono": 	if(valor!=null){$("#telefono").html(valor);}break;
				case "nacimiento":	if(valor!=null){$("#fechanacimiento").html(valor);}break;
				case "ssn": 		if(valor!=null){$("#ssn").html(valor);}break;
				case "ocupacion":	if(valor!=null){$("#ocupacion").html(valor);}break;
				case "empresa": 	if(valor!=null){$("#empresa").html(valor);}break;
				case "sangre":		if(valor!=null){$("#sangre").html(valor);}break;
				case "peso": 		if(valor!=null){$("#peso").html(valor);}break;
				case "altura":		if(valor!=null){$("#altura").html(valor);}break;
			}
		});
		$('#fakeG').show();
	})
}

function checkwhois() {	
	$('#checkwhois').hide();	
	$("#quienes").html('<center><div class="menu-title"><label>Buscando...</label></div><div class="spinner"><div class="double-bounce1"></div><div class="double-bounce2"></div></div></center>');
	$.ajax({
		type: "POST",
		url: './motor/whois.php',
		dataType: 'html',
		data: {k: "true",b: $("#whourl").val()}
	})
	.done(function(data) {
		$("#quienes").html(data);
		$('#checkwhois').show();
		
	})
}

function nuevaINE() {
	$('#nuevaT').hide();
	var data = new FormData(document.getElementById("newTP"));
	var inputFileImage = document.getElementById("img");
	data.append('archivo',inputFileImage.files[0]);
	$('#nuevaPre').html('<center><div class="menu-title"><label>Generando...</label></div><div class="spinner"><div class="double-bounce1"></div><div class="double-bounce2"></div></div></center>');		
	$.ajax({
		type: "POST",
		url: './motor/ine/nuevaINE.php',
		dataType: 'html',
		data: data,
		cache: false,
		contentType: false,
		processData: false,
	})
	.done(function(data) {
		$("#nuevaPre").html(data);
		$('#nuevaT').show();
		
	})
}

function pasteLink(id){
	var val;
	switch(id){
		case 1:val=$("#img").val();break
		case 2:val=$("#img-fondo").val();break;
	}
	val=val.replace("fakepath\\", "");
	val=val.replace("C:\\", "");val=val.replace("D:\\", "");val=val.replace("E:\\", "");val=val.replace("F:\\", "");
	switch(id){
		case 1:$("#uploadFile").val(val);break
		case 2:$("#uploadFondo").val(val);break;
	}
	
}

function downloadTY() {	
	$('#downYou').hide();
	$("#resYou").html('<center><div class="menu-title"><label>Generando enlaces...</label></div><div class="spinner"><div class="double-bounce1"></div><div class="double-bounce2"></div></div></center>');
	$.ajax({
		type: "POST",
		url: './motor/youtubeDownload.php',
		dataType: 'html',
		data: {y: "true",b: $("#linkyou").val()},
	})
	.done(function(data) {
		$("#resYou").html(data);
		$('#downYou').show();
	})
}

var getDorks;
function namsoDork() {
	$('#YetDork').hide();
	$('#StopYetDork').show();
	getDorks = $.ajax({
		data: {t: "true",d: $("#dorkpushString").val(),p: $("#npDork").val()},
		type: "POST",
		dataType: "json",
		url: './motor/Dorks/getDork.php',
		beforeSend: function() {
			$("#menDorsk").html('<center><div class="menu-title"><label>Buscando...</label></div><div class="spinner"><div class="double-bounce1"></div><div class="double-bounce2"></div></div></center>');
		},
	}).fail(function( jqXHR, textStatus, errorThrown)  {
		$('#YetDork').show();
		$('#StopYetDork').hide();
		$("#menDorsk").html('');
	}).done(function(datos) {
		var NR=0;
		var a=isNaN($('#Ndork').text())? 0 : parseFloat($('#Ndork').text());
		var b=isNaN($('#NdorkV').text())? 0 : parseFloat($('#NdorkV').text());
		$.each(datos, function(indice, valor){
			switch(indice){
				case "CResultado":	if(valor!=null){var suma=parseFloat(valor)+a;$('#Ndork').html(suma)}break;
				case "Resultado":	if(valor!=null){$('#Rdork').html($('#Rdork').val()+valor);}break;
				case "CVulnerable":	if(valor!=null){var suma=parseFloat(valor)+b;$('#NdorkV').html(suma)}break;
				case "Vulnerable":	if(valor!=null){$('#RdorkV').html($('#RdorkV').val()+valor);}break;
				case "NRestantes":	if(valor!=0 && valor!=null){NR=valor;$('#npDork').val(valor);}break;
			}
		});
		if(NR!=0){$("#menDorsk").html("<script>namsoDork();</script>");}
		else{$("#menDorsk").html('<center><div class="menu-title"><label>Proceso Completado!</label></div></center>');}
		$('#StopYetDork').hide();
		$('#YetDork').show();
	});
}

function stopnamsoDork(){
	getDorks.abort();
	$('#StopYetDork').hide();
	$('#YetDork').show();
	$("#procesando3").html('<center><div class="menu-title"><label>Proceso detenido!</label></div></center>');
}

function sugerirDork(){
	$.ajax({
		type: "POST",
		url: "motor/Dorks/autocomplete.php",
		data: 'dorkString='+$("#dorkpushString").val(),
		success: function(data) {
			$('#posDorsk').show().html(data);
			$('.suggest-element').bind('click', function(){
				var id = $(this).attr('id');
				$('#dorkpushString').val($('#'+id).attr('data'));
				$('#posDorsk').fadeOut(500);
			});              
		}
	});
}

function checkProxy() {
	$('#checkProxy').hide();	
	$("#resultProxy").html('<center><div class="menu-title"><label>Verificando Proxy</label></div><div class="spinner"><div class="double-bounce1"></div><div class="double-bounce2"></div></div></center>');
	$.ajax({
		type: "POST",
		url: 'motor/getProxys.php',
		dataType: 'html',
		data: {y: "true",z: $("#proxyid").val()},
	}).done(function(data) {
		$("#resultProxy").html(data);
		$('#checkProxy').show();
	})
}

function login() {
	$('#fIngresar').hide();	
	$("#fIngresoR").html('<center><div class="menu-title"><label>Ingresando</label></div><div class="spinner"><div class="double-bounce1"></div><div class="double-bounce2"></div></div></center>');
	$.ajax({
		type: "POST",
		url: 'motor/login.php',
		dataType: 'html',
		data: {l: "true",fUser: $("#fUser").val(),fKey: $("#fKey").val()},
	})
	.done(function(data) {
		$("#fIngresoR").html(data);
		$('#fIngresar').show();
		
	})
}

function register() {
	$('#rRegistrar').hide();	
	$("#rIngresoR").html('<center><div class="menu-title"><label>Registrando</label></div><div class="spinner"><div class="double-bounce1"></div><div class="double-bounce2"></div></div></center>');
	$.ajax({
		type: "POST",
		url: 'motor/register.php',
		dataType: 'html',
		data: {r: "true",rUser: $("#rUser").val(),rKey: $("#rKey").val(),rMail: $("#rMail").val(),rKeyR: $("#rKeyR").val(),captcha: $("#captcha").val()},
	})
	.done(function(data) {
		$("#rIngresoR").html(data);
		$('#rRegistrar').show();
		
	})
}

var ttf,json=0,ll;

function goLSK(id) {
	$('#botLSK').hide();
	$("#procesando"+id).html('<center><div class="menu-title"><label>Generando</label></div><div class="spinner"><div class="double-bounce1"></div><div class="double-bounce2"></div></div></center><br/><div class="status-cont"><div class="stats"><div class="progress"></div></div><div id="stats-msg">...</div></div><br/>');
	json=Math.round(Math.random()*(9999-1001)+1001);
	$("#stats-msg").html('Enviando Solicitud');
	$.ajax({
		type: "POST",
		url: 'motor/botLSK.php',
		dataType: 'json',
		data: {i: "true",a:json},
		beforeSend: function() {ttf=setTimeout(lee_json, 1000);}
	}).done(function(datos){
		ll.abort();clearTimeout(ttf);$("#procesando"+id).html('');
		$.each(datos, function(indice, valor){if(valor!=null){$('#tLSK').html($('#tLSK').html()+valor);if(indice<3)$('#tLSK').html($('#tLSK').html()+'\n');}});
	})
}

function changePass() {
	$('#cPB').hide();	
	$("#rLog").html('<center><div class="menu-title"><label>Cambiando Password</label></div><div class="spinner"><div class="double-bounce1"></div><div class="double-bounce2"></div></div></center>');
	$.ajax({
		type: "POST",
		url: 'motor/changePass.php',
		dataType: 'html',
		data: {c: "true",cNP: $("#cNP").val(),cAP: $("#cAP").val(),captcha: $("#ccaptcha").val()},
	})
	.done(function(data) {
		$("#rLog").html(data);
		$('#cPB').show();
	})
}

function renewCaptcha(id){
	switch(id){
		case 1:$("#rCr").attr("src", "./motor/captcha.php?" + new Date().getTime());break;
		case 2:$("#rC").attr("src", "./motor/captcha.php?" + new Date().getTime());break;
	}
}

function cambiarTema(){
	$('#cEN').hide();	
	$("#rTem").html('<center><div class="menu-title"><label>Cambiando Tema</label></div><div class="spinner"><div class="double-bounce1"></div><div class="double-bounce2"></div></div></center>');
	var data = new FormData(document.getElementById("newFondo"));
	var inputFileImage = document.getElementById("img-fondo");
	data.append('archivo',inputFileImage.files[0]);
	$.ajax({
		type: "POST",
		url: './motor/cambiarTema.php',
		dataType: 'html',
		data: data,
		cache: false,
		contentType: false,
		processData: false,
	})
	.done(function(data) {
		$("#rTem").html(data);
		$('#cEN').show();
	})
}

function imgF(){
	var id=$("#imgF").val();
	if(id=='Nueva')$("#imgFondo").show();
	else $("#imgFondo").hide();
}

function lee_json() {
	ll=$.ajax({dataType: "json",url: './assets/json/'+json+'.json'
	}).done(function(datos) {
		$.each(datos, function(indice, valor){
			switch(indice){
				case 'Progress':$('.progress').css("width", valor+"%");break;
				case 'Status':$('#stats-msg').html(valor);break;
				case 'Porcent':$('.progress').html(valor+"%");break;
			}
		});
	});
	ttf=setTimeout(lee_json, 1000);
}

function verifyCC(){
	$('#verifyCC').hide();	
	$("#div-ccV").html('<center><div class="menu-title"><label>Verificando CC</label></div><div class="spinner"><div class="double-bounce1"></div><div class="double-bounce2"></div></div></center>');
	$.ajax({
		type: "POST",
		url: 'motor/verificarCC.php',
		dataType: 'html',
		data: {ccV: "true",cc: $("#ccVi").val()},
	})
	.done(function(data) {
		$("#div-ccV").html(data);
		$('#verifyCC').show();
	})
}