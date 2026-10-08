import { d1531 as c0, d893 as c1, d901 as c2, d490 as c3, d892 as c4, d900 as c5, d1527 as c6, d1529 as c7, d1530 as c8, d1528 as c9 } from '../descriptors/data.js?sdk=245b7fb11d6174517fe5d194b5fb87c42348ace248a5c84bbab9ef7bfe2b9e5e';
import { d1531 } from '../descriptors/data.js?sdk=245b7fb11d6174517fe5d194b5fb87c42348ace248a5c84bbab9ef7bfe2b9e5e';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1531;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["IncomingWebhookeff38a7dc9a0Payload"]:c0(),["MerchantWebhookEnvelope"]:c1(),["PartnerWebhookEnvelope"]:c2(),["SharedCodec170"]:c3(),["SharedCodec246"]:c4(),["SharedCodec251"]:c5(),["SharedCodec382"]:c6(),["SharedCodec383"]:c7(),["Webhook_customer_deletion_rejected_installed_merchants"]:c8(),["Webhook_customer_deletion_rejected_merchant"]:c9()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeIncomingWebhookeff38a7dc9a0Payload(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
