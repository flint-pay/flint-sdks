import { d119 as c0, d120 as c1, d344 as c2, d74 as c3, d1786 as c4, d1785 as c5, d2121 as c6, d2122 as c7 } from '../descriptors/data.js?sdk=40abaf2a2616e8b74370ab25f8d4a8faced3f68b7d58057fcd11631bbc8038f0';
import { d120 } from '../descriptors/data.js?sdk=40abaf2a2616e8b74370ab25f8d4a8faced3f68b7d58057fcd11631bbc8038f0';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d120;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["BuyerGiftCard"]:c0(),["BuyerGiftCardListResponse"]:c1(),["GiftCardMoney"]:c2(),["MoneyValue"]:c3(),["NextAction"]:c4(),["NextActionMerchantAccountSession"]:c5(),["ResponseMeta"]:c6(),["ResponseWarning"]:c7()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeBuyerGiftCardListResponse(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
