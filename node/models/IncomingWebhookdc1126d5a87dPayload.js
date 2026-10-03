import { d1465 as c0, d909 as c1, d917 as c2, d515 as c3, d908 as c4, d916 as c5, d1461 as c6, d1463 as c7, d1464 as c8, d1462 as c9 } from '../descriptors/data.js?sdk=1062b2a87ddfc25f3a8458c3e67aea98a29a33dcad943f63dceff9390190307c';
import { d1465 } from '../descriptors/data.js?sdk=1062b2a87ddfc25f3a8458c3e67aea98a29a33dcad943f63dceff9390190307c';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1465;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["IncomingWebhookdc1126d5a87dPayload"]:c0(),["MerchantWebhookEnvelope"]:c1(),["PartnerWebhookEnvelope"]:c2(),["SharedCodec197"]:c3(),["SharedCodec275"]:c4(),["SharedCodec280"]:c5(),["SharedCodec390"]:c6(),["SharedCodec391"]:c7(),["Webhook_checkout_session_expired_installed_merchants"]:c8(),["Webhook_checkout_session_expired_merchant"]:c9()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeIncomingWebhookdc1126d5a87dPayload(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
