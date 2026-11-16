import { d6150 as c0, d6151 as c1 } from '../descriptors/data/280.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d6162 as c2 } from '../descriptors/data/281.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d5589 as c3 } from '../descriptors/data/243.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d5589 as d5589 } from '../descriptors/data/243.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d5589;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["SharedCodec145"]:c0(),["SharedCodec146"]:c1(),["SubscriptionPlanChangeLineItemRequest"]:c2(),["SubscriptionPlanTermsRequest"]:c3()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeSubscriptionPlanTermsRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
