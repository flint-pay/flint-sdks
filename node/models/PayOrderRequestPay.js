import { d7885 as c0 } from '../descriptors/data/337.js?sdk=2fdad7cfcd1c92049468fb02e68ab24a81da669c248e8713cf6a7575952568a5';
import { d9865 as c1 } from '../descriptors/data/452.js?sdk=2fdad7cfcd1c92049468fb02e68ab24a81da669c248e8713cf6a7575952568a5';
import { d1441 as c2 } from '../descriptors/data/72.js?sdk=2fdad7cfcd1c92049468fb02e68ab24a81da669c248e8713cf6a7575952568a5';
import { d9958 as c3, d9959 as c4, d9960 as c7, d9961 as c11, d9962 as c12, d9963 as c13, d9964 as c14, d9965 as c24, d9966 as c25 } from '../descriptors/data/456.js?sdk=2fdad7cfcd1c92049468fb02e68ab24a81da669c248e8713cf6a7575952568a5';
import { d8227 as c5, d8226 as c6 } from '../descriptors/data/358.js?sdk=2fdad7cfcd1c92049468fb02e68ab24a81da669c248e8713cf6a7575952568a5';
import { d9876 as c8, d9877 as c9, d9885 as c15, d9886 as c16, d9887 as c17, d9888 as c18, d9889 as c19, d9890 as c20, d9891 as c21, d9892 as c22, d9893 as c23 } from '../descriptors/data/453.js?sdk=2fdad7cfcd1c92049468fb02e68ab24a81da669c248e8713cf6a7575952568a5';
import { d8994 as c10 } from '../descriptors/data/402.js?sdk=2fdad7cfcd1c92049468fb02e68ab24a81da669c248e8713cf6a7575952568a5';
import { d1441 as d1441 } from '../descriptors/data/72.js?sdk=2fdad7cfcd1c92049468fb02e68ab24a81da669c248e8713cf6a7575952568a5';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1441;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["OrderGiftCardAllocationAcceptance"]:c1(),["PayOrderRequestPay"]:c2(),["PaymentSourceCredential"]:c3(),["PaymentSplitRequest"]:c4(),["PlatformFeeMoney"]:c5(),["PlatformFeeRequest"]:c6(),["ReaderPaymentSourceTip"]:c7(),["SharedCodec1925"]:c8(),["SharedCodec1926"]:c9(),["SharedCodec216"]:c10(),["SharedCodec2250"]:c11(),["SharedCodec2251"]:c12(),["SharedCodec2252"]:c13(),["SharedCodec2253"]:c14(),["SharedCodec2273"]:c15(),["SharedCodec2274"]:c16(),["SharedCodec2275"]:c17(),["SharedCodec2276"]:c18(),["SharedCodec2277"]:c19(),["SharedCodec2278"]:c20(),["SharedCodec2279"]:c21(),["SharedCodec2280"]:c22(),["SharedCodec2281"]:c23(),["SharedCodec331"]:c24(),["SharedCodec333"]:c25()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makePayOrderRequestPay(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
