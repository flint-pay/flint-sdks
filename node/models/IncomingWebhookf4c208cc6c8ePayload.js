import { d1556 as c0, d898 as c1, d323 as c2, d903 as c3, d500 as c4, d897 as c5, d902 as c6, d1552 as c7, d1551 as c8, d1550 as c9, d1543 as c10, d1542 as c11, d1545 as c12, d1544 as c13, d1547 as c14, d1546 as c15, d1549 as c16, d1548 as c17, d1554 as c18, d1555 as c19, d1553 as c20 } from '../descriptors/data.js?sdk=e3d9889159843c7c48c93704fe031dc30213693cb8266d78ea7ca38cc46462af';
import { d1556 } from '../descriptors/data.js?sdk=e3d9889159843c7c48c93704fe031dc30213693cb8266d78ea7ca38cc46462af';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1556;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["IncomingWebhookf4c208cc6c8ePayload"]:c0(),["MerchantWebhookEnvelope"]:c1(),["MoneyValue"]:c2(),["PartnerWebhookEnvelope"]:c3(),["SharedCodec176"]:c4(),["SharedCodec250"]:c5(),["SharedCodec252"]:c6(),["SharedCodec390"]:c7(),["SharedCodec391"]:c8(),["SharedCodec392"]:c9(),["SharedCodec393"]:c10(),["SharedCodec394"]:c11(),["SharedCodec395"]:c12(),["SharedCodec396"]:c13(),["SharedCodec397"]:c14(),["SharedCodec398"]:c15(),["SharedCodec399"]:c16(),["SharedCodec400"]:c17(),["SharedCodec401"]:c18(),["Webhook_order_partially_paid_installed_merchants"]:c19(),["Webhook_order_partially_paid_merchant"]:c20()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeIncomingWebhookf4c208cc6c8ePayload(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
