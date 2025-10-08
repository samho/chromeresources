<script setup lang="ts">

  import useUserInfo from '@/stores/modules/UserInfo'
  const UserInfoStore = useUserInfo()

  import {onMounted} from 'vue'
  import { userRequest } from '@/apis/api/user'
  // 测试请求
  const GetUser = () => { 
    userRequest(
        {
            pageNum:1,
            pageSize:10
        }).then(res => { 
            console.log(res) 
    }).catch(err => { 
        console.log(err) 
    }) 
  }
  onMounted(() => {
    GetUser()
  })
</script>

<template>
  <div class="container">
    {{ UserInfoStore.UserInfo.name }}
    <el-button type="primary">Primary</el-button>
    <el-button type="success">Success</el-button>
    <el-button type="info">Info</el-button>
    <el-button type="warning">Warning</el-button>
    <el-button type="danger">Danger</el-button>
  </div>
</template>

<style scoped>
</style>
