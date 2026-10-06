import { d54 as c0, d55 as c1, d45 as c2, d1793 as c3, d1794 as c4, d77 as c5, d1797 as c6, d1796 as c7, d2008 as c8, d2132 as c9, d2294 as c10, d14 as c11, d47 as c12, d48 as c13, d49 as c14, d50 as c15, d51 as c16, d52 as c17, d1795 as c18, d40 as c19, d44 as c20, d46 as c21, d53 as c22, d223 as c23 } from '../descriptors/data.js?sdk=f67f6eaf1051f21ec6ba8a2fb3534a619d1f5d2afe43c079dcee44663fec8859';
import { d55 } from '../descriptors/data.js?sdk=f67f6eaf1051f21ec6ba8a2fb3534a619d1f5d2afe43c079dcee44663fec8859';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d55;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["BalanceTransaction"]:c0(),["BalanceTransactionListResponse"]:c1(),["ExpandedOrderSummary"]:c2(),["MoneyMovementHistoryMeta"]:c3(),["MoneyMovementListMeta"]:c4(),["MoneyValue"]:c5(),["NextAction"]:c6(),["NextActionMerchantAccountSession"]:c7(),["PricingAmounts"]:c8(),["ResponseWarning"]:c9(),["SettlementAmounts"]:c10(),["SharedCodec1"]:c11(),["SharedCodec10"]:c12(),["SharedCodec11"]:c13(),["SharedCodec12"]:c14(),["SharedCodec13"]:c15(),["SharedCodec14"]:c16(),["SharedCodec15"]:c17(),["SharedCodec485"]:c18(),["SharedCodec5"]:c19(),["SharedCodec7"]:c20(),["SharedCodec8"]:c21(),["SharedCodec9"]:c22(),["SignedMoney"]:c23()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeBalanceTransactionListResponse(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
