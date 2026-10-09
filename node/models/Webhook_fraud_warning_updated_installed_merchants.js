import { d744 as c0, d90 as c1, d42 as c2, d100 as c3, d323 as c4, d901 as c5, d1997 as c6, d1998 as c7, d2000 as c8, d2039 as c9, d2084 as c10, d2324 as c11, d742 as c12, d743 as c13, d776 as c14, d900 as c15, d1040 as c16, d43 as c17, d2017 as c18, d1368 as c19 } from '../descriptors/data.js?sdk=658e960cd5fac48cd38e1dd15296958df0d104dd5904c2165f4e3078746d39e7';
import { d1368 } from '../descriptors/data.js?sdk=658e960cd5fac48cd38e1dd15296958df0d104dd5904c2165f4e3078746d39e7';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1368;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["Dispute"]:c0(),["ExpandedCustomerSummary"]:c1(),["ExpandedOrderSummary"]:c2(),["ExpandedPaymentIntentSummary"]:c3(),["MoneyValue"]:c4(),["PartnerWebhookEnvelope"]:c5(),["PaymentSourceAchDebitSummary"]:c6(),["PaymentSourceCardSummary"]:c7(),["PaymentSourceSummary"]:c8(),["PricingAmounts"]:c9(),["PublicFraudWarningPaymentSummary"]:c10(),["SettlementAmounts"]:c11(),["SharedCodec221"]:c12(),["SharedCodec222"]:c13(),["SharedCodec226"]:c14(),["SharedCodec251"]:c15(),["SharedCodec291"]:c16(),["SharedCodec5"]:c17(),["SignedMoney"]:c18(),["Webhook_fraud_warning_updated_installed_merchants"]:c19()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeWebhook_fraud_warning_updated_installed_merchants(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
