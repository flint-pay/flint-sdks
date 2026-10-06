import { d54 as c0, d45 as c1, d1287 as c2, d930 as c3, d77 as c4, d2034 as c5, d2320 as c6, d47 as c7, d48 as c8, d49 as c9, d50 as c10, d51 as c11, d52 as c12, d525 as c13, d929 as c14, d40 as c15, d44 as c16, d46 as c17, d53 as c18, d226 as c19, d2531 as c20 } from '../descriptors/data.js?sdk=527d9352908a453ad41ae99b8ef20015f463fff9697dd74e49111f49715fee29';
import { d1287 } from '../descriptors/data.js?sdk=527d9352908a453ad41ae99b8ef20015f463fff9697dd74e49111f49715fee29';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1287;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["BalanceTransaction"]:c0(),["ExpandedOrderSummary"]:c1(),["IncomingWebhook89b737dd7119Payload"]:c2(),["MerchantWebhookEnvelope"]:c3(),["MoneyValue"]:c4(),["PricingAmounts"]:c5(),["SettlementAmounts"]:c6(),["SharedCodec10"]:c7(),["SharedCodec11"]:c8(),["SharedCodec12"]:c9(),["SharedCodec13"]:c10(),["SharedCodec14"]:c11(),["SharedCodec15"]:c12(),["SharedCodec199"]:c13(),["SharedCodec282"]:c14(),["SharedCodec5"]:c15(),["SharedCodec7"]:c16(),["SharedCodec8"]:c17(),["SharedCodec9"]:c18(),["SignedMoney"]:c19(),["Webhook_balance_transaction_updated_merchant"]:c20()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeIncomingWebhook89b737dd7119Payload(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
