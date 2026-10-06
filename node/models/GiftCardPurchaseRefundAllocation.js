import { d907 as c0, d909 as c1, d910 as c2, d906 as c3, d41 as c4 } from '../descriptors/data.js?sdk=23304d0710327c07c2c4a303230dbb22d6b14f651af3363cdef910b4916b65b9';
import { d907 } from '../descriptors/data.js?sdk=23304d0710327c07c2c4a303230dbb22d6b14f651af3363cdef910b4916b65b9';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d907;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["GiftCardPurchaseRefundAllocation"]:c0(),["GiftCardPurchaseRefundRecoveryDestination"]:c1(),["GiftCardPurchaseRefundValueAllocation"]:c2(),["SharedCodec281"]:c3(),["SharedCodec6"]:c4()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeGiftCardPurchaseRefundAllocation(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
