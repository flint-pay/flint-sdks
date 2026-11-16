import { d8795 as c0, d8796 as c1 } from '../descriptors/data/434.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d8829 as c2 } from '../descriptors/data/437.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d8829 as d8829 } from '../descriptors/data/437.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d8829;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["SharedCodec1560"]:c0(),["SharedCodec1561"]:c1(),["SubscriptionBillingScheduleUpdateRequest"]:c2()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeSubscriptionBillingScheduleUpdateRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
