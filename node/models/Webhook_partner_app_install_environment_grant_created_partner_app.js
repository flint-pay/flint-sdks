import { d1947 as c0, d938 as c1, d937 as c2, d2566 as c3 } from '../descriptors/data.js?sdk=ba066cb5d42061b50ddb74a9a955bfa66adbe16252255af2a884092ee5130eba';
import { d2566 } from '../descriptors/data.js?sdk=ba066cb5d42061b50ddb74a9a955bfa66adbe16252255af2a884092ee5130eba';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2566;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["PartnerEnvironmentGrantEventPayload"]:c0(),["PartnerWebhookEnvelope"]:c1(),["SharedCodec287"]:c2(),["Webhook_partner_app_install_environment_grant_created_partner_app"]:c3()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeWebhook_partner_app_install_environment_grant_created_partner_app(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
