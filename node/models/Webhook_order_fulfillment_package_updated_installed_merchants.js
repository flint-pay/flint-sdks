import { d919 as c0, d918 as c1, d922 as c2, d938 as c3, d939 as c4, d942 as c5, d940 as c6, d941 as c7, d943 as c8, d1292 as c9, d1295 as c10, d1296 as c11 } from '../descriptors/data.js?sdk=40abaf2a2616e8b74370ab25f8d4a8faced3f68b7d58057fcd11631bbc8038f0';
import { d1296 } from '../descriptors/data.js?sdk=40abaf2a2616e8b74370ab25f8d4a8faced3f68b7d58057fcd11631bbc8038f0';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1296;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["PartnerWebhookEnvelope"]:c0(),["SharedCodec280"]:c1(),["SharedCodec282"]:c2(),["SharedCodec289"]:c3(),["SharedCodec290"]:c4(),["SharedCodec291"]:c5(),["SharedCodec292"]:c6(),["SharedCodec293"]:c7(),["SharedCodec294"]:c8(),["SharedCodec361"]:c9(),["SharedCodec362"]:c10(),["Webhook_order_fulfillment_package_updated_installed_merchants"]:c11()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeWebhook_order_fulfillment_package_updated_installed_merchants(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
