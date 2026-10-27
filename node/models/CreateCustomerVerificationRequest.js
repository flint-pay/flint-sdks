import { d130 as c0 } from '../descriptors/data/5.js?sdk=f95cd788a8ba3731ebe91694701a8a5cdceec0ac429cf23d16edc2f61220fbab';
import { d130 as d130 } from '../descriptors/data/5.js?sdk=f95cd788a8ba3731ebe91694701a8a5cdceec0ac429cf23d16edc2f61220fbab';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d130;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateCustomerVerificationRequest"]:c0()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateCustomerVerificationRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
