import { d924 as c0, d923 as c1, d943 as c2, d944 as c3, d947 as c4, d945 as c5, d946 as c6, d948 as c7, d951 as c8, d952 as c9 } from '../descriptors/data.js?sdk=f67f6eaf1051f21ec6ba8a2fb3534a619d1f5d2afe43c079dcee44663fec8859';
import { d952 } from '../descriptors/data.js?sdk=f67f6eaf1051f21ec6ba8a2fb3534a619d1f5d2afe43c079dcee44663fec8859';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d952;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["PartnerWebhookEnvelope"]:c0(),["SharedCodec286"]:c1(),["SharedCodec295"]:c2(),["SharedCodec296"]:c3(),["SharedCodec297"]:c4(),["SharedCodec298"]:c5(),["SharedCodec299"]:c6(),["SharedCodec300"]:c7(),["SharedCodec301"]:c8(),["Webhook_order_fulfillment_package_created_installed_merchants"]:c9()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeWebhook_order_fulfillment_package_created_installed_merchants(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
