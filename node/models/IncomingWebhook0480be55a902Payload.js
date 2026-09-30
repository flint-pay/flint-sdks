import { d825 as c0, d815 as c1, d823 as c2, d468 as c3, d814 as c4, d819 as c5, d818 as c6, d817 as c7, d821 as c8, d822 as c9, d824 as c10, d820 as c11 } from '../descriptors/data.js?sdk=bef5952824dbe0867acb5a07673ca91102b136eda21794fff718a3addd296a2a';
import { d825 } from '../descriptors/data.js?sdk=bef5952824dbe0867acb5a07673ca91102b136eda21794fff718a3addd296a2a';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d825;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["IncomingWebhook0480be55a902Payload"]:c0(),["MerchantWebhookEnvelope"]:c1(),["PartnerWebhookEnvelope"]:c2(),["SharedCodec176"]:c3(),["SharedCodec244"]:c4(),["SharedCodec245"]:c5(),["SharedCodec246"]:c6(),["SharedCodec247"]:c7(),["SharedCodec248"]:c8(),["SharedCodec249"]:c9(),["Webhook_payment_intent_requires_action_installed_merchants"]:c10(),["Webhook_payment_intent_requires_action_merchant"]:c11()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeIncomingWebhook0480be55a902Payload(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
