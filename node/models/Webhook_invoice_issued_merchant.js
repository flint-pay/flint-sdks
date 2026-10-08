import { d893 as c0, d490 as c1, d892 as c2, d895 as c3, d1000 as c4, d1001 as c5 } from '../descriptors/data.js?sdk=245b7fb11d6174517fe5d194b5fb87c42348ace248a5c84bbab9ef7bfe2b9e5e';
import { d1001 } from '../descriptors/data.js?sdk=245b7fb11d6174517fe5d194b5fb87c42348ace248a5c84bbab9ef7bfe2b9e5e';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1001;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MerchantWebhookEnvelope"]:c0(),["SharedCodec170"]:c1(),["SharedCodec246"]:c2(),["SharedCodec249"]:c3(),["SharedCodec282"]:c4(),["Webhook_invoice_issued_merchant"]:c5()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeWebhook_invoice_issued_merchant(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
