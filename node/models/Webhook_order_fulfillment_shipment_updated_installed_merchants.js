import { d919 as c0, d918 as c1, d922 as c2, d938 as c3, d939 as c4, d943 as c5, d1366 as c6, d1369 as c7, d1370 as c8 } from '../descriptors/data.js?sdk=40abaf2a2616e8b74370ab25f8d4a8faced3f68b7d58057fcd11631bbc8038f0';
import { d1370 } from '../descriptors/data.js?sdk=40abaf2a2616e8b74370ab25f8d4a8faced3f68b7d58057fcd11631bbc8038f0';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1370;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["PartnerWebhookEnvelope"]:c0(),["SharedCodec280"]:c1(),["SharedCodec282"]:c2(),["SharedCodec289"]:c3(),["SharedCodec290"]:c4(),["SharedCodec294"]:c5(),["SharedCodec381"]:c6(),["SharedCodec382"]:c7(),["Webhook_order_fulfillment_shipment_updated_installed_merchants"]:c8()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeWebhook_order_fulfillment_shipment_updated_installed_merchants(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
