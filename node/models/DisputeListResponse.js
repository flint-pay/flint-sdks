import { d762 as c0, d763 as c1, d90 as c2, d45 as c3, d138 as c4, d77 as c5, d1797 as c6, d1796 as c7, d1967 as c8, d1968 as c9, d1970 as c10, d2008 as c11, d2131 as c12, d2132 as c13, d2294 as c14, d14 as c15, d760 as c16, d761 as c17, d1795 as c18, d46 as c19, d223 as c20 } from '../descriptors/data.js?sdk=f67f6eaf1051f21ec6ba8a2fb3534a619d1f5d2afe43c079dcee44663fec8859';
import { d763 } from '../descriptors/data.js?sdk=f67f6eaf1051f21ec6ba8a2fb3534a619d1f5d2afe43c079dcee44663fec8859';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d763;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["Dispute"]:c0(),["DisputeListResponse"]:c1(),["ExpandedCustomerSummary"]:c2(),["ExpandedOrderSummary"]:c3(),["ExpandedPaymentIntentSummary"]:c4(),["MoneyValue"]:c5(),["NextAction"]:c6(),["NextActionMerchantAccountSession"]:c7(),["PaymentSourceAchDebitSummary"]:c8(),["PaymentSourceCardSummary"]:c9(),["PaymentSourceSummary"]:c10(),["PricingAmounts"]:c11(),["ResponseMeta"]:c12(),["ResponseWarning"]:c13(),["SettlementAmounts"]:c14(),["SharedCodec1"]:c15(),["SharedCodec245"]:c16(),["SharedCodec246"]:c17(),["SharedCodec485"]:c18(),["SharedCodec8"]:c19(),["SignedMoney"]:c20()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeDisputeListResponse(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
