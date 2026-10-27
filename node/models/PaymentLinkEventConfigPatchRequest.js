import { d4656 as c0 } from '../descriptors/data/207.js?sdk=f95cd788a8ba3731ebe91694701a8a5cdceec0ac429cf23d16edc2f61220fbab';
import { d4656 as d4656 } from '../descriptors/data/207.js?sdk=f95cd788a8ba3731ebe91694701a8a5cdceec0ac429cf23d16edc2f61220fbab';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d4656;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["PaymentLinkEventConfigPatchRequest"]:c0()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makePaymentLinkEventConfigPatchRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
