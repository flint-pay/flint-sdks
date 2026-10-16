import { d87 as c0, d88 as c1, d323 as c2, d1823 as c3, d1824 as c4, d2178 as c5, d2179 as c6, d14 as c7, d1822 as c8, d2034 as c9 } from '../descriptors/data.js?sdk=50f9c16f4dffbb7ff2528d427a616050712fc55fd9a73bec783011e006d2d7be';
import { d88 } from '../descriptors/data.js?sdk=50f9c16f4dffbb7ff2528d427a616050712fc55fd9a73bec783011e006d2d7be';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d88;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["BuyerGiftCardTransaction"]:c0(),["BuyerGiftCardTransactionListResponse"]:c1(),["MoneyValue"]:c2(),["NextAction"]:c3(),["NextActionMerchantAccountSession"]:c4(),["ResponseMeta"]:c5(),["ResponseWarning"]:c6(),["SharedCodec1"]:c7(),["SharedCodec467"]:c8(),["SignedMoney"]:c9()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeBuyerGiftCardTransactionListResponse(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
