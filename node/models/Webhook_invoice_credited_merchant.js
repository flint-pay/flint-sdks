import { d916 as c0, d520 as c1, d915 as c2, d918 as c3, d1334 as c4, d1335 as c5 } from '../descriptors/data.js?sdk=f67f6eaf1051f21ec6ba8a2fb3534a619d1f5d2afe43c079dcee44663fec8859';
import { d1335 } from '../descriptors/data.js?sdk=f67f6eaf1051f21ec6ba8a2fb3534a619d1f5d2afe43c079dcee44663fec8859';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1335;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MerchantWebhookEnvelope"]:c0(),["SharedCodec199"]:c1(),["SharedCodec281"]:c2(),["SharedCodec284"]:c3(),["SharedCodec375"]:c4(),["Webhook_invoice_credited_merchant"]:c5()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeWebhook_invoice_credited_merchant(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
