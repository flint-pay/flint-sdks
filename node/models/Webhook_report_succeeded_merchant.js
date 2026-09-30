import { d815 as c0, d1942 as c1, d468 as c2, d814 as c3, d1377 as c4, d1379 as c5, d1378 as c6, d1380 as c7, d1381 as c8, d1376 as c9 } from '../descriptors/data.js?sdk=bef5952824dbe0867acb5a07673ca91102b136eda21794fff718a3addd296a2a';
import { d1376 } from '../descriptors/data.js?sdk=bef5952824dbe0867acb5a07673ca91102b136eda21794fff718a3addd296a2a';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1376;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MerchantWebhookEnvelope"]:c0(),["Report"]:c1(),["SharedCodec176"]:c2(),["SharedCodec244"]:c3(),["SharedCodec363"]:c4(),["SharedCodec364"]:c5(),["SharedCodec365"]:c6(),["SharedCodec366"]:c7(),["SharedCodec367"]:c8(),["Webhook_report_succeeded_merchant"]:c9()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeWebhook_report_succeeded_merchant(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
