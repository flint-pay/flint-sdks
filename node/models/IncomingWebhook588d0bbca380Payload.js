import { d858 as c0, d1138 as c1, d909 as c2, d917 as c3, d515 as c4, d857 as c5, d908 as c6, d916 as c7, d1092 as c8, d1137 as c9, d1136 as c10 } from '../descriptors/data.js?sdk=1062b2a87ddfc25f3a8458c3e67aea98a29a33dcad943f63dceff9390190307c';
import { d1138 } from '../descriptors/data.js?sdk=1062b2a87ddfc25f3a8458c3e67aea98a29a33dcad943f63dceff9390190307c';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1138;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["GiftCard"]:c0(),["IncomingWebhook588d0bbca380Payload"]:c1(),["MerchantWebhookEnvelope"]:c2(),["PartnerWebhookEnvelope"]:c3(),["SharedCodec197"]:c4(),["SharedCodec265"]:c5(),["SharedCodec275"]:c6(),["SharedCodec280"]:c7(),["SharedCodec323"]:c8(),["Webhook_gift_card_created_installed_merchants"]:c9(),["Webhook_gift_card_created_merchant"]:c10()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeIncomingWebhook588d0bbca380Payload(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
