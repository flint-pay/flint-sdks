import { d756 as c0, d87 as c1, d42 as c2, d132 as c3, d788 as c4, d790 as c5, d74 as c6, d1786 as c7, d1785 as c8, d1956 as c9, d1957 as c10, d1959 as c11, d1996 as c12, d2044 as c13, d2121 as c14, d2122 as c15, d2283 as c16, d754 as c17, d755 as c18, d787 as c19, d43 as c20, d1806 as c21 } from '../descriptors/data.js?sdk=7603172525e41200d4f73e10915d0ae5669c2ee7108f266f11ac6495c50c1bfa';
import { d790 } from '../descriptors/data.js?sdk=7603172525e41200d4f73e10915d0ae5669c2ee7108f266f11ac6495c50c1bfa';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d790;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["Dispute"]:c0(),["ExpandedCustomerSummary"]:c1(),["ExpandedOrderSummary"]:c2(),["ExpandedPaymentIntentSummary"]:c3(),["FraudWarning"]:c4(),["FraudWarningResponse"]:c5(),["MoneyValue"]:c6(),["NextAction"]:c7(),["NextActionMerchantAccountSession"]:c8(),["PaymentSourceAchDebitSummary"]:c9(),["PaymentSourceCardSummary"]:c10(),["PaymentSourceSummary"]:c11(),["PricingAmounts"]:c12(),["PublicFraudWarningPaymentSummary"]:c13(),["ResponseMeta"]:c14(),["ResponseWarning"]:c15(),["SettlementAmounts"]:c16(),["SharedCodec239"]:c17(),["SharedCodec240"]:c18(),["SharedCodec245"]:c19(),["SharedCodec7"]:c20(),["SignedMoney"]:c21()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeFraudWarningResponse(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
