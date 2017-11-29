
var nav=Vue.component("nav1",{
    template:`
             <div class="nav">
              <router-link :to="item.url" v-for="(item,key) in menuData" :key="key" exact>{{item.title}}</router-link>  
            <router-link to="/login" v-if="!islogin">登录</router-link>
           <span v-if="islogin" class="info" @click="show">
           {{name}}
                <span  class="logout" v-show="isshow" @click="logout">退出</span>
           </span>           
             </div>
    `,
    data(){
        return{
            menuData:[
                {title:"首页",url:"/"},
                {title:"公司简介",url:"/jianjie"},
                {title:"文档说明",url:"/shuoming"},
            ],
            islogin:false,
             name:"",
            isshow:false
        }
    },
    created(){
        this.name=this.get("login","name");
        this.islogin=this.get("login","name");
    },
    methods:{
        show(){
            this.isshow=!this.isshow
        },
        logout(){
            this.del("login");
            router.push("/")
        }
    }
})


