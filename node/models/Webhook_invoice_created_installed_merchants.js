import { d924 as c0, d918 as c1, d923 as c2, d1272 as c3, d1278 as c4 } from '../descriptors/data.js?sdk=f67f6eaf1051f21ec6ba8a2fb3534a619d1f5d2afe43c079dcee44663fec8859';
import { d1278 } from '../descriptors/data.js?sdk=f67f6eaf1051f21ec6ba8a2fb3534a619d1f5d2afe43c079dcee44663fec8859';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1278;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["PartnerWebhookEnvelope"]:c0(),["SharedCodec284"]:c1(),["SharedCodec286"]:c2(),["SharedCodec360"]:c3(),["Webhook_invoice_created_installed_merchants"]:c4()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeWebhook_invoice_created_installed_merchants(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
