import { d6020 as c0, d6018 as c2, d6019 as c3 } from '../descriptors/data/271.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { d6829 as c1 } from '../descriptors/data/317.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { d6829 as d6829 } from '../descriptors/data/317.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d6829;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["AddressRequest"]:c0(),["CreatePickupFulfillmentDetails"]:c1(),["SharedCodec0"]:c2(),["SharedCodec1"]:c3()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreatePickupFulfillmentDetails(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
