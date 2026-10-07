import { d936 as c0, d526 as c1, d935 as c2, d947 as c3, d963 as c4, d964 as c5, d967 as c6, d965 as c7, d966 as c8, d968 as c9, d1328 as c10, d1327 as c11, d1329 as c12 } from '../descriptors/data.js?sdk=1d377b406cf4feb3f1c2665a879357eb94a4280792cb4955cdbef8af750adf8d';
import { d1329 } from '../descriptors/data.js?sdk=1d377b406cf4feb3f1c2665a879357eb94a4280792cb4955cdbef8af750adf8d';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1329;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MerchantWebhookEnvelope"]:c0(),["SharedCodec199"]:c1(),["SharedCodec286"]:c2(),["SharedCodec293"]:c3(),["SharedCodec300"]:c4(),["SharedCodec301"]:c5(),["SharedCodec302"]:c6(),["SharedCodec303"]:c7(),["SharedCodec304"]:c8(),["SharedCodec305"]:c9(),["SharedCodec372"]:c10(),["SharedCodec373"]:c11(),["Webhook_order_fulfillment_package_updated_merchant"]:c12()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeWebhook_order_fulfillment_package_updated_merchant(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
