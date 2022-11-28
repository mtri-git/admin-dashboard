import api from "../constants/api";

const statisticService = {
    getInfo(){
        return api.get('/admin/statistic')
    },
    
    getSaleStatistic(data){
        return api.get(`/admin/sales/${data}`)
    },

    getBookStatistic(data){
        return api.get(`/admin/statistic/${data}`)
    },

    getUserStatistic(data){
        return api.get(`/admin/statistic/${data}`)
    },

    getPublisherStatistic(data){
        return api.get(`/admin/statistic/${data}`)
    },

}

export default statisticService