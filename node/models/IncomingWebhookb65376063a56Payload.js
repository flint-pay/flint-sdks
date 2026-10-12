import { d1400 as c0, d893 as c1, d901 as c2, d490 as c3, d892 as c4, d895 as c5, d900 as c6, d1396 as c7, d1398 as c8, d1399 as c9, d1397 as c10 } from '../descriptors/data.js?sdk=f52d30b14a1c286c1efe9a110f4087e084c68c57774eb8c111836fdb26fbef01';
import { d1400 } from '../descriptors/data.js?sdk=f52d30b14a1c286c1efe9a110f4087e084c68c57774eb8c111836fdb26fbef01';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1400;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["IncomingWebhookb65376063a56Payload"]:c0(),["MerchantWebhookEnvelope"]:c1(),["PartnerWebhookEnvelope"]:c2(),["SharedCodec170"]:c3(),["SharedCodec246"]:c4(),["SharedCodec249"]:c5(),["SharedCodec251"]:c6(),["SharedCodec365"]:c7(),["SharedCodec366"]:c8(),["Webhook_invoice_issue_failed_installed_merchants"]:c9(),["Webhook_invoice_issue_failed_merchant"]:c10()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeIncomingWebhookb65376063a56Payload(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
