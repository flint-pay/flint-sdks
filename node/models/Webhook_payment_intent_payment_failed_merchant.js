import { d815 as c0, d468 as c1, d814 as c2, d819 as c3, d818 as c4, d817 as c5, d1258 as c6 } from '../descriptors/data.js?sdk=bef5952824dbe0867acb5a07673ca91102b136eda21794fff718a3addd296a2a';
import { d1258 } from '../descriptors/data.js?sdk=bef5952824dbe0867acb5a07673ca91102b136eda21794fff718a3addd296a2a';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1258;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MerchantWebhookEnvelope"]:c0(),["SharedCodec176"]:c1(),["SharedCodec244"]:c2(),["SharedCodec245"]:c3(),["SharedCodec246"]:c4(),["SharedCodec247"]:c5(),["Webhook_payment_intent_payment_failed_merchant"]:c6()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeWebhook_payment_intent_payment_failed_merchant(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
