import { d919 as c0, d918 as c1, d1105 as c2, d1108 as c3, d1109 as c4 } from '../descriptors/data.js?sdk=40abaf2a2616e8b74370ab25f8d4a8faced3f68b7d58057fcd11631bbc8038f0';
import { d1109 } from '../descriptors/data.js?sdk=40abaf2a2616e8b74370ab25f8d4a8faced3f68b7d58057fcd11631bbc8038f0';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1109;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["PartnerWebhookEnvelope"]:c0(),["SharedCodec280"]:c1(),["SharedCodec327"]:c2(),["SharedCodec328"]:c3(),["Webhook_subscription_cancellation_scheduled_installed_merchants"]:c4()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeWebhook_subscription_cancellation_scheduled_installed_merchants(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
