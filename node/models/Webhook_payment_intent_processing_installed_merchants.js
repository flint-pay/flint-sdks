import { d823 as c0, d818 as c1, d817 as c2, d821 as c3, d822 as c4, d1321 as c5 } from '../descriptors/data.js?sdk=bef5952824dbe0867acb5a07673ca91102b136eda21794fff718a3addd296a2a';
import { d1321 } from '../descriptors/data.js?sdk=bef5952824dbe0867acb5a07673ca91102b136eda21794fff718a3addd296a2a';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1321;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["PartnerWebhookEnvelope"]:c0(),["SharedCodec246"]:c1(),["SharedCodec247"]:c2(),["SharedCodec248"]:c3(),["SharedCodec249"]:c4(),["Webhook_payment_intent_processing_installed_merchants"]:c5()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeWebhook_payment_intent_processing_installed_merchants(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
