import { d8791 as c0, d8792 as c1 } from '../descriptors/data/393.js?sdk=9fc2ad28758ecb3836861aa4a55c027f918b2a3c68d2a2ab563c8b7345819552';
import { d8003 as c2 } from '../descriptors/data/347.js?sdk=9fc2ad28758ecb3836861aa4a55c027f918b2a3c68d2a2ab563c8b7345819552';
import { d8791 as d8791 } from '../descriptors/data/393.js?sdk=9fc2ad28758ecb3836861aa4a55c027f918b2a3c68d2a2ab563c8b7345819552';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d8791;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["GiftCardPurchaseDetailsRequest"]:c0(),["GiftCardPurchaseRecipientRequest"]:c1(),["MoneyValue"]:c2()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeGiftCardPurchaseDetailsRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
