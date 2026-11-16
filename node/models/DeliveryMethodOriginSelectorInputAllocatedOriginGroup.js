import { d499 as c0 } from '../descriptors/data/28.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d6479 as c1, d6480 as c2 } from '../descriptors/data/298.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d6506 as c3, d6507 as c4, d6508 as c5 } from '../descriptors/data/299.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d499 as d499 } from '../descriptors/data/28.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d499;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["DeliveryMethodOriginSelectorInputAllocatedOriginGroup"]:c0(),["DeliveryMethodOriginSelectorInputAllocatedOriginGroupDeliveryLocationSet"]:c1(),["DeliveryMethodOriginSelectorInputAllocatedOriginGroupLocations"]:c2(),["SharedCodec247"]:c3(),["SharedCodec248"]:c4(),["SharedCodec249"]:c5()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeDeliveryMethodOriginSelectorInputAllocatedOriginGroup(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
