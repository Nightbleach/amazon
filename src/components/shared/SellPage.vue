<template>
  <v-container>
    <v-card>
      <v-card-title>{{productParams.title}}</v-card-title>
      <v-card-subtitle>
        <span>市场价: $ <del>{{productParams.market_price}}</del></span>
        <span class="red--text ml-3">销售价: ${{productParams.sell_price}}</span>
      </v-card-subtitle>
      <v-card-subtitle class="py-0">
        <p class="mb-0">购买数量：
           <number-input  v-model="value" @change="countChanged" ref="num" center inline controls></number-input>
        </p>
      </v-card-subtitle>
    <v-card-actions class="pl-2">
      <v-btn class="primary">立即购买</v-btn>
      <v-btn class="error" @click="toShopCart">加入购物车</v-btn>
    </v-card-actions>
      <p>{{$store.state.cart.length}}</p>
      <p>{{$store.state.cart}}</p>
    </v-card>
    <v-card class="mt-2">
      <h2 class="body-1 pl-4">商品参数</h2>
      <h3>{{getCartNum}}</h3>
      <v-card-subtitle>
        <p>商品货号：{{productParams.goods_no}}</p>
        <p>库存情况：{{productParams.stock_quantity}}</p>
        <p>上架时间：{{productParams.add_time | moment("YYYY/MM/DD/ h:mm:ss a")}}</p>
      </v-card-subtitle>
    </v-card>
    <v-row>
     <v-col cols="12">
       <v-btn color="blue"  outlined block @click="toProductDesc">图文介绍</v-btn>
     </v-col>
      <v-col cols="12">
        <v-btn color="pink" outlined block>商品详情</v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'SellPage',
  props: {
    productParams: {
      type: Object,
      default () {
        return {}
      }
    }
  },
  computed: {
    ...mapGetters(['getCartNum'])
  },
  data () {
    return {
      id: null,
      selectedCount: 1,
      value: 1
    }
  },
  created () {
    this.id = this.$route.params.id
  },
  methods: {
    countChanged () {
      console.log(this.value)
    },
    toProductDesc () {
      this.$router.push('/home/productDesc/' + this.id)
    },
    toShopCart () {
      // 拼接出一个， 要保存到store中的cart数组里面的 商品对象信息
      // {id: 商品的id， count： 要购买的数量， price： 商品的单价， selectedL： false}
      const cartInfo = {}
      cartInfo.id = this.id
      cartInfo.titel = this.productParams.title
      cartInfo.price = this.productParams.sell_price
      cartInfo.selected = true
      cartInfo.count = this.value
      // const cartInfo = {
      //   id: this.id,
      //   title: this.productParams.title,
      //   count: this.selectedCount,
      //   selected: true
      // }
      // 调用 store 中的 mutations 来将商品加入购物车
      this.$store.commit('addCart', cartInfo)
    }
  }
}
</script>

<style scoped>

</style>
