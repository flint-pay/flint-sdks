import { d4651 as c0 } from '../descriptors/data/206.js?sdk=f95cd788a8ba3731ebe91694701a8a5cdceec0ac429cf23d16edc2f61220fbab';
import { d4651 as d4651 } from '../descriptors/data/206.js?sdk=f95cd788a8ba3731ebe91694701a8a5cdceec0ac429cf23d16edc2f61220fbab';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d4651;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["PaymentLinkCustomFieldPatchRequest"]:c0()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makePaymentLinkCustomFieldPatchRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
