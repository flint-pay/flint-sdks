import { d6620 as c0, d6623 as c1 } from '../descriptors/data/305.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d5942 as c2 } from '../descriptors/data/268.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d6038 as c3 } from '../descriptors/data/274.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d6369 as c4 } from '../descriptors/data/292.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d6634 as c5, d6635 as c6, d6636 as c7, d6637 as c8, d6638 as c9, d6639 as c10, d6640 as c11, d6641 as c12, d6642 as c13, d6643 as c14, d6644 as c15, d6645 as c16, d6646 as c17, d6647 as c18 } from '../descriptors/data/306.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d5670 as c19 } from '../descriptors/data/247.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d5670 as d5670 } from '../descriptors/data/247.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d5670;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["DeliveryProfileConfigurationRequest"]:c0(),["DeliveryProfileOriginPolicyRequest"]:c1(),["SharedCodec1687"]:c2(),["SharedCodec1690"]:c3(),["SharedCodec1698"]:c4(),["SharedCodec598"]:c5(),["SharedCodec599"]:c6(),["SharedCodec600"]:c7(),["SharedCodec601"]:c8(),["SharedCodec602"]:c9(),["SharedCodec603"]:c10(),["SharedCodec604"]:c11(),["SharedCodec605"]:c12(),["SharedCodec606"]:c13(),["SharedCodec609"]:c14(),["SharedCodec610"]:c15(),["SharedCodec611"]:c16(),["SharedCodec612"]:c17(),["SharedCodec613"]:c18(),["UpdateDeliveryProfileRequest"]:c19()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeUpdateDeliveryProfileRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
