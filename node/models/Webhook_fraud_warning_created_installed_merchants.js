import { d706 as c0, d82 as c1, d41 as c2, d704 as c3, d69 as c4, d823 as c5, d1803 as c6, d1804 as c7, d1806 as c8, d1843 as c9, d1891 as c10, d2116 as c11, d703 as c12, d705 as c13, d737 as c14, d822 as c15, d949 as c16, d42 as c17, d1666 as c18, d950 as c19 } from '../descriptors/data.js?sdk=bef5952824dbe0867acb5a07673ca91102b136eda21794fff718a3addd296a2a';
import { d950 } from '../descriptors/data.js?sdk=bef5952824dbe0867acb5a07673ca91102b136eda21794fff718a3addd296a2a';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d950;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["Dispute"]:c0(),["ExpandedCustomerSummary"]:c1(),["ExpandedOrderSummary"]:c2(),["ExpandedPaymentIntentSummary"]:c3(),["MoneyValue"]:c4(),["PartnerWebhookEnvelope"]:c5(),["PaymentSourceAchDebitSummary"]:c6(),["PaymentSourceCardSummary"]:c7(),["PaymentSourceSummary"]:c8(),["PricingAmounts"]:c9(),["PublicFraudWarningPaymentSummary"]:c10(),["SettlementAmounts"]:c11(),["SharedCodec218"]:c12(),["SharedCodec219"]:c13(),["SharedCodec224"]:c14(),["SharedCodec249"]:c15(),["SharedCodec285"]:c16(),["SharedCodec7"]:c17(),["SignedMoney"]:c18(),["Webhook_fraud_warning_created_installed_merchants"]:c19()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeWebhook_fraud_warning_created_installed_merchants(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
