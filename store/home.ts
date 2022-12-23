export const useHomeStore = defineStore('Home',{
  state() {
    return {
      HOME_DTO:{} as HomeModel
    }
  },

  getters: {
    HOME_DTO: state => {return state.HOME_DTO;},
  },

  actions: {
    setHomeData(homedata ?: HomeModel) {
      if(homedata) {
        console.log(homedata)
        this.HOME_DTO = new HomeFactory(
          homedata.tokenValid,
          homedata.cartCnt,
          homedata.topBanners,
          homedata.midBanners,
          homedata.eventList,
          homedata.reviewList,
          homedata.prodList,
          homedata.popup,
        );
      }
    }
  }
})
