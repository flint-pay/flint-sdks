import { d955 as c0, d909 as c1, d917 as c2, d515 as c3, d908 as c4, d916 as c5, d951 as c6, d953 as c7, d954 as c8, d952 as c9 } from '../descriptors/data.js?sdk=1062b2a87ddfc25f3a8458c3e67aea98a29a33dcad943f63dceff9390190307c';
import { d955 } from '../descriptors/data.js?sdk=1062b2a87ddfc25f3a8458c3e67aea98a29a33dcad943f63dceff9390190307c';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d955;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["IncomingWebhook0d891c599afbPayload"]:c0(),["MerchantWebhookEnvelope"]:c1(),["PartnerWebhookEnvelope"]:c2(),["SharedCodec197"]:c3(),["SharedCodec275"]:c4(),["SharedCodec280"]:c5(),["SharedCodec297"]:c6(),["SharedCodec298"]:c7(),["Webhook_order_updated_installed_merchants"]:c8(),["Webhook_order_updated_merchant"]:c9()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeIncomingWebhook0d891c599afbPayload(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
