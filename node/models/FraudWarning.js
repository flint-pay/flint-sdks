import { d762 as c0, d90 as c1, d45 as c2, d138 as c3, d794 as c4, d77 as c5, d1967 as c6, d1968 as c7, d1970 as c8, d2008 as c9, d2054 as c10, d2294 as c11, d760 as c12, d761 as c13, d793 as c14, d46 as c15, d223 as c16 } from '../descriptors/data.js?sdk=f67f6eaf1051f21ec6ba8a2fb3534a619d1f5d2afe43c079dcee44663fec8859';
import { d794 } from '../descriptors/data.js?sdk=f67f6eaf1051f21ec6ba8a2fb3534a619d1f5d2afe43c079dcee44663fec8859';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d794;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["Dispute"]:c0(),["ExpandedCustomerSummary"]:c1(),["ExpandedOrderSummary"]:c2(),["ExpandedPaymentIntentSummary"]:c3(),["FraudWarning"]:c4(),["MoneyValue"]:c5(),["PaymentSourceAchDebitSummary"]:c6(),["PaymentSourceCardSummary"]:c7(),["PaymentSourceSummary"]:c8(),["PricingAmounts"]:c9(),["PublicFraudWarningPaymentSummary"]:c10(),["SettlementAmounts"]:c11(),["SharedCodec245"]:c12(),["SharedCodec246"]:c13(),["SharedCodec252"]:c14(),["SharedCodec8"]:c15(),["SignedMoney"]:c16()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeFraudWarning(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
