interface HomeModel {
    tokenValid: Boolean;
    cartCnt: Number;
    topBanners: Array<BannerModel>;
    midBanners: Array<BannerModel>;
    eventList: Array<EventModel>;
    reviewList: Array<ReviewModel>;
    prodList: Array<ProductModel>;
    popup: BannerModel;
}
class HomeFactory {
    tokenValid: Boolean;
    cartCnt: Number;
    topBanners: Array<BannerModel>;
    midBanners: Array<BannerModel>;
    eventList: Array<EventModel>;
    reviewList: Array<ReviewModel>;
    prodList: Array<ProductModel>;
    popup: BannerModel;

    constructor(    
        tokenValid: Boolean,
        cartCnt: Number,
        topBanners: Array<BannerModel>,
        midBanners: Array<BannerModel>,
        eventList: Array<EventModel>,
        reviewList: Array<ReviewModel>,
        prodList: Array<ProductModel>,
        popup: BannerModel,
    ) {
        this.tokenValid = tokenValid;
        this.cartCnt = cartCnt;
        this.topBanners = topBanners;
        this.midBanners = midBanners;
        this.eventList = eventList;
        this.reviewList = reviewList;
        this.prodList = prodList;
        this.popup = popup;
    }
}


interface BannerModel {
    hbId: Number;
    hbClass: String;
    hbData: String;
    titleTxt: String;
    titleColor: String;
    bodyTxt: String;
    bodyColor: String;
    imgLink: String;
    imgLinkM: String;
}

interface EventModel {
    eventId: Number;
    eventClass: String;
    eventData: String;
    title: String;
    body: String;
    imgLink: String;
    imgLinkM: String;
    imgLinkTh: String;
    imgLinkThM: String;
}

interface ReviewModel {
    reviewId: Number;
    reviewType: String;
    userId: String;
    userName: String;
    starPoint: String;
    msg: String;
    imgs: String;
    reviewDate: String;
}