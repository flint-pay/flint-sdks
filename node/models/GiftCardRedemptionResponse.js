import { d893 as c0, d895 as c1, d74 as c2, d1784 as c3, d1783 as c4, d2118 as c5, d2119 as c6, d857 as c7 } from '../descriptors/data.js?sdk=1062b2a87ddfc25f3a8458c3e67aea98a29a33dcad943f63dceff9390190307c';
import { d895 } from '../descriptors/data.js?sdk=1062b2a87ddfc25f3a8458c3e67aea98a29a33dcad943f63dceff9390190307c';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d895;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["GiftCardRedemption"]:c0(),["GiftCardRedemptionResponse"]:c1(),["MoneyValue"]:c2(),["NextAction"]:c3(),["NextActionMerchantAccountSession"]:c4(),["ResponseMeta"]:c5(),["ResponseWarning"]:c6(),["SharedCodec265"]:c7()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeGiftCardRedemptionResponse(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
