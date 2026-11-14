import { d563 as c0, d564 as c1 } from '../descriptors/data/32.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { d570 as c2, d571 as c3 } from '../descriptors/data/33.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { d5789 as c4 } from '../descriptors/data/256.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { d6625 as c5, d6627 as c6, d6628 as c7, d6631 as c8 } from '../descriptors/data/304.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { d5280 as c9, d5281 as c10, d5282 as c11, d5283 as c12, d5284 as c13, d5285 as c14 } from '../descriptors/data/232.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { d570 as d570 } from '../descriptors/data/33.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d570;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["DeliveryRateEvaluationMethodOutcome"]:c0(),["DeliveryRateEvaluationOutcome"]:c1(),["DeliveryRateEvaluationResponse"]:c2(),["DeliveryRateEvaluationWindow"]:c3(),["MoneyValue"]:c4(),["SharedCodec132"]:c5(),["SharedCodec134"]:c6(),["SharedCodec135"]:c7(),["SharedCodec138"]:c8(),["SharedCodec632"]:c9(),["SharedCodec633"]:c10(),["SharedCodec634"]:c11(),["SharedCodec635"]:c12(),["SharedCodec636"]:c13(),["SharedCodec637"]:c14()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeDeliveryRateEvaluationResponse(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
