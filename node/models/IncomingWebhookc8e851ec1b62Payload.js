import { d1452 as c0, d930 as c1, d938 as c2, d525 as c3, d929 as c4, d937 as c5, d957 as c6, d958 as c7, d1060 as c8, d1062 as c9, d1451 as c10, d1450 as c11 } from '../descriptors/data.js?sdk=ba066cb5d42061b50ddb74a9a955bfa66adbe16252255af2a884092ee5130eba';
import { d1452 } from '../descriptors/data.js?sdk=ba066cb5d42061b50ddb74a9a955bfa66adbe16252255af2a884092ee5130eba';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1452;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["IncomingWebhookc8e851ec1b62Payload"]:c0(),["MerchantWebhookEnvelope"]:c1(),["PartnerWebhookEnvelope"]:c2(),["SharedCodec199"]:c3(),["SharedCodec282"]:c4(),["SharedCodec287"]:c5(),["SharedCodec296"]:c6(),["SharedCodec297"]:c7(),["SharedCodec323"]:c8(),["SharedCodec324"]:c9(),["Webhook_order_fulfillment_completed_installed_merchants"]:c10(),["Webhook_order_fulfillment_completed_merchant"]:c11()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeIncomingWebhookc8e851ec1b62Payload(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
