import { d1597 as c0, d936 as c1, d944 as c2, d526 as c3, d935 as c4, d943 as c5, d975 as c6, d1596 as c7, d1595 as c8 } from '../descriptors/data.js?sdk=1d377b406cf4feb3f1c2665a879357eb94a4280792cb4955cdbef8af750adf8d';
import { d1597 } from '../descriptors/data.js?sdk=1d377b406cf4feb3f1c2665a879357eb94a4280792cb4955cdbef8af750adf8d';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1597;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["IncomingWebhookfd258d9a47caPayload"]:c0(),["MerchantWebhookEnvelope"]:c1(),["PartnerWebhookEnvelope"]:c2(),["SharedCodec199"]:c3(),["SharedCodec286"]:c4(),["SharedCodec291"]:c5(),["SharedCodec307"]:c6(),["Webhook_delivery_revocation_created_installed_merchants"]:c7(),["Webhook_delivery_revocation_created_merchant"]:c8()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeIncomingWebhookfd258d9a47caPayload(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
