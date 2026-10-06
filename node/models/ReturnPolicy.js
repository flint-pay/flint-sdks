import { d77 as c0, d2192 as c1, d2190 as c2, d2206 as c3, d2242 as c4, d2244 as c5, d2245 as c6, d2191 as c7, d2204 as c8, d2205 as c9 } from '../descriptors/data.js?sdk=f67f6eaf1051f21ec6ba8a2fb3534a619d1f5d2afe43c079dcee44663fec8859';
import { d2192 } from '../descriptors/data.js?sdk=f67f6eaf1051f21ec6ba8a2fb3534a619d1f5d2afe43c079dcee44663fec8859';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2192;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["ReturnPolicy"]:c1(),["ReturnPolicyRevision"]:c2(),["ReturnPolicyScope"]:c3(),["ReturnRestockingFeePolicy"]:c4(),["ReturnShippingPolicy"]:c5(),["ReturnWindow"]:c6(),["SharedCodec575"]:c7(),["SharedCodec583"]:c8(),["SharedCodec584"]:c9()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeReturnPolicy(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
