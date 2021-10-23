<template>
  <div id="app">
    <h1 class="title" >品牌列表案例--- {{brandList.length}}</h1>

    <el-row :gutter="10">
      <el-col :span="7">
        <el-input placeholder="请输入品牌名" size="mini">
          <template #prepend>品牌名：</template>
        </el-input>
      </el-col>
      <el-col :span="4">
        <el-button type="primary" size="mini">添加</el-button>
      </el-col>
    </el-row>

    <el-table :data="brandList" style="width: 100%;margin-top: 10px" border size="mini">
      <el-table-column prop="id" label="id" width="180" />
      <el-table-column prop="name" label="Name" width="180" />
      <el-table-column prop="time" label="time" width="180"/>
      <el-table-column label="操作">
        <tempalte v-slot="scope">
          <el-button type="danger" size="mini">删除</el-button>
        </tempalte>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import { list } from './api/beandListApi'
import {ElMessage} from 'element-plus'
import {onMounted,ref} from 'vue'
export default {
  setup(){
    const brandList = ref([])
    const getBrandList= async ()=>{
      const {data: res} = await list()
      if(res.status !== 0 ){
        return ElMessage.error('获取列表失败！')
      }
      ElMessage.success('获取列表成功！')
      brandList.value = res.msg
    }
    onMounted(()=>{
      getBrandList()
    })
    return {
      brandList
    }
  }
}
</script>

<style>
 .title{
   font-size: 18px;
   text-align: center;
 }
</style>
