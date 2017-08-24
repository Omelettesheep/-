<template>
  <div id="myheader" class="mod-myheader">
        <div class="container">
            <img src="../../../static/logo.png" class="pull-left" style="max-width:80px"/>
            <h1 class="pull-left">{{appHeaderData.appName}}</h1>
            <ul class="pull-right breadcrumb">
                <li>版本:{{appHeaderData.appVersion}}</li>    
                <li>大小:{{appHeaderData.appSize}}</li>
                <li>{{appHeaderData.appTime}}</li> 
            </ul>
        </div>
  </div>
</template>
<script>
export default {
    props:{
        appHeaderData:{
            type:Object,
            default:function() {
                const options = {
                    appName:'易车bug',
                    appVersion:'bug1.0',
                    appSize:'1M',
                    appTime:'2015-08-23'
                }
                return options;
            }
        }
    }
}
</script>

<style scoped>
    .mod-myheader{
        border-top:2px solid #eee;
        overflow: hidden;
        padding: 10px 0 6px;
		border-bottom: solid 1px #eee;
		border-top: 2px solid #eee;
        margin-bottom: 20px;
    }

    .mod-myheader .breadcrumb {
        top: 10px;
		padding-right: 0;
		background: none;
		position: relative;
    }

    .mod-myheader h1{
        color: #666;
		font-size: 22px;
		line-height: 35px;
		margin-top: 8px;
    }

    .mod-myheader img{
		margin-top: 12px;
		margin-right: 10px;
	}

    @media (max-width: 550px){
		.mod-myheader h1.pull-left {
		    margin-bottom: 0;
		}
		
	}

    @media (max-width: 550px)
	{
		.mod-myheader .pull-left, .mod-myheader ul.pull-right{
    	width: 100%;
    	text-align: center;
		}

		.mod-myheader .container img{
			display: none;
		}
	}
</style>


