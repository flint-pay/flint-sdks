import { d1416 as c0, d872 as c1, d880 as c2, d469 as c3, d871 as c4, d879 as c5, d911 as c6, d1415 as c7, d1414 as c8 } from '../descriptors/data.js?sdk=94d0201d0d4794f7d38785f27620d8e5bb6163ea5be7d564a21c40eb38a1581b';
import { d1416 } from '../descriptors/data.js?sdk=94d0201d0d4794f7d38785f27620d8e5bb6163ea5be7d564a21c40eb38a1581b';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1416;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["IncomingWebhookd5308faf7210Payload"]:c0(),["MerchantWebhookEnvelope"]:c1(),["PartnerWebhookEnvelope"]:c2(),["SharedCodec161"]:c3(),["SharedCodec237"]:c4(),["SharedCodec242"]:c5(),["SharedCodec258"]:c6(),["Webhook_return_inspection_acceptance_decided_installed_merchants"]:c7(),["Webhook_return_inspection_acceptance_decided_merchant"]:c8()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeIncomingWebhookd5308faf7210Payload(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
