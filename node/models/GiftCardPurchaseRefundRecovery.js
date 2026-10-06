import { d895 as c0, d896 as c1, d41 as c2 } from '../descriptors/data.js?sdk=f67f6eaf1051f21ec6ba8a2fb3534a619d1f5d2afe43c079dcee44663fec8859';
import { d895 } from '../descriptors/data.js?sdk=f67f6eaf1051f21ec6ba8a2fb3534a619d1f5d2afe43c079dcee44663fec8859';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d895;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["GiftCardPurchaseRefundRecovery"]:c0(),["GiftCardPurchaseRefundRecoveryDestination"]:c1(),["SharedCodec6"]:c2()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeGiftCardPurchaseRefundRecovery(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
