import { d901 as c0, d896 as c1, d895 as c2, d899 as c3, d900 as c4, d1525 as c5 } from '../descriptors/data.js?sdk=658e960cd5fac48cd38e1dd15296958df0d104dd5904c2165f4e3078746d39e7';
import { d1525 } from '../descriptors/data.js?sdk=658e960cd5fac48cd38e1dd15296958df0d104dd5904c2165f4e3078746d39e7';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1525;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["PartnerWebhookEnvelope"]:c0(),["SharedCodec248"]:c1(),["SharedCodec249"]:c2(),["SharedCodec250"]:c3(),["SharedCodec251"]:c4(),["Webhook_payment_intent_canceled_installed_merchants"]:c5()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeWebhook_payment_intent_canceled_installed_merchants(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
