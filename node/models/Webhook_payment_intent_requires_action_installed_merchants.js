import { d919 as c0, d914 as c1, d913 as c2, d917 as c3, d918 as c4, d920 as c5 } from '../descriptors/data.js?sdk=40abaf2a2616e8b74370ab25f8d4a8faced3f68b7d58057fcd11631bbc8038f0';
import { d920 } from '../descriptors/data.js?sdk=40abaf2a2616e8b74370ab25f8d4a8faced3f68b7d58057fcd11631bbc8038f0';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d920;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["PartnerWebhookEnvelope"]:c0(),["SharedCodec277"]:c1(),["SharedCodec278"]:c2(),["SharedCodec279"]:c3(),["SharedCodec280"]:c4(),["Webhook_payment_intent_requires_action_installed_merchants"]:c5()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeWebhook_payment_intent_requires_action_installed_merchants(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
