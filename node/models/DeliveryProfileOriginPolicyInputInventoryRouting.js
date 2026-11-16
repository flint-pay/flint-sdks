import { d538 as c0 } from '../descriptors/data/31.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d6643 as c1 } from '../descriptors/data/306.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d538 as d538 } from '../descriptors/data/31.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d538;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["DeliveryProfileOriginPolicyInputInventoryRouting"]:c0(),["SharedCodec609"]:c1()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeDeliveryProfileOriginPolicyInputInventoryRouting(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
