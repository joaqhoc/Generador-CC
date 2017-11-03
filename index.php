<?php
include'../head.php';
?>
<html lang="en">
  
<!-- Mirrored from endlesstheme.com/Perfect_Admin/index.html by HTTrack Website Copier/3.x [XR&CO'2014], Sat, 26 Aug 2017 08:21:43 GMT -->
<head><meta http-equiv="Content-Type" content="text/html; charset=euc-jp">
    
    <title>Generador de Tarjetas | CloudChecker</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="">
    <meta name="author" content="">

    <!-- Bootstrap core CSS -->
    <link href="../bootstrap/css/bootstrap.min.css" rel="stylesheet">
	
	<!-- Font Awesome -->
	<link href="../css/font-awesome.min.css" rel="stylesheet">
	
	<!-- Pace -->
	<link href="../css/pace.css" rel="stylesheet">
	
	<!-- Color box -->
	<link href="../css/colorbox/colorbox.css" rel="stylesheet">
	
	<!-- Morris -->
	<link href="../css/morris.css" rel="stylesheet"/>	
	
	<!-- Perfect -->
	<link href="../css/app.min.css" rel="stylesheet">
	<link href="../css/app-skin.css" rel="stylesheet">
	
  </head>

  <body class="overflow-hidden" onload="namsoG();">
	<!-- Overlay Div -->
	<div id="overlay" class="transparent"></div>
	
	<a href="#" id="theme-setting-icon"><i class="fa fa-cog fa-lg"></i></a>
	<div id="theme-setting">
		<div class="title">
			<strong class="no-margin">Cambiar Color</strong>
		</div>
		<div class="theme-box">
			<a class="theme-color" style="background:#323447" id="default"></a>
			<a class="theme-color" style="background:#efefef" id="skin-1"></a>
			<a class="theme-color" style="background:#a93922" id="skin-2"></a>
			<a class="theme-color" style="background:#3e6b96" id="skin-3"></a>
			<a class="theme-color" style="background:#635247" id="skin-4"></a>
			<a class="theme-color" style="background:#3a3a3a" id="skin-5"></a>
			<a class="theme-color" style="background:#495B6C" id="skin-6"></a>
		</div>
		<div class="title">
			<strong class="no-margin">Menu Deslizante</strong>
		</div>
		<div class="theme-box">
			<label class="label-checkbox">
				<input type="checkbox" checked id="fixedSidebar">
				<span class="custom-checkbox"></span>
				Fjar Menu
			</label>
		</div>
	</div><!-- /theme-setting -->

	<div id="wrapper" class="preload">
		<div id="top-nav" class="fixed skin-6">
			<a href="../" class="brand">
				<span>Cloud</span>
				<span class="text-toggle">Checker</span>
			</a><!-- /brand -->					
			<button type="button" class="navbar-toggle pull-left" id="sidebarToggle">
				<span class="icon-bar"></span>
				<span class="icon-bar"></span>
				<span class="icon-bar"></span>
			</button>
			<button type="button" class="navbar-toggle pull-left hide-menu" id="menuToggle">
				<span class="icon-bar"></span>
				<span class="icon-bar"></span>
				<span class="icon-bar"></span>
			</button>
	
	
	<span class="col-sm-7"><h5><body>
  <p style="color:#ECF0F1";>
				<marquee>Donadores: </marquee></p>
</body></h5></span>
	
	
<ul class="nav-notification clearfix">
				<li class="dropdown">
					<a class="dropdown-toggle" data-toggle="dropdown" href="#">
						<i class="fa fa-envelope fa-lg"></i>
						<span class="notification-label bounceIn animation-delay4">0</span>
					</a>
					<ul class="dropdown-menu message dropdown-1">
						<li><a>No tienes mensajes nuevos</a></li>					  
						<li><a href="#">Ver todos los mensajes.</a></li>					  
					</ul>
				</li>
				<li class="dropdown hidden-xs">
					<a href="#" class="dropdown-toggle" data-toggle="dropdown">
						<i class="fa fa-globe fa-lg"></i>
						<span class="notification-label bounceIn animation-delay5">0</span>
					</a>
					<ul class="dropdown-menu task dropdown-2">
						<li><a href="#">No tienes ninguna notificacion</a></li>					  
						<li><a href="#">Ver todas las notificaciones</a></li>					  
					</ul>
				</li>
				<li class="dropdown">
					<a class="dropdown-toggle" data-toggle="dropdown" href="#">
						<i class="fa fa-bell fa-lg"></i>
						<span class="notification-label bounceIn animation-delay6">1</span>
					</a>
					<ul class="dropdown-menu notification dropdown-3">
						<li><a href="#">Anuncios</a></li>					  
						<li>
							<a href="#">
								<span class="notification-icon bg-success">
									<i class="fa fa-plus"></i>
								</span>
								<span class="m-left-xs">Inauguracion 1/09/2017.</span>
								<span class="time text-muted">.</span>
							</a>
						</li>
						<li><a href="#">Ver todos los anuncios</a></li>					  
					</ul>
				</li>
				<li class="profile dropdown">
					<a class="dropdown-toggle" data-toggle="dropdown" href="#">
						<strong><?php
						$email = strtoupper($email);
						$email = explode("@",$email);
						$email = explode(".",$email[0]);
						echo ''.$email[0].'';
						?></strong>
						<span><i class="fa fa-chevron-down"></i></span>
					</a>
					<ul class="dropdown-menu">
						<li>
							<a class="clearfix" href="#">
								<img src="../img/user5.jpg" alt="User Avatar">
								<div class="detail">
									<strong><?php
include'head.php';
?>
<?php
						$email = strtoupper($email);
						$email = explode("@",$email);
						$email = explode(".",$email[0]);
						echo ''.$email[0].'';
						?></strong>
									<p class="grey"><?php echo $type;?></p> 
								</div>
							</a>
						</li>
						<li><a tabindex="-1" href="#" class="main-link"><i class="fa fa-edit fa-lg"></i> Perfil</a></li>
						<li><a tabindex="-1" href="#" class="main-link"><i class="fa fa-eye fa-lg"></i> <?php echo $ip;?></a></li> 
						<li><a tabindex="-1" href="#" class="main-link"><i class="fa fa-credit-card fa-lg"></i> <?php echo $credits;?> Creditos</a></li>
						<?php if($admin==1){ ?><li><a tabindex="-1" href="../adminpanel" class="theme-setting"><i class="fa fa-cogs fa-lg"></i> Admin Panel</a></li><?php } ?>
						<?php if($admin==2 or $admin==1){ ?><li><a tabindex="-1" href="../panelvip" class="theme-setting"><i class="fa fa-cogs fa-lg"></i> Panel VIP</a></li><?php } ?>
						<?php if($admin==4 or $admin==1){ ?><li><a tabindex="-1" href="../donador" class="theme-setting"><i class="fa fa-cogs fa-lg"></i> Panel Donador</a></li><?php } ?>
						<?php if($admin==3 or $admin==1){ ?><li><a tabindex="-1" href="../resellers" class="theme-setting"><i class="fa fa-cogs fa-lg"></i> Panel Vendedor</a></li><?php } ?>
						<li><a tabindex="-1" href="#" class="theme-setting"><i class="fa fa-cog fa-lg"></i> Configuracion</a></li>
						<li class="divider"></li>
						<li><a tabindex="-1" class="main-link logoutConfirm_open" href="#logoutConfirm"><i class="fa fa-lock fa-lg"></i> Salir</a></li>
					</ul>
				</li>
			</ul>
		</div><!-- /top-nav-->
		
		<aside class="fixed skin-6">
			<div class="sidebar-inner scrollable-sidebar">
				<div class="size-toggle">
					<a class="btn btn-sm" id="sizeToggle">
						<span class="icon-bar"></span>
						<span class="icon-bar"></span>
						<span class="icon-bar"></span>
					</a>
					<a class="btn btn-sm pull-right logoutConfirm_open"  href="#logoutConfirm">
						<i class="fa fa-power-off"></i>
					</a>
				</div><!-- /size-toggle -->	
				<div class="user-block clearfix">
					<img src="../img/user5.jpg" alt="User Avatar">
					<div class="detail">
						<strong><?php
						include'../head.php';
						?><?php
						$email = strtoupper($email);
						$email = explode("@",$email);
						$email = explode(".",$email[0]);
						echo ''.$email[0].'';
						?></strong><span class="badge badge-danger m-left-xs bounceIn animation-delay4"><?php echo $type;?></span>
						<ul class="list-inline">
							<li><a href="../perfil/">Perfil</a></li>
							<li><a href="#" class="no-margin">Mensajes</a></li>
						</ul>
					</div>
				</div><!-- /user-block -->
				<div class="search-block">
					<div class="input-group">
						<span class="input-group-btn">
						</span>
					</div><!-- /input-group -->
				</div><!-- /search-block -->
				<div class="main-menu">
					<?php include('../menu.php'); ?>
					<div class="alert alert-info">
						Bienvenidos a CloudChecker
					</div>
				</div><!-- /main-menu -->
			</div><!-- /sidebar-inner -->
		</aside>

		<div id="main-container">
			<div id="breadcrumb">
				<ul class="breadcrumb">
					 <li><i class="fa fa-home"></i><a href="../"> Escritorio</a></li>
					 <li class="active">Generador de Tarjetas</li>	 
				</ul>
			</div><!-- /breadcrumb-->
			<div class="main-header clearfix">
				<div class="page-title">
					<h3 class="no-margin">Generador de Tarjetas</h3>
				</div><!-- /page-title -->
				
				<ul class="page-stats">
			    	<li>
			    		<div class="value">
			    			<span>Creditos</span>
			    			<h4><?php echo $credits;?> <i class="fa fa-money"></i></h4>
			    		</div>
						<span id="visits" class="sparkline"></span>
			    	</li>
			    	<li>
			    		<div class="value">
			    			<span>IP</span>
			    			<h4><strong><i class="fa fa-sitemap"></i> <?php echo $ip;?></strong></h4>
			    		</div>
			    		<span id="balances" class="sparkline"></span>
			    	</li>
			    </ul><!-- /page-stats -->
			</div><!-- /.padding20 -->
			<div class="padding-md">
				<div class="row">
					<div class="col-sm-16">
						
						
						
						<div class="panel panel-default">
<div id="accordion">
<div>
 <p>
    <div class="panel-heading">
    <i class="icon-gift"></i>
    <span>Generador de Tarjetas</span>
</div>
<head>
    <script type="text/javascript" src="cloudbin/jquery-1.11.2.min.js"></script>
	<script type="text/javascript" src="cloudbin/namsoEngines.js"></script>
	<link rel="stylesheet" type="text/css" href="cloudbin/style.php">
	<link rel="stylesheet" type="text/css" href="cloudbin/icons.css"></head>
    <div class="panel-body">
    <div class="alert alert-info">
        <b>Nota: </b> Colocar solamente el BIN y dar generar. Automaticamente generara las tarjetas<i class="fa fa-heart"></i>
    </div>
    <br />
        <form name="console" id="console" class="form-horizontal" role="form" method="POST">
	<div class="p"><div class="Ilabel"><i class="fa fa-cloud"></i> Inserte su Bin</div><input type="text" class="input_text" id="ccpN" name="ccp" value="" style="width: 175px" placeholder="xxxx xxxx xxxx xxxx" maxlength="19"></div>
	<br>
	<select name="ccnsp" class="input_text" style="display:none;"><option selected="selected">Ninguno</option></select>
		    <label></label><br /><input type="checkbox" name="ccexpdat" checked></label>
		    <label><br /><input type="checkbox" name="ccvi" checked></label>
		    <label><br /><input type="checkbox" name="ccbank"></label>
	<br>
	<div class="p"><div class="Ilabel"><i class="fa fa-list-alt"></i> Cantidad a crear</div><input class="input_text" type="text" name="ccghm" style="width: 40px" maxlength="4" value="10"></div>
	<div class="p"><div class="Ilabel"><i class="fa fa-file-o"></i> Formato</div>
		<select name="ccoudatfmt" class="input_text">
			<option value="CHECKER" selected="selected">CHECKER</option>
			<option value="CSV">CSV</option>
			<option value="XML">XML</option>
			<option value="JSON">JSON</option>
		</select>
	</div>
	<br>
	<div class="p"><div class="Ilabel"><i class="fa fa-caret-right"></i> CCV2</div><input type="text" id="eccv" maxlength="4" style="width: 40px" value="rnd" class="input_text" name="eccv"></div>
	<div class="p"><div class="Ilabel"><i class="fa fa-caret-right"></i> Mes</div>
		<select name="emeses" class="input_text">
		<option value="rnd">Rnd</option>
		<option value="01">01</option><option value="02">02</option><option value="03">03</option><option value="04">04</option><option value="05">05</option><option value="06">06</option><option value="07">07</option><option value="08">08</option><option value="09">09</option><option value="10">10</option><option value="11">11</option><option value="12">12</option>		</select>
	</div>
	<div class="p"><div class="Ilabel"><i class="fa fa-caret-right"></i> Año</div>
		<select name="eyear" class="input_text">
			<option value="rnd">Rnd</option>
			<option value="2016">16</option><option value="2017">17</option><option value="2018">18</option><option value="2019">19</option><option value="2020">20</option><option value="2021">21</option><option value="2022">22</option><option value="2023">23</option><option value="2024">24</option><option value="2025">25</option>		</select>
	</div>
	<input type="hidden" name="tr" value="1000">
	<input type="hidden" name="L" style="width: 20px" value="1L">
	<br><br>
	<a class="Lbutton" name="generar" id="generar"><i class="fa fa-code"></i> Generar Tarjetas</a>
	<br><br>
	<center><div class="eighty">
		<div><div class="clean" id="cleanText"></div></div>
		<textarea class="textarea" name="output2" id="output2" rows="15" readonly=""></textarea>
	</div></center>
	<br>
</form>
        </div>
    </form> 
    </div>

</div>
</div>
</div>
</div>
</div><!-- /panel -->
		</div><!-- /main-container -->
	</div><!-- /wrapper -->
<!-- ABAJITO -->
<div class="modal-footer">
			<div class="grey-container shortcut-wrapper">
				<a href="#" class="shortcut-link">
					<span class="shortcut-icon">
						<i class="fa fa-users"></i>
					</span>
					<span class="text">Vendedores</span>
				</a>
				<a href="#" class="shortcut-link">
					<span class="shortcut-icon">
						<i class="fa fa-user"></i>
					</span>
					<span class="text">Administradores</span>
				</a>
				<a href="#" class="shortcut-link">
					<span class="shortcut-icon">
						<i class="fa fa-bug"></i>
					</span>
					<span class="text">Errores</span>
				</a>
			</div><!-- /grey-container -->
</div>
<!-- FIN -->
	<a href="#" id="scroll-to-top" class="hidden-print"><i class="fa fa-chevron-up"></i></a>
	
	<!-- Logout confirmation -->
	<div class="custom-popup width-100" id="logoutConfirm">
		<div class="padding-md">
			<h4 class="m-top-none"> Esta Seguro Que Desea Salir?</h4>
		</div>

		<div class="text-center">
			<a class="btn btn-success m-right-sm" href="/account/logout">Salir</a>
			<a class="btn btn-danger logoutConfirm_close">Cancelar</a>
		</div>
	</div>
	
    <!-- Le javascript
    ================================================== -->
    <!-- Placed at the end of the document so the pages load faster -->
	
	<!-- Jquery -->
	<script src="../js/jquery-1.10.2.min.js"></script>
	
	<!-- Bootstrap -->
    <script src="../bootstrap/js/bootstrap.min.js"></script>
   
	<!-- Modernizr -->
	<script src='../js/modernizr.min.js'></script>
   
    <!-- Pace -->
	<script src='../js/pace.min.js'></script>
    
	<!-- Popup Overlay -->
	<script src='../js/jquery.popupoverlay.min.js'></script>
	
    <!-- Slimscroll -->
	<script src='../js/jquery.slimscroll.min.js'></script>
   
	<!-- Cookie -->
	<script src='../js/jquery.cookie.min.js'></script>

	<!-- Perfect -->
	<script src="../js/app/app.js"></script>
	
	<script>
		$(function()	{
			$('#invoicePrint').click(function()	{
				window.print();
			});
		});
	</script>
	
  </body>

<!-- Mirrored from endlesstheme.com/Perfect_Admin/invoice.html by HTTrack Website Copier/3.x [XR&CO'2014], Sat, 26 Aug 2017 08:30:30 GMT -->
</html>