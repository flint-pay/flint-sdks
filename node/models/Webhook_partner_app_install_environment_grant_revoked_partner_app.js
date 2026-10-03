import { d1907 as c0, d917 as c1, d916 as c2, d2525 as c3 } from '../descriptors/data.js?sdk=a6b376902242b69271e8ff7d7046c24b4e5476233434e4180a046d09fed7dde4';
import { d2525 } from '../descriptors/data.js?sdk=a6b376902242b69271e8ff7d7046c24b4e5476233434e4180a046d09fed7dde4';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2525;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["PartnerEnvironmentGrantEventPayload"]:c0(),["PartnerWebhookEnvelope"]:c1(),["SharedCodec280"]:c2(),["Webhook_partner_app_install_environment_grant_revoked_partner_app"]:c3()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeWebhook_partner_app_install_environment_grant_revoked_partner_app(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
