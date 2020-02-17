import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
let cart = JSON.parse(localStorage.getItem('cart') || '[]')
export default new Vuex.Store({
  state: {
    /*
    * 将购物车的商品数据，用一个数组存储起来， 在cart数组中，
    * 存储一些商品的对象。eg： {id: 商品的id， count： 要购买的数量， price： 商品的单价， selectedL： false}
    * */
    cart: cart
  },
  mutations: {
    // 点击加入购物车， 把商品信息， 保存到 store中的cart中
    // 分析
    // 1. 如果购物车中， 之前就已经有这个对应的商品了， 那么 只需要更新数量
    // 2. 如果没有， 则直接把 商品数据， push到cart中
    addCart (state, payload) {
      // 1. 查找之前数组中是否有该商品
      let oldProduct = state.cart.find(item => item.id === payload.id)
      // 判断oldproduct
      if (oldProduct) {
        oldProduct.count += 1
      } else {
        payload.count = 1
        state.cart.push(payload)
      }
      // 把 state里面的数据 存放到localStorage中，
      localStorage.setItem('cart', JSON.stringify(state.cart))
    },
    // 删除 cart里面的数据根据id
    removeItemFromCart (state, id) {
      state.cart.some((item, index) => {
        // eslint-disable-next-line eqeqeq
        if (item.id == id) {
          state.cart.splice(index, 1)
          console.log('1231231235235rsdfsdfsdfsf')
          return true
        }
      })
      // 将删除完毕后的， 最新的购物车数据， 同步到本地存储中
      localStorage.setItem('cart', JSON.stringify(state.cart))
    },
    // 更新 switch 按钮的更新
    updateGoodsSelected (state, payload) {
      state.cart.some(item => {
        // eslint-disable-next-line eqeqeq
        if (item.id == payload.id) {
          item.selected = payload.selected
        }
      })
      // 将switch 按钮改变以后， 最新的购物车数据， 同步到本地存储中
      localStorage.setItem('cart', JSON.stringify(state.cart))
    }
  },
  actions: {
  },
  getters: {
    // 获取购物车商品的数量
    getCartNum (state) {
      return state.cart.length
    },
    getAllCount (state) {
      let allCount = 0
      state.cart.forEach(item => {
        allCount += item.count
      })
      return allCount
    },
    // 获得每一个商品的数量
    getGoodsCount (state) {
      let count = {}
      state.cart.forEach(item => {
        count[item.id] = item.count
      })
      return count
    },
    getGoodsSelected (state) {
      let o = {}
      state.cart.forEach(item => {
        o[item.id] = item.selected
      })
      return o
    }
  },
  modules: {
  }
})
