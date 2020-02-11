<template>
  <v-container>
    <v-card v-for="item in productParams" :key="item.id">
      <v-card-title>{{item.title}}</v-card-title>
      <v-card-subtitle>
        <span>市场价: $ <del>{{item.market_price}}</del></span>
        <span class="red--text ml-3">销售价: ${{item.sell_price}}</span>
      </v-card-subtitle>
      <v-card-subtitle class="py-0">
        <p class="mb-0">购买数量：
           <number-input inline controls></number-input>
        </p>
      </v-card-subtitle>
    <v-card-actions class="pl-2">
      <v-btn class="primary">立即购买</v-btn>
      <v-btn class="error">加入购物车</v-btn>
    </v-card-actions>
    </v-card>
    <v-card class="mt-2" v-for="item in productParams" :key="item.id">
      <h2 class="body-1 pl-4">商品参数</h2>
      <v-card-subtitle>
        <p>商品货号：{{item.goods_no}}</p>
        <p>库存情况：{{item.stock_quantity}}</p>
        <p>上架时间：{{item.add_time | moment("YYYY/MM/DD/ h:mm:ss a")}}</p>
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
export default {
  name: 'SellPage',
  props: {
    productParams: {
      type: Array,
      default () {
        return []
      }
    }
  },
  data () {
    return {
      id: null
    }
  },
  created () {
    this.id = this.$route.params.id
  },
  methods: {
    toProductDesc () {
      this.$router.push('/home/productDesc/' + this.id)
    }
  }
}
</script>

<style scoped>

</style>
