import { d916 as c0, d520 as c1, d915 as c2, d918 as c3, d1537 as c4, d1536 as c5, d1529 as c6, d1528 as c7, d1531 as c8, d1530 as c9, d1533 as c10, d1532 as c11, d1535 as c12, d1534 as c13, d1549 as c14, d1550 as c15 } from '../descriptors/data.js?sdk=f67f6eaf1051f21ec6ba8a2fb3534a619d1f5d2afe43c079dcee44663fec8859';
import { d1550 } from '../descriptors/data.js?sdk=f67f6eaf1051f21ec6ba8a2fb3534a619d1f5d2afe43c079dcee44663fec8859';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1550;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MerchantWebhookEnvelope"]:c0(),["SharedCodec199"]:c1(),["SharedCodec281"]:c2(),["SharedCodec284"]:c3(),["SharedCodec415"]:c4(),["SharedCodec416"]:c5(),["SharedCodec417"]:c6(),["SharedCodec418"]:c7(),["SharedCodec419"]:c8(),["SharedCodec420"]:c9(),["SharedCodec421"]:c10(),["SharedCodec422"]:c11(),["SharedCodec423"]:c12(),["SharedCodec424"]:c13(),["SharedCodec426"]:c14(),["Webhook_order_paid_merchant"]:c15()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeWebhook_order_paid_merchant(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
