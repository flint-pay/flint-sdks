import { d895 as c0, d962 as c1, d911 as c2, d919 as c3, d517 as c4, d859 as c5, d910 as c6, d918 as c7, d960 as c8, d961 as c9, d959 as c10 } from '../descriptors/data.js?sdk=40abaf2a2616e8b74370ab25f8d4a8faced3f68b7d58057fcd11631bbc8038f0';
import { d962 } from '../descriptors/data.js?sdk=40abaf2a2616e8b74370ab25f8d4a8faced3f68b7d58057fcd11631bbc8038f0';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d962;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["GiftCardRedemption"]:c0(),["IncomingWebhook0ed7a866163aPayload"]:c1(),["MerchantWebhookEnvelope"]:c2(),["PartnerWebhookEnvelope"]:c3(),["SharedCodec197"]:c4(),["SharedCodec265"]:c5(),["SharedCodec275"]:c6(),["SharedCodec280"]:c7(),["SharedCodec299"]:c8(),["Webhook_gift_card_redemption_updated_installed_merchants"]:c9(),["Webhook_gift_card_redemption_updated_merchant"]:c10()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeIncomingWebhook0ed7a866163aPayload(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
