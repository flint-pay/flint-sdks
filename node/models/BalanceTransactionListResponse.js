import { d54 as c0, d55 as c1, d45 as c2, d1826 as c3, d1827 as c4, d77 as c5, d1830 as c6, d1829 as c7, d2041 as c8, d2165 as c9, d2327 as c10, d14 as c11, d47 as c12, d48 as c13, d49 as c14, d50 as c15, d51 as c16, d52 as c17, d1828 as c18, d40 as c19, d44 as c20, d46 as c21, d53 as c22, d227 as c23 } from '../descriptors/data.js?sdk=1d377b406cf4feb3f1c2665a879357eb94a4280792cb4955cdbef8af750adf8d';
import { d55 } from '../descriptors/data.js?sdk=1d377b406cf4feb3f1c2665a879357eb94a4280792cb4955cdbef8af750adf8d';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d55;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["BalanceTransaction"]:c0(),["BalanceTransactionListResponse"]:c1(),["ExpandedOrderSummary"]:c2(),["MoneyMovementHistoryMeta"]:c3(),["MoneyMovementListMeta"]:c4(),["MoneyValue"]:c5(),["NextAction"]:c6(),["NextActionMerchantAccountSession"]:c7(),["PricingAmounts"]:c8(),["ResponseWarning"]:c9(),["SettlementAmounts"]:c10(),["SharedCodec1"]:c11(),["SharedCodec10"]:c12(),["SharedCodec11"]:c13(),["SharedCodec12"]:c14(),["SharedCodec13"]:c15(),["SharedCodec14"]:c16(),["SharedCodec15"]:c17(),["SharedCodec492"]:c18(),["SharedCodec5"]:c19(),["SharedCodec7"]:c20(),["SharedCodec8"]:c21(),["SharedCodec9"]:c22(),["SignedMoney"]:c23()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeBalanceTransactionListResponse(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
