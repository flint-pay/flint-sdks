import { d900 as c0, d931 as c1, d911 as c2, d919 as c3, d517 as c4, d859 as c5, d910 as c6, d918 as c7, d929 as c8, d930 as c9, d928 as c10 } from '../descriptors/data.js?sdk=40abaf2a2616e8b74370ab25f8d4a8faced3f68b7d58057fcd11631bbc8038f0';
import { d931 } from '../descriptors/data.js?sdk=40abaf2a2616e8b74370ab25f8d4a8faced3f68b7d58057fcd11631bbc8038f0';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d931;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["GiftCardTransaction"]:c0(),["IncomingWebhook067bab7c655aPayload"]:c1(),["MerchantWebhookEnvelope"]:c2(),["PartnerWebhookEnvelope"]:c3(),["SharedCodec197"]:c4(),["SharedCodec265"]:c5(),["SharedCodec275"]:c6(),["SharedCodec280"]:c7(),["SharedCodec284"]:c8(),["Webhook_gift_card_transaction_created_installed_merchants"]:c9(),["Webhook_gift_card_transaction_created_merchant"]:c10()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeIncomingWebhook067bab7c655aPayload(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
