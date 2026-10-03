import { d122 as c0, d123 as c1, d342 as c2, d74 as c3, d1784 as c4, d1783 as c5, d2118 as c6, d2119 as c7 } from '../descriptors/data.js?sdk=1062b2a87ddfc25f3a8458c3e67aea98a29a33dcad943f63dceff9390190307c';
import { d123 } from '../descriptors/data.js?sdk=1062b2a87ddfc25f3a8458c3e67aea98a29a33dcad943f63dceff9390190307c';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d123;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["BuyerGiftCardTransaction"]:c0(),["BuyerGiftCardTransactionListResponse"]:c1(),["GiftCardMoney"]:c2(),["MoneyValue"]:c3(),["NextAction"]:c4(),["NextActionMerchantAccountSession"]:c5(),["ResponseMeta"]:c6(),["ResponseWarning"]:c7()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeBuyerGiftCardTransactionListResponse(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
