import { d947 as c0, d1964 as c1, d903 as c2, d902 as c3, d2626 as c4 } from '../descriptors/data.js?sdk=e3d9889159843c7c48c93704fe031dc30213693cb8266d78ea7ca38cc46462af';
import { d947 } from '../descriptors/data.js?sdk=e3d9889159843c7c48c93704fe031dc30213693cb8266d78ea7ca38cc46462af';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d947;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["IncomingWebhook10de2029f92ePayload"]:c0(),["PartnerInstallEventPayload"]:c1(),["PartnerWebhookEnvelope"]:c2(),["SharedCodec252"]:c3(),["Webhook_partner_app_install_permissions_updated_partner_app"]:c4()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeIncomingWebhook10de2029f92ePayload(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
