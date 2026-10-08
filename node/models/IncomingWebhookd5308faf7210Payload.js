import { d1461 as c0, d893 as c1, d901 as c2, d490 as c3, d892 as c4, d900 as c5, d932 as c6, d1460 as c7, d1459 as c8 } from '../descriptors/data.js?sdk=245b7fb11d6174517fe5d194b5fb87c42348ace248a5c84bbab9ef7bfe2b9e5e';
import { d1461 } from '../descriptors/data.js?sdk=245b7fb11d6174517fe5d194b5fb87c42348ace248a5c84bbab9ef7bfe2b9e5e';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1461;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["IncomingWebhookd5308faf7210Payload"]:c0(),["MerchantWebhookEnvelope"]:c1(),["PartnerWebhookEnvelope"]:c2(),["SharedCodec170"]:c3(),["SharedCodec246"]:c4(),["SharedCodec251"]:c5(),["SharedCodec267"]:c6(),["Webhook_return_inspection_acceptance_decided_installed_merchants"]:c7(),["Webhook_return_inspection_acceptance_decided_merchant"]:c8()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeIncomingWebhookd5308faf7210Payload(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
