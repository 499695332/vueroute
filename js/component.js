var js=Vue.component("js",{
    template:"<div>js</div>",
})
var css=Vue.component("css",{
    template:"<div>css</div>",
})
var index=Vue.component("index",{
    template:"<div>index</div>",
})
var php=Vue.component("php",{
    template:`  <div>
              <div>php</div>
                <ul class="custom-nav">
                    <router-link to="/php" tag="li" exact>thinkphp</router-link> 
                    <router-link to="/mvc" tag="li">mvc</router-link> 
                    <router-link to="/smarty" tag="li">smarty</router-link>                
                </ul>
             <router-view class="center"></router-view>
             </div>
`,
})
var error=Vue.component("error",{
    template:"<div>页面找不到</div>",
})

var smarty=Vue.component("php",{
    template:"<div>smarty</div>"
})
var think=Vue.component("php",{
    template:"<div>thinkphp</div>"
})
var mvc=Vue.component("php",{
    template:"<div>mvc</div>"
})