import { d1420 as c0, d893 as c1, d901 as c2, d490 as c3, d892 as c4, d895 as c5, d900 as c6, d1416 as c7, d1418 as c8, d1419 as c9, d1417 as c10 } from '../descriptors/data.js?sdk=245b7fb11d6174517fe5d194b5fb87c42348ace248a5c84bbab9ef7bfe2b9e5e';
import { d1420 } from '../descriptors/data.js?sdk=245b7fb11d6174517fe5d194b5fb87c42348ace248a5c84bbab9ef7bfe2b9e5e';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1420;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["IncomingWebhookc04d32fcb4e2Payload"]:c0(),["MerchantWebhookEnvelope"]:c1(),["PartnerWebhookEnvelope"]:c2(),["SharedCodec170"]:c3(),["SharedCodec246"]:c4(),["SharedCodec249"]:c5(),["SharedCodec251"]:c6(),["SharedCodec367"]:c7(),["SharedCodec368"]:c8(),["Webhook_invoice_collection_block_resolved_installed_merchants"]:c9(),["Webhook_invoice_collection_block_resolved_merchant"]:c10()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeIncomingWebhookc04d32fcb4e2Payload(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
