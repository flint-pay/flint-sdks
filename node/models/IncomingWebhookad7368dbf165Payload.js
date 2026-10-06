import { d1383 as c0, d1948 as c1, d938 as c2, d937 as c3, d2565 as c4 } from '../descriptors/data.js?sdk=23304d0710327c07c2c4a303230dbb22d6b14f651af3363cdef910b4916b65b9';
import { d1383 } from '../descriptors/data.js?sdk=23304d0710327c07c2c4a303230dbb22d6b14f651af3363cdef910b4916b65b9';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1383;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["IncomingWebhookad7368dbf165Payload"]:c0(),["PartnerInstallEventPayload"]:c1(),["PartnerWebhookEnvelope"]:c2(),["SharedCodec287"]:c3(),["Webhook_partner_app_install_created_partner_app"]:c4()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeIncomingWebhookad7368dbf165Payload(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
