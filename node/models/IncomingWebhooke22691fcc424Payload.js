import { d1515 as c0, d1954 as c1, d944 as c2, d943 as c3, d2573 as c4 } from '../descriptors/data.js?sdk=1d377b406cf4feb3f1c2665a879357eb94a4280792cb4955cdbef8af750adf8d';
import { d1515 } from '../descriptors/data.js?sdk=1d377b406cf4feb3f1c2665a879357eb94a4280792cb4955cdbef8af750adf8d';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1515;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["IncomingWebhooke22691fcc424Payload"]:c0(),["PartnerEnvironmentGrantEventPayload"]:c1(),["PartnerWebhookEnvelope"]:c2(),["SharedCodec291"]:c3(),["Webhook_partner_app_install_environment_grant_created_partner_app"]:c4()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeIncomingWebhooke22691fcc424Payload(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
