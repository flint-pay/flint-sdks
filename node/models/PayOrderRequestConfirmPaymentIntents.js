import { d8003 as c0 } from '../descriptors/data/348.js?sdk=4bd39e0afc590f9c2d1ce732a52fb628d9f934ea237d2b464d4157caa3c5129d';
import { d10009 as c1, d10013 as c2 } from '../descriptors/data/465.js?sdk=4bd39e0afc590f9c2d1ce732a52fb628d9f934ea237d2b464d4157caa3c5129d';
import { d1442 as c3 } from '../descriptors/data/72.js?sdk=4bd39e0afc590f9c2d1ce732a52fb628d9f934ea237d2b464d4157caa3c5129d';
import { d10102 as c4, d10104 as c5, d10105 as c8, d10106 as c9, d10107 as c10, d10108 as c11 } from '../descriptors/data/469.js?sdk=4bd39e0afc590f9c2d1ce732a52fb628d9f934ea237d2b464d4157caa3c5129d';
import { d10020 as c6, d10021 as c7, d10029 as c12, d10030 as c13, d10031 as c14, d10039 as c15, d10040 as c16 } from '../descriptors/data/466.js?sdk=4bd39e0afc590f9c2d1ce732a52fb628d9f934ea237d2b464d4157caa3c5129d';
import { d10041 as c17, d10042 as c18, d10043 as c19, d10044 as c20 } from '../descriptors/data/467.js?sdk=4bd39e0afc590f9c2d1ce732a52fb628d9f934ea237d2b464d4157caa3c5129d';
import { d10109 as c21, d10110 as c22, d10111 as c23, d10112 as c24 } from '../descriptors/data/470.js?sdk=4bd39e0afc590f9c2d1ce732a52fb628d9f934ea237d2b464d4157caa3c5129d';
import { d1442 as d1442 } from '../descriptors/data/72.js?sdk=4bd39e0afc590f9c2d1ce732a52fb628d9f934ea237d2b464d4157caa3c5129d';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1442;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["OrderGiftCardAllocationAcceptance"]:c1(),["OrderPaymentIntentSelection"]:c2(),["PayOrderRequestConfirmPaymentIntents"]:c3(),["PaymentSourceCredential"]:c4(),["ReaderPaymentSourceTip"]:c5(),["SharedCodec1957"]:c6(),["SharedCodec1958"]:c7(),["SharedCodec2276"]:c8(),["SharedCodec2277"]:c9(),["SharedCodec2278"]:c10(),["SharedCodec2279"]:c11(),["SharedCodec2299"]:c12(),["SharedCodec2300"]:c13(),["SharedCodec2301"]:c14(),["SharedCodec2309"]:c15(),["SharedCodec2310"]:c16(),["SharedCodec2311"]:c17(),["SharedCodec2312"]:c18(),["SharedCodec2313"]:c19(),["SharedCodec2314"]:c20(),["SharedCodec337"]:c21(),["SharedCodec339"]:c22(),["SharedCodec340"]:c23(),["SharedCodec341"]:c24()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makePayOrderRequestConfirmPaymentIntents(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
