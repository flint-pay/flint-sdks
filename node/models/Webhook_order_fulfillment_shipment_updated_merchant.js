import { d936 as c0, d526 as c1, d935 as c2, d947 as c3, d963 as c4, d964 as c5, d968 as c6, d1401 as c7, d1400 as c8, d1402 as c9 } from '../descriptors/data.js?sdk=1d377b406cf4feb3f1c2665a879357eb94a4280792cb4955cdbef8af750adf8d';
import { d1402 } from '../descriptors/data.js?sdk=1d377b406cf4feb3f1c2665a879357eb94a4280792cb4955cdbef8af750adf8d';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1402;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MerchantWebhookEnvelope"]:c0(),["SharedCodec199"]:c1(),["SharedCodec286"]:c2(),["SharedCodec293"]:c3(),["SharedCodec300"]:c4(),["SharedCodec301"]:c5(),["SharedCodec305"]:c6(),["SharedCodec391"]:c7(),["SharedCodec392"]:c8(),["Webhook_order_fulfillment_shipment_updated_merchant"]:c9()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeWebhook_order_fulfillment_shipment_updated_merchant(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
