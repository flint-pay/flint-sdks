import { d562 as c0 } from '../descriptors/data/32.js?sdk=bb0d7e74351abfed942ea144dbe99f50da6117785add7c8de338b21bf11fbc5a';
import { d569 as c1 } from '../descriptors/data/33.js?sdk=bb0d7e74351abfed942ea144dbe99f50da6117785add7c8de338b21bf11fbc5a';
import { d5784 as c2 } from '../descriptors/data/258.js?sdk=bb0d7e74351abfed942ea144dbe99f50da6117785add7c8de338b21bf11fbc5a';
import { d6628 as c3, d6630 as c4, d6631 as c5 } from '../descriptors/data/306.js?sdk=bb0d7e74351abfed942ea144dbe99f50da6117785add7c8de338b21bf11fbc5a';
import { d6634 as c6 } from '../descriptors/data/307.js?sdk=bb0d7e74351abfed942ea144dbe99f50da6117785add7c8de338b21bf11fbc5a';
import { d5263 as c7, d5264 as c8, d5265 as c9, d5266 as c10, d5267 as c11, d5268 as c12 } from '../descriptors/data/231.js?sdk=bb0d7e74351abfed942ea144dbe99f50da6117785add7c8de338b21bf11fbc5a';
import { d562 as d562 } from '../descriptors/data/32.js?sdk=bb0d7e74351abfed942ea144dbe99f50da6117785add7c8de338b21bf11fbc5a';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d562;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["DeliveryRateEvaluationOutcome"]:c0(),["DeliveryRateEvaluationWindow"]:c1(),["MoneyValue"]:c2(),["SharedCodec126"]:c3(),["SharedCodec128"]:c4(),["SharedCodec129"]:c5(),["SharedCodec132"]:c6(),["SharedCodec633"]:c7(),["SharedCodec634"]:c8(),["SharedCodec635"]:c9(),["SharedCodec636"]:c10(),["SharedCodec637"]:c11(),["SharedCodec638"]:c12()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeDeliveryRateEvaluationOutcome(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
