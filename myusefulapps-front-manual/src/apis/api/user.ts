import { GET } from '@/utils/http'
 
import type { UserRequest } from '@/apis/types/user.d'
 
// 测试使用
export  function userRequest(data: UserRequest) {
  return GET('/health', data); //测试接口
}