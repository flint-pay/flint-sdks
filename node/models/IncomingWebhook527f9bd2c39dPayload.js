import { d1125 as c0, d893 as c1, d490 as c2, d892 as c3, d2617 as c4 } from '../descriptors/data.js?sdk=245b7fb11d6174517fe5d194b5fb87c42348ace248a5c84bbab9ef7bfe2b9e5e';
import { d1125 } from '../descriptors/data.js?sdk=245b7fb11d6174517fe5d194b5fb87c42348ace248a5c84bbab9ef7bfe2b9e5e';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1125;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["IncomingWebhook527f9bd2c39dPayload"]:c0(),["MerchantWebhookEnvelope"]:c1(),["SharedCodec170"]:c2(),["SharedCodec246"]:c3(),["Webhook_payout_destination_disabled_merchant"]:c4()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeIncomingWebhook527f9bd2c39dPayload(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
