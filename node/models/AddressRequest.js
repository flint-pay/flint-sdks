import { d6020 as c0, d6018 as c1, d6019 as c2 } from '../descriptors/data/271.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { d6020 as d6020 } from '../descriptors/data/271.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d6020;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["AddressRequest"]:c0(),["SharedCodec0"]:c1(),["SharedCodec1"]:c2()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeAddressRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
