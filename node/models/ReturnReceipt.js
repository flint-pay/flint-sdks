import { d2164 as c0, d2166 as c1, d2241 as c2, d2242 as c3, d2176 as c4, d2243 as c5, d2177 as c6 } from '../descriptors/data.js?sdk=d22cce0575f7bd583ca524a14ee93e300c9f48000162d4e1926fedd9f4c37501';
import { d2241 } from '../descriptors/data.js?sdk=d22cce0575f7bd583ca524a14ee93e300c9f48000162d4e1926fedd9f4c37501';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2241;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["ReturnActor"]:c0(),["ReturnDisposition"]:c1(),["ReturnReceipt"]:c2(),["ReturnReceiptLineItem"]:c3(),["ReturnSourceSystem"]:c4(),["ReturnUnverifiedItem"]:c5(),["SharedCodec548"]:c6()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeReturnReceipt(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
