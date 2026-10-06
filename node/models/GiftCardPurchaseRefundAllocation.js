import { d907 as c0, d909 as c1, d910 as c2, d906 as c3, d41 as c4 } from '../descriptors/data.js?sdk=527d9352908a453ad41ae99b8ef20015f463fff9697dd74e49111f49715fee29';
import { d907 } from '../descriptors/data.js?sdk=527d9352908a453ad41ae99b8ef20015f463fff9697dd74e49111f49715fee29';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d907;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["GiftCardPurchaseRefundAllocation"]:c0(),["GiftCardPurchaseRefundRecoveryDestination"]:c1(),["GiftCardPurchaseRefundValueAllocation"]:c2(),["SharedCodec281"]:c3(),["SharedCodec6"]:c4()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeGiftCardPurchaseRefundAllocation(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
