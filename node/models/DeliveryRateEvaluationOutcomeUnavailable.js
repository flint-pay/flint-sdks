import { d566 as c0, d570 as c1 } from '../descriptors/data/33.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d5790 as c2 } from '../descriptors/data/259.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d6628 as c3, d6629 as c4 } from '../descriptors/data/307.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d5269 as c5 } from '../descriptors/data/232.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d566 as d566 } from '../descriptors/data/33.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d566;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["DeliveryRateEvaluationOutcomeUnavailable"]:c0(),["DeliveryRateEvaluationWindow"]:c1(),["MoneyValue"]:c2(),["SharedCodec133"]:c3(),["SharedCodec134"]:c4(),["SharedCodec635"]:c5()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeDeliveryRateEvaluationOutcomeUnavailable(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
