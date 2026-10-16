import { d1275 as c0, d1964 as c1, d903 as c2, d902 as c3, d2627 as c4 } from '../descriptors/data.js?sdk=50f9c16f4dffbb7ff2528d427a616050712fc55fd9a73bec783011e006d2d7be';
import { d1275 } from '../descriptors/data.js?sdk=50f9c16f4dffbb7ff2528d427a616050712fc55fd9a73bec783011e006d2d7be';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1275;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["IncomingWebhook88c91570cbe0Payload"]:c0(),["PartnerInstallEventPayload"]:c1(),["PartnerWebhookEnvelope"]:c2(),["SharedCodec252"]:c3(),["Webhook_partner_app_install_revoked_partner_app"]:c4()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeIncomingWebhook88c91570cbe0Payload(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
