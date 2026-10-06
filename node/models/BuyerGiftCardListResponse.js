import { d125 as c0, d126 as c1, d77 as c2, d1823 as c3, d1822 as c4, d2157 as c5, d2158 as c6, d14 as c7, d1821 as c8 } from '../descriptors/data.js?sdk=527d9352908a453ad41ae99b8ef20015f463fff9697dd74e49111f49715fee29';
import { d126 } from '../descriptors/data.js?sdk=527d9352908a453ad41ae99b8ef20015f463fff9697dd74e49111f49715fee29';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d126;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["BuyerGiftCard"]:c0(),["BuyerGiftCardListResponse"]:c1(),["MoneyValue"]:c2(),["NextAction"]:c3(),["NextActionMerchantAccountSession"]:c4(),["ResponseMeta"]:c5(),["ResponseWarning"]:c6(),["SharedCodec1"]:c7(),["SharedCodec487"]:c8()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeBuyerGiftCardListResponse(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
