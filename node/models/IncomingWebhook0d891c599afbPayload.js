import { d962 as c0, d916 as c1, d924 as c2, d520 as c3, d915 as c4, d923 as c5, d958 as c6, d960 as c7, d961 as c8, d959 as c9 } from '../descriptors/data.js?sdk=f67f6eaf1051f21ec6ba8a2fb3534a619d1f5d2afe43c079dcee44663fec8859';
import { d962 } from '../descriptors/data.js?sdk=f67f6eaf1051f21ec6ba8a2fb3534a619d1f5d2afe43c079dcee44663fec8859';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d962;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["IncomingWebhook0d891c599afbPayload"]:c0(),["MerchantWebhookEnvelope"]:c1(),["PartnerWebhookEnvelope"]:c2(),["SharedCodec199"]:c3(),["SharedCodec281"]:c4(),["SharedCodec286"]:c5(),["SharedCodec303"]:c6(),["SharedCodec304"]:c7(),["Webhook_order_updated_installed_merchants"]:c8(),["Webhook_order_updated_merchant"]:c9()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeIncomingWebhook0d891c599afbPayload(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
