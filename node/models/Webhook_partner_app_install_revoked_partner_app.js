import { d1948 as c0, d938 as c1, d937 as c2, d2569 as c3 } from '../descriptors/data.js?sdk=23304d0710327c07c2c4a303230dbb22d6b14f651af3363cdef910b4916b65b9';
import { d2569 } from '../descriptors/data.js?sdk=23304d0710327c07c2c4a303230dbb22d6b14f651af3363cdef910b4916b65b9';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2569;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["PartnerInstallEventPayload"]:c0(),["PartnerWebhookEnvelope"]:c1(),["SharedCodec287"]:c2(),["Webhook_partner_app_install_revoked_partner_app"]:c3()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeWebhook_partner_app_install_revoked_partner_app(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
