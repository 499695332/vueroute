var index=Vue.component("index",{
    template:`<div class="shouye">
               <nav1></nav1>
               <div class="scon">
               <img src="http://www.sxuek.com/statics/images/uek/new_logo.png" alt="">
              </div>
               </div>`,
})
var jianjie=Vue.component("jianjie",{
    template:`
    <div class="info">
    <nav1></nav1>
     <transition name="opacity" mode="out-in">
      <router-view style="text-align: center">   </router-view>
      </transition>
    </div>
    `
})
var list=Vue.component("list",{
    template:`<div>
          	<ul class="mui-table-view" style="padding-top:44px;position: absolute;width:100%">
	    <li class="mui-table-view-cell mui-media">
	        <router-link to="jianjie/list/1">
	            <img class="mui-media-object mui-pull-right" src="http://placehold.it/40x30">
	            <div class="mui-media-body">
	                幸福
	                <p class="mui-ellipsis">能和心爱的人一起睡觉，是件幸福的事情；可是，打呼噜怎么办？</p>
	            </div>
	        </router-link>
	    </li>
	    <li class="mui-table-view-cell mui-media">
	       <router-link to="jianjie/list/2">
	            <img class="mui-media-object mui-pull-right" src="http://placehold.it/40x30">
	            <div class="mui-media-body">
	                木屋
	                <p class="mui-ellipsis">想要这样一间小木屋，夏天挫冰吃瓜，冬天围炉取暖.</p>
	            </div>
	        </router-link>
	    </li>
	    <li class="mui-table-view-cell mui-media">
	     <router-link to="jianjie/list/3">
	            <img class="mui-media-object mui-pull-right" src="http://placehold.it/40x30">
	            <div class="mui-media-body">
	                CBD
	                <p class="mui-ellipsis">烤炉模式的城，到黄昏，如同打翻的调色盘一般.</p>
	            </div>
	       </router-link>
	    </li>
	</ul>
               </div>`,
})
var infocon=Vue.component("con",{
    template:`
     <div class="coccc" style="padding-top:44px">
        {{this.$route.params.id}}   
     </div>
    `
})




var shuoming=Vue.component("shuoming",{
    template:`<div style="position: absolute;left:0;top:0;width:100%">
               <nav1></nav1>
               <div class="Doc">
               <router-view name="left" class="left"></router-view>
               <router-view name="right" class="right"></router-view>
               </div>
              </div>`,
    beforeRouteEnter(to,from,next){

        next(function(vm){
            if(!vm.get("login","name")){
                router.push("/login");
            }
        })
    }
})
var left =Vue.component("left",{
    template:`

      <div>
                <ul> 
                    <li class="lcon"> 
                       <strong>vue安装</strong>
                    
                        <ul class="son"> 
                          <li> 
                              <router-link to="#one" tag="li">npm 安装</router-link>
                          </li>
                           <li> 
                           <router-link to="#two" tag="li"> script 安装</router-link>
                             
                          </li>
                        </ul>
                    </li>
                    
                      <li class="lcon"> 
                       <strong>vue路由</strong>
                    
                        <ul class="son"> 
                        
                         <router-link to="#three" tag="li">  vue路由的钩子函数</router-link>
                          <router-link to="#four" tag="li">vue路由的配置项</router-link>
                        
                         
                        </ul>
                    </li>
                </ul>
      
       </div>
    `,
    watch:{
        $route(){
            var hash=this.$route.hash.slice(1);
            var vm = this;
            function animate () {
                if (TWEEN.update()) {
                    requestAnimationFrame(animate)
                }
            }
            new TWEEN.Tween({ tweeningNumber:document.querySelector(".right").scrollTop })
                .easing(TWEEN.Easing.Quadratic.Out)
                .to({ tweeningNumber: (document.querySelector("#"+hash).offsetTop)-44 }, 500)
                .onUpdate(function () {
                    document.querySelector(".right").scrollTop= this.tweeningNumber.toFixed(0)
                })
                .start()
            animate()

        }
    }
})
var right =Vue.component("right",{
    template:`

      <div>
      
         <div class="floor" id="one">
         
            npm 安装<br>
            
            npm install vue
         </div>
         
         <div class="floor" id="two">
         
            script 安装<br>
            
            &lt;script src='' &gt;   &lt;/script&gt; 
         </div>
         
          <div class="floor" id="three">
         
           <h3>钩子函数</h3> <br>
             
             1. 全局使用<br>
             router.beforeEach()<br>
             router.afterEach()<br>
             2. 路由里面使用<br>
             this.$route.afterRouter()<br>
             this.$route.beforeEnter()<br>
             4.在组件里面使用<br>
                this.$route.beforeRouteEnter
                this.$route.beforeRouteUpdate (2.2 新增)
                this.$route.beforeRouteLeave
    
         </div>
         
          <div class="floor" id="four">
            <h3>
            路由配置项
           </h3>
            <pre>
            declare type RouteConfig = {
  path: string;
  component?: Component;
  name?: string; // 命名路由
  components?: { [name: string]: Component }; // 命名视图组件
  redirect?: string | Location | Function;
  props?: boolean | string | Function;
  alias?: string | Arraystring;
  children?: ArrayRouteConfig; // 嵌套路由
  beforeEnter?: (to: Route, from: Route, next: Function) => void;
  meta?: any;

  // 2.6.0+
  caseSensitive?: boolean; // 匹配规则是否大小写敏感？(默认值：false)
  pathToRegexpOptions?: Object; // 编译正则的选项
}
           </pre>
          
           </div>
      
      </div>
    `
})
var Login=Vue.component("Login",{
    template:`
<div>
<header class="mui-bar mui-bar-nav">
     <a class="mui-icon mui-icon-undo" @click="back"></a>
			<h1 class="mui-title">登录</h1>
</header>
<div class="mui-content">
			<form id='login-form' class="mui-input-group">
				<div class="mui-input-row">
					<label>账号</label>
					<input id='name' type="text" class="mui-input-clear mui-input" placeholder="请输入账号">
				</div>
				<div class="mui-input-row">
					<label>密码</label>
					<input id='password' type="password" class="mui-input-clear mui-input" placeholder="请输入密码">
				</div>
			</form>
		
			<div class="mui-content-padded">
				<button id='login' class="mui-btn mui-btn-block mui-btn-primary" @click="submit">登录</button>
			
			</div>
			<div class="mui-content-padded oauth-area">
			</div>
		</div></div>`,
    methods:{
        back(){
            router.push("/");
        },
        submit(){

            var obj={"name":document.querySelector("#name").value}
            this.save("login",obj);
            router.push("/shuoming")
        }

    }


})