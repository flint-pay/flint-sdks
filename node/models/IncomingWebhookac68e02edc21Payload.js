import { d744 as c0, d90 as c1, d42 as c2, d100 as c3, d777 as c4, d1369 as c5, d893 as c6, d323 as c7, d901 as c8, d1997 as c9, d1998 as c10, d2000 as c11, d2039 as c12, d2084 as c13, d2324 as c14, d490 as c15, d742 as c16, d743 as c17, d776 as c18, d892 as c19, d900 as c20, d1040 as c21, d43 as c22, d2017 as c23, d1368 as c24, d1367 as c25 } from '../descriptors/data.js?sdk=245b7fb11d6174517fe5d194b5fb87c42348ace248a5c84bbab9ef7bfe2b9e5e';
import { d1369 } from '../descriptors/data.js?sdk=245b7fb11d6174517fe5d194b5fb87c42348ace248a5c84bbab9ef7bfe2b9e5e';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1369;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["Dispute"]:c0(),["ExpandedCustomerSummary"]:c1(),["ExpandedOrderSummary"]:c2(),["ExpandedPaymentIntentSummary"]:c3(),["FraudWarning"]:c4(),["IncomingWebhookac68e02edc21Payload"]:c5(),["MerchantWebhookEnvelope"]:c6(),["MoneyValue"]:c7(),["PartnerWebhookEnvelope"]:c8(),["PaymentSourceAchDebitSummary"]:c9(),["PaymentSourceCardSummary"]:c10(),["PaymentSourceSummary"]:c11(),["PricingAmounts"]:c12(),["PublicFraudWarningPaymentSummary"]:c13(),["SettlementAmounts"]:c14(),["SharedCodec170"]:c15(),["SharedCodec221"]:c16(),["SharedCodec222"]:c17(),["SharedCodec226"]:c18(),["SharedCodec246"]:c19(),["SharedCodec251"]:c20(),["SharedCodec291"]:c21(),["SharedCodec5"]:c22(),["SignedMoney"]:c23(),["Webhook_fraud_warning_updated_installed_merchants"]:c24(),["Webhook_fraud_warning_updated_merchant"]:c25()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeIncomingWebhookac68e02edc21Payload(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
