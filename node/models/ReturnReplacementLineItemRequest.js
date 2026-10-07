import { d77 as c0, d2257 as c1, d1976 as c2, d2252 as c3, d2251 as c4, d2254 as c5, d2253 as c6, d2255 as c7 } from '../descriptors/data.js?sdk=d22cce0575f7bd583ca524a14ee93e300c9f48000162d4e1926fedd9f4c37501';
import { d2257 } from '../descriptors/data.js?sdk=d22cce0575f7bd583ca524a14ee93e300c9f48000162d4e1926fedd9f4c37501';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2257;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["ReturnReplacementLineItemRequest"]:c1(),["SharedCodec516"]:c2(),["SharedCodec593"]:c3(),["SharedCodec594"]:c4(),["SharedCodec595"]:c5(),["SharedCodec596"]:c6(),["SharedCodec597"]:c7()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeReturnReplacementLineItemRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
