import { d1004 as c0, d893 as c1, d901 as c2, d490 as c3, d892 as c4, d895 as c5, d900 as c6, d1000 as c7, d1002 as c8, d1003 as c9, d1001 as c10 } from '../descriptors/data.js?sdk=245b7fb11d6174517fe5d194b5fb87c42348ace248a5c84bbab9ef7bfe2b9e5e';
import { d1004 } from '../descriptors/data.js?sdk=245b7fb11d6174517fe5d194b5fb87c42348ace248a5c84bbab9ef7bfe2b9e5e';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1004;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["IncomingWebhook274ba21f04d5Payload"]:c0(),["MerchantWebhookEnvelope"]:c1(),["PartnerWebhookEnvelope"]:c2(),["SharedCodec170"]:c3(),["SharedCodec246"]:c4(),["SharedCodec249"]:c5(),["SharedCodec251"]:c6(),["SharedCodec282"]:c7(),["SharedCodec283"]:c8(),["Webhook_invoice_issued_installed_merchants"]:c9(),["Webhook_invoice_issued_merchant"]:c10()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeIncomingWebhook274ba21f04d5Payload(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
