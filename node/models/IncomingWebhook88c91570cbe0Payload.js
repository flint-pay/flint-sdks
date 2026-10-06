import { d1286 as c0, d1948 as c1, d938 as c2, d937 as c3, d2569 as c4 } from '../descriptors/data.js?sdk=23304d0710327c07c2c4a303230dbb22d6b14f651af3363cdef910b4916b65b9';
import { d1286 } from '../descriptors/data.js?sdk=23304d0710327c07c2c4a303230dbb22d6b14f651af3363cdef910b4916b65b9';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1286;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["IncomingWebhook88c91570cbe0Payload"]:c0(),["PartnerInstallEventPayload"]:c1(),["PartnerWebhookEnvelope"]:c2(),["SharedCodec287"]:c3(),["Webhook_partner_app_install_revoked_partner_app"]:c4()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeIncomingWebhook88c91570cbe0Payload(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
