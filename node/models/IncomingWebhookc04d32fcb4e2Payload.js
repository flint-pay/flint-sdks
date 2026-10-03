import { d1401 as c0, d909 as c1, d917 as c2, d515 as c3, d908 as c4, d911 as c5, d916 as c6, d1397 as c7, d1399 as c8, d1400 as c9, d1398 as c10 } from '../descriptors/data.js?sdk=1062b2a87ddfc25f3a8458c3e67aea98a29a33dcad943f63dceff9390190307c';
import { d1401 } from '../descriptors/data.js?sdk=1062b2a87ddfc25f3a8458c3e67aea98a29a33dcad943f63dceff9390190307c';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1401;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["IncomingWebhookc04d32fcb4e2Payload"]:c0(),["MerchantWebhookEnvelope"]:c1(),["PartnerWebhookEnvelope"]:c2(),["SharedCodec197"]:c3(),["SharedCodec275"]:c4(),["SharedCodec278"]:c5(),["SharedCodec280"]:c6(),["SharedCodec386"]:c7(),["SharedCodec387"]:c8(),["Webhook_invoice_collection_block_resolved_installed_merchants"]:c9(),["Webhook_invoice_collection_block_resolved_merchant"]:c10()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeIncomingWebhookc04d32fcb4e2Payload(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
