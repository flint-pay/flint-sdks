import { d117 as c0 } from '../descriptors/data/5.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d6622 as c1, d6623 as c2, d6631 as c3, d6632 as c4 } from '../descriptors/data/307.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d117 as d117 } from '../descriptors/data/5.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d117;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CallerSuppliedDeliveryOutcomeRequestCannotCalculate"]:c0(),["SharedCodec127"]:c1(),["SharedCodec128"]:c2(),["SharedCodec136"]:c3(),["SharedCodec137"]:c4()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCallerSuppliedDeliveryOutcomeRequestCannotCalculate(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
