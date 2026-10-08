import { d1953 as c0, d901 as c1, d900 as c2, d2610 as c3 } from '../descriptors/data.js?sdk=245b7fb11d6174517fe5d194b5fb87c42348ace248a5c84bbab9ef7bfe2b9e5e';
import { d2610 } from '../descriptors/data.js?sdk=245b7fb11d6174517fe5d194b5fb87c42348ace248a5c84bbab9ef7bfe2b9e5e';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2610;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["PartnerInstallEventPayload"]:c0(),["PartnerWebhookEnvelope"]:c1(),["SharedCodec251"]:c2(),["Webhook_partner_app_install_permissions_updated_partner_app"]:c3()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeWebhook_partner_app_install_permissions_updated_partner_app(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
