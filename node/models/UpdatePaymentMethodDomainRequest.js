import { d2469 as c0 } from '../descriptors/data/99.js?sdk=f95cd788a8ba3731ebe91694701a8a5cdceec0ac429cf23d16edc2f61220fbab';
import { d2469 as d2469 } from '../descriptors/data/99.js?sdk=f95cd788a8ba3731ebe91694701a8a5cdceec0ac429cf23d16edc2f61220fbab';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2469;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["UpdatePaymentMethodDomainRequest"]:c0()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeUpdatePaymentMethodDomainRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
