import { defineStore } from 'pinia'
import axios  from 'axios'

// useStore 可以是 useUser、useCart 之类的任何东西
// 第一个参数是应用程序中 store 的唯一 id
export const useMenuStore = defineStore('menuStore', {
  // other options...
  state: ()=> {
        return ({
          menuList:{} as any,
          testList: [] as any,
          created_by:'',
          menuname:''
        })

  },
  getters:{
    getMenuList (state){
      console.log('state.menuList')
      console.log(state.menuList)
        return  state.menuList
    }
  },
  actions: {
      getMenu(url: string){
            console.log("进入请求")
            axios.get(url).then(res=>{
                // 请求正常返回 ,自定义返回码
                if(res.status===200 && res.data.code===0){
                  // console.log(res.data.menuList[0])
                  // console.log((res.data.menuList[0].created_By))
                  this.menuList.menuList=(res.data.menuList[0])

                }
                // console.log(res)
            })
        }
  }
})
export default useMenuStore