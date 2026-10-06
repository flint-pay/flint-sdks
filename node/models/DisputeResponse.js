import { d771 as c0, d773 as c1, d90 as c2, d45 as c3, d142 as c4, d77 as c5, d1823 as c6, d1822 as c7, d1993 as c8, d1994 as c9, d1996 as c10, d2034 as c11, d2157 as c12, d2158 as c13, d2320 as c14, d14 as c15, d769 as c16, d770 as c17, d1821 as c18, d46 as c19, d226 as c20 } from '../descriptors/data.js?sdk=ba066cb5d42061b50ddb74a9a955bfa66adbe16252255af2a884092ee5130eba';
import { d773 } from '../descriptors/data.js?sdk=ba066cb5d42061b50ddb74a9a955bfa66adbe16252255af2a884092ee5130eba';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d773;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["Dispute"]:c0(),["DisputeResponse"]:c1(),["ExpandedCustomerSummary"]:c2(),["ExpandedOrderSummary"]:c3(),["ExpandedPaymentIntentSummary"]:c4(),["MoneyValue"]:c5(),["NextAction"]:c6(),["NextActionMerchantAccountSession"]:c7(),["PaymentSourceAchDebitSummary"]:c8(),["PaymentSourceCardSummary"]:c9(),["PaymentSourceSummary"]:c10(),["PricingAmounts"]:c11(),["ResponseMeta"]:c12(),["ResponseWarning"]:c13(),["SettlementAmounts"]:c14(),["SharedCodec1"]:c15(),["SharedCodec246"]:c16(),["SharedCodec247"]:c17(),["SharedCodec487"]:c18(),["SharedCodec8"]:c19(),["SignedMoney"]:c20()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeDisputeResponse(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
