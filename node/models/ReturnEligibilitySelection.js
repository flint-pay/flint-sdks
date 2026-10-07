import { d2171 as c0, d2215 as c1, d2169 as c2, d2170 as c3 } from '../descriptors/data.js?sdk=d22cce0575f7bd583ca524a14ee93e300c9f48000162d4e1926fedd9f4c37501';
import { d2171 } from '../descriptors/data.js?sdk=d22cce0575f7bd583ca524a14ee93e300c9f48000162d4e1926fedd9f4c37501';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2171;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["ReturnEligibilitySelection"]:c0(),["ReturnLineItemRequest"]:c1(),["SharedCodec546"]:c2(),["SharedCodec547"]:c3()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeReturnEligibilitySelection(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
