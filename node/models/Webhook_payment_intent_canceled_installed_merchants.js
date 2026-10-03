import { d917 as c0, d912 as c1, d911 as c2, d915 as c3, d916 as c4, d1506 as c5 } from '../descriptors/data.js?sdk=41ea09ad124ffa3bdfba4a8208bd0391cd6fb609c70d062a00cb64936b55a83b';
import { d1506 } from '../descriptors/data.js?sdk=41ea09ad124ffa3bdfba4a8208bd0391cd6fb609c70d062a00cb64936b55a83b';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1506;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["PartnerWebhookEnvelope"]:c0(),["SharedCodec277"]:c1(),["SharedCodec278"]:c2(),["SharedCodec279"]:c3(),["SharedCodec280"]:c4(),["Webhook_payment_intent_canceled_installed_merchants"]:c5()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeWebhook_payment_intent_canceled_installed_merchants(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
