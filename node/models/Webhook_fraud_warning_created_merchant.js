import { d744 as c0, d90 as c1, d42 as c2, d100 as c3, d777 as c4, d893 as c5, d323 as c6, d1997 as c7, d1998 as c8, d2000 as c9, d2039 as c10, d2084 as c11, d2324 as c12, d490 as c13, d742 as c14, d743 as c15, d776 as c16, d892 as c17, d43 as c18, d2017 as c19, d1039 as c20 } from '../descriptors/data.js?sdk=658e960cd5fac48cd38e1dd15296958df0d104dd5904c2165f4e3078746d39e7';
import { d1039 } from '../descriptors/data.js?sdk=658e960cd5fac48cd38e1dd15296958df0d104dd5904c2165f4e3078746d39e7';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1039;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["Dispute"]:c0(),["ExpandedCustomerSummary"]:c1(),["ExpandedOrderSummary"]:c2(),["ExpandedPaymentIntentSummary"]:c3(),["FraudWarning"]:c4(),["MerchantWebhookEnvelope"]:c5(),["MoneyValue"]:c6(),["PaymentSourceAchDebitSummary"]:c7(),["PaymentSourceCardSummary"]:c8(),["PaymentSourceSummary"]:c9(),["PricingAmounts"]:c10(),["PublicFraudWarningPaymentSummary"]:c11(),["SettlementAmounts"]:c12(),["SharedCodec170"]:c13(),["SharedCodec221"]:c14(),["SharedCodec222"]:c15(),["SharedCodec226"]:c16(),["SharedCodec246"]:c17(),["SharedCodec5"]:c18(),["SignedMoney"]:c19(),["Webhook_fraud_warning_created_merchant"]:c20()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeWebhook_fraud_warning_created_merchant(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
