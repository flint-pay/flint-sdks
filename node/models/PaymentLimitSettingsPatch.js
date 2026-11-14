import { d1133 as c0 } from '../descriptors/data/55.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { d8595 as c1, d8596 as c2 } from '../descriptors/data/421.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { d1133 as d1133 } from '../descriptors/data/55.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1133;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["PaymentLimitSettingsPatch"]:c0(),["SharedCodec1187"]:c1(),["SharedCodec1188"]:c2()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makePaymentLimitSettingsPatch(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
