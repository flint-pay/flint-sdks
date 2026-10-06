import { d771 as c0, d90 as c1, d45 as c2, d142 as c3, d806 as c4, d930 as c5, d77 as c6, d1993 as c7, d1994 as c8, d1996 as c9, d2034 as c10, d2080 as c11, d2320 as c12, d525 as c13, d769 as c14, d770 as c15, d805 as c16, d929 as c17, d46 as c18, d226 as c19, d1071 as c20 } from '../descriptors/data.js?sdk=527d9352908a453ad41ae99b8ef20015f463fff9697dd74e49111f49715fee29';
import { d1071 } from '../descriptors/data.js?sdk=527d9352908a453ad41ae99b8ef20015f463fff9697dd74e49111f49715fee29';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1071;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["Dispute"]:c0(),["ExpandedCustomerSummary"]:c1(),["ExpandedOrderSummary"]:c2(),["ExpandedPaymentIntentSummary"]:c3(),["FraudWarning"]:c4(),["MerchantWebhookEnvelope"]:c5(),["MoneyValue"]:c6(),["PaymentSourceAchDebitSummary"]:c7(),["PaymentSourceCardSummary"]:c8(),["PaymentSourceSummary"]:c9(),["PricingAmounts"]:c10(),["PublicFraudWarningPaymentSummary"]:c11(),["SettlementAmounts"]:c12(),["SharedCodec199"]:c13(),["SharedCodec246"]:c14(),["SharedCodec247"]:c15(),["SharedCodec253"]:c16(),["SharedCodec282"]:c17(),["SharedCodec8"]:c18(),["SignedMoney"]:c19(),["Webhook_fraud_warning_created_merchant"]:c20()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeWebhook_fraud_warning_created_merchant(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
