import { d532 as c0 } from '../descriptors/data/31.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d6623 as c1 } from '../descriptors/data/305.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d6638 as c2, d6643 as c3, d6644 as c4, d6645 as c5, d6646 as c6, d6647 as c7 } from '../descriptors/data/306.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d532 as d532 } from '../descriptors/data/31.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d532;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["DeliveryProfileConfigurationInputQuote"]:c0(),["DeliveryProfileOriginPolicyRequest"]:c1(),["SharedCodec602"]:c2(),["SharedCodec609"]:c3(),["SharedCodec610"]:c4(),["SharedCodec611"]:c5(),["SharedCodec612"]:c6(),["SharedCodec613"]:c7()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeDeliveryProfileConfigurationInputQuote(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
