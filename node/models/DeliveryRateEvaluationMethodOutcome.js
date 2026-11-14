import { d561 as c0, d562 as c1 } from '../descriptors/data/32.js?sdk=bb0d7e74351abfed942ea144dbe99f50da6117785add7c8de338b21bf11fbc5a';
import { d569 as c2 } from '../descriptors/data/33.js?sdk=bb0d7e74351abfed942ea144dbe99f50da6117785add7c8de338b21bf11fbc5a';
import { d5784 as c3 } from '../descriptors/data/258.js?sdk=bb0d7e74351abfed942ea144dbe99f50da6117785add7c8de338b21bf11fbc5a';
import { d6628 as c4, d6630 as c5, d6631 as c6 } from '../descriptors/data/306.js?sdk=bb0d7e74351abfed942ea144dbe99f50da6117785add7c8de338b21bf11fbc5a';
import { d6634 as c7 } from '../descriptors/data/307.js?sdk=bb0d7e74351abfed942ea144dbe99f50da6117785add7c8de338b21bf11fbc5a';
import { d5263 as c8, d5264 as c9, d5265 as c10, d5266 as c11, d5267 as c12, d5268 as c13 } from '../descriptors/data/231.js?sdk=bb0d7e74351abfed942ea144dbe99f50da6117785add7c8de338b21bf11fbc5a';
import { d561 as d561 } from '../descriptors/data/32.js?sdk=bb0d7e74351abfed942ea144dbe99f50da6117785add7c8de338b21bf11fbc5a';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d561;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["DeliveryRateEvaluationMethodOutcome"]:c0(),["DeliveryRateEvaluationOutcome"]:c1(),["DeliveryRateEvaluationWindow"]:c2(),["MoneyValue"]:c3(),["SharedCodec126"]:c4(),["SharedCodec128"]:c5(),["SharedCodec129"]:c6(),["SharedCodec132"]:c7(),["SharedCodec633"]:c8(),["SharedCodec634"]:c9(),["SharedCodec635"]:c10(),["SharedCodec636"]:c11(),["SharedCodec637"]:c12(),["SharedCodec638"]:c13()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeDeliveryRateEvaluationMethodOutcome(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
