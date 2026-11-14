import { d563 as c0 } from '../descriptors/data/32.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d570 as c1 } from '../descriptors/data/33.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d5790 as c2 } from '../descriptors/data/259.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d6626 as c3, d6628 as c4, d6629 as c5, d6632 as c6 } from '../descriptors/data/307.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d5269 as c7, d5270 as c8, d5271 as c9, d5272 as c10, d5273 as c11, d5274 as c12 } from '../descriptors/data/232.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d563 as d563 } from '../descriptors/data/32.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d563;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["DeliveryRateEvaluationOutcome"]:c0(),["DeliveryRateEvaluationWindow"]:c1(),["MoneyValue"]:c2(),["SharedCodec131"]:c3(),["SharedCodec133"]:c4(),["SharedCodec134"]:c5(),["SharedCodec137"]:c6(),["SharedCodec635"]:c7(),["SharedCodec636"]:c8(),["SharedCodec637"]:c9(),["SharedCodec638"]:c10(),["SharedCodec639"]:c11(),["SharedCodec640"]:c12()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeDeliveryRateEvaluationOutcome(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
