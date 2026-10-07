import { d880 as c0, d874 as c1, d879 as c2, d931 as c3, d932 as c4 } from '../descriptors/data.js?sdk=94d0201d0d4794f7d38785f27620d8e5bb6163ea5be7d564a21c40eb38a1581b';
import { d932 } from '../descriptors/data.js?sdk=94d0201d0d4794f7d38785f27620d8e5bb6163ea5be7d564a21c40eb38a1581b';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d932;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["PartnerWebhookEnvelope"]:c0(),["SharedCodec240"]:c1(),["SharedCodec242"]:c2(),["SharedCodec264"]:c3(),["Webhook_invoice_payment_attempt_canceled_installed_merchants"]:c4()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeWebhook_invoice_payment_attempt_canceled_installed_merchants(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
