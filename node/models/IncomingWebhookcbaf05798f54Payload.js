import { d1441 as c0, d1953 as c1, d901 as c2, d900 as c3, d2612 as c4 } from '../descriptors/data.js?sdk=f52d30b14a1c286c1efe9a110f4087e084c68c57774eb8c111836fdb26fbef01';
import { d1441 } from '../descriptors/data.js?sdk=f52d30b14a1c286c1efe9a110f4087e084c68c57774eb8c111836fdb26fbef01';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1441;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["IncomingWebhookcbaf05798f54Payload"]:c0(),["PartnerInstallEventPayload"]:c1(),["PartnerWebhookEnvelope"]:c2(),["SharedCodec251"]:c3(),["Webhook_partner_app_install_updated_partner_app"]:c4()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeIncomingWebhookcbaf05798f54Payload(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
