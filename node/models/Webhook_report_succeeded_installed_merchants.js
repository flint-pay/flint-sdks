import { d823 as c0, d822 as c1, d1382 as c2, d1377 as c3, d1379 as c4, d1378 as c5, d1380 as c6, d1381 as c7, d1383 as c8 } from '../descriptors/data.js?sdk=bef5952824dbe0867acb5a07673ca91102b136eda21794fff718a3addd296a2a';
import { d1383 } from '../descriptors/data.js?sdk=bef5952824dbe0867acb5a07673ca91102b136eda21794fff718a3addd296a2a';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1383;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["PartnerWebhookEnvelope"]:c0(),["SharedCodec249"]:c1(),["SharedCodec362"]:c2(),["SharedCodec363"]:c3(),["SharedCodec364"]:c4(),["SharedCodec365"]:c5(),["SharedCodec366"]:c6(),["SharedCodec367"]:c7(),["Webhook_report_succeeded_installed_merchants"]:c8()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeWebhook_report_succeeded_installed_merchants(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
