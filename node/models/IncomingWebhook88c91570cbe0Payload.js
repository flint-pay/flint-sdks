import { d1273 as c0, d1953 as c1, d901 as c2, d900 as c3, d2611 as c4 } from '../descriptors/data.js?sdk=658e960cd5fac48cd38e1dd15296958df0d104dd5904c2165f4e3078746d39e7';
import { d1273 } from '../descriptors/data.js?sdk=658e960cd5fac48cd38e1dd15296958df0d104dd5904c2165f4e3078746d39e7';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1273;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["IncomingWebhook88c91570cbe0Payload"]:c0(),["PartnerInstallEventPayload"]:c1(),["PartnerWebhookEnvelope"]:c2(),["SharedCodec251"]:c3(),["Webhook_partner_app_install_revoked_partner_app"]:c4()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeIncomingWebhook88c91570cbe0Payload(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
