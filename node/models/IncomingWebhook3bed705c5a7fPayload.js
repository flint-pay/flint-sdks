import { d1092 as c0, d916 as c1, d924 as c2, d520 as c3, d915 as c4, d918 as c5, d923 as c6, d1088 as c7, d1090 as c8, d1091 as c9, d1089 as c10 } from '../descriptors/data.js?sdk=f67f6eaf1051f21ec6ba8a2fb3534a619d1f5d2afe43c079dcee44663fec8859';
import { d1092 } from '../descriptors/data.js?sdk=f67f6eaf1051f21ec6ba8a2fb3534a619d1f5d2afe43c079dcee44663fec8859';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1092;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["IncomingWebhook3bed705c5a7fPayload"]:c0(),["MerchantWebhookEnvelope"]:c1(),["PartnerWebhookEnvelope"]:c2(),["SharedCodec199"]:c3(),["SharedCodec281"]:c4(),["SharedCodec284"]:c5(),["SharedCodec286"]:c6(),["SharedCodec327"]:c7(),["SharedCodec328"]:c8(),["Webhook_invoice_marked_uncollectible_installed_merchants"]:c9(),["Webhook_invoice_marked_uncollectible_merchant"]:c10()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeIncomingWebhook3bed705c5a7fPayload(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
