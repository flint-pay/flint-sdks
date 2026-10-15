import { d903 as c0, d902 as c1, d934 as c2, d1569 as c3 } from '../descriptors/data.js?sdk=e3d9889159843c7c48c93704fe031dc30213693cb8266d78ea7ca38cc46462af';
import { d1569 } from '../descriptors/data.js?sdk=e3d9889159843c7c48c93704fe031dc30213693cb8266d78ea7ca38cc46462af';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1569;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["PartnerWebhookEnvelope"]:c0(),["SharedCodec252"]:c1(),["SharedCodec268"]:c2(),["Webhook_delivery_location_set_activated_installed_merchants"]:c3()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeWebhook_delivery_location_set_activated_installed_merchants(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
