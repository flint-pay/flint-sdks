import { d771 as c0, d90 as c1, d45 as c2, d142 as c3, d806 as c4, d808 as c5, d77 as c6, d1823 as c7, d1822 as c8, d1993 as c9, d1994 as c10, d1996 as c11, d2034 as c12, d2080 as c13, d2157 as c14, d2158 as c15, d2320 as c16, d14 as c17, d769 as c18, d770 as c19, d805 as c20, d1821 as c21, d46 as c22, d226 as c23 } from '../descriptors/data.js?sdk=ba066cb5d42061b50ddb74a9a955bfa66adbe16252255af2a884092ee5130eba';
import { d808 } from '../descriptors/data.js?sdk=ba066cb5d42061b50ddb74a9a955bfa66adbe16252255af2a884092ee5130eba';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d808;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["Dispute"]:c0(),["ExpandedCustomerSummary"]:c1(),["ExpandedOrderSummary"]:c2(),["ExpandedPaymentIntentSummary"]:c3(),["FraudWarning"]:c4(),["FraudWarningResponse"]:c5(),["MoneyValue"]:c6(),["NextAction"]:c7(),["NextActionMerchantAccountSession"]:c8(),["PaymentSourceAchDebitSummary"]:c9(),["PaymentSourceCardSummary"]:c10(),["PaymentSourceSummary"]:c11(),["PricingAmounts"]:c12(),["PublicFraudWarningPaymentSummary"]:c13(),["ResponseMeta"]:c14(),["ResponseWarning"]:c15(),["SettlementAmounts"]:c16(),["SharedCodec1"]:c17(),["SharedCodec246"]:c18(),["SharedCodec247"]:c19(),["SharedCodec253"]:c20(),["SharedCodec487"]:c21(),["SharedCodec8"]:c22(),["SignedMoney"]:c23()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeFraudWarningResponse(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
