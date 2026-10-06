import { d1428 as c0, d1922 as c1, d924 as c2, d923 as c3, d2543 as c4 } from '../descriptors/data.js?sdk=f67f6eaf1051f21ec6ba8a2fb3534a619d1f5d2afe43c079dcee44663fec8859';
import { d1428 } from '../descriptors/data.js?sdk=f67f6eaf1051f21ec6ba8a2fb3534a619d1f5d2afe43c079dcee44663fec8859';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1428;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["IncomingWebhookcbaf05798f54Payload"]:c0(),["PartnerInstallEventPayload"]:c1(),["PartnerWebhookEnvelope"]:c2(),["SharedCodec286"]:c3(),["Webhook_partner_app_install_updated_partner_app"]:c4()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeIncomingWebhookcbaf05798f54Payload(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
