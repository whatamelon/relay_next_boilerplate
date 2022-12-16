const MasterKeys = {
  kolon:{
    brandName:'kolon',
    development: {
      apiEndPoint: 'https://rdev.the-relay.kr',
      host: 'http://192.168.0.69:8090'
    },
    staging: {
      apiEndPoint: 'https://rdev.the-relay.kr',
      host: 'http://15.164.213.231'
    },
    production: {
      apiEndPoint: 'https://rfap.the-relay.kr',
      host: 'https://orm.the-relay.kr'
    }
  },
  nsr:{
    brandName:'nsr',
    development: {
      apiEndPoint: 'https://rdev.the-relay.kr',
      host: 'http://192.168.0.69:8090'
    },
    production: {
      apiEndPoint: 'https://rfap.the-relay.kr',
      host: 'https://nsr.the-relay.kr'
    }
  },
  frfr:{
    brandName:'greenforet',
    development: {
      apiEndPoint: 'https://rdev.the-relay.kr',
      host: 'http://192.168.0.69:8090'
    },
    production: {
      apiEndPoint: 'https://rfap.the-relay.kr',
      host: 'https://greenforet.the-relay.kr'
    }
  },
};
  
  export { MasterKeys };