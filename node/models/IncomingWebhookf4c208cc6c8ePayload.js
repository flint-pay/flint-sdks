import { d1399 as c0, d815 as c1, d823 as c2, d468 as c3, d814 as c4, d817 as c5, d822 as c6, d1395 as c7, d1394 as c8, d1393 as c9, d1386 as c10, d1385 as c11, d1388 as c12, d1387 as c13, d1390 as c14, d1389 as c15, d1392 as c16, d1391 as c17, d1397 as c18, d1398 as c19, d1396 as c20 } from '../descriptors/data.js?sdk=bef5952824dbe0867acb5a07673ca91102b136eda21794fff718a3addd296a2a';
import { d1399 } from '../descriptors/data.js?sdk=bef5952824dbe0867acb5a07673ca91102b136eda21794fff718a3addd296a2a';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1399;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["IncomingWebhookf4c208cc6c8ePayload"]:c0(),["MerchantWebhookEnvelope"]:c1(),["PartnerWebhookEnvelope"]:c2(),["SharedCodec176"]:c3(),["SharedCodec244"]:c4(),["SharedCodec247"]:c5(),["SharedCodec249"]:c6(),["SharedCodec368"]:c7(),["SharedCodec369"]:c8(),["SharedCodec370"]:c9(),["SharedCodec371"]:c10(),["SharedCodec372"]:c11(),["SharedCodec373"]:c12(),["SharedCodec374"]:c13(),["SharedCodec375"]:c14(),["SharedCodec376"]:c15(),["SharedCodec377"]:c16(),["SharedCodec378"]:c17(),["SharedCodec379"]:c18(),["Webhook_order_partially_paid_installed_merchants"]:c19(),["Webhook_order_partially_paid_merchant"]:c20()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeIncomingWebhookf4c208cc6c8ePayload(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
