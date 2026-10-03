import { d1549 as c0, d911 as c1, d919 as c2, d517 as c3, d910 as c4, d913 as c5, d918 as c6, d1533 as c7, d1532 as c8, d1525 as c9, d1524 as c10, d1527 as c11, d1526 as c12, d1529 as c13, d1528 as c14, d1531 as c15, d1530 as c16, d1545 as c17, d1547 as c18, d1548 as c19, d1546 as c20 } from '../descriptors/data.js?sdk=40abaf2a2616e8b74370ab25f8d4a8faced3f68b7d58057fcd11631bbc8038f0';
import { d1549 } from '../descriptors/data.js?sdk=40abaf2a2616e8b74370ab25f8d4a8faced3f68b7d58057fcd11631bbc8038f0';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1549;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["IncomingWebhookf93bed5b28a1Payload"]:c0(),["MerchantWebhookEnvelope"]:c1(),["PartnerWebhookEnvelope"]:c2(),["SharedCodec197"]:c3(),["SharedCodec275"]:c4(),["SharedCodec278"]:c5(),["SharedCodec280"]:c6(),["SharedCodec410"]:c7(),["SharedCodec411"]:c8(),["SharedCodec412"]:c9(),["SharedCodec413"]:c10(),["SharedCodec414"]:c11(),["SharedCodec415"]:c12(),["SharedCodec416"]:c13(),["SharedCodec417"]:c14(),["SharedCodec418"]:c15(),["SharedCodec419"]:c16(),["SharedCodec421"]:c17(),["SharedCodec422"]:c18(),["Webhook_order_paid_installed_merchants"]:c19(),["Webhook_order_paid_merchant"]:c20()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeIncomingWebhookf93bed5b28a1Payload(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
