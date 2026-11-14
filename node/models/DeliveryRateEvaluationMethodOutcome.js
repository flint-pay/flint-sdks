import { d563 as c0, d564 as c1 } from '../descriptors/data/32.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { d571 as c2 } from '../descriptors/data/33.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { d5789 as c3 } from '../descriptors/data/256.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { d6625 as c4, d6627 as c5, d6628 as c6, d6631 as c7 } from '../descriptors/data/304.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { d5280 as c8, d5281 as c9, d5282 as c10, d5283 as c11, d5284 as c12, d5285 as c13 } from '../descriptors/data/232.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { d563 as d563 } from '../descriptors/data/32.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d563;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["DeliveryRateEvaluationMethodOutcome"]:c0(),["DeliveryRateEvaluationOutcome"]:c1(),["DeliveryRateEvaluationWindow"]:c2(),["MoneyValue"]:c3(),["SharedCodec132"]:c4(),["SharedCodec134"]:c5(),["SharedCodec135"]:c6(),["SharedCodec138"]:c7(),["SharedCodec632"]:c8(),["SharedCodec633"]:c9(),["SharedCodec634"]:c10(),["SharedCodec635"]:c11(),["SharedCodec636"]:c12(),["SharedCodec637"]:c13()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeDeliveryRateEvaluationMethodOutcome(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
