

<template>
 <div class="contents">
        <div class="bg_box">
            <div class="content_img">
                <img src="../../static/i/jsbg_03.png"/>
            </div>
        </div>
        <div class="wen">
                    <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;安徽省博物馆成立于1956年11 月14日，是当时全国四大样板馆之一。2010年12月28日更名为安徽博物院。 </p>
                    <p>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1958年9月17日，毛泽东同志视察安徽省博物馆时发表了重要讲话：一个省的主要城市，都应该有这样的博物馆，
                        人民认识自己的历史和创造的力量是一件很要紧的事。周恩来、刘少奇、朱德、邓小平、李先念、叶剑英、
                        彭德怀、陈毅等老一辈党和国家领导人先后来馆视察，陈毅同志题写了馆名。跨入新世纪，2010年5月17日，
                        江泽民同志视察了安徽省博物馆并亲笔题词。安徽省博物馆也成为毛泽东主席唯一视察过的并就博物馆事业作出指示的博物馆，也是党的三代领导集体核心视察过的博物馆。
                    </p>
                </div>
                <div class="bg_box jsImg">
                    <div class="content_img">
                        <img src="../../static/i/abjst_06.png"/>
                    </div>
                </div>
                <div class="wen">
                    <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;建馆以来，安徽省博物馆以文物资源为基础，陈列展览为平台，文保科研为推力，宣教服务为保障，跻身国家一级博物馆行列，获评全国古籍重点保护单位，陈列展览大楼2007年被省政府纳入安徽省级文物保护单位，2013年入选第七批全国重点文物保护单位。 </p>
                    <p>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;安徽省博物馆现藏文物近22万件套，特色藏品包括商周青铜器、楚国货币、汉画像石、文房四宝、元代金银器、新安书画、徽州雕刻和古籍善本、徽州契约文书、潘玉良美术作品等类别。
                        在文物保护工作中创造的去除青铜器上的粉状锈的“局部电蚀法”，运用激光全息技术对青铜器和陶、瓷器进行无损探伤的“激光全息文物无损检测法”技术等曾在业内产生了很大影响，后者荣获文化部科技成果表扬奖和安徽省政府科技成果三等奖。
                        古旧字画装裱修复、青铜器修复、碑刻保护拓片等技术力量雄厚。1994年安徽省博物馆打破“通史”式陈列的旧体系，推出大型系列专题陈列《安徽古代文明陈列》，被全国文博 界誉为具有推广意义的“安徽模式”。2007年，独具地方特色的《徽州古建筑陈列》荣获第七届全国博物馆十大陈列展览精品奖。2002年开始，安徽省博物馆组织宣讲小分队，走进机关、院校、社区进行博物馆知识宣讲，引起很大反响。2008年3月免费开放以来，引进、主办、承办各类展览百余个，举办专题讲座和宣讲近百场，接待观众、听众逾200万人次。</p>
                    <p>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2001年，安徽省委省政府高瞻远瞩，决定保留老馆，规划新馆。2005年12月，以安徽省博物馆新馆为主的文化博物园区项目正式立项。2006年，省财政拨专款完成对老馆建筑的维修改造。2007年1月16日，安徽省博物馆新馆奠基，新馆建筑面积4.1万平方米，展览面积1万平方米，建筑造型体现了五方相连、四水归堂的徽派建筑独特风格。2011年9月29日建成开放。推出基本陈列《皖风徽韵——安徽历史文化陈列》，包括“安徽文明史陈列”以及“徽州古建筑”、“安徽文房四宝”、“新安画派”、“江淮撷珍”等专题。老馆同时对外开放，以《安徽古生物陈列》、《潘玉良美术作品陈列》、安徽近现代史以及建国以来安徽省经济文化建设成就展为主要内容。2013年，《皖风徽韵——安徽历史文化陈列》荣获第十届（2011-2012年度）全国博物馆十大陈列展览精品奖。</p>
                </div>
            </div>
</template>

<script>
import api from '../api.js'

export default {
	data () {
		return {

		}	
	},
	route: {
		
	},
	methods: {

	},ready () {
		//this.$route.router.app.title="最新展览";
		document.title = '关于安博';
		
	}
}
</script>

<style lang="stylus" scoped>

            a{text-decoration: none;color:#999;}
            .clearfix:after {content: '\20';display: block;clear: both;visibility: hidden;}
            .highlight-color{-webkit-tap-highlight-color:rgba(0,0,0,0);}
        /*公共样式结束*/
        .contents{width: 100%; padding-bottom: 1.4rem;}
        .contents .content_img{-webkit-box-align: center;-webkit-box-pack: center;display:-webkit-box;display:-moz-box;}
        .contents .content_img img{-webkit-box-flex: 1;width: 18.93rem;}
        .bg_box{background: #F9F9F9;}
        .jsImg{margin:1rem;}
        .jsImg .content_img img{width: 100%;}
        .wen{width:18.93rem; margin: 0 auto;}
        .wen p{margin-top:0.48rem;font-size: 0.74rem;color: #666666;line-height: 1.3rem; }
        .wen p:nth-child(1){margin-top:1.1rem;}
</style>


