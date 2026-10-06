import { d771 as c0, d90 as c1, d45 as c2, d142 as c3, d77 as c4, d938 as c5, d1993 as c6, d1994 as c7, d1996 as c8, d2034 as c9, d2080 as c10, d2320 as c11, d769 as c12, d770 as c13, d805 as c14, d937 as c15, d1072 as c16, d46 as c17, d226 as c18, d1073 as c19 } from '../descriptors/data.js?sdk=527d9352908a453ad41ae99b8ef20015f463fff9697dd74e49111f49715fee29';
import { d1073 } from '../descriptors/data.js?sdk=527d9352908a453ad41ae99b8ef20015f463fff9697dd74e49111f49715fee29';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1073;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["Dispute"]:c0(),["ExpandedCustomerSummary"]:c1(),["ExpandedOrderSummary"]:c2(),["ExpandedPaymentIntentSummary"]:c3(),["MoneyValue"]:c4(),["PartnerWebhookEnvelope"]:c5(),["PaymentSourceAchDebitSummary"]:c6(),["PaymentSourceCardSummary"]:c7(),["PaymentSourceSummary"]:c8(),["PricingAmounts"]:c9(),["PublicFraudWarningPaymentSummary"]:c10(),["SettlementAmounts"]:c11(),["SharedCodec246"]:c12(),["SharedCodec247"]:c13(),["SharedCodec253"]:c14(),["SharedCodec287"]:c15(),["SharedCodec325"]:c16(),["SharedCodec8"]:c17(),["SignedMoney"]:c18(),["Webhook_fraud_warning_created_installed_merchants"]:c19()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeWebhook_fraud_warning_created_installed_merchants(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
