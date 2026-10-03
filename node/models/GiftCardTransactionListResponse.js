import { d898 as c0, d899 as c1, d74 as c2, d1784 as c3, d1783 as c4, d2119 as c5, d2120 as c6, d857 as c7 } from '../descriptors/data.js?sdk=41ea09ad124ffa3bdfba4a8208bd0391cd6fb609c70d062a00cb64936b55a83b';
import { d899 } from '../descriptors/data.js?sdk=41ea09ad124ffa3bdfba4a8208bd0391cd6fb609c70d062a00cb64936b55a83b';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d899;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["GiftCardTransaction"]:c0(),["GiftCardTransactionListResponse"]:c1(),["MoneyValue"]:c2(),["NextAction"]:c3(),["NextActionMerchantAccountSession"]:c4(),["ResponseMeta"]:c5(),["ResponseWarning"]:c6(),["SharedCodec265"]:c7()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeGiftCardTransactionListResponse(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
