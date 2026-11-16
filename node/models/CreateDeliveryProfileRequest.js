import { d234 as c0 } from '../descriptors/data/11.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d6620 as c1, d6623 as c2 } from '../descriptors/data/305.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d5941 as c3 } from '../descriptors/data/268.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d6634 as c4, d6635 as c5, d6636 as c6, d6637 as c7, d6638 as c8, d6639 as c9, d6640 as c10, d6641 as c11, d6642 as c12, d6643 as c13, d6644 as c14, d6645 as c15, d6646 as c16, d6647 as c17 } from '../descriptors/data/306.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d234 as d234 } from '../descriptors/data/11.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d234;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateDeliveryProfileRequest"]:c0(),["DeliveryProfileConfigurationRequest"]:c1(),["DeliveryProfileOriginPolicyRequest"]:c2(),["MetadataRequest"]:c3(),["SharedCodec598"]:c4(),["SharedCodec599"]:c5(),["SharedCodec600"]:c6(),["SharedCodec601"]:c7(),["SharedCodec602"]:c8(),["SharedCodec603"]:c9(),["SharedCodec604"]:c10(),["SharedCodec605"]:c11(),["SharedCodec606"]:c12(),["SharedCodec609"]:c13(),["SharedCodec610"]:c14(),["SharedCodec611"]:c15(),["SharedCodec612"]:c16(),["SharedCodec613"]:c17()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateDeliveryProfileRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
