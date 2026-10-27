import { d3629 as c0 } from '../descriptors/data/150.js?sdk=f95cd788a8ba3731ebe91694701a8a5cdceec0ac429cf23d16edc2f61220fbab';
import { d3629 as d3629 } from '../descriptors/data/150.js?sdk=f95cd788a8ba3731ebe91694701a8a5cdceec0ac429cf23d16edc2f61220fbab';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d3629;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["GiftCardPurchaseRecipientRequest"]:c0()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeGiftCardPurchaseRecipientRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
