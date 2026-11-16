import { d7265 as c0, d7266 as c1, d7267 as c2, d7278 as c3, d7279 as c4, d7280 as c5, d7281 as c6 } from '../descriptors/data/342.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d7267 as d7267 } from '../descriptors/data/342.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d7267;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["OrderTaxLocationFullAddressRequest"]:c0(),["OrderTaxLocationPostalAddressRequest"]:c1(),["OrderTaxLocationRequest"]:c2(),["SharedCodec1103"]:c3(),["SharedCodec1104"]:c4(),["SharedCodec1105"]:c5(),["SharedCodec1106"]:c6()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeOrderTaxLocationRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
