import { d695 as c0 } from '../descriptors/data/38.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d6928 as c1, d6929 as c2 } from '../descriptors/data/327.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d695 as d695 } from '../descriptors/data/38.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d695;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["GiftCardFundingSourceGiftCardPurchaseRefundRecoveryRequest"]:c0(),["SharedCodec289"]:c1(),["SharedCodec290"]:c2()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeGiftCardFundingSourceGiftCardPurchaseRefundRecoveryRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
