export const useHome = defineStore({
  id: 'Home',

  state() {
    return {
      HOME_DATA:{} as HomeModel
    }
  },

  getters: {
    HOME_DATA: state => {return state.HOME_DATA;},
  },

  actions: {
    getHomeData(homedata ?: HomeModel) {
      if(homedata) {
        this.HOME_DATA = new HomeFactory(
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
