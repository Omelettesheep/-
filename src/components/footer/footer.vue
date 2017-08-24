<template>
  <div id="myfooter" class="mod-myfooter">
      <div class="container">
          <div class="row logo">
                <div class="col-lg-8  col-xs-12 col-md-6 col-sm-6 text-left">
                     <img src="../../../static/logo.png" />
            	</div>
				<div class="col-lg-4  col-xs-12 col-md-6 col-sm-6 text-right">
					<p>易车网大数据中心</p>
            	</div>
          </div>
      </div>

  </div>
</template>

<style scoped>
    .mod-myfooter{
        color: #777 !important;
	    font-size: 14px;
	    padding: 30px 0;
	    background: #f4f4f4;
	    border-top: solid 1px #e5e5e5;
    }

    .mod-myfooter .logo img{
        max-width: 80px;
    }

    .mod-myfooter p{
        padding-top: 10px;
    }

    @media screen and (max-width: 768px){
        .mod-myfooter .container .row div.col-md-6 {
            text-align: center;
            margin-bottom: 10px;
        }
	    
	}
</style>


