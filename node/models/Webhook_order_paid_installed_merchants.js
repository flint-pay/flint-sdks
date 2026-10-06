import { d924 as c0, d918 as c1, d923 as c2, d1537 as c3, d1536 as c4, d1529 as c5, d1528 as c6, d1531 as c7, d1530 as c8, d1533 as c9, d1532 as c10, d1535 as c11, d1534 as c12, d1551 as c13, d1552 as c14 } from '../descriptors/data.js?sdk=f67f6eaf1051f21ec6ba8a2fb3534a619d1f5d2afe43c079dcee44663fec8859';
import { d1552 } from '../descriptors/data.js?sdk=f67f6eaf1051f21ec6ba8a2fb3534a619d1f5d2afe43c079dcee44663fec8859';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1552;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["PartnerWebhookEnvelope"]:c0(),["SharedCodec284"]:c1(),["SharedCodec286"]:c2(),["SharedCodec415"]:c3(),["SharedCodec416"]:c4(),["SharedCodec417"]:c5(),["SharedCodec418"]:c6(),["SharedCodec419"]:c7(),["SharedCodec420"]:c8(),["SharedCodec421"]:c9(),["SharedCodec422"]:c10(),["SharedCodec423"]:c11(),["SharedCodec424"]:c12(),["SharedCodec427"]:c13(),["Webhook_order_paid_installed_merchants"]:c14()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeWebhook_order_paid_installed_merchants(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
