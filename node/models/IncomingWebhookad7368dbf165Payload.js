import { d1353 as c0, d1909 as c1, d917 as c2, d916 as c3, d2524 as c4 } from '../descriptors/data.js?sdk=41ea09ad124ffa3bdfba4a8208bd0391cd6fb609c70d062a00cb64936b55a83b';
import { d1353 } from '../descriptors/data.js?sdk=41ea09ad124ffa3bdfba4a8208bd0391cd6fb609c70d062a00cb64936b55a83b';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1353;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["IncomingWebhookad7368dbf165Payload"]:c0(),["PartnerInstallEventPayload"]:c1(),["PartnerWebhookEnvelope"]:c2(),["SharedCodec280"]:c3(),["Webhook_partner_app_install_created_partner_app"]:c4()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeIncomingWebhookad7368dbf165Payload(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
