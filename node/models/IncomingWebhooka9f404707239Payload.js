import { d1366 as c0, d893 as c1, d901 as c2, d490 as c3, d892 as c4, d895 as c5, d900 as c6, d1362 as c7, d1364 as c8, d1365 as c9, d1363 as c10 } from '../descriptors/data.js?sdk=245b7fb11d6174517fe5d194b5fb87c42348ace248a5c84bbab9ef7bfe2b9e5e';
import { d1366 } from '../descriptors/data.js?sdk=245b7fb11d6174517fe5d194b5fb87c42348ace248a5c84bbab9ef7bfe2b9e5e';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1366;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["IncomingWebhooka9f404707239Payload"]:c0(),["MerchantWebhookEnvelope"]:c1(),["PartnerWebhookEnvelope"]:c2(),["SharedCodec170"]:c3(),["SharedCodec246"]:c4(),["SharedCodec249"]:c5(),["SharedCodec251"]:c6(),["SharedCodec354"]:c7(),["SharedCodec355"]:c8(),["Webhook_invoice_collection_blocked_installed_merchants"]:c9(),["Webhook_invoice_collection_blocked_merchant"]:c10()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeIncomingWebhooka9f404707239Payload(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
