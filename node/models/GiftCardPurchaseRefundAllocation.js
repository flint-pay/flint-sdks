import { d907 as c0, d909 as c1, d910 as c2, d906 as c3, d41 as c4 } from '../descriptors/data.js?sdk=ba066cb5d42061b50ddb74a9a955bfa66adbe16252255af2a884092ee5130eba';
import { d907 } from '../descriptors/data.js?sdk=ba066cb5d42061b50ddb74a9a955bfa66adbe16252255af2a884092ee5130eba';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d907;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["GiftCardPurchaseRefundAllocation"]:c0(),["GiftCardPurchaseRefundRecoveryDestination"]:c1(),["GiftCardPurchaseRefundValueAllocation"]:c2(),["SharedCodec281"]:c3(),["SharedCodec6"]:c4()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeGiftCardPurchaseRefundAllocation(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
