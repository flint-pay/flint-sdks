import { d1155 as c0, d815 as c1, d823 as c2, d468 as c3, d814 as c4, d822 as c5, d838 as c6, d839 as c7, d1151 as c8, d1150 as c9, d1153 as c10, d1154 as c11, d1152 as c12 } from '../descriptors/data.js?sdk=bef5952824dbe0867acb5a07673ca91102b136eda21794fff718a3addd296a2a';
import { d1155 } from '../descriptors/data.js?sdk=bef5952824dbe0867acb5a07673ca91102b136eda21794fff718a3addd296a2a';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1155;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["IncomingWebhook968a85236406Payload"]:c0(),["MerchantWebhookEnvelope"]:c1(),["PartnerWebhookEnvelope"]:c2(),["SharedCodec176"]:c3(),["SharedCodec244"]:c4(),["SharedCodec249"]:c5(),["SharedCodec257"]:c6(),["SharedCodec258"]:c7(),["SharedCodec316"]:c8(),["SharedCodec317"]:c9(),["SharedCodec318"]:c10(),["Webhook_order_fulfillment_status_changed_installed_merchants"]:c11(),["Webhook_order_fulfillment_status_changed_merchant"]:c12()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeIncomingWebhook968a85236406Payload(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
