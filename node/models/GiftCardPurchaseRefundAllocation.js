import { d894 as c0, d896 as c1, d897 as c2, d893 as c3, d41 as c4 } from '../descriptors/data.js?sdk=f67f6eaf1051f21ec6ba8a2fb3534a619d1f5d2afe43c079dcee44663fec8859';
import { d894 } from '../descriptors/data.js?sdk=f67f6eaf1051f21ec6ba8a2fb3534a619d1f5d2afe43c079dcee44663fec8859';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d894;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["GiftCardPurchaseRefundAllocation"]:c0(),["GiftCardPurchaseRefundRecoveryDestination"]:c1(),["GiftCardPurchaseRefundValueAllocation"]:c2(),["SharedCodec280"]:c3(),["SharedCodec6"]:c4()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeGiftCardPurchaseRefundAllocation(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
