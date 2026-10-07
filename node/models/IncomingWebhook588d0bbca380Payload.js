import { d884 as c0, d1169 as c1, d936 as c2, d944 as c3, d526 as c4, d935 as c5, d943 as c6, d1123 as c7, d41 as c8, d1168 as c9, d1167 as c10 } from '../descriptors/data.js?sdk=1d377b406cf4feb3f1c2665a879357eb94a4280792cb4955cdbef8af750adf8d';
import { d1169 } from '../descriptors/data.js?sdk=1d377b406cf4feb3f1c2665a879357eb94a4280792cb4955cdbef8af750adf8d';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1169;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["GiftCard"]:c0(),["IncomingWebhook588d0bbca380Payload"]:c1(),["MerchantWebhookEnvelope"]:c2(),["PartnerWebhookEnvelope"]:c3(),["SharedCodec199"]:c4(),["SharedCodec286"]:c5(),["SharedCodec291"]:c6(),["SharedCodec335"]:c7(),["SharedCodec6"]:c8(),["Webhook_gift_card_created_installed_merchants"]:c9(),["Webhook_gift_card_created_merchant"]:c10()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeIncomingWebhook588d0bbca380Payload(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
