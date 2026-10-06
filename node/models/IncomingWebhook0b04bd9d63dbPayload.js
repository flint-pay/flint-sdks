import { d967 as c0, d930 as c1, d938 as c2, d525 as c3, d929 as c4, d937 as c5, d963 as c6, d957 as c7, d958 as c8, d961 as c9, d959 as c10, d960 as c11, d962 as c12, d965 as c13, d966 as c14, d964 as c15 } from '../descriptors/data.js?sdk=23304d0710327c07c2c4a303230dbb22d6b14f651af3363cdef910b4916b65b9';
import { d967 } from '../descriptors/data.js?sdk=23304d0710327c07c2c4a303230dbb22d6b14f651af3363cdef910b4916b65b9';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d967;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["IncomingWebhook0b04bd9d63dbPayload"]:c0(),["MerchantWebhookEnvelope"]:c1(),["PartnerWebhookEnvelope"]:c2(),["SharedCodec199"]:c3(),["SharedCodec282"]:c4(),["SharedCodec287"]:c5(),["SharedCodec295"]:c6(),["SharedCodec296"]:c7(),["SharedCodec297"]:c8(),["SharedCodec298"]:c9(),["SharedCodec299"]:c10(),["SharedCodec300"]:c11(),["SharedCodec301"]:c12(),["SharedCodec302"]:c13(),["Webhook_order_fulfillment_package_created_installed_merchants"]:c14(),["Webhook_order_fulfillment_package_created_merchant"]:c15()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeIncomingWebhook0b04bd9d63dbPayload(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
