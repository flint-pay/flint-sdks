import { d10102 as c0, d10104 as c1, d10105 as c2, d10106 as c3, d10107 as c4, d10108 as c5 } from '../descriptors/data/469.js?sdk=4bd39e0afc590f9c2d1ce732a52fb628d9f934ea237d2b464d4157caa3c5129d';
import { d10102 as d10102 } from '../descriptors/data/469.js?sdk=4bd39e0afc590f9c2d1ce732a52fb628d9f934ea237d2b464d4157caa3c5129d';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d10102;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["PaymentSourceCredential"]:c0(),["ReaderPaymentSourceTip"]:c1(),["SharedCodec2276"]:c2(),["SharedCodec2277"]:c3(),["SharedCodec2278"]:c4(),["SharedCodec2279"]:c5()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makePaymentSourceCredential(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
