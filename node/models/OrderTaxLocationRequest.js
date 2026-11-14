import { d7237 as c0, d7238 as c1, d7239 as c2, d7250 as c3, d7251 as c4, d7252 as c5, d7253 as c6 } from '../descriptors/data/339.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { d7239 as d7239 } from '../descriptors/data/339.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d7239;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["OrderTaxLocationFullAddressRequest"]:c0(),["OrderTaxLocationPostalAddressRequest"]:c1(),["OrderTaxLocationRequest"]:c2(),["SharedCodec1105"]:c3(),["SharedCodec1106"]:c4(),["SharedCodec1107"]:c5(),["SharedCodec1108"]:c6()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeOrderTaxLocationRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
