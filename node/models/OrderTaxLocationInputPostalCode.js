import { d4220 as c0 } from '../descriptors/data/179.js?sdk=f95cd788a8ba3731ebe91694701a8a5cdceec0ac429cf23d16edc2f61220fbab';
import { d4221 as c1 } from '../descriptors/data/180.js?sdk=f95cd788a8ba3731ebe91694701a8a5cdceec0ac429cf23d16edc2f61220fbab';
import { d4220 as d4220 } from '../descriptors/data/179.js?sdk=f95cd788a8ba3731ebe91694701a8a5cdceec0ac429cf23d16edc2f61220fbab';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d4220;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["OrderTaxLocationInputPostalCode"]:c0(),["OrderTaxLocationPostalAddressRequest"]:c1()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeOrderTaxLocationInputPostalCode(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
