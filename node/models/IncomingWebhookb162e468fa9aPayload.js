import { d1399 as c0, d930 as c1, d938 as c2, d525 as c3, d929 as c4, d937 as c5, d941 as c6, d957 as c7, d958 as c8, d962 as c9, d1395 as c10, d1394 as c11, d1397 as c12, d1398 as c13, d1396 as c14 } from '../descriptors/data.js?sdk=ba066cb5d42061b50ddb74a9a955bfa66adbe16252255af2a884092ee5130eba';
import { d1399 } from '../descriptors/data.js?sdk=ba066cb5d42061b50ddb74a9a955bfa66adbe16252255af2a884092ee5130eba';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1399;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["IncomingWebhookb162e468fa9aPayload"]:c0(),["MerchantWebhookEnvelope"]:c1(),["PartnerWebhookEnvelope"]:c2(),["SharedCodec199"]:c3(),["SharedCodec282"]:c4(),["SharedCodec287"]:c5(),["SharedCodec289"]:c6(),["SharedCodec296"]:c7(),["SharedCodec297"]:c8(),["SharedCodec301"]:c9(),["SharedCodec387"]:c10(),["SharedCodec388"]:c11(),["SharedCodec389"]:c12(),["Webhook_order_fulfillment_shipment_updated_installed_merchants"]:c13(),["Webhook_order_fulfillment_shipment_updated_merchant"]:c14()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeIncomingWebhookb162e468fa9aPayload(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
