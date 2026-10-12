import { d1084 as c0, d893 as c1, d901 as c2, d490 as c3, d892 as c4, d895 as c5, d900 as c6, d1080 as c7, d1082 as c8, d1083 as c9, d1081 as c10 } from '../descriptors/data.js?sdk=f52d30b14a1c286c1efe9a110f4087e084c68c57774eb8c111836fdb26fbef01';
import { d1084 } from '../descriptors/data.js?sdk=f52d30b14a1c286c1efe9a110f4087e084c68c57774eb8c111836fdb26fbef01';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1084;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["IncomingWebhook3bed705c5a7fPayload"]:c0(),["MerchantWebhookEnvelope"]:c1(),["PartnerWebhookEnvelope"]:c2(),["SharedCodec170"]:c3(),["SharedCodec246"]:c4(),["SharedCodec249"]:c5(),["SharedCodec251"]:c6(),["SharedCodec298"]:c7(),["SharedCodec299"]:c8(),["Webhook_invoice_marked_uncollectible_installed_merchants"]:c9(),["Webhook_invoice_marked_uncollectible_merchant"]:c10()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeIncomingWebhook3bed705c5a7fPayload(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
