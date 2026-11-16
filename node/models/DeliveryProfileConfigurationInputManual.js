import { d530 as c0 } from '../descriptors/data/30.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d6623 as c1 } from '../descriptors/data/305.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d6634 as c2, d6635 as c3, d6643 as c4, d6644 as c5, d6645 as c6, d6646 as c7, d6647 as c8 } from '../descriptors/data/306.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d530 as d530 } from '../descriptors/data/30.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d530;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["DeliveryProfileConfigurationInputManual"]:c0(),["DeliveryProfileOriginPolicyRequest"]:c1(),["SharedCodec598"]:c2(),["SharedCodec599"]:c3(),["SharedCodec609"]:c4(),["SharedCodec610"]:c5(),["SharedCodec611"]:c6(),["SharedCodec612"]:c7(),["SharedCodec613"]:c8()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeDeliveryProfileConfigurationInputManual(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
