import { d119 as c0 } from '../descriptors/data/5.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d6654 as c1, d6655 as c2 } from '../descriptors/data/307.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d6663 as c3, d6664 as c4 } from '../descriptors/data/308.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d119 as d119 } from '../descriptors/data/5.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d119;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CallerSuppliedDeliveryOutcomeRequestCannotCalculate"]:c0(),["SharedCodec122"]:c1(),["SharedCodec123"]:c2(),["SharedCodec131"]:c3(),["SharedCodec132"]:c4()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCallerSuppliedDeliveryOutcomeRequestCannotCalculate(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
