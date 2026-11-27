import { d8003 as c0 } from '../descriptors/data/348.js?sdk=4bd39e0afc590f9c2d1ce732a52fb628d9f934ea237d2b464d4157caa3c5129d';
import { d10009 as c1 } from '../descriptors/data/465.js?sdk=4bd39e0afc590f9c2d1ce732a52fb628d9f934ea237d2b464d4157caa3c5129d';
import { d1443 as c2 } from '../descriptors/data/72.js?sdk=4bd39e0afc590f9c2d1ce732a52fb628d9f934ea237d2b464d4157caa3c5129d';
import { d10102 as c3, d10103 as c4, d10104 as c7, d10105 as c11, d10106 as c12, d10107 as c13, d10108 as c14 } from '../descriptors/data/469.js?sdk=4bd39e0afc590f9c2d1ce732a52fb628d9f934ea237d2b464d4157caa3c5129d';
import { d8352 as c5, d8351 as c6 } from '../descriptors/data/370.js?sdk=4bd39e0afc590f9c2d1ce732a52fb628d9f934ea237d2b464d4157caa3c5129d';
import { d10020 as c8, d10021 as c9, d10029 as c15, d10030 as c16, d10031 as c17, d10032 as c18, d10033 as c19, d10034 as c20, d10035 as c21, d10036 as c22, d10037 as c23 } from '../descriptors/data/466.js?sdk=4bd39e0afc590f9c2d1ce732a52fb628d9f934ea237d2b464d4157caa3c5129d';
import { d9122 as c10 } from '../descriptors/data/414.js?sdk=4bd39e0afc590f9c2d1ce732a52fb628d9f934ea237d2b464d4157caa3c5129d';
import { d10109 as c24, d10110 as c25, d10111 as c26, d10112 as c27 } from '../descriptors/data/470.js?sdk=4bd39e0afc590f9c2d1ce732a52fb628d9f934ea237d2b464d4157caa3c5129d';
import { d1443 as d1443 } from '../descriptors/data/72.js?sdk=4bd39e0afc590f9c2d1ce732a52fb628d9f934ea237d2b464d4157caa3c5129d';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1443;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["OrderGiftCardAllocationAcceptance"]:c1(),["PayOrderRequestPay"]:c2(),["PaymentSourceCredential"]:c3(),["PaymentSplitRequest"]:c4(),["PlatformFeeMoney"]:c5(),["PlatformFeeRequest"]:c6(),["ReaderPaymentSourceTip"]:c7(),["SharedCodec1957"]:c8(),["SharedCodec1958"]:c9(),["SharedCodec219"]:c10(),["SharedCodec2276"]:c11(),["SharedCodec2277"]:c12(),["SharedCodec2278"]:c13(),["SharedCodec2279"]:c14(),["SharedCodec2299"]:c15(),["SharedCodec2300"]:c16(),["SharedCodec2301"]:c17(),["SharedCodec2302"]:c18(),["SharedCodec2303"]:c19(),["SharedCodec2304"]:c20(),["SharedCodec2305"]:c21(),["SharedCodec2306"]:c22(),["SharedCodec2307"]:c23(),["SharedCodec337"]:c24(),["SharedCodec339"]:c25(),["SharedCodec340"]:c26(),["SharedCodec341"]:c27()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makePayOrderRequestPay(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
