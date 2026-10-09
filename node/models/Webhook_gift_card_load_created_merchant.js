import { d852 as c0, d853 as c1, d334 as c2, d856 as c3, d868 as c4, d869 as c5, d870 as c6, d871 as c7, d872 as c8, d874 as c9, d880 as c10, d893 as c11, d323 as c12, d330 as c13, d331 as c14, d333 as c15, d332 as c16, d490 as c17, d855 as c18, d879 as c19, d892 as c20, d327 as c21, d326 as c22, d328 as c23, d329 as c24, d1426 as c25 } from '../descriptors/data.js?sdk=658e960cd5fac48cd38e1dd15296958df0d104dd5904c2165f4e3078746d39e7';
import { d1426 } from '../descriptors/data.js?sdk=658e960cd5fac48cd38e1dd15296958df0d104dd5904c2165f4e3078746d39e7';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1426;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["GiftCardFundingDispute"]:c0(),["GiftCardFundingLossResolution"]:c1(),["GiftCardFundingSource"]:c2(),["GiftCardLoad"]:c3(),["GiftCardPurchaseRefundAllocation"]:c4(),["GiftCardPurchaseRefundRecovery"]:c5(),["GiftCardPurchaseRefundRecoveryDestination"]:c6(),["GiftCardPurchaseRefundValueAllocation"]:c7(),["GiftCardPurchaseRefundValueHold"]:c8(),["GiftCardPurchaseRestoration"]:c9(),["GiftCardRefundProvenance"]:c10(),["MerchantWebhookEnvelope"]:c11(),["MoneyValue"]:c12(),["SharedCodec100"]:c13(),["SharedCodec101"]:c14(),["SharedCodec102"]:c15(),["SharedCodec103"]:c16(),["SharedCodec170"]:c17(),["SharedCodec244"]:c18(),["SharedCodec245"]:c19(),["SharedCodec246"]:c20(),["SharedCodec96"]:c21(),["SharedCodec97"]:c22(),["SharedCodec98"]:c23(),["SharedCodec99"]:c24(),["Webhook_gift_card_load_created_merchant"]:c25()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeWebhook_gift_card_load_created_merchant(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
