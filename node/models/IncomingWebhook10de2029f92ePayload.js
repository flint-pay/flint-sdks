import { d968 as c0, d1922 as c1, d924 as c2, d923 as c3, d2541 as c4 } from '../descriptors/data.js?sdk=f67f6eaf1051f21ec6ba8a2fb3534a619d1f5d2afe43c079dcee44663fec8859';
import { d968 } from '../descriptors/data.js?sdk=f67f6eaf1051f21ec6ba8a2fb3534a619d1f5d2afe43c079dcee44663fec8859';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d968;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["IncomingWebhook10de2029f92ePayload"]:c0(),["PartnerInstallEventPayload"]:c1(),["PartnerWebhookEnvelope"]:c2(),["SharedCodec286"]:c3(),["Webhook_partner_app_install_permissions_updated_partner_app"]:c4()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeIncomingWebhook10de2029f92ePayload(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
