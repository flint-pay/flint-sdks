import { d7885 as c0 } from '../descriptors/data/337.js?sdk=2fdad7cfcd1c92049468fb02e68ab24a81da669c248e8713cf6a7575952568a5';
import { d9865 as c1, d9869 as c2, d9872 as c5 } from '../descriptors/data/452.js?sdk=2fdad7cfcd1c92049468fb02e68ab24a81da669c248e8713cf6a7575952568a5';
import { d1439 as c3 } from '../descriptors/data/71.js?sdk=2fdad7cfcd1c92049468fb02e68ab24a81da669c248e8713cf6a7575952568a5';
import { d9958 as c4, d9959 as c6, d9960 as c9, d9961 as c13, d9962 as c14, d9963 as c15, d9964 as c16, d9965 as c38, d9966 as c39 } from '../descriptors/data/456.js?sdk=2fdad7cfcd1c92049468fb02e68ab24a81da669c248e8713cf6a7575952568a5';
import { d8227 as c7, d8226 as c8 } from '../descriptors/data/358.js?sdk=2fdad7cfcd1c92049468fb02e68ab24a81da669c248e8713cf6a7575952568a5';
import { d9876 as c10, d9877 as c11, d9884 as c17, d9885 as c18, d9886 as c19, d9887 as c20, d9888 as c21, d9889 as c22, d9890 as c23, d9891 as c24, d9892 as c25, d9893 as c26, d9894 as c27, d9895 as c28, d9896 as c29, d9897 as c30, d9898 as c31, d9899 as c32, d9900 as c33, d9901 as c34 } from '../descriptors/data/453.js?sdk=2fdad7cfcd1c92049468fb02e68ab24a81da669c248e8713cf6a7575952568a5';
import { d8994 as c12 } from '../descriptors/data/402.js?sdk=2fdad7cfcd1c92049468fb02e68ab24a81da669c248e8713cf6a7575952568a5';
import { d9902 as c35, d9903 as c36, d9904 as c37 } from '../descriptors/data/454.js?sdk=2fdad7cfcd1c92049468fb02e68ab24a81da669c248e8713cf6a7575952568a5';
import { d1439 as d1439 } from '../descriptors/data/71.js?sdk=2fdad7cfcd1c92049468fb02e68ab24a81da669c248e8713cf6a7575952568a5';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1439;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["OrderGiftCardAllocationAcceptance"]:c1(),["OrderPaymentIntentSelection"]:c2(),["PayOrderRequest"]:c3(),["PaymentSourceCredential"]:c4(),["PaymentSourceCredentialStripePaymentMethod"]:c5(),["PaymentSplitRequest"]:c6(),["PlatformFeeMoney"]:c7(),["PlatformFeeRequest"]:c8(),["ReaderPaymentSourceTip"]:c9(),["SharedCodec1925"]:c10(),["SharedCodec1926"]:c11(),["SharedCodec216"]:c12(),["SharedCodec2250"]:c13(),["SharedCodec2251"]:c14(),["SharedCodec2252"]:c15(),["SharedCodec2253"]:c16(),["SharedCodec2272"]:c17(),["SharedCodec2273"]:c18(),["SharedCodec2274"]:c19(),["SharedCodec2275"]:c20(),["SharedCodec2276"]:c21(),["SharedCodec2277"]:c22(),["SharedCodec2278"]:c23(),["SharedCodec2279"]:c24(),["SharedCodec2280"]:c25(),["SharedCodec2281"]:c26(),["SharedCodec2282"]:c27(),["SharedCodec2283"]:c28(),["SharedCodec2284"]:c29(),["SharedCodec2285"]:c30(),["SharedCodec2286"]:c31(),["SharedCodec2287"]:c32(),["SharedCodec2288"]:c33(),["SharedCodec2289"]:c34(),["SharedCodec2290"]:c35(),["SharedCodec2291"]:c36(),["SharedCodec2292"]:c37(),["SharedCodec331"]:c38(),["SharedCodec333"]:c39()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makePayOrderRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
