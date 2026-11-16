import { d118 as c0 } from '../descriptors/data/5.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d6653 as c1, d6654 as c3, d6655 as c4, d6657 as c5, d6658 as c6 } from '../descriptors/data/307.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d5814 as c2 } from '../descriptors/data/259.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d118 as d118 } from '../descriptors/data/5.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d118;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CallerSuppliedDeliveryOutcomeRequestAvailable"]:c0(),["DeliveryWindowRequest"]:c1(),["MoneyValue"]:c2(),["SharedCodec122"]:c3(),["SharedCodec123"]:c4(),["SharedCodec125"]:c5(),["SharedCodec126"]:c6()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCallerSuppliedDeliveryOutcomeRequestAvailable(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
