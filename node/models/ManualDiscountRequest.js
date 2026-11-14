import { d6772 as c0 } from '../descriptors/data/313.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { d5789 as c1 } from '../descriptors/data/256.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { d6772 as d6772 } from '../descriptors/data/313.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d6772;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["ManualDiscountRequest"]:c0(),["MoneyValue"]:c1()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeManualDiscountRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
