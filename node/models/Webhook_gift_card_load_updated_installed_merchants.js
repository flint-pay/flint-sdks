import { d852 as c0, d853 as c1, d334 as c2, d868 as c3, d869 as c4, d870 as c5, d871 as c6, d872 as c7, d874 as c8, d880 as c9, d323 as c10, d901 as c11, d330 as c12, d331 as c13, d333 as c14, d332 as c15, d855 as c16, d879 as c17, d900 as c18, d1150 as c19, d327 as c20, d326 as c21, d328 as c22, d329 as c23, d1151 as c24 } from '../descriptors/data.js?sdk=245b7fb11d6174517fe5d194b5fb87c42348ace248a5c84bbab9ef7bfe2b9e5e';
import { d1151 } from '../descriptors/data.js?sdk=245b7fb11d6174517fe5d194b5fb87c42348ace248a5c84bbab9ef7bfe2b9e5e';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1151;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["GiftCardFundingDispute"]:c0(),["GiftCardFundingLossResolution"]:c1(),["GiftCardFundingSource"]:c2(),["GiftCardPurchaseRefundAllocation"]:c3(),["GiftCardPurchaseRefundRecovery"]:c4(),["GiftCardPurchaseRefundRecoveryDestination"]:c5(),["GiftCardPurchaseRefundValueAllocation"]:c6(),["GiftCardPurchaseRefundValueHold"]:c7(),["GiftCardPurchaseRestoration"]:c8(),["GiftCardRefundProvenance"]:c9(),["MoneyValue"]:c10(),["PartnerWebhookEnvelope"]:c11(),["SharedCodec100"]:c12(),["SharedCodec101"]:c13(),["SharedCodec102"]:c14(),["SharedCodec103"]:c15(),["SharedCodec244"]:c16(),["SharedCodec245"]:c17(),["SharedCodec251"]:c18(),["SharedCodec312"]:c19(),["SharedCodec96"]:c20(),["SharedCodec97"]:c21(),["SharedCodec98"]:c22(),["SharedCodec99"]:c23(),["Webhook_gift_card_load_updated_installed_merchants"]:c24()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeWebhook_gift_card_load_updated_installed_merchants(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
