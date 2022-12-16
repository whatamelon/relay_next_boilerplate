interface ProductModel {
    prodId: Number;
    name: String;
    srcSpec: SrcSpec;
    brandSubName: String;
    imgs: Array<String>;
    priceLow: Number;
    priceOrg: Number;
    priceView: Number;
    prodCnt: Number;
    snCode: String;
    viewFlag: Boolean;
    optList: Array<Object>;
    heartFlag: Boolean;
    detailSize: String;
    detailInfo: Array<Object>;
    detailDesc: String;
    detailClean: Array<String>;
}
class ProductFactory {
    prodId: Number;
    name: String;
    srcSpec: SrcSpec;
    brandSubName: String;
    imgs: Array<String>;
    priceLow: Number;
    priceOrg: Number;
    priceView: Number;
    prodCnt: Number;
    snCode: String;
    viewFlag: Boolean;
    optList: Array<Object>;
    heartFlag: Boolean;
    detailSize: String;
    detailInfo: Array<Object>;
    detailDesc: String;
    detailClean: Array<String>;

    constructor(    
        prodId: Number,
        name: String,
        srcSpec: SrcSpec,
        brandSubName: String,
        imgs: Array<String>,
        priceLow: Number,
        priceOrg: Number,
        priceView: Number,
        prodCnt: Number,
        snCode: String,
        viewFlag: Boolean,
        optList: Array<Object>,
        heartFlag: Boolean,
        detailSize: String,
        detailInfo: Array<Object>,
        detailDesc: String,
        detailClean: Array<String>,
    ) {
        this.prodId = prodId;
        this.name = name;
        this.srcSpec = srcSpec;
        this.brandSubName = brandSubName;
        this.imgs = imgs;
        this.priceLow = priceLow;
        this.priceOrg = priceOrg;
        this.priceView = priceView;
        this.prodCnt = prodCnt;
        this.snCode = snCode;
        this.viewFlag = viewFlag;
        this.optList = optList;
        this.heartFlag = heartFlag;
        this.detailSize = detailSize;
        this.detailInfo = detailInfo;
        this.detailDesc = detailDesc;
        this.detailClean = detailClean;
    }
}
//   const product: ProductModel = new ProductFactory("Murphy", 1);