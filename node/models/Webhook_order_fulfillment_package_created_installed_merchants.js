import { d917 as c0, d916 as c1, d936 as c2, d937 as c3, d940 as c4, d938 as c5, d939 as c6, d941 as c7, d944 as c8, d945 as c9 } from '../descriptors/data.js?sdk=a6b376902242b69271e8ff7d7046c24b4e5476233434e4180a046d09fed7dde4';
import { d945 } from '../descriptors/data.js?sdk=a6b376902242b69271e8ff7d7046c24b4e5476233434e4180a046d09fed7dde4';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d945;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["PartnerWebhookEnvelope"]:c0(),["SharedCodec280"]:c1(),["SharedCodec289"]:c2(),["SharedCodec290"]:c3(),["SharedCodec291"]:c4(),["SharedCodec292"]:c5(),["SharedCodec293"]:c6(),["SharedCodec294"]:c7(),["SharedCodec295"]:c8(),["Webhook_order_fulfillment_package_created_installed_merchants"]:c9()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeWebhook_order_fulfillment_package_created_installed_merchants(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
