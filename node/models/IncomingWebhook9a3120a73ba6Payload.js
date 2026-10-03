import { d1311 as c0, d909 as c1, d515 as c2, d908 as c3, d2517 as c4 } from '../descriptors/data.js?sdk=41ea09ad124ffa3bdfba4a8208bd0391cd6fb609c70d062a00cb64936b55a83b';
import { d1311 } from '../descriptors/data.js?sdk=41ea09ad124ffa3bdfba4a8208bd0391cd6fb609c70d062a00cb64936b55a83b';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1311;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["IncomingWebhook9a3120a73ba6Payload"]:c0(),["MerchantWebhookEnvelope"]:c1(),["SharedCodec197"]:c2(),["SharedCodec275"]:c3(),["Webhook_inventory_transfer_received_merchant"]:c4()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeIncomingWebhook9a3120a73ba6Payload(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
