import { d1508 as c0, d1947 as c1, d938 as c2, d937 as c3, d2566 as c4 } from '../descriptors/data.js?sdk=ba066cb5d42061b50ddb74a9a955bfa66adbe16252255af2a884092ee5130eba';
import { d1508 } from '../descriptors/data.js?sdk=ba066cb5d42061b50ddb74a9a955bfa66adbe16252255af2a884092ee5130eba';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1508;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["IncomingWebhooke22691fcc424Payload"]:c0(),["PartnerEnvironmentGrantEventPayload"]:c1(),["PartnerWebhookEnvelope"]:c2(),["SharedCodec287"]:c3(),["Webhook_partner_app_install_environment_grant_created_partner_app"]:c4()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeIncomingWebhooke22691fcc424Payload(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
