import { d914 as c0, d1351 as c1, d930 as c2, d938 as c3, d525 as c4, d929 as c5, d937 as c6, d979 as c7, d41 as c8, d1350 as c9, d1349 as c10 } from '../descriptors/data.js?sdk=d3e94df4e2b3092877185e2938463692374ebf68487770c61d779ced93b5901e';
import { d1351 } from '../descriptors/data.js?sdk=d3e94df4e2b3092877185e2938463692374ebf68487770c61d779ced93b5901e';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1351;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["GiftCardRedemption"]:c0(),["IncomingWebhook9d6f9adeef1cPayload"]:c1(),["MerchantWebhookEnvelope"]:c2(),["PartnerWebhookEnvelope"]:c3(),["SharedCodec199"]:c4(),["SharedCodec282"]:c5(),["SharedCodec287"]:c6(),["SharedCodec306"]:c7(),["SharedCodec6"]:c8(),["Webhook_gift_card_redemption_created_installed_merchants"]:c9(),["Webhook_gift_card_redemption_created_merchant"]:c10()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeIncomingWebhook9d6f9adeef1cPayload(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
