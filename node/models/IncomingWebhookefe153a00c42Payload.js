import { d1370 as c0, d815 as c1, d823 as c2, d468 as c3, d814 as c4, d819 as c5, d818 as c6, d817 as c7, d821 as c8, d822 as c9, d1369 as c10, d1368 as c11 } from '../descriptors/data.js?sdk=bef5952824dbe0867acb5a07673ca91102b136eda21794fff718a3addd296a2a';
import { d1370 } from '../descriptors/data.js?sdk=bef5952824dbe0867acb5a07673ca91102b136eda21794fff718a3addd296a2a';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1370;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["IncomingWebhookefe153a00c42Payload"]:c0(),["MerchantWebhookEnvelope"]:c1(),["PartnerWebhookEnvelope"]:c2(),["SharedCodec176"]:c3(),["SharedCodec244"]:c4(),["SharedCodec245"]:c5(),["SharedCodec246"]:c6(),["SharedCodec247"]:c7(),["SharedCodec248"]:c8(),["SharedCodec249"]:c9(),["Webhook_payment_intent_canceled_installed_merchants"]:c10(),["Webhook_payment_intent_canceled_merchant"]:c11()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeIncomingWebhookefe153a00c42Payload(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
