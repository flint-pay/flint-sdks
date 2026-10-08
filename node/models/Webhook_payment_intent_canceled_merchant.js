import { d893 as c0, d490 as c1, d892 as c2, d897 as c3, d896 as c4, d895 as c5, d1524 as c6 } from '../descriptors/data.js?sdk=245b7fb11d6174517fe5d194b5fb87c42348ace248a5c84bbab9ef7bfe2b9e5e';
import { d1524 } from '../descriptors/data.js?sdk=245b7fb11d6174517fe5d194b5fb87c42348ace248a5c84bbab9ef7bfe2b9e5e';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1524;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MerchantWebhookEnvelope"]:c0(),["SharedCodec170"]:c1(),["SharedCodec246"]:c2(),["SharedCodec247"]:c3(),["SharedCodec248"]:c4(),["SharedCodec249"]:c5(),["Webhook_payment_intent_canceled_merchant"]:c6()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeWebhook_payment_intent_canceled_merchant(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
