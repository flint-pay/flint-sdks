import { d1538 as c0, d911 as c1, d919 as c2, d517 as c3, d910 as c4, d913 as c5, d918 as c6, d1534 as c7, d1533 as c8, d1532 as c9, d1525 as c10, d1524 as c11, d1527 as c12, d1526 as c13, d1529 as c14, d1528 as c15, d1531 as c16, d1530 as c17, d1536 as c18, d1537 as c19, d1535 as c20 } from '../descriptors/data.js?sdk=40abaf2a2616e8b74370ab25f8d4a8faced3f68b7d58057fcd11631bbc8038f0';
import { d1538 } from '../descriptors/data.js?sdk=40abaf2a2616e8b74370ab25f8d4a8faced3f68b7d58057fcd11631bbc8038f0';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1538;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["IncomingWebhookf4c208cc6c8ePayload"]:c0(),["MerchantWebhookEnvelope"]:c1(),["PartnerWebhookEnvelope"]:c2(),["SharedCodec197"]:c3(),["SharedCodec275"]:c4(),["SharedCodec278"]:c5(),["SharedCodec280"]:c6(),["SharedCodec409"]:c7(),["SharedCodec410"]:c8(),["SharedCodec411"]:c9(),["SharedCodec412"]:c10(),["SharedCodec413"]:c11(),["SharedCodec414"]:c12(),["SharedCodec415"]:c13(),["SharedCodec416"]:c14(),["SharedCodec417"]:c15(),["SharedCodec418"]:c16(),["SharedCodec419"]:c17(),["SharedCodec420"]:c18(),["Webhook_order_partially_paid_installed_merchants"]:c19(),["Webhook_order_partially_paid_merchant"]:c20()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeIncomingWebhookf4c208cc6c8ePayload(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
