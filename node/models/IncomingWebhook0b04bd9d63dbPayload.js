import { d973 as c0, d936 as c1, d944 as c2, d526 as c3, d935 as c4, d943 as c5, d969 as c6, d963 as c7, d964 as c8, d967 as c9, d965 as c10, d966 as c11, d968 as c12, d971 as c13, d972 as c14, d970 as c15 } from '../descriptors/data.js?sdk=1d377b406cf4feb3f1c2665a879357eb94a4280792cb4955cdbef8af750adf8d';
import { d973 } from '../descriptors/data.js?sdk=1d377b406cf4feb3f1c2665a879357eb94a4280792cb4955cdbef8af750adf8d';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d973;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["IncomingWebhook0b04bd9d63dbPayload"]:c0(),["MerchantWebhookEnvelope"]:c1(),["PartnerWebhookEnvelope"]:c2(),["SharedCodec199"]:c3(),["SharedCodec286"]:c4(),["SharedCodec291"]:c5(),["SharedCodec299"]:c6(),["SharedCodec300"]:c7(),["SharedCodec301"]:c8(),["SharedCodec302"]:c9(),["SharedCodec303"]:c10(),["SharedCodec304"]:c11(),["SharedCodec305"]:c12(),["SharedCodec306"]:c13(),["Webhook_order_fulfillment_package_created_installed_merchants"]:c14(),["Webhook_order_fulfillment_package_created_merchant"]:c15()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeIncomingWebhook0b04bd9d63dbPayload(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
