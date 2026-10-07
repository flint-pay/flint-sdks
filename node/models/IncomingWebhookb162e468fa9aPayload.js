import { d1405 as c0, d936 as c1, d944 as c2, d526 as c3, d935 as c4, d943 as c5, d947 as c6, d963 as c7, d964 as c8, d968 as c9, d1401 as c10, d1400 as c11, d1403 as c12, d1404 as c13, d1402 as c14 } from '../descriptors/data.js?sdk=1d377b406cf4feb3f1c2665a879357eb94a4280792cb4955cdbef8af750adf8d';
import { d1405 } from '../descriptors/data.js?sdk=1d377b406cf4feb3f1c2665a879357eb94a4280792cb4955cdbef8af750adf8d';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1405;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["IncomingWebhookb162e468fa9aPayload"]:c0(),["MerchantWebhookEnvelope"]:c1(),["PartnerWebhookEnvelope"]:c2(),["SharedCodec199"]:c3(),["SharedCodec286"]:c4(),["SharedCodec291"]:c5(),["SharedCodec293"]:c6(),["SharedCodec300"]:c7(),["SharedCodec301"]:c8(),["SharedCodec305"]:c9(),["SharedCodec391"]:c10(),["SharedCodec392"]:c11(),["SharedCodec393"]:c12(),["Webhook_order_fulfillment_shipment_updated_installed_merchants"]:c13(),["Webhook_order_fulfillment_shipment_updated_merchant"]:c14()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeIncomingWebhookb162e468fa9aPayload(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
