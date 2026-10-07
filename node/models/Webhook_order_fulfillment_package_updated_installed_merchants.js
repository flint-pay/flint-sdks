import { d944 as c0, d943 as c1, d947 as c2, d963 as c3, d964 as c4, d967 as c5, d965 as c6, d966 as c7, d968 as c8, d1327 as c9, d1330 as c10, d1331 as c11 } from '../descriptors/data.js?sdk=1d377b406cf4feb3f1c2665a879357eb94a4280792cb4955cdbef8af750adf8d';
import { d1331 } from '../descriptors/data.js?sdk=1d377b406cf4feb3f1c2665a879357eb94a4280792cb4955cdbef8af750adf8d';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1331;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["PartnerWebhookEnvelope"]:c0(),["SharedCodec291"]:c1(),["SharedCodec293"]:c2(),["SharedCodec300"]:c3(),["SharedCodec301"]:c4(),["SharedCodec302"]:c5(),["SharedCodec303"]:c6(),["SharedCodec304"]:c7(),["SharedCodec305"]:c8(),["SharedCodec373"]:c9(),["SharedCodec374"]:c10(),["Webhook_order_fulfillment_package_updated_installed_merchants"]:c11()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeWebhook_order_fulfillment_package_updated_installed_merchants(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
