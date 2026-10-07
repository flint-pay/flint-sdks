import { d944 as c0, d943 as c1, d963 as c2, d964 as c3, d967 as c4, d965 as c5, d966 as c6, d968 as c7, d971 as c8, d972 as c9 } from '../descriptors/data.js?sdk=1d377b406cf4feb3f1c2665a879357eb94a4280792cb4955cdbef8af750adf8d';
import { d972 } from '../descriptors/data.js?sdk=1d377b406cf4feb3f1c2665a879357eb94a4280792cb4955cdbef8af750adf8d';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d972;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["PartnerWebhookEnvelope"]:c0(),["SharedCodec291"]:c1(),["SharedCodec300"]:c2(),["SharedCodec301"]:c3(),["SharedCodec302"]:c4(),["SharedCodec303"]:c5(),["SharedCodec304"]:c6(),["SharedCodec305"]:c7(),["SharedCodec306"]:c8(),["Webhook_order_fulfillment_package_created_installed_merchants"]:c9()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeWebhook_order_fulfillment_package_created_installed_merchants(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
