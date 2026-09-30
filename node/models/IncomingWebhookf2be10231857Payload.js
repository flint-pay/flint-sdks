import { d1384 as c0, d815 as c1, d823 as c2, d1942 as c3, d468 as c4, d814 as c5, d822 as c6, d1382 as c7, d1377 as c8, d1379 as c9, d1378 as c10, d1380 as c11, d1381 as c12, d1383 as c13, d1376 as c14 } from '../descriptors/data.js?sdk=bef5952824dbe0867acb5a07673ca91102b136eda21794fff718a3addd296a2a';
import { d1384 } from '../descriptors/data.js?sdk=bef5952824dbe0867acb5a07673ca91102b136eda21794fff718a3addd296a2a';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1384;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["IncomingWebhookf2be10231857Payload"]:c0(),["MerchantWebhookEnvelope"]:c1(),["PartnerWebhookEnvelope"]:c2(),["Report"]:c3(),["SharedCodec176"]:c4(),["SharedCodec244"]:c5(),["SharedCodec249"]:c6(),["SharedCodec362"]:c7(),["SharedCodec363"]:c8(),["SharedCodec364"]:c9(),["SharedCodec365"]:c10(),["SharedCodec366"]:c11(),["SharedCodec367"]:c12(),["Webhook_report_succeeded_installed_merchants"]:c13(),["Webhook_report_succeeded_merchant"]:c14()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeIncomingWebhookf2be10231857Payload(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
