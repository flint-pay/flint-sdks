import { d1383 as c0, d1948 as c1, d938 as c2, d937 as c3, d2565 as c4 } from '../descriptors/data.js?sdk=527d9352908a453ad41ae99b8ef20015f463fff9697dd74e49111f49715fee29';
import { d1383 } from '../descriptors/data.js?sdk=527d9352908a453ad41ae99b8ef20015f463fff9697dd74e49111f49715fee29';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1383;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["IncomingWebhookad7368dbf165Payload"]:c0(),["PartnerInstallEventPayload"]:c1(),["PartnerWebhookEnvelope"]:c2(),["SharedCodec287"]:c3(),["Webhook_partner_app_install_created_partner_app"]:c4()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeIncomingWebhookad7368dbf165Payload(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
