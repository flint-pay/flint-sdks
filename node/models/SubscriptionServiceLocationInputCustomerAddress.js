import { d5606 as c0 } from '../descriptors/data/244.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d5606 as d5606 } from '../descriptors/data/244.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d5606;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["SubscriptionServiceLocationInputCustomerAddress"]:c0()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeSubscriptionServiceLocationInputCustomerAddress(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
