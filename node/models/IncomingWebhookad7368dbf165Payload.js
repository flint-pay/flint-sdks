import { d1355 as c0, d1911 as c1, d919 as c2, d918 as c3, d2526 as c4 } from '../descriptors/data.js?sdk=40abaf2a2616e8b74370ab25f8d4a8faced3f68b7d58057fcd11631bbc8038f0';
import { d1355 } from '../descriptors/data.js?sdk=40abaf2a2616e8b74370ab25f8d4a8faced3f68b7d58057fcd11631bbc8038f0';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1355;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["IncomingWebhookad7368dbf165Payload"]:c0(),["PartnerInstallEventPayload"]:c1(),["PartnerWebhookEnvelope"]:c2(),["SharedCodec280"]:c3(),["Webhook_partner_app_install_created_partner_app"]:c4()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeIncomingWebhookad7368dbf165Payload(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
