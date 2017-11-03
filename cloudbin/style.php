body{
	margin:0;
	background: url('./../img/1.jpg');
	background-size: cover;
	background-repeat: no-repeat;
}
/*Header*/
header{
	background: url('../img/header.png') center bottom repeat-x;
	border-bottom: 5px solid #46a8a8;
	color:white;
}
.title{
	font-family: "OrbitronMedium";
	font-size: 2rem;
	padding: 15px;
}
.header-title {
	background: rgba(0,0,0,.33);
	font-family: "OrbitronLight";
	display: flex;
	justify-content: flex-end;
	padding: 1px;
}
.header-title a {
	cursor: pointer;
	transition: all 0.5s;
	-webkit-transition: all .5s;
	text-decoration: none;
	color: white;
}
.header-title a:hover {
	color: rgba(0, 0, 0, 0.75);
	background: white;
	border-radius: 10px;
	padding: 0 5px 0 5px;
}

/*Cargando*/
.spinner {
	width: 40px;
	height: 40px;
	position: relative;
	margin: 5px auto;
}

.double-bounce1, .double-bounce2 {
	width: 100%;
	height: 100%;
	border-radius: 50%;
	background-color: #318EFF;
	opacity: 0.6;
	position: absolute;
	top: 0;
	left: 0;
	-webkit-animation: sk-bounce 2.0s infinite ease-in-out;
	animation: sk-bounce 2.0s infinite ease-in-out;
}

.double-bounce2 {
	-webkit-animation-delay: -1.0s;
	animation-delay: -1.0s;
}

@-webkit-keyframes sk-bounce {
	0%, 100% { -webkit-transform: scale(0.0) }
	50% { -webkit-transform: scale(1.0) }
}

@keyframes sk-bounce {
	0%, 100% { 
		transform: scale(0.0);
		-webkit-transform: scale(0.0);
	} 50% { 
		transform: scale(1.0);
		-webkit-transform: scale(1.0);
	}
}

/*Body Principal*/
.principal {
	width: 77%;
	display: inline-block;
	vertical-align: top;
}
.menu{
	width: 20%;
	display: inline-block;
}
.title img{
	display: inline-block;
	height: 2.5rem;
	vertical-align: middle;
}

/*Menu*/
section.hh {
	background-color: #318EFF;
	display: flex;
    align-items: center;
	font-family: 'UbuntuRegular';
	color: white;
	text-align: justify;
}
.hh-title {
	display: inline-block;
	margin-left: 5px;
}
section>i {
	padding: .6rem;
}
.menu section>section.hh:hover {
	background-color: #318EFF;
	border-radius: 40px;
}
.menu>section section{
	margin-bottom: 5px;
	cursor: pointer;
	transition: all 0.5s;
	-webkit-transition: all .5s;
}
.menu .hh > i{
	transition: all 0.5s;
	-webkit-transition: all .5s;
}
.hh>i{
	background-color: #318EFF;
}
.menu .hh:hover > i {
	-webkit-transform: rotate(360deg);
	transform: rotate(360deg);
	background: #46a8a8;
	text-shadow: 0px 0px 13px #fff;
	border-radius:40px;
}
.menu .hh:hover > .hh-title{
	text-shadow: 0px 0px 13px #fff;
}
section>i {
	min-width: 21px;
	text-align: center;
}
#a0{
	display:none;
	text-align:center;
	cursor:pointer;
	margin-bottom: 5px;
}
#a0:hover{
	background: #2D7681;
}
#a0:hover>i{
	background-color: #318EFF;
}
#a0>i{
	background-color: #318EFF;
}
.principal section.hh.g {
    justify-content: space-between;
}
.fb-like {
    margin-right: 10px;
}

/*Tabla*/
.table{
	font-family: 'GeosansLight';
}
.Lbuttoni{
	text-decoration: none;
	cursor:pointer;
	-webkit-transition: all .5s;
	transition: all .5s;
}
.Lbuttoni:hover{
	-webkit-transform: rotate(360deg);
	transform: rotate(360deg);
}
.firstT {
	display: inline-block;
	width: 15%;
	background-color: #318EFF;
	color: white;
	font-size: 21px;
	padding: 5px 0 5px 0;
	text-align: center;
}
.l {
	background-color: white;
	color: black;
	width: 15%;
	overflow: auto;
	font-size: 18px;
	vertical-align: top;
}
.l1{
	background-color: #318EFF;
}
.z{
	width: 95%;
}
.z1{
	width: 25%;
}
.z2{
	width: 18%;
}
.z1:hover,.z2:hover {
	background-color: #318EFF;
	color: white;
}
.z3{
	width: 10%;
}
.z4{
	width: 10%;
}
.z5{
	width: 15%;
}
.z7{
	width: 10%;
}

/*Buscador*/
.selected{
	overflow: overlay;
	max-height: 180px;
}
.hh{
	border-bottom: 3px solid rgba(0, 128, 128, 0.83);
	margin: 0;
}
.hh-titles{
	padding: 5px;
	background-color: #318EFF;
	color: white;
	border-radius: 5px 5px 0 0;
	text-align: center;
}
.inline{
	display:inline-block;
	border-bottom: 3px solid rgba(0, 128, 128, 0.83);
	width:22%;
	margin:5px;
	vertical-align: top;
	text-align: justify;
	font-family: 'UbuntuRegular';
	background: white;
	border-radius: 5px 5px 0 0;
}
.wall {
	overflow-x:hidden;
	overflow-y:scroll;
}
.wall::-webkit-scrollbar {
	width:10px;
}
.wall::-webkit-scrollbar * {
	background:transparent;
}
.wall::-webkit-scrollbar-thumb {
	background:rgba(0, 128, 128, 0.54) !important
}
.divIN{
	cursor:pointer;
}
.divIN:hover{
	background-color: #318EFF;
}
.bus{
	display:inline-block;
	vertical-align: top;
}
.color{
	background-color: #318EFF;
}
.white{
	background-color: #318EFF;
}
.color-title{
	background: rgba(0, 128, 128, 0.83);
	color: white;
	font-size: 21px;
	padding: 5px 0 5px 0;
	border-radius: 5px 5px 0 0;
}
#respuestaB {
	font-size: 17px;
}

/*Checker*/
.contendor{
	width:80%;
}
.div-checker form {
    width: 80%;
}
.width{
	padding: 0px;
}
.nv{
	width: 99% !important;
}
.tit {
	margin: 5px 0 0 0 !important;
	padding: 8px 0 8px 0;
	font-size: 1.2rem !important;
	color: white;
	background-color: #318EFF;
	border-radius: 10px 10px 0 0;
}
.min{
	font-size: 15px !important;
	padding: 5px !important;
	vertical-align: top !important;
}
div#procesando {
	width: 80% !important;
	background: rgba(255, 255, 255, 0.75);
	padding: 5px 0 5px 0;
	font-size: 21px;
	border: 0;
	border-radius: 10px;
}

/*Titulos*/
.menu-title>label {
	font-size: 20px;
}
.menu-title {
	background-color: #318EFF;
	color: white;
	font-family: 'UbuntuRegular';
	padding: 4px;
	width: 50%;
	border-radius: 10px;
}
.some-title{
	font-family: 'OrbitronMedium';
	text-align: center;
	background: teal;
	color: white;
	padding: 5px;
}
.header {
	background-color: #318EFF;
	color: white;
	width: 80%;
	border-radius: 5px 5px 0 0;
	padding: 10px 0 10px 0;
	outline: none;
	font-family: 'OrbitronMedium';
	font-size: 25px;
}

/*Inputs*/
form#console {
	text-align: center;
}
.Ilabel, .input_text,.input_texts {
	display: -webkit-inline-box;
	font-family: 'GeosansLight';
	font-size: 19px;
}
.Ilabel {
	background: #137DC6; /* For browsers that do not support gradients */
    background: -webkit-linear-gradient(left, #137DC6 , #84B5D7); /* For Safari 5.1 to 6.0 */
    background: -o-linear-gradient(right, #137DC6 , #84B5D7); /* For Opera 11.1 to 12.0 */
    background: -moz-linear-gradient(right, #137DC6 , #84B5D7); /* For Firefox 3.6 to 15 */
    background: linear-gradient(to right, #137DC6 , #84B5D7); /* Standard syntax */
	padding: 5px;
	border-radius: 5px 0 0 5px;
	border-bottom: 2px solid rgba(19, 125, 198, 0.83);
	color: #FFFFFF;
}
.input_text {
	padding: 6px;
	border: 0;
	border-bottom: 2px solid rgba(0, 128, 128, 0.83);
	border-right: 2px solid rgba(0, 128, 128, 0.83);
	border-radius: 0 5px 5px 0;
	vertical-align: bottom;
	outline: none;
	font-size:17px;
}
select.input_text {
	margin-left: -5px;
	font-size: 16px;
	background: white;
}
.p {
	display: -webkit-inline-box;
	margin-bottom: 12px;
}
.s{
	margin-left: -5px;
	background: white;
	padding: 5.5px;
}
.input_text>label{
	cursor:pointer;
}
.clean{
	background: rgba(0, 128, 128, 0.83) url('../img/close_white.png') 0 0 no-repeat;
	border-radius: 50%;
	cursor: pointer;
	height: 24px;
	width: 24px;
	float: right;
	margin: 0 -12px -12px 0;
	position: relative;
	transition: all 0.5s;
	-webkit-transition: all .5s;
}
.clean:hover {
	background: rgba(0, 128, 45, 0.87) url('../img/close_white.png') 0 0 no-repeat;
	-webkit-transform: rotate(360deg);
	transform: rotate(360deg);
}
.cleanit{
	background: rgba(206, 52, 52, 0.87) url('../img/close_white.png') 0 0 no-repeat;
	border-radius: 50%;
	cursor: pointer;
	height: 24px;
	width: 24px;
	float: right;
	position: relative;
	transition: all 0.5s;
	-webkit-transition: all .5s;
}
.cleanit:hover {
	background: rgba(0, 0, 0, 0.87) url('../img/close_white.png') 0 0 no-repeat;
	-webkit-transform: rotate(360deg);
	transform: rotate(360deg);
}
.eighty{
	width:80%;
}

/*Boton*/
.Lbutton {
	background:-webkit-gradient(linear, left top, left bottom, color-stop(0.05, #ffffff), color-stop(1, #f6f6f6));
	background:-moz-linear-gradient(top, #ffffff 5%, #f6f6f6 100%);
	background:-webkit-linear-gradient(top, #ffffff 5%, #f6f6f6 100%);
	background:-o-linear-gradient(top, #ffffff 5%, #f6f6f6 100%);
	background:-ms-linear-gradient(top, #ffffff 5%, #f6f6f6 100%);
	background:linear-gradient(to bottom, #ffffff 5%, #f6f6f6 100%);
	filter:progid:DXImageTransform.Microsoft.gradient(startColorstr='#ffffff', endColorstr='#f6f6f6',GradientType=0);
	background-color:#ffffff;
	-moz-border-radius:6px;
	-webkit-border-radius:6px;
	border-radius:6px;
	border:1px solid #2D7681;
	display:inline-block;
	cursor:pointer;
	color:#2D7681;
	font-family:Courier New;
	font-size:20px;
	font-weight:bold;
	padding:8px 40px;
	text-decoration:none;
}
.Lbutton:hover {
	background:-webkit-gradient(linear, left top, left bottom, color-stop(0.05, #f6f6f6), color-stop(1, #ffffff));
	background:-moz-linear-gradient(top, #f6f6f6 5%, #ffffff 100%);
	background:-webkit-linear-gradient(top, #f6f6f6 5%, #ffffff 100%);
	background:-o-linear-gradient(top, #f6f6f6 5%, #ffffff 100%);
	background:-ms-linear-gradient(top, #f6f6f6 5%, #ffffff 100%);
	background:linear-gradient(to bottom, #f6f6f6 5%, #ffffff 100%);
	filter:progid:DXImageTransform.Microsoft.gradient(startColorstr='#f6f6f6', endColorstr='#ffffff',GradientType=0);
	background-color:#f6f6f6;
}
.Lbutton:active {
	position:relative;
	top:1px;
}
.item>a {
	background:-webkit-gradient(linear, left top, left bottom, color-stop(0.05, #ffffff), color-stop(1, #f6f6f6));
	background:-moz-linear-gradient(top, #ffffff 5%, #f6f6f6 100%);
	background:-webkit-linear-gradient(top, #ffffff 5%, #f6f6f6 100%);
	background:-o-linear-gradient(top, #ffffff 5%, #f6f6f6 100%);
	background:-ms-linear-gradient(top, #ffffff 5%, #f6f6f6 100%);
	background:linear-gradient(to bottom, #ffffff 5%, #f6f6f6 100%);
	filter:progid:DXImageTransform.Microsoft.gradient(startColorstr='#ffffff', endColorstr='#f6f6f6',GradientType=0);
	background-color:#ffffff;
	-moz-border-radius:6px;
	-webkit-border-radius:6px;
	border-radius:6px;
	border: 1px solid #2D7681;
	display: inline-block;
	cursor: pointer;
	color: #2D7681;
	font-family:Courier New;
	font-size:16px;
	font-weight:bold;
	padding:8px 0px;
	text-decoration:none;
	width:80%;
}
.item>a:hover {
	background:-webkit-gradient(linear, left top, left bottom, color-stop(0.05, #f6f6f6), color-stop(1, #ffffff));
	background:-moz-linear-gradient(top, #f6f6f6 5%, #ffffff 100%);
	background:-webkit-linear-gradient(top, #f6f6f6 5%, #ffffff 100%);
	background:-o-linear-gradient(top, #f6f6f6 5%, #ffffff 100%);
	background:-ms-linear-gradient(top, #f6f6f6 5%, #ffffff 100%);
	background:linear-gradient(to bottom, #f6f6f6 5%, #ffffff 100%);
	filter:progid:DXImageTransform.Microsoft.gradient(startColorstr='#f6f6f6', endColorstr='#ffffff',GradientType=0);
	background-color:#f6f6f6;
}
.item>a:active {
	position:relative;
	top:1px;
}
.renew {
	background: rgba(0, 128, 128, 0.79);
	color: white;
	padding: 5px;
	vertical-align: middle;
	margin: 5px;
	border-radius: 5px;
	cursor: pointer;
}
.renew:hover {
	background: rgba(15, 96, 96, 0.68);
}
.captcha{
	display: flex;
	justify-content: center;
}

/*Items*/
.item {
	width: 28%;
	background: white;
	display: inline-block;
	margin: 5px;
	border-radius: 4px;
	padding: 10px;
	border: 2px solid #2D7681;
}
.item-title {
	font-size: 25px;
	font-family: 'UbuntuRegular';
	border-bottom: 2px solid rgba(0, 128, 128, 0.83);
	margin-bottom: 10px;
}
.item>img {
	width: 100px;
	height: 100px;
}

/*Barra*/
.status-cont{
	border: 1px solid #46a8a8;
    width: 400px;
    border-radius: 3px;
    text-align: center;
    background: rgba(0, 128, 128, 0.83);
    color: white;
}
.stats{
    border: 1px solid #800000;
    border-radius: 10px;
    background: white;
}
.progress{
	width:0%;
    background: #800000;
    border-radius: 6px;
    color: white;
    text-align: center;
    transition: all 0.5s;
}

/*Textarea*/
.textarea {
	border-bottom: 2px solid rgba(0, 128, 128, 0.83);
	border-top: 2px solid rgba(0, 128, 128, 0.83);
	border-left: 0;
	border-right: 0;
	width: 100%;
	font-size: 16px;
	margin-bottom: 10px;
	outline: none;
	font-family: 'GeosansLight';
	overflow-x: hidden;
	overflow-y: scroll;
}
.textarea::-webkit-scrollbar {
	width: 10px;
}
.textarea::-webkit-scrollbar-thumb {
	background: #008080 !important;
}

/*Mail*/
tr.mailSe {
    background: white;
}
tr.mailSe:hover {
    background: rgba(0, 128, 128, 0.82);
	color: white;
	cursor: pointer;
}
.link {
	text-align: center;
	background: #1abc9c;
	height: 19px;
	width: 19px;
	display: block;
	color: #fff;
	border-radius: 50%;
	font-size: 13px;
	margin: 0 auto;
	cursor: pointer;
}
.pre {
    width: 85%;
    background: rgba(255, 255, 255, 0.91);
    padding: 10px;
    border-radius: 0 0 10px 10px;
}
.pm-subject{
	background: rgba(70, 168, 168, 0.8);
	color: white;
	font-family: 'UbuntuRegular';
	padding: 4px;
	width: 90%;
	border-radius: 10px;
}
.reset{
	background: rgba(70, 168, 168, 0.63);
	color: white;
	font-family: 'UbuntuRegular';
	width: 70%;
	border-radius: 5px;
	border-bottom: 2px solid teal;
}
.pm-info li {
	list-style: none;
}
.mail_btn{
	display: flex;
	justify-content: space-between;
}
#mails tbody tr {
	background: white;
}

/*Fake Generator*/
.circular {
	border-radius: 100%;
	border-bottom: 5px solid rgba(0, 128, 128, 0.83);
}

/*Whois*/
.menu-whois{
	background: #2D7681;
	color: white;
	font-family: 'UbuntuRegular';
	padding: 4px;
	width: 70%;
	border-radius: 10px;
	text-align: justify;
}

/*Ine*/
.fileUpload {
	position: relative;
	overflow: hidden;
	display: inline-block;
	vertical-align: middle;
}
input.upload {
	position: absolute;
	top: 0;
	right: 0;
	margin: 0;
	font-size: 20px;
	cursor: pointer;
	opacity: 0;
	padding: 8px;
	filter: alpha(opacity=0);
}
#newTP .Ilabel{
	min-width: 154px;
}
#newTP select.input_text{
	min-width: 238px;
}
#newTP .menu-title label {
	font-size: 14px;
}

/*YoutubeDownload*/
.Youtubelist>div {
	padding: 5px;
	font-size: 18px;
}
.dl {
	color: rgb(0, 128, 128);
	text-decoration: none;
	border: 1px solid;
	border-radius: 5px;
	padding: 2px;
	background: white;
}
.Youtubelist>li {
	display: flex;
	justify-content: space-between;
}

/*Dorks*/
.lihelp:hover {
	background-color: rgba(60, 166, 210, 0.72);
}
.lihelp {
	padding: 5px;
	cursor: pointer;
}
.listDork {
	list-style: none;
	background: rgba(255, 255, 255, 0.87);
	padding: 5px;
	border-radius: 10px;
	width: 50%;
}

/*Ingresar*/
.form .Ilabel {
	min-width: 110px;
}
.form{
	background: rgba(18, 121, 102, 0.56);
	width: 50%;
	padding: 24px 0 24px 0;
	border-radius: 10px;
	margin: 100px 0 100px 0
}
.form-title {
	font-family: "OrbitronMedium";
	background: rgba(0, 128, 128, 0.6);
	padding: 5px 0 5px 0;
	margin-bottom: 10px;
	font-size: 29px;
	color: white;
}

/*Mensajes*/
.msg{
	color: white;
	font-family: 'UbuntuRegular';
	font-size: 20px;
	padding: 5px 0 5px 0;
	width: 90%;
	border-radius: 10px;
}
.wrong {
	background: rgba(163, 20, 20, 0.82);
	border-bottom: 2px solid #3F0808;
}
.great {
	background: rgba(24, 134, 43, 0.82);
	border-bottom: 2px solid #023F39;
}

/*Footer*/
footer {
	background: url('../img/header.png') center bottom repeat-x;
	border-top: 5px solid #46a8a8;
	text-align: center;
	font-family: 'UbuntuRegular';
	color: white;
	padding: 5px;
	font-size: 15px;
}

/*Ajustar*/
@media (max-width: 376px){
	.title{
		font-size: 1.5rem;
	}
	.p{

	}
	.Ilabel{
		width: 90%;
		border-radius: 0;
	}
	.input_text{
		width: 80%;
		border-radius: 0;
		text-align: -webkit-center;
		border-right: 0;
	}
	.inline{
		width: 40%;
	}
	.hh{
		text-align: center;
	}
}
@media (max-width: 595px){
	.form{
		width:99%;
		margin: 5px 0 5px 0;
	}
}
@media (max-width: 445px){
	.item{
		width:38%;
	}
}
@media (max-width: 745px){
	.z1,.z2,.z3,.z4,.z5,.z7{
		width:100%;
	}
	.y{
		display:none;
	}
	.z1{
		background: teal;
		color: white;
	}
}
@media (max-width: 1016px){
	.menu,.principal{
		width:100%;
	}
	#a0{
		display:block;
	}
	#menu-sub{
		display:none;
	}
	.item-title{
		font-size: 20px;
	}
}
@media (min-width: 1017px){
	#menu-sub{
		display:block !important;
	}
}

/*Fuentes de Letra*/
@font-face {
  font-family: 'Namso Pro';
  font-style: normal;
  font-weight: 400;
  src: local('Dosis Regular'), local('Dosis-Regular'), url('fonts/Terminal_Dosis_Latin.woff2') format('woff2');
  unicode-range: U+0100-024F, U+1E00-1EFF, U+20A0-20AB, U+20AD-20CF, U+2C60-2C7F, U+A720-A7FF;
}
@font-face {
	font-family: 'OrbitronMedium';
	src: url('fonts/orbitron-medium-webfont.eot');
	src: url('fonts/orbitron-medium-webfont.eot?#iefix') format('embedded-opentype'),
		 url('fonts/orbitron-medium-webfont.woff') format('woff'),
		 url('fonts/orbitron-medium-webfont.ttf') format('truetype'),
		 url('fonts/orbitron-medium-webfont.svg#OrbitronMedium') format('svg');
	font-weight: normal;
	font-style: normal;
}
@font-face {
	font-family: 'OrbitronLight';
	src: url('fonts/orbitron-light-webfont.eot');
	src: url('fonts/orbitron-light-webfont.eot?#iefix') format('embedded-opentype'),
		 url('fonts/orbitron-light-webfont.woff') format('woff'),
		 url('fonts/orbitron-light-webfont.ttf') format('truetype'),
		 url('fonts/orbitron-light-webfont.svg#OrbitronLight') format('svg');
	font-weight: normal;
	font-style: normal;
}
@font-face {
	font-family: 'UbuntuRegular';
	src: url('fonts/Ubuntu-Regular-webfont.eot?#iefix') format('embedded-opentype'),
		 url('fonts/Ubuntu-Regular-webfont.woff') format('woff'),
		 url('fonts/Ubuntu-Regular-webfont.ttf') format('truetype'),
		 url('fonts/Ubuntu-Regular-webfont.svg#webfont1HARLTaU') format('svg');
	font-weight: normal;
	font-style: normal;
}
@font-face {
	font-family: 'GeosansLight';
	src: url('fonts/GeosansLight.eot');
	src: url('fonts/GeosansLight.eot?#iefix') format('embedded-opentype'),
		 url('fonts/GeosansLight.ttf') format('truetype');
	font-weight: bold;
}