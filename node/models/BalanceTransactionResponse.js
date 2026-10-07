import { d54 as c0, d57 as c1, d45 as c2, d77 as c3, d1830 as c4, d1829 as c5, d2041 as c6, d2164 as c7, d2165 as c8, d2327 as c9, d14 as c10, d47 as c11, d48 as c12, d49 as c13, d50 as c14, d51 as c15, d52 as c16, d1828 as c17, d40 as c18, d44 as c19, d46 as c20, d53 as c21, d227 as c22 } from '../descriptors/data.js?sdk=1d377b406cf4feb3f1c2665a879357eb94a4280792cb4955cdbef8af750adf8d';
import { d57 } from '../descriptors/data.js?sdk=1d377b406cf4feb3f1c2665a879357eb94a4280792cb4955cdbef8af750adf8d';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d57;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["BalanceTransaction"]:c0(),["BalanceTransactionResponse"]:c1(),["ExpandedOrderSummary"]:c2(),["MoneyValue"]:c3(),["NextAction"]:c4(),["NextActionMerchantAccountSession"]:c5(),["PricingAmounts"]:c6(),["ResponseMeta"]:c7(),["ResponseWarning"]:c8(),["SettlementAmounts"]:c9(),["SharedCodec1"]:c10(),["SharedCodec10"]:c11(),["SharedCodec11"]:c12(),["SharedCodec12"]:c13(),["SharedCodec13"]:c14(),["SharedCodec14"]:c15(),["SharedCodec15"]:c16(),["SharedCodec492"]:c17(),["SharedCodec5"]:c18(),["SharedCodec7"]:c19(),["SharedCodec8"]:c20(),["SharedCodec9"]:c21(),["SignedMoney"]:c22()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeBalanceTransactionResponse(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
