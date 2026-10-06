import { d938 as c0, d937 as c1, d957 as c2, d958 as c3, d1309 as c4, d1312 as c5, d1313 as c6 } from '../descriptors/data.js?sdk=ba066cb5d42061b50ddb74a9a955bfa66adbe16252255af2a884092ee5130eba';
import { d1313 } from '../descriptors/data.js?sdk=ba066cb5d42061b50ddb74a9a955bfa66adbe16252255af2a884092ee5130eba';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1313;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["PartnerWebhookEnvelope"]:c0(),["SharedCodec287"]:c1(),["SharedCodec296"]:c2(),["SharedCodec297"]:c3(),["SharedCodec366"]:c4(),["SharedCodec367"]:c5(),["Webhook_order_fulfillment_status_changed_installed_merchants"]:c6()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeWebhook_order_fulfillment_status_changed_installed_merchants(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
