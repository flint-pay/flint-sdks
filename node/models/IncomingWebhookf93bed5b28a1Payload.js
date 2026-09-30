import { d1410 as c0, d815 as c1, d823 as c2, d468 as c3, d814 as c4, d817 as c5, d822 as c6, d1394 as c7, d1393 as c8, d1386 as c9, d1385 as c10, d1388 as c11, d1387 as c12, d1390 as c13, d1389 as c14, d1392 as c15, d1391 as c16, d1406 as c17, d1408 as c18, d1409 as c19, d1407 as c20 } from '../descriptors/data.js?sdk=bef5952824dbe0867acb5a07673ca91102b136eda21794fff718a3addd296a2a';
import { d1410 } from '../descriptors/data.js?sdk=bef5952824dbe0867acb5a07673ca91102b136eda21794fff718a3addd296a2a';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1410;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["IncomingWebhookf93bed5b28a1Payload"]:c0(),["MerchantWebhookEnvelope"]:c1(),["PartnerWebhookEnvelope"]:c2(),["SharedCodec176"]:c3(),["SharedCodec244"]:c4(),["SharedCodec247"]:c5(),["SharedCodec249"]:c6(),["SharedCodec369"]:c7(),["SharedCodec370"]:c8(),["SharedCodec371"]:c9(),["SharedCodec372"]:c10(),["SharedCodec373"]:c11(),["SharedCodec374"]:c12(),["SharedCodec375"]:c13(),["SharedCodec376"]:c14(),["SharedCodec377"]:c15(),["SharedCodec378"]:c16(),["SharedCodec380"]:c17(),["SharedCodec381"]:c18(),["Webhook_order_paid_installed_merchants"]:c19(),["Webhook_order_paid_merchant"]:c20()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeIncomingWebhookf93bed5b28a1Payload(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
