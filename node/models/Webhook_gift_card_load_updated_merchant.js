import { d857 as c0, d858 as c1, d334 as c2, d861 as c3, d873 as c4, d874 as c5, d875 as c6, d876 as c7, d877 as c8, d879 as c9, d885 as c10, d898 as c11, d323 as c12, d330 as c13, d331 as c14, d333 as c15, d332 as c16, d500 as c17, d860 as c18, d884 as c19, d897 as c20, d327 as c21, d326 as c22, d328 as c23, d329 as c24, d1151 as c25 } from '../descriptors/data.js?sdk=50f9c16f4dffbb7ff2528d427a616050712fc55fd9a73bec783011e006d2d7be';
import { d1151 } from '../descriptors/data.js?sdk=50f9c16f4dffbb7ff2528d427a616050712fc55fd9a73bec783011e006d2d7be';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1151;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["GiftCardFundingDispute"]:c0(),["GiftCardFundingLossResolution"]:c1(),["GiftCardFundingSource"]:c2(),["GiftCardLoad"]:c3(),["GiftCardPurchaseRefundAllocation"]:c4(),["GiftCardPurchaseRefundRecovery"]:c5(),["GiftCardPurchaseRefundRecoveryDestination"]:c6(),["GiftCardPurchaseRefundValueAllocation"]:c7(),["GiftCardPurchaseRefundValueHold"]:c8(),["GiftCardPurchaseRestoration"]:c9(),["GiftCardRefundProvenance"]:c10(),["MerchantWebhookEnvelope"]:c11(),["MoneyValue"]:c12(),["SharedCodec100"]:c13(),["SharedCodec101"]:c14(),["SharedCodec102"]:c15(),["SharedCodec103"]:c16(),["SharedCodec176"]:c17(),["SharedCodec248"]:c18(),["SharedCodec249"]:c19(),["SharedCodec250"]:c20(),["SharedCodec96"]:c21(),["SharedCodec97"]:c22(),["SharedCodec98"]:c23(),["SharedCodec99"]:c24(),["Webhook_gift_card_load_updated_merchant"]:c25()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeWebhook_gift_card_load_updated_merchant(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
