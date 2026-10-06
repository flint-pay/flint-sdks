import { d924 as c0, d918 as c1, d923 as c2, d1025 as c3, d1026 as c4 } from '../descriptors/data.js?sdk=f67f6eaf1051f21ec6ba8a2fb3534a619d1f5d2afe43c079dcee44663fec8859';
import { d1026 } from '../descriptors/data.js?sdk=f67f6eaf1051f21ec6ba8a2fb3534a619d1f5d2afe43c079dcee44663fec8859';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1026;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["PartnerWebhookEnvelope"]:c0(),["SharedCodec284"]:c1(),["SharedCodec286"]:c2(),["SharedCodec318"]:c3(),["Webhook_invoice_issued_installed_merchants"]:c4()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeWebhook_invoice_issued_installed_merchants(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
