<template>
    <v-container fluid>
      <v-card v-for="(item, index) in cartList" :key="item.id" class="mb-3">
        <v-row no-gutters>
          <v-col cols="1" class="ml-2 mb-0" >
            <v-switch
              v-model="$store.getters.getGoodsSelected[item.id]"
              @change="selectedChanged(item.id, $store.getters.getGoodsSelected[item.id])"
              inset
              color="pink lighten-3"
            ></v-switch>
          </v-col>
          <v-col cols="2" class="ml-0">
            <cart-img :imgInfo="item" />
          </v-col>
          <v-col>
            <cart-params :cartText="item"/>
          </v-col>
          <v-col cols="2">
            <v-card-actions>
<!--      删除购物车数据  首先 用item.id是删除store里面cart的数据，用index是删除cartList里面的数据
-->
              <v-btn class="error" @click="del(item.id, index)">删除</v-btn>
            </v-card-actions>
          </v-col>
        </v-row>
      </v-card>
      <v-card>
        <v-card-title>总计(不含运费)</v-card-title>
        <v-card-subtitle>已勾选商品{{getAllSelectedGoods}}件, 总价：{{getSumPrice}}</v-card-subtitle>
      </v-card>
    </v-container>
</template>

<script>
import CartParams from './cartComponents/CartParams'
import CartImg from './cartComponents/CartImg'
import { getCartDetails } from '../../request/cart'

export default {
  name: 'Cart',
  components: {
    CartImg,
    CartParams
  },
  data () {
    return {
      cartList: [],
      switch1: true
    }
  },
  computed: {
    getAllSelectedGoods () {
      return this.$store.state.cart.filter(item => item.selected).length
    },
    getSumPrice () {
      return '$' + this.$store.state.cart.filter(item => {
        return item.selected
      }).reduce((preValue, item) => {
        return preValue + item.price * item.count
      }, 0)
    }
  },
  created () {
    this.getCartDetails()
  },
  methods: {
    selectedChanged (id, val) {
      // console.log(id + '------' + val)
      this.$store.commit('updateGoodsSelected', { id, selected: val })
    },
    getCartDetails () {
      let ids = []
      this.$store.state.cart.forEach(item => ids.push(item.id))
      if (ids.length <= 0) {
        return
      }
      getCartDetails(ids).then(res => {
        this.cartList.push(...res.message)
        console.log(res)
      })
    },
    del (id, index) {
      // 点击删除， 把商品从 store中根据 传递的ID 删除，
      // 同时把当前组件中的cartList中，对应要删除的那个商品，使用index来删除
      this.cartList.splice(index, 1)
      this.$store.commit('removeItemFromCart', id)
    }
  }
}
</script>

<style scoped>

</style>
