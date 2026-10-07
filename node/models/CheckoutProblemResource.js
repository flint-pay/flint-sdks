import { d213 as c0, d789 as c1, d1824 as c2, d1823 as c3, d14 as c4, d1822 as c5 } from '../descriptors/data.js?sdk=d22cce0575f7bd583ca524a14ee93e300c9f48000162d4e1926fedd9f4c37501';
import { d213 } from '../descriptors/data.js?sdk=d22cce0575f7bd583ca524a14ee93e300c9f48000162d4e1926fedd9f4c37501';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d213;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CheckoutProblemResource"]:c0(),["ErrorRemediation"]:c1(),["NextAction"]:c2(),["NextActionMerchantAccountSession"]:c3(),["SharedCodec1"]:c4(),["SharedCodec488"]:c5()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCheckoutProblemResource(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
