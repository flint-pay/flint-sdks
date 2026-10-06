import { d1553 as c0, d916 as c1, d924 as c2, d520 as c3, d915 as c4, d918 as c5, d923 as c6, d1537 as c7, d1536 as c8, d1529 as c9, d1528 as c10, d1531 as c11, d1530 as c12, d1533 as c13, d1532 as c14, d1535 as c15, d1534 as c16, d1549 as c17, d1551 as c18, d1552 as c19, d1550 as c20 } from '../descriptors/data.js?sdk=f67f6eaf1051f21ec6ba8a2fb3534a619d1f5d2afe43c079dcee44663fec8859';
import { d1553 } from '../descriptors/data.js?sdk=f67f6eaf1051f21ec6ba8a2fb3534a619d1f5d2afe43c079dcee44663fec8859';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1553;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["IncomingWebhookf93bed5b28a1Payload"]:c0(),["MerchantWebhookEnvelope"]:c1(),["PartnerWebhookEnvelope"]:c2(),["SharedCodec199"]:c3(),["SharedCodec281"]:c4(),["SharedCodec284"]:c5(),["SharedCodec286"]:c6(),["SharedCodec415"]:c7(),["SharedCodec416"]:c8(),["SharedCodec417"]:c9(),["SharedCodec418"]:c10(),["SharedCodec419"]:c11(),["SharedCodec420"]:c12(),["SharedCodec421"]:c13(),["SharedCodec422"]:c14(),["SharedCodec423"]:c15(),["SharedCodec424"]:c16(),["SharedCodec426"]:c17(),["SharedCodec427"]:c18(),["Webhook_order_paid_installed_merchants"]:c19(),["Webhook_order_paid_merchant"]:c20()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeIncomingWebhookf93bed5b28a1Payload(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
