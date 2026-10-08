import { d859 as c0, d860 as c1, d861 as c2, d862 as c3, d863 as c4, d864 as c5, d323 as c6, d1820 as c7, d1821 as c8, d2162 as c9, d2163 as c10, d14 as c11, d1819 as c12 } from '../descriptors/data.js?sdk=245b7fb11d6174517fe5d194b5fb87c42348ace248a5c84bbab9ef7bfe2b9e5e';
import { d862 } from '../descriptors/data.js?sdk=245b7fb11d6174517fe5d194b5fb87c42348ace248a5c84bbab9ef7bfe2b9e5e';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d862;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["GiftCardNotification"]:c0(),["GiftCardNotificationDelivery"]:c1(),["GiftCardNotificationDeliveryAttempt"]:c2(),["GiftCardNotificationListResponse"]:c3(),["GiftCardNotificationProviderOutcome"]:c4(),["GiftCardNotificationRecipient"]:c5(),["MoneyValue"]:c6(),["NextAction"]:c7(),["NextActionMerchantAccountSession"]:c8(),["ResponseMeta"]:c9(),["ResponseWarning"]:c10(),["SharedCodec1"]:c11(),["SharedCodec466"]:c12()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeGiftCardNotificationListResponse(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
