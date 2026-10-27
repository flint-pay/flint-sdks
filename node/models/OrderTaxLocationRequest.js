import { d4216 as c0, d4217 as c1, d4218 as c2, d4219 as c3, d4220 as c4 } from '../descriptors/data/179.js?sdk=f26e56e6a3e2880a8b32262ed776607c3be18e132e92afe40d992ddacf961f63';
import { d4221 as c5, d4222 as c6 } from '../descriptors/data/180.js?sdk=f26e56e6a3e2880a8b32262ed776607c3be18e132e92afe40d992ddacf961f63';
import { d4222 as d4222 } from '../descriptors/data/180.js?sdk=f26e56e6a3e2880a8b32262ed776607c3be18e132e92afe40d992ddacf961f63';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d4222;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["OrderTaxLocationFullAddressRequest"]:c0(),["OrderTaxLocationInputFullAddress"]:c1(),["OrderTaxLocationInputInferredFullAddress"]:c2(),["OrderTaxLocationInputInferredPostalCode"]:c3(),["OrderTaxLocationInputPostalCode"]:c4(),["OrderTaxLocationPostalAddressRequest"]:c5(),["OrderTaxLocationRequest"]:c6()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeOrderTaxLocationRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
