import { d9337 as c0, d9338 as c1, d9339 as c2, d9350 as c3, d9351 as c4 } from '../descriptors/data/420.js?sdk=d3c76bf16b3cbedefee26daadf6e0346518a62c461a7867b1008aa91b458e940';
import { d9352 as c5, d9353 as c6 } from '../descriptors/data/421.js?sdk=d3c76bf16b3cbedefee26daadf6e0346518a62c461a7867b1008aa91b458e940';
import { d9339 as d9339 } from '../descriptors/data/420.js?sdk=d3c76bf16b3cbedefee26daadf6e0346518a62c461a7867b1008aa91b458e940';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d9339;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["OrderTaxLocationFullAddressRequest"]:c0(),["OrderTaxLocationPostalAddressRequest"]:c1(),["OrderTaxLocationRequest"]:c2(),["SharedCodec1983"]:c3(),["SharedCodec1984"]:c4(),["SharedCodec1987"]:c5(),["SharedCodec1988"]:c6()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeOrderTaxLocationRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
