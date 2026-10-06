import { d1947 as c0, d938 as c1, d937 as c2, d2567 as c3 } from '../descriptors/data.js?sdk=527d9352908a453ad41ae99b8ef20015f463fff9697dd74e49111f49715fee29';
import { d2567 } from '../descriptors/data.js?sdk=527d9352908a453ad41ae99b8ef20015f463fff9697dd74e49111f49715fee29';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2567;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["PartnerEnvironmentGrantEventPayload"]:c0(),["PartnerWebhookEnvelope"]:c1(),["SharedCodec287"]:c2(),["Webhook_partner_app_install_environment_grant_revoked_partner_app"]:c3()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeWebhook_partner_app_install_environment_grant_revoked_partner_app(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
