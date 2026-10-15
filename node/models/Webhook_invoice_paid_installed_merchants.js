import { d903 as c0, d902 as c1, d963 as c2, d964 as c3 } from '../descriptors/data.js?sdk=e3d9889159843c7c48c93704fe031dc30213693cb8266d78ea7ca38cc46462af';
import { d964 } from '../descriptors/data.js?sdk=e3d9889159843c7c48c93704fe031dc30213693cb8266d78ea7ca38cc46462af';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d964;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["PartnerWebhookEnvelope"]:c0(),["SharedCodec252"]:c1(),["SharedCodec277"]:c2(),["Webhook_invoice_paid_installed_merchants"]:c3()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeWebhook_invoice_paid_installed_merchants(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
