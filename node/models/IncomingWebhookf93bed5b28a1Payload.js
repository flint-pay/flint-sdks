import { d1579 as c0, d930 as c1, d938 as c2, d525 as c3, d929 as c4, d932 as c5, d937 as c6, d1563 as c7, d1562 as c8, d1555 as c9, d1554 as c10, d1557 as c11, d1556 as c12, d1559 as c13, d1558 as c14, d1561 as c15, d1560 as c16, d1575 as c17, d1577 as c18, d1578 as c19, d1576 as c20 } from '../descriptors/data.js?sdk=d22cce0575f7bd583ca524a14ee93e300c9f48000162d4e1926fedd9f4c37501';
import { d1579 } from '../descriptors/data.js?sdk=d22cce0575f7bd583ca524a14ee93e300c9f48000162d4e1926fedd9f4c37501';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1579;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["IncomingWebhookf93bed5b28a1Payload"]:c0(),["MerchantWebhookEnvelope"]:c1(),["PartnerWebhookEnvelope"]:c2(),["SharedCodec199"]:c3(),["SharedCodec282"]:c4(),["SharedCodec285"]:c5(),["SharedCodec287"]:c6(),["SharedCodec418"]:c7(),["SharedCodec419"]:c8(),["SharedCodec420"]:c9(),["SharedCodec421"]:c10(),["SharedCodec422"]:c11(),["SharedCodec423"]:c12(),["SharedCodec424"]:c13(),["SharedCodec425"]:c14(),["SharedCodec426"]:c15(),["SharedCodec427"]:c16(),["SharedCodec429"]:c17(),["SharedCodec430"]:c18(),["Webhook_order_paid_installed_merchants"]:c19(),["Webhook_order_paid_merchant"]:c20()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeIncomingWebhookf93bed5b28a1Payload(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
