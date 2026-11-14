import { d7237 as c0, d7250 as c2, d7251 as c3 } from '../descriptors/data/339.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { d1062 as c1 } from '../descriptors/data/53.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { d1062 as d1062 } from '../descriptors/data/53.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1062;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["OrderTaxLocationFullAddressRequest"]:c0(),["OrderTaxLocationInputFullAddress"]:c1(),["SharedCodec1105"]:c2(),["SharedCodec1106"]:c3()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeOrderTaxLocationInputFullAddress(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
