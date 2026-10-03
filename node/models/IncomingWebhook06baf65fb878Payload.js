import { d935 as c0, d909 as c1, d917 as c2, d515 as c3, d908 as c4, d916 as c5, d931 as c6, d930 as c7, d933 as c8, d934 as c9, d932 as c10 } from '../descriptors/data.js?sdk=41ea09ad124ffa3bdfba4a8208bd0391cd6fb609c70d062a00cb64936b55a83b';
import { d935 } from '../descriptors/data.js?sdk=41ea09ad124ffa3bdfba4a8208bd0391cd6fb609c70d062a00cb64936b55a83b';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d935;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["IncomingWebhook06baf65fb878Payload"]:c0(),["MerchantWebhookEnvelope"]:c1(),["PartnerWebhookEnvelope"]:c2(),["SharedCodec197"]:c3(),["SharedCodec275"]:c4(),["SharedCodec280"]:c5(),["SharedCodec285"]:c6(),["SharedCodec286"]:c7(),["SharedCodec287"]:c8(),["Webhook_payment_intent_fulfillment_hold_updated_installed_merchants"]:c9(),["Webhook_payment_intent_fulfillment_hold_updated_merchant"]:c10()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeIncomingWebhook06baf65fb878Payload(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
