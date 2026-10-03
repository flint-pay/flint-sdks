import { d1477 as c0, d1907 as c1, d917 as c2, d916 as c3, d2524 as c4 } from '../descriptors/data.js?sdk=a6b376902242b69271e8ff7d7046c24b4e5476233434e4180a046d09fed7dde4';
import { d1477 } from '../descriptors/data.js?sdk=a6b376902242b69271e8ff7d7046c24b4e5476233434e4180a046d09fed7dde4';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1477;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["IncomingWebhooke22691fcc424Payload"]:c0(),["PartnerEnvironmentGrantEventPayload"]:c1(),["PartnerWebhookEnvelope"]:c2(),["SharedCodec280"]:c3(),["Webhook_partner_app_install_environment_grant_created_partner_app"]:c4()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeIncomingWebhooke22691fcc424Payload(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
