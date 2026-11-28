import { d232 as c0 } from '../descriptors/data/10.js?sdk=4bd39e0afc590f9c2d1ce732a52fb628d9f934ea237d2b464d4157caa3c5129d';
import { d10102 as c1, d10104 as c2, d10105 as c3, d10106 as c4, d10107 as c5, d10108 as c6 } from '../descriptors/data/469.js?sdk=4bd39e0afc590f9c2d1ce732a52fb628d9f934ea237d2b464d4157caa3c5129d';
import { d10237 as c7, d10238 as c8, d10241 as c9, d10243 as c10, d10244 as c12 } from '../descriptors/data/478.js?sdk=4bd39e0afc590f9c2d1ce732a52fb628d9f934ea237d2b464d4157caa3c5129d';
import { d10109 as c11, d10110 as c13, d10111 as c14, d10112 as c15 } from '../descriptors/data/470.js?sdk=4bd39e0afc590f9c2d1ce732a52fb628d9f934ea237d2b464d4157caa3c5129d';
import { d232 as d232 } from '../descriptors/data/10.js?sdk=4bd39e0afc590f9c2d1ce732a52fb628d9f934ea237d2b464d4157caa3c5129d';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d232;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["ConfirmPaymentIntentRequest"]:c0(),["PaymentSourceCredential"]:c1(),["ReaderPaymentSourceTip"]:c2(),["SharedCodec2276"]:c3(),["SharedCodec2277"]:c4(),["SharedCodec2278"]:c5(),["SharedCodec2279"]:c6(),["SharedCodec333"]:c7(),["SharedCodec334"]:c8(),["SharedCodec335"]:c9(),["SharedCodec336"]:c10(),["SharedCodec337"]:c11(),["SharedCodec338"]:c12(),["SharedCodec339"]:c13(),["SharedCodec340"]:c14(),["SharedCodec341"]:c15()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeConfirmPaymentIntentRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
