import { d561 as c0, d562 as c1 } from '../descriptors/data/32.js?sdk=bb0d7e74351abfed942ea144dbe99f50da6117785add7c8de338b21bf11fbc5a';
import { d568 as c2, d569 as c3 } from '../descriptors/data/33.js?sdk=bb0d7e74351abfed942ea144dbe99f50da6117785add7c8de338b21bf11fbc5a';
import { d5784 as c4 } from '../descriptors/data/258.js?sdk=bb0d7e74351abfed942ea144dbe99f50da6117785add7c8de338b21bf11fbc5a';
import { d6628 as c5, d6630 as c6, d6631 as c7 } from '../descriptors/data/306.js?sdk=bb0d7e74351abfed942ea144dbe99f50da6117785add7c8de338b21bf11fbc5a';
import { d6634 as c8 } from '../descriptors/data/307.js?sdk=bb0d7e74351abfed942ea144dbe99f50da6117785add7c8de338b21bf11fbc5a';
import { d5263 as c9, d5264 as c10, d5265 as c11, d5266 as c12, d5267 as c13, d5268 as c14 } from '../descriptors/data/231.js?sdk=bb0d7e74351abfed942ea144dbe99f50da6117785add7c8de338b21bf11fbc5a';
import { d568 as d568 } from '../descriptors/data/33.js?sdk=bb0d7e74351abfed942ea144dbe99f50da6117785add7c8de338b21bf11fbc5a';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d568;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["DeliveryRateEvaluationMethodOutcome"]:c0(),["DeliveryRateEvaluationOutcome"]:c1(),["DeliveryRateEvaluationResponse"]:c2(),["DeliveryRateEvaluationWindow"]:c3(),["MoneyValue"]:c4(),["SharedCodec126"]:c5(),["SharedCodec128"]:c6(),["SharedCodec129"]:c7(),["SharedCodec132"]:c8(),["SharedCodec633"]:c9(),["SharedCodec634"]:c10(),["SharedCodec635"]:c11(),["SharedCodec636"]:c12(),["SharedCodec637"]:c13(),["SharedCodec638"]:c14()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeDeliveryRateEvaluationResponse(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
