import { d126 as c0 } from '../descriptors/data/5.js?sdk=f95cd788a8ba3731ebe91694701a8a5cdceec0ac429cf23d16edc2f61220fbab';
import { d3448 as c1 } from '../descriptors/data/140.js?sdk=f95cd788a8ba3731ebe91694701a8a5cdceec0ac429cf23d16edc2f61220fbab';
import { d126 as d126 } from '../descriptors/data/5.js?sdk=f95cd788a8ba3731ebe91694701a8a5cdceec0ac429cf23d16edc2f61220fbab';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d126;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateCustomerAddressRequest"]:c0(),["PostalAddress"]:c1()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateCustomerAddressRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
