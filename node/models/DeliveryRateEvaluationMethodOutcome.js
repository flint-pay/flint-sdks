import { d562 as c0, d563 as c1 } from '../descriptors/data/32.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d570 as c2 } from '../descriptors/data/33.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d5790 as c3 } from '../descriptors/data/259.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d6626 as c4, d6628 as c5, d6629 as c6, d6632 as c7 } from '../descriptors/data/307.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d5269 as c8, d5270 as c9, d5271 as c10, d5272 as c11, d5273 as c12, d5274 as c13 } from '../descriptors/data/232.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d562 as d562 } from '../descriptors/data/32.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d562;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["DeliveryRateEvaluationMethodOutcome"]:c0(),["DeliveryRateEvaluationOutcome"]:c1(),["DeliveryRateEvaluationWindow"]:c2(),["MoneyValue"]:c3(),["SharedCodec131"]:c4(),["SharedCodec133"]:c5(),["SharedCodec134"]:c6(),["SharedCodec137"]:c7(),["SharedCodec635"]:c8(),["SharedCodec636"]:c9(),["SharedCodec637"]:c10(),["SharedCodec638"]:c11(),["SharedCodec639"]:c12(),["SharedCodec640"]:c13()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeDeliveryRateEvaluationMethodOutcome(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
