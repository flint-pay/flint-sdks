import { d1318 as c0, d893 as c1, d901 as c2, d490 as c3, d892 as c4, d900 as c5, d1314 as c6, d1316 as c7, d1317 as c8, d1315 as c9 } from '../descriptors/data.js?sdk=245b7fb11d6174517fe5d194b5fb87c42348ace248a5c84bbab9ef7bfe2b9e5e';
import { d1318 } from '../descriptors/data.js?sdk=245b7fb11d6174517fe5d194b5fb87c42348ace248a5c84bbab9ef7bfe2b9e5e';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1318;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["IncomingWebhook97e2715bf986Payload"]:c0(),["MerchantWebhookEnvelope"]:c1(),["PartnerWebhookEnvelope"]:c2(),["SharedCodec170"]:c3(),["SharedCodec246"]:c4(),["SharedCodec251"]:c5(),["SharedCodec344"]:c6(),["SharedCodec345"]:c7(),["Webhook_customer_deletion_completed_installed_merchants"]:c8(),["Webhook_customer_deletion_completed_merchant"]:c9()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeIncomingWebhook97e2715bf986Payload(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
