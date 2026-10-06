import { d916 as c0, d520 as c1, d915 as c2, d918 as c3, d1538 as c4, d1537 as c5, d1536 as c6, d1529 as c7, d1528 as c8, d1531 as c9, d1530 as c10, d1533 as c11, d1532 as c12, d1535 as c13, d1534 as c14, d1539 as c15 } from '../descriptors/data.js?sdk=f67f6eaf1051f21ec6ba8a2fb3534a619d1f5d2afe43c079dcee44663fec8859';
import { d1539 } from '../descriptors/data.js?sdk=f67f6eaf1051f21ec6ba8a2fb3534a619d1f5d2afe43c079dcee44663fec8859';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1539;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MerchantWebhookEnvelope"]:c0(),["SharedCodec199"]:c1(),["SharedCodec281"]:c2(),["SharedCodec284"]:c3(),["SharedCodec414"]:c4(),["SharedCodec415"]:c5(),["SharedCodec416"]:c6(),["SharedCodec417"]:c7(),["SharedCodec418"]:c8(),["SharedCodec419"]:c9(),["SharedCodec420"]:c10(),["SharedCodec421"]:c11(),["SharedCodec422"]:c12(),["SharedCodec423"]:c13(),["SharedCodec424"]:c14(),["Webhook_order_partially_paid_merchant"]:c15()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeWebhook_order_partially_paid_merchant(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
