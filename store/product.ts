export const useProduct = defineStore({
  id: 'Product',

  state() {
    return {
      PRODUCT_LIST:[] as Array<ProductModel>
    }
  },

  getters: {
    PRODUCT_LIST: state => {return state.PRODUCT_LIST;},
  },

  actions: {
    getProductList(prodList ?: Array<ProductModel>) {
      if(prodList) {
        this.PRODUCT_LIST = prodList.map(e => { 
          return new ProductFactory(
            e.prodId,
            e.name,
            e.srcSpec,
            e.brandSubName,
            e.imgs,
            e.priceLow,
            e.priceOrg,
            e.priceView,
            e.prodCnt,
            e.snCode,
            e.viewFlag,
            e.optList,
            e.heartFlag,
            e.detailSize,
            e.detailInfo,
            e.detailDesc,
            e.detailClean,
          )
        });
      } else {
          this.PRODUCT_LIST = [];
      }
    }
  }
})
