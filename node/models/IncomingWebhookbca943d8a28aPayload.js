import { d1410 as c0, d893 as c1, d901 as c2, d490 as c3, d892 as c4, d897 as c5, d896 as c6, d895 as c7, d899 as c8, d900 as c9, d1409 as c10, d1408 as c11 } from '../descriptors/data.js?sdk=245b7fb11d6174517fe5d194b5fb87c42348ace248a5c84bbab9ef7bfe2b9e5e';
import { d1410 } from '../descriptors/data.js?sdk=245b7fb11d6174517fe5d194b5fb87c42348ace248a5c84bbab9ef7bfe2b9e5e';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1410;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["IncomingWebhookbca943d8a28aPayload"]:c0(),["MerchantWebhookEnvelope"]:c1(),["PartnerWebhookEnvelope"]:c2(),["SharedCodec170"]:c3(),["SharedCodec246"]:c4(),["SharedCodec247"]:c5(),["SharedCodec248"]:c6(),["SharedCodec249"]:c7(),["SharedCodec250"]:c8(),["SharedCodec251"]:c9(),["Webhook_payment_intent_payment_failed_installed_merchants"]:c10(),["Webhook_payment_intent_payment_failed_merchant"]:c11()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeIncomingWebhookbca943d8a28aPayload(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
