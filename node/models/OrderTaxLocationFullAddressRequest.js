import { d7265 as c0, d7278 as c1, d7279 as c2 } from '../descriptors/data/342.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d7265 as d7265 } from '../descriptors/data/342.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d7265;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["OrderTaxLocationFullAddressRequest"]:c0(),["SharedCodec1103"]:c1(),["SharedCodec1104"]:c2()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeOrderTaxLocationFullAddressRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
