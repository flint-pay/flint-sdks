import { d930 as c0, d77 as c1, d525 as c2, d929 as c3, d1241 as c4, d1242 as c5 } from '../descriptors/data.js?sdk=ba066cb5d42061b50ddb74a9a955bfa66adbe16252255af2a884092ee5130eba';
import { d1242 } from '../descriptors/data.js?sdk=ba066cb5d42061b50ddb74a9a955bfa66adbe16252255af2a884092ee5130eba';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1242;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MerchantWebhookEnvelope"]:c0(),["MoneyValue"]:c1(),["SharedCodec199"]:c2(),["SharedCodec282"]:c3(),["SharedCodec355"]:c4(),["Webhook_invoice_late_fee_waived_merchant"]:c5()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeWebhook_invoice_late_fee_waived_merchant(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
