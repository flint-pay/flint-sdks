import { d564 as c0 } from '../descriptors/data/32.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { d571 as c1 } from '../descriptors/data/33.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { d5789 as c2 } from '../descriptors/data/256.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { d6625 as c3, d6627 as c4, d6628 as c5, d6631 as c6 } from '../descriptors/data/304.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { d5280 as c7, d5281 as c8, d5282 as c9, d5283 as c10, d5284 as c11, d5285 as c12 } from '../descriptors/data/232.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { d564 as d564 } from '../descriptors/data/32.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d564;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["DeliveryRateEvaluationOutcome"]:c0(),["DeliveryRateEvaluationWindow"]:c1(),["MoneyValue"]:c2(),["SharedCodec132"]:c3(),["SharedCodec134"]:c4(),["SharedCodec135"]:c5(),["SharedCodec138"]:c6(),["SharedCodec632"]:c7(),["SharedCodec633"]:c8(),["SharedCodec634"]:c9(),["SharedCodec635"]:c10(),["SharedCodec636"]:c11(),["SharedCodec637"]:c12()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeDeliveryRateEvaluationOutcome(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
