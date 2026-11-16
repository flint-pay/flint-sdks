import { d6653 as c0 } from '../descriptors/data/307.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d5814 as c1 } from '../descriptors/data/259.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d6653 as d6653 } from '../descriptors/data/307.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d6653;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["DeliveryWindowRequest"]:c0(),["MoneyValue"]:c1()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeDeliveryWindowRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
