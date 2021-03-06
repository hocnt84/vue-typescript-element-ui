import axios from 'axios';
import { CallResult } from "@/business-model/CallResult";

export default class PlatformService {
  search(params1, params2) {
    return axios.post('platform/getPage', params1);
  }
  summary(params) {
    return axios.post('platform/summary', params);
  }
  detail(id) {
    return axios.post(`platform/getPlatformDetail`,id,{
      headers:{'Content-Type':'application/json;charset=UTF-8'}
    });
  }
  del(id) {
    return axios.post(`platform/delete`,id,{
      headers:{'Content-Type':'application/json;charset=UTF-8'}
    });

  }
  saveModel(params) {
    return axios.post(`platform/saveModel`,params);

  }
  searchName(params) {
    return axios.get('tenant/search-by-name', {params});
  }
  searchModule(params) {
    return axios.get('resource/module/search', {params: params});
  }
  getFunList(params1, params2) {
    return axios.post('resource-set/search', params1, {params: params2});
  }

  edit(id, params) {
    return axios.put(`contract/${id}/edit`, params);
  }
  tenantFuzzy(params){
    return axios.get(`tenant/search-by-name`,{params:params});
  }

  addPlatformTenant(params) {
    return axios.post('platform/savePlatformTenant', params);
  }
  addPlatformServicePackage(params) {
    return axios.post('platform/savePlatformServicePackage', params);
  }
  delTenant(id) {
    return axios.post('platform/deletePlatformTenant',id,{
      headers:{'Content-Type':'application/json;charset=UTF-8'}
    })
  }
  delServicePackage(id) {
    return axios.post('platform/deletePlatformServicePackage',id,{
      headers:{'Content-Type':'application/json;charset=UTF-8'}
    })
  }

};
