import { d986 as c0, d911 as c1, d919 as c2, d517 as c3, d910 as c4, d918 as c5, d982 as c6, d984 as c7, d985 as c8, d983 as c9 } from '../descriptors/data.js?sdk=40abaf2a2616e8b74370ab25f8d4a8faced3f68b7d58057fcd11631bbc8038f0';
import { d986 } from '../descriptors/data.js?sdk=40abaf2a2616e8b74370ab25f8d4a8faced3f68b7d58057fcd11631bbc8038f0';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d986;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["IncomingWebhook172f57408f3aPayload"]:c0(),["MerchantWebhookEnvelope"]:c1(),["PartnerWebhookEnvelope"]:c2(),["SharedCodec197"]:c3(),["SharedCodec275"]:c4(),["SharedCodec280"]:c5(),["SharedCodec306"]:c6(),["SharedCodec307"]:c7(),["Webhook_checkout_session_invalidated_installed_merchants"]:c8(),["Webhook_checkout_session_invalidated_merchant"]:c9()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeIncomingWebhook172f57408f3aPayload(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
