import { d8003 as c0 } from '../descriptors/data/348.js?sdk=4bd39e0afc590f9c2d1ce732a52fb628d9f934ea237d2b464d4157caa3c5129d';
import { d10009 as c1, d10013 as c2, d10016 as c5 } from '../descriptors/data/465.js?sdk=4bd39e0afc590f9c2d1ce732a52fb628d9f934ea237d2b464d4157caa3c5129d';
import { d1441 as c3 } from '../descriptors/data/72.js?sdk=4bd39e0afc590f9c2d1ce732a52fb628d9f934ea237d2b464d4157caa3c5129d';
import { d10102 as c4, d10103 as c6, d10104 as c9, d10105 as c13, d10106 as c14, d10107 as c15, d10108 as c16 } from '../descriptors/data/469.js?sdk=4bd39e0afc590f9c2d1ce732a52fb628d9f934ea237d2b464d4157caa3c5129d';
import { d8352 as c7, d8351 as c8 } from '../descriptors/data/370.js?sdk=4bd39e0afc590f9c2d1ce732a52fb628d9f934ea237d2b464d4157caa3c5129d';
import { d10020 as c10, d10021 as c11, d10028 as c17, d10029 as c18, d10030 as c19, d10031 as c20, d10032 as c21, d10033 as c22, d10034 as c23, d10035 as c24, d10036 as c25, d10037 as c26, d10038 as c27, d10039 as c28, d10040 as c29 } from '../descriptors/data/466.js?sdk=4bd39e0afc590f9c2d1ce732a52fb628d9f934ea237d2b464d4157caa3c5129d';
import { d9122 as c12 } from '../descriptors/data/414.js?sdk=4bd39e0afc590f9c2d1ce732a52fb628d9f934ea237d2b464d4157caa3c5129d';
import { d10041 as c30, d10042 as c31, d10043 as c32, d10044 as c33, d10045 as c34, d10046 as c35, d10047 as c36, d10048 as c37 } from '../descriptors/data/467.js?sdk=4bd39e0afc590f9c2d1ce732a52fb628d9f934ea237d2b464d4157caa3c5129d';
import { d10109 as c38, d10110 as c39, d10111 as c40, d10112 as c41 } from '../descriptors/data/470.js?sdk=4bd39e0afc590f9c2d1ce732a52fb628d9f934ea237d2b464d4157caa3c5129d';
import { d1441 as d1441 } from '../descriptors/data/72.js?sdk=4bd39e0afc590f9c2d1ce732a52fb628d9f934ea237d2b464d4157caa3c5129d';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1441;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["OrderGiftCardAllocationAcceptance"]:c1(),["OrderPaymentIntentSelection"]:c2(),["PayOrderRequest"]:c3(),["PaymentSourceCredential"]:c4(),["PaymentSourceCredentialStripePaymentMethod"]:c5(),["PaymentSplitRequest"]:c6(),["PlatformFeeMoney"]:c7(),["PlatformFeeRequest"]:c8(),["ReaderPaymentSourceTip"]:c9(),["SharedCodec1957"]:c10(),["SharedCodec1958"]:c11(),["SharedCodec219"]:c12(),["SharedCodec2276"]:c13(),["SharedCodec2277"]:c14(),["SharedCodec2278"]:c15(),["SharedCodec2279"]:c16(),["SharedCodec2298"]:c17(),["SharedCodec2299"]:c18(),["SharedCodec2300"]:c19(),["SharedCodec2301"]:c20(),["SharedCodec2302"]:c21(),["SharedCodec2303"]:c22(),["SharedCodec2304"]:c23(),["SharedCodec2305"]:c24(),["SharedCodec2306"]:c25(),["SharedCodec2307"]:c26(),["SharedCodec2308"]:c27(),["SharedCodec2309"]:c28(),["SharedCodec2310"]:c29(),["SharedCodec2311"]:c30(),["SharedCodec2312"]:c31(),["SharedCodec2313"]:c32(),["SharedCodec2314"]:c33(),["SharedCodec2315"]:c34(),["SharedCodec2316"]:c35(),["SharedCodec2317"]:c36(),["SharedCodec2318"]:c37(),["SharedCodec337"]:c38(),["SharedCodec339"]:c39(),["SharedCodec340"]:c40(),["SharedCodec341"]:c41()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makePayOrderRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
