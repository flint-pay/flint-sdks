import { d571 as c0 } from '../descriptors/data/33.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { d5789 as c1 } from '../descriptors/data/256.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { d571 as d571 } from '../descriptors/data/33.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d571;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["DeliveryRateEvaluationWindow"]:c0(),["MoneyValue"]:c1()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeDeliveryRateEvaluationWindow(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
