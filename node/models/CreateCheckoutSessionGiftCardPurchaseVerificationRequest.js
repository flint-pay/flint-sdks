import { d118 as c0 } from '../descriptors/data/4.js?sdk=f95cd788a8ba3731ebe91694701a8a5cdceec0ac429cf23d16edc2f61220fbab';
import { d118 as d118 } from '../descriptors/data/4.js?sdk=f95cd788a8ba3731ebe91694701a8a5cdceec0ac429cf23d16edc2f61220fbab';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d118;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateCheckoutSessionGiftCardPurchaseVerificationRequest"]:c0()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateCheckoutSessionGiftCardPurchaseVerificationRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
