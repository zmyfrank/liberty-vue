<template>
    <div class="search-wrapper clearfix">
        <el-row>
            <el-col :xs="24" :sm="8" :md="8" class="item">
               <span>初始时间</span>
                <el-date-picker v-model="value6" type="date" placeholder="选择日期范围" size="small"></el-date-picker>
            </el-col>
            <el-col :xs="24" :sm="8" :md="8" class="item">
                <span>初始时间</span>
                <el-date-picker v-model="value6" type="date" placeholder="选择日期范围" size="small"></el-date-picker>
            </el-col>
            <el-col :xs="24" :sm="8" :md="8" class="item">
                <span>初始时间</span>
                <el-date-picker v-model="value6" type="date" placeholder="选择日期范围" size="small"></el-date-picker>
            </el-col>
        </el-row>
    </div>
</template>

<script>
  export default {
    data () {
      return {
        value6: ''
      }
    }
  }
</script>

<style lang="scss" rel="stylesheet/scss" scoped>
.item{
    margin-bottom:10px;
    text-align:left;;
    span{
        font-size:14px;
        font-weight:700;
        color: blue;
        margin-right:5px;
    }
    .search-wrapper{
        border:1px solid #e8e8e8;
    }
}
</style>