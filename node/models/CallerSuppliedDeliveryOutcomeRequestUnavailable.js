import { d120 as c0 } from '../descriptors/data/6.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d6654 as c1, d6655 as c2, d6660 as c3, d6661 as c4 } from '../descriptors/data/307.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d120 as d120 } from '../descriptors/data/6.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d120;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CallerSuppliedDeliveryOutcomeRequestUnavailable"]:c0(),["SharedCodec122"]:c1(),["SharedCodec123"]:c2(),["SharedCodec128"]:c3(),["SharedCodec129"]:c4()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCallerSuppliedDeliveryOutcomeRequestUnavailable(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
