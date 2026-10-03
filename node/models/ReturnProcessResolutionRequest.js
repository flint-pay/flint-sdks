import { d74 as c0, d2198 as c1, d2217 as c2, d1935 as c3, d2212 as c4, d2211 as c5, d2214 as c6, d2213 as c7, d2215 as c8 } from '../descriptors/data.js?sdk=a6b376902242b69271e8ff7d7046c24b4e5476233434e4180a046d09fed7dde4';
import { d2198 } from '../descriptors/data.js?sdk=a6b376902242b69271e8ff7d7046c24b4e5476233434e4180a046d09fed7dde4';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2198;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["ReturnProcessResolutionRequest"]:c1(),["ReturnReplacementLineItemRequest"]:c2(),["SharedCodec504"]:c3(),["SharedCodec579"]:c4(),["SharedCodec580"]:c5(),["SharedCodec581"]:c6(),["SharedCodec582"]:c7(),["SharedCodec583"]:c8()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeReturnProcessResolutionRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
