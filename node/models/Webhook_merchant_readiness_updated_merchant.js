import { d815 as c0, d468 as c1, d814 as c2, d1352 as c3, d1350 as c4, d1349 as c5, d1348 as c6, d1351 as c7, d2347 as c8 } from '../descriptors/data.js?sdk=bef5952824dbe0867acb5a07673ca91102b136eda21794fff718a3addd296a2a';
import { d2347 } from '../descriptors/data.js?sdk=bef5952824dbe0867acb5a07673ca91102b136eda21794fff718a3addd296a2a';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2347;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MerchantWebhookEnvelope"]:c0(),["SharedCodec176"]:c1(),["SharedCodec244"]:c2(),["SharedCodec353"]:c3(),["SharedCodec354"]:c4(),["SharedCodec355"]:c5(),["SharedCodec356"]:c6(),["SharedCodec357"]:c7(),["Webhook_merchant_readiness_updated_merchant"]:c8()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeWebhook_merchant_readiness_updated_merchant(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
