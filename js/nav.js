
Vue.component("custom-nav",{
    template:`
             <ul class="custom-nav">
                <li>
                    <router-link to="/" tag="li" exact>首页</router-link> 
                </li>
                <li v-for="item in menuData">
                   <router-link :to="item.title" tag="li" >{{item.title}}</router-link>    
                </li>       
                        
             </ul>
    `,
    data(){
        return{
            menuData:[
                {title:"js"},
                {title:"css"},
                {title:"php"},
            ]
        }
    }
})

