import { d914 as c0, d981 as c1, d930 as c2, d938 as c3, d525 as c4, d929 as c5, d937 as c6, d979 as c7, d41 as c8, d980 as c9, d978 as c10 } from '../descriptors/data.js?sdk=ba066cb5d42061b50ddb74a9a955bfa66adbe16252255af2a884092ee5130eba';
import { d981 } from '../descriptors/data.js?sdk=ba066cb5d42061b50ddb74a9a955bfa66adbe16252255af2a884092ee5130eba';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d981;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["GiftCardRedemption"]:c0(),["IncomingWebhook0ed7a866163aPayload"]:c1(),["MerchantWebhookEnvelope"]:c2(),["PartnerWebhookEnvelope"]:c3(),["SharedCodec199"]:c4(),["SharedCodec282"]:c5(),["SharedCodec287"]:c6(),["SharedCodec306"]:c7(),["SharedCodec6"]:c8(),["Webhook_gift_card_redemption_updated_installed_merchants"]:c9(),["Webhook_gift_card_redemption_updated_merchant"]:c10()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeIncomingWebhook0ed7a866163aPayload(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
