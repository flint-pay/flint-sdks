import { d1568 as c0, d930 as c1, d938 as c2, d525 as c3, d929 as c4, d932 as c5, d937 as c6, d1564 as c7, d1563 as c8, d1562 as c9, d1555 as c10, d1554 as c11, d1557 as c12, d1556 as c13, d1559 as c14, d1558 as c15, d1561 as c16, d1560 as c17, d1566 as c18, d1567 as c19, d1565 as c20 } from '../descriptors/data.js?sdk=d22cce0575f7bd583ca524a14ee93e300c9f48000162d4e1926fedd9f4c37501';
import { d1568 } from '../descriptors/data.js?sdk=d22cce0575f7bd583ca524a14ee93e300c9f48000162d4e1926fedd9f4c37501';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1568;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["IncomingWebhookf4c208cc6c8ePayload"]:c0(),["MerchantWebhookEnvelope"]:c1(),["PartnerWebhookEnvelope"]:c2(),["SharedCodec199"]:c3(),["SharedCodec282"]:c4(),["SharedCodec285"]:c5(),["SharedCodec287"]:c6(),["SharedCodec417"]:c7(),["SharedCodec418"]:c8(),["SharedCodec419"]:c9(),["SharedCodec420"]:c10(),["SharedCodec421"]:c11(),["SharedCodec422"]:c12(),["SharedCodec423"]:c13(),["SharedCodec424"]:c14(),["SharedCodec425"]:c15(),["SharedCodec426"]:c16(),["SharedCodec427"]:c17(),["SharedCodec428"]:c18(),["Webhook_order_partially_paid_installed_merchants"]:c19(),["Webhook_order_partially_paid_merchant"]:c20()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeIncomingWebhookf4c208cc6c8ePayload(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
