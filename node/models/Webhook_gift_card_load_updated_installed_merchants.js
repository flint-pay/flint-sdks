import { d857 as c0, d858 as c1, d334 as c2, d873 as c3, d874 as c4, d875 as c5, d876 as c6, d877 as c7, d879 as c8, d885 as c9, d323 as c10, d903 as c11, d330 as c12, d331 as c13, d333 as c14, d332 as c15, d860 as c16, d884 as c17, d902 as c18, d1152 as c19, d327 as c20, d326 as c21, d328 as c22, d329 as c23, d1153 as c24 } from '../descriptors/data.js?sdk=e3d9889159843c7c48c93704fe031dc30213693cb8266d78ea7ca38cc46462af';
import { d1153 } from '../descriptors/data.js?sdk=e3d9889159843c7c48c93704fe031dc30213693cb8266d78ea7ca38cc46462af';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1153;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["GiftCardFundingDispute"]:c0(),["GiftCardFundingLossResolution"]:c1(),["GiftCardFundingSource"]:c2(),["GiftCardPurchaseRefundAllocation"]:c3(),["GiftCardPurchaseRefundRecovery"]:c4(),["GiftCardPurchaseRefundRecoveryDestination"]:c5(),["GiftCardPurchaseRefundValueAllocation"]:c6(),["GiftCardPurchaseRefundValueHold"]:c7(),["GiftCardPurchaseRestoration"]:c8(),["GiftCardRefundProvenance"]:c9(),["MoneyValue"]:c10(),["PartnerWebhookEnvelope"]:c11(),["SharedCodec100"]:c12(),["SharedCodec101"]:c13(),["SharedCodec102"]:c14(),["SharedCodec103"]:c15(),["SharedCodec248"]:c16(),["SharedCodec249"]:c17(),["SharedCodec252"]:c18(),["SharedCodec313"]:c19(),["SharedCodec96"]:c20(),["SharedCodec97"]:c21(),["SharedCodec98"]:c22(),["SharedCodec99"]:c23(),["Webhook_gift_card_load_updated_installed_merchants"]:c24()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeWebhook_gift_card_load_updated_installed_merchants(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
