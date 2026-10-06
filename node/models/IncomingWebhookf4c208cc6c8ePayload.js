import { d1567 as c0, d930 as c1, d938 as c2, d525 as c3, d929 as c4, d932 as c5, d937 as c6, d1563 as c7, d1562 as c8, d1561 as c9, d1554 as c10, d1553 as c11, d1556 as c12, d1555 as c13, d1558 as c14, d1557 as c15, d1560 as c16, d1559 as c17, d1565 as c18, d1566 as c19, d1564 as c20 } from '../descriptors/data.js?sdk=527d9352908a453ad41ae99b8ef20015f463fff9697dd74e49111f49715fee29';
import { d1567 } from '../descriptors/data.js?sdk=527d9352908a453ad41ae99b8ef20015f463fff9697dd74e49111f49715fee29';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1567;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["IncomingWebhookf4c208cc6c8ePayload"]:c0(),["MerchantWebhookEnvelope"]:c1(),["PartnerWebhookEnvelope"]:c2(),["SharedCodec199"]:c3(),["SharedCodec282"]:c4(),["SharedCodec285"]:c5(),["SharedCodec287"]:c6(),["SharedCodec416"]:c7(),["SharedCodec417"]:c8(),["SharedCodec418"]:c9(),["SharedCodec419"]:c10(),["SharedCodec420"]:c11(),["SharedCodec421"]:c12(),["SharedCodec422"]:c13(),["SharedCodec423"]:c14(),["SharedCodec424"]:c15(),["SharedCodec425"]:c16(),["SharedCodec426"]:c17(),["SharedCodec427"]:c18(),["Webhook_order_partially_paid_installed_merchants"]:c19(),["Webhook_order_partially_paid_merchant"]:c20()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeIncomingWebhookf4c208cc6c8ePayload(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
