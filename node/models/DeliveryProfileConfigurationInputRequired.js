import { d533 as c0 } from '../descriptors/data/31.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d6623 as c1 } from '../descriptors/data/305.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d6634 as c2, d6635 as c3, d6638 as c4, d6639 as c5, d6640 as c6, d6643 as c7, d6644 as c8, d6645 as c9, d6646 as c10, d6647 as c11 } from '../descriptors/data/306.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d533 as d533 } from '../descriptors/data/31.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d533;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["DeliveryProfileConfigurationInputRequired"]:c0(),["DeliveryProfileOriginPolicyRequest"]:c1(),["SharedCodec598"]:c2(),["SharedCodec599"]:c3(),["SharedCodec602"]:c4(),["SharedCodec603"]:c5(),["SharedCodec604"]:c6(),["SharedCodec609"]:c7(),["SharedCodec610"]:c8(),["SharedCodec611"]:c9(),["SharedCodec612"]:c10(),["SharedCodec613"]:c11()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeDeliveryProfileConfigurationInputRequired(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
