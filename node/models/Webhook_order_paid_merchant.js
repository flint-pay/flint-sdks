import { d911 as c0, d517 as c1, d910 as c2, d913 as c3, d1533 as c4, d1532 as c5, d1525 as c6, d1524 as c7, d1527 as c8, d1526 as c9, d1529 as c10, d1528 as c11, d1531 as c12, d1530 as c13, d1545 as c14, d1546 as c15 } from '../descriptors/data.js?sdk=40abaf2a2616e8b74370ab25f8d4a8faced3f68b7d58057fcd11631bbc8038f0';
import { d1546 } from '../descriptors/data.js?sdk=40abaf2a2616e8b74370ab25f8d4a8faced3f68b7d58057fcd11631bbc8038f0';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1546;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MerchantWebhookEnvelope"]:c0(),["SharedCodec197"]:c1(),["SharedCodec275"]:c2(),["SharedCodec278"]:c3(),["SharedCodec410"]:c4(),["SharedCodec411"]:c5(),["SharedCodec412"]:c6(),["SharedCodec413"]:c7(),["SharedCodec414"]:c8(),["SharedCodec415"]:c9(),["SharedCodec416"]:c10(),["SharedCodec417"]:c11(),["SharedCodec418"]:c12(),["SharedCodec419"]:c13(),["SharedCodec421"]:c14(),["Webhook_order_paid_merchant"]:c15()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeWebhook_order_paid_merchant(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
