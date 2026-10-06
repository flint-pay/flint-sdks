import { d885 as c0, d364 as c1, d907 as c2, d909 as c3, d910 as c4, d911 as c5, d77 as c6, d938 as c7, d357 as c8, d356 as c9, d358 as c10, d359 as c11, d360 as c12, d361 as c13, d363 as c14, d362 as c15, d884 as c16, d888 as c17, d889 as c18, d891 as c19, d890 as c20, d892 as c21, d906 as c22, d937 as c23, d1173 as c24, d41 as c25, d1174 as c26 } from '../descriptors/data.js?sdk=ba066cb5d42061b50ddb74a9a955bfa66adbe16252255af2a884092ee5130eba';
import { d1174 } from '../descriptors/data.js?sdk=ba066cb5d42061b50ddb74a9a955bfa66adbe16252255af2a884092ee5130eba';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1174;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["GiftCardFundingDispute"]:c0(),["GiftCardFundingSource"]:c1(),["GiftCardPurchaseRefundAllocation"]:c2(),["GiftCardPurchaseRefundRecoveryDestination"]:c3(),["GiftCardPurchaseRefundValueAllocation"]:c4(),["GiftCardPurchaseRefundValueHold"]:c5(),["MoneyValue"]:c6(),["PartnerWebhookEnvelope"]:c7(),["SharedCodec120"]:c8(),["SharedCodec121"]:c9(),["SharedCodec122"]:c10(),["SharedCodec123"]:c11(),["SharedCodec124"]:c12(),["SharedCodec125"]:c13(),["SharedCodec126"]:c14(),["SharedCodec127"]:c15(),["SharedCodec273"]:c16(),["SharedCodec274"]:c17(),["SharedCodec275"]:c18(),["SharedCodec276"]:c19(),["SharedCodec277"]:c20(),["SharedCodec278"]:c21(),["SharedCodec281"]:c22(),["SharedCodec287"]:c23(),["SharedCodec343"]:c24(),["SharedCodec6"]:c25(),["Webhook_gift_card_load_updated_installed_merchants"]:c26()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeWebhook_gift_card_load_updated_installed_merchants(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
