import { d90 as c0, d45 as c1, d142 as c2, d77 as c3, d1823 as c4, d1822 as c5, d1993 as c6, d1994 as c7, d1996 as c8, d2034 as c9, d1364 as c10, d2091 as c11, d2095 as c12, d2157 as c13, d2158 as c14, d2272 as c15, d2273 as c16, d2320 as c17, d14 as c18, d368 as c19, d769 as c20, d770 as c21, d1365 as c22, d1821 as c23, d46 as c24, d226 as c25 } from '../descriptors/data.js?sdk=d3e94df4e2b3092877185e2938463692374ebf68487770c61d779ced93b5901e';
import { d2273 } from '../descriptors/data.js?sdk=d3e94df4e2b3092877185e2938463692374ebf68487770c61d779ced93b5901e';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2273;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["ExpandedCustomerSummary"]:c0(),["ExpandedOrderSummary"]:c1(),["ExpandedPaymentIntentSummary"]:c2(),["MoneyValue"]:c3(),["NextAction"]:c4(),["NextActionMerchantAccountSession"]:c5(),["PaymentSourceAchDebitSummary"]:c6(),["PaymentSourceCardSummary"]:c7(),["PaymentSourceSummary"]:c8(),["PricingAmounts"]:c9(),["PublicIPAddressLocation"]:c10(),["PublicReviewRisk"]:c11(),["PublicRiskPaymentSummary"]:c12(),["ResponseMeta"]:c13(),["ResponseWarning"]:c14(),["Review"]:c15(),["ReviewListResponse"]:c16(),["SettlementAmounts"]:c17(),["SharedCodec1"]:c18(),["SharedCodec131"]:c19(),["SharedCodec246"]:c20(),["SharedCodec247"]:c21(),["SharedCodec380"]:c22(),["SharedCodec487"]:c23(),["SharedCodec8"]:c24(),["SignedMoney"]:c25()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeReviewListResponse(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
