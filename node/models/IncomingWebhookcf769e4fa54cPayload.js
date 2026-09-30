import { d50 as c0, d41 as c1, d1292 as c2, d815 as c3, d69 as c4, d1843 as c5, d2116 as c6, d44 as c7, d45 as c8, d46 as c9, d47 as c10, d48 as c11, d468 as c12, d814 as c13, d36 as c14, d40 as c15, d42 as c16, d49 as c17, d43 as c18, d1666 as c19, d2317 as c20 } from '../descriptors/data.js?sdk=bef5952824dbe0867acb5a07673ca91102b136eda21794fff718a3addd296a2a';
import { d1292 } from '../descriptors/data.js?sdk=bef5952824dbe0867acb5a07673ca91102b136eda21794fff718a3addd296a2a';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1292;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["BalanceTransaction"]:c0(),["ExpandedOrderSummary"]:c1(),["IncomingWebhookcf769e4fa54cPayload"]:c2(),["MerchantWebhookEnvelope"]:c3(),["MoneyValue"]:c4(),["PricingAmounts"]:c5(),["SettlementAmounts"]:c6(),["SharedCodec10"]:c7(),["SharedCodec11"]:c8(),["SharedCodec12"]:c9(),["SharedCodec13"]:c10(),["SharedCodec14"]:c11(),["SharedCodec176"]:c12(),["SharedCodec244"]:c13(),["SharedCodec4"]:c14(),["SharedCodec6"]:c15(),["SharedCodec7"]:c16(),["SharedCodec8"]:c17(),["SharedCodec9"]:c18(),["SignedMoney"]:c19(),["Webhook_balance_transaction_created_merchant"]:c20()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeIncomingWebhookcf769e4fa54cPayload(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
