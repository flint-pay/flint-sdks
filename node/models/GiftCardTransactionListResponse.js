import { d925 as c0, d926 as c1, d77 as c2, d1830 as c3, d1829 as c4, d2164 as c5, d2165 as c6, d14 as c7, d1828 as c8, d40 as c9, d41 as c10 } from '../descriptors/data.js?sdk=1d377b406cf4feb3f1c2665a879357eb94a4280792cb4955cdbef8af750adf8d';
import { d926 } from '../descriptors/data.js?sdk=1d377b406cf4feb3f1c2665a879357eb94a4280792cb4955cdbef8af750adf8d';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d926;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["GiftCardTransaction"]:c0(),["GiftCardTransactionListResponse"]:c1(),["MoneyValue"]:c2(),["NextAction"]:c3(),["NextActionMerchantAccountSession"]:c4(),["ResponseMeta"]:c5(),["ResponseWarning"]:c6(),["SharedCodec1"]:c7(),["SharedCodec492"]:c8(),["SharedCodec5"]:c9(),["SharedCodec6"]:c10()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeGiftCardTransactionListResponse(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
