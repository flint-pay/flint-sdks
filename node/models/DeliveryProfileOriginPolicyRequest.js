import { d6623 as c0 } from '../descriptors/data/305.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d6643 as c1, d6644 as c2, d6645 as c3, d6646 as c4, d6647 as c5 } from '../descriptors/data/306.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d6623 as d6623 } from '../descriptors/data/305.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d6623;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["DeliveryProfileOriginPolicyRequest"]:c0(),["SharedCodec609"]:c1(),["SharedCodec610"]:c2(),["SharedCodec611"]:c3(),["SharedCodec612"]:c4(),["SharedCodec613"]:c5()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeDeliveryProfileOriginPolicyRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
