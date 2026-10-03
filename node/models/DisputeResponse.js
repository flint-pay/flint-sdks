import { d756 as c0, d758 as c1, d87 as c2, d42 as c3, d132 as c4, d74 as c5, d1786 as c6, d1785 as c7, d1956 as c8, d1957 as c9, d1959 as c10, d1996 as c11, d2121 as c12, d2122 as c13, d2283 as c14, d754 as c15, d755 as c16, d43 as c17, d1806 as c18 } from '../descriptors/data.js?sdk=7603172525e41200d4f73e10915d0ae5669c2ee7108f266f11ac6495c50c1bfa';
import { d758 } from '../descriptors/data.js?sdk=7603172525e41200d4f73e10915d0ae5669c2ee7108f266f11ac6495c50c1bfa';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d758;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["Dispute"]:c0(),["DisputeResponse"]:c1(),["ExpandedCustomerSummary"]:c2(),["ExpandedOrderSummary"]:c3(),["ExpandedPaymentIntentSummary"]:c4(),["MoneyValue"]:c5(),["NextAction"]:c6(),["NextActionMerchantAccountSession"]:c7(),["PaymentSourceAchDebitSummary"]:c8(),["PaymentSourceCardSummary"]:c9(),["PaymentSourceSummary"]:c10(),["PricingAmounts"]:c11(),["ResponseMeta"]:c12(),["ResponseWarning"]:c13(),["SettlementAmounts"]:c14(),["SharedCodec239"]:c15(),["SharedCodec240"]:c16(),["SharedCodec7"]:c17(),["SignedMoney"]:c18()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeDisputeResponse(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
