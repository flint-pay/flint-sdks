import { d1908 as c0, d917 as c1, d916 as c2, d2523 as c3 } from '../descriptors/data.js?sdk=a6b376902242b69271e8ff7d7046c24b4e5476233434e4180a046d09fed7dde4';
import { d2523 } from '../descriptors/data.js?sdk=a6b376902242b69271e8ff7d7046c24b4e5476233434e4180a046d09fed7dde4';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2523;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["PartnerInstallEventPayload"]:c0(),["PartnerWebhookEnvelope"]:c1(),["SharedCodec280"]:c2(),["Webhook_partner_app_install_created_partner_app"]:c3()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeWebhook_partner_app_install_created_partner_app(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
