import { d1450 as c0, d909 as c1, d917 as c2, d515 as c3, d908 as c4, d916 as c5, d951 as c6, d953 as c7, d1449 as c8, d1448 as c9 } from '../descriptors/data.js?sdk=41ea09ad124ffa3bdfba4a8208bd0391cd6fb609c70d062a00cb64936b55a83b';
import { d1450 } from '../descriptors/data.js?sdk=41ea09ad124ffa3bdfba4a8208bd0391cd6fb609c70d062a00cb64936b55a83b';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1450;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["IncomingWebhookd7a01fed3e2fPayload"]:c0(),["MerchantWebhookEnvelope"]:c1(),["PartnerWebhookEnvelope"]:c2(),["SharedCodec197"]:c3(),["SharedCodec275"]:c4(),["SharedCodec280"]:c5(),["SharedCodec297"]:c6(),["SharedCodec298"]:c7(),["Webhook_order_closed_installed_merchants"]:c8(),["Webhook_order_closed_merchant"]:c9()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeIncomingWebhookd7a01fed3e2fPayload(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
