import { d1457 as c0, d1952 as c1, d901 as c2, d900 as c3, d2609 as c4 } from '../descriptors/data.js?sdk=658e960cd5fac48cd38e1dd15296958df0d104dd5904c2165f4e3078746d39e7';
import { d1457 } from '../descriptors/data.js?sdk=658e960cd5fac48cd38e1dd15296958df0d104dd5904c2165f4e3078746d39e7';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1457;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["IncomingWebhookd2d184df8ba4Payload"]:c0(),["PartnerEnvironmentGrantEventPayload"]:c1(),["PartnerWebhookEnvelope"]:c2(),["SharedCodec251"]:c3(),["Webhook_partner_app_install_environment_grant_revoked_partner_app"]:c4()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeIncomingWebhookd2d184df8ba4Payload(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
