import { d6620 as c0, d6623 as c1 } from '../descriptors/data/305.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d6634 as c2, d6635 as c3, d6636 as c4, d6637 as c5, d6638 as c6, d6639 as c7, d6640 as c8, d6641 as c9, d6642 as c10, d6643 as c11, d6644 as c12, d6645 as c13, d6646 as c14, d6647 as c15 } from '../descriptors/data/306.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d6620 as d6620 } from '../descriptors/data/305.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d6620;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["DeliveryProfileConfigurationRequest"]:c0(),["DeliveryProfileOriginPolicyRequest"]:c1(),["SharedCodec598"]:c2(),["SharedCodec599"]:c3(),["SharedCodec600"]:c4(),["SharedCodec601"]:c5(),["SharedCodec602"]:c6(),["SharedCodec603"]:c7(),["SharedCodec604"]:c8(),["SharedCodec605"]:c9(),["SharedCodec606"]:c10(),["SharedCodec609"]:c11(),["SharedCodec610"]:c12(),["SharedCodec611"]:c13(),["SharedCodec612"]:c14(),["SharedCodec613"]:c15()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeDeliveryProfileConfigurationRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
