import { d1574 as c0, d936 as c1, d944 as c2, d526 as c3, d935 as c4, d938 as c5, d943 as c6, d1570 as c7, d1569 as c8, d1568 as c9, d1561 as c10, d1560 as c11, d1563 as c12, d1562 as c13, d1565 as c14, d1564 as c15, d1567 as c16, d1566 as c17, d1572 as c18, d1573 as c19, d1571 as c20 } from '../descriptors/data.js?sdk=1d377b406cf4feb3f1c2665a879357eb94a4280792cb4955cdbef8af750adf8d';
import { d1574 } from '../descriptors/data.js?sdk=1d377b406cf4feb3f1c2665a879357eb94a4280792cb4955cdbef8af750adf8d';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1574;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["IncomingWebhookf4c208cc6c8ePayload"]:c0(),["MerchantWebhookEnvelope"]:c1(),["PartnerWebhookEnvelope"]:c2(),["SharedCodec199"]:c3(),["SharedCodec286"]:c4(),["SharedCodec289"]:c5(),["SharedCodec291"]:c6(),["SharedCodec421"]:c7(),["SharedCodec422"]:c8(),["SharedCodec423"]:c9(),["SharedCodec424"]:c10(),["SharedCodec425"]:c11(),["SharedCodec426"]:c12(),["SharedCodec427"]:c13(),["SharedCodec428"]:c14(),["SharedCodec429"]:c15(),["SharedCodec430"]:c16(),["SharedCodec431"]:c17(),["SharedCodec432"]:c18(),["Webhook_order_partially_paid_installed_merchants"]:c19(),["Webhook_order_partially_paid_merchant"]:c20()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeIncomingWebhookf4c208cc6c8ePayload(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
