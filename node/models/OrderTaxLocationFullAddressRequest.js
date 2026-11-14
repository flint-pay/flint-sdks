import { d7237 as c0, d7250 as c1, d7251 as c2 } from '../descriptors/data/339.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { d7237 as d7237 } from '../descriptors/data/339.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d7237;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["OrderTaxLocationFullAddressRequest"]:c0(),["SharedCodec1105"]:c1(),["SharedCodec1106"]:c2()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeOrderTaxLocationFullAddressRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
