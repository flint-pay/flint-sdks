import { d944 as c0, d943 as c1, d947 as c2, d963 as c3, d964 as c4, d968 as c5, d1400 as c6, d1403 as c7, d1404 as c8 } from '../descriptors/data.js?sdk=1d377b406cf4feb3f1c2665a879357eb94a4280792cb4955cdbef8af750adf8d';
import { d1404 } from '../descriptors/data.js?sdk=1d377b406cf4feb3f1c2665a879357eb94a4280792cb4955cdbef8af750adf8d';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1404;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["PartnerWebhookEnvelope"]:c0(),["SharedCodec291"]:c1(),["SharedCodec293"]:c2(),["SharedCodec300"]:c3(),["SharedCodec301"]:c4(),["SharedCodec305"]:c5(),["SharedCodec392"]:c6(),["SharedCodec393"]:c7(),["Webhook_order_fulfillment_shipment_updated_installed_merchants"]:c8()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeWebhook_order_fulfillment_shipment_updated_installed_merchants(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
