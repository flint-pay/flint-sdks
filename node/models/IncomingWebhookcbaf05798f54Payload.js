import { d1288 as c0, d1761 as c1, d823 as c2, d822 as c3, d2356 as c4 } from '../descriptors/data.js?sdk=bef5952824dbe0867acb5a07673ca91102b136eda21794fff718a3addd296a2a';
import { d1288 } from '../descriptors/data.js?sdk=bef5952824dbe0867acb5a07673ca91102b136eda21794fff718a3addd296a2a';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1288;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["IncomingWebhookcbaf05798f54Payload"]:c0(),["PartnerInstallEventPayload"]:c1(),["PartnerWebhookEnvelope"]:c2(),["SharedCodec249"]:c3(),["Webhook_partner_app_install_updated_partner_app"]:c4()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeIncomingWebhookcbaf05798f54Payload(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
