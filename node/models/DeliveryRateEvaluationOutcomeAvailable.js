import { d564 as c0 } from '../descriptors/data/32.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d570 as c1 } from '../descriptors/data/33.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d5790 as c2 } from '../descriptors/data/259.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d6626 as c3 } from '../descriptors/data/307.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d5269 as c4, d5271 as c5 } from '../descriptors/data/232.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d564 as d564 } from '../descriptors/data/32.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d564;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["DeliveryRateEvaluationOutcomeAvailable"]:c0(),["DeliveryRateEvaluationWindow"]:c1(),["MoneyValue"]:c2(),["SharedCodec131"]:c3(),["SharedCodec635"]:c4(),["SharedCodec637"]:c5()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeDeliveryRateEvaluationOutcomeAvailable(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
