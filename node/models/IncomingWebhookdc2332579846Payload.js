import { d1487 as c0, d893 as c1, d901 as c2, d490 as c3, d892 as c4, d900 as c5, d932 as c6, d1486 as c7, d1485 as c8 } from '../descriptors/data.js?sdk=245b7fb11d6174517fe5d194b5fb87c42348ace248a5c84bbab9ef7bfe2b9e5e';
import { d1487 } from '../descriptors/data.js?sdk=245b7fb11d6174517fe5d194b5fb87c42348ace248a5c84bbab9ef7bfe2b9e5e';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1487;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["IncomingWebhookdc2332579846Payload"]:c0(),["MerchantWebhookEnvelope"]:c1(),["PartnerWebhookEnvelope"]:c2(),["SharedCodec170"]:c3(),["SharedCodec246"]:c4(),["SharedCodec251"]:c5(),["SharedCodec267"]:c6(),["Webhook_return_resolution_updated_installed_merchants"]:c7(),["Webhook_return_resolution_updated_merchant"]:c8()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeIncomingWebhookdc2332579846Payload(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
