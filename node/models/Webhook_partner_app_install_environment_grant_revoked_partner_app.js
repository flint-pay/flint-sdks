import { d1963 as c0, d903 as c1, d902 as c2, d2625 as c3 } from '../descriptors/data.js?sdk=e3d9889159843c7c48c93704fe031dc30213693cb8266d78ea7ca38cc46462af';
import { d2625 } from '../descriptors/data.js?sdk=e3d9889159843c7c48c93704fe031dc30213693cb8266d78ea7ca38cc46462af';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2625;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["PartnerEnvironmentGrantEventPayload"]:c0(),["PartnerWebhookEnvelope"]:c1(),["SharedCodec252"]:c2(),["Webhook_partner_app_install_environment_grant_revoked_partner_app"]:c3()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeWebhook_partner_app_install_environment_grant_revoked_partner_app(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
