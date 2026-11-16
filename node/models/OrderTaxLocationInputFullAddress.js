import { d7265 as c0, d7278 as c2, d7279 as c3 } from '../descriptors/data/342.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d1064 as c1 } from '../descriptors/data/52.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d1064 as d1064 } from '../descriptors/data/52.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1064;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["OrderTaxLocationFullAddressRequest"]:c0(),["OrderTaxLocationInputFullAddress"]:c1(),["SharedCodec1103"]:c2(),["SharedCodec1104"]:c3()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeOrderTaxLocationInputFullAddress(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
