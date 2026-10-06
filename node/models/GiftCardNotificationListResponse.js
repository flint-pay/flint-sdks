import { d898 as c0, d900 as c1, d901 as c2, d902 as c3, d77 as c4, d1823 as c5, d1822 as c6, d2157 as c7, d2158 as c8, d14 as c9, d896 as c10, d897 as c11, d1821 as c12 } from '../descriptors/data.js?sdk=23304d0710327c07c2c4a303230dbb22d6b14f651af3363cdef910b4916b65b9';
import { d901 } from '../descriptors/data.js?sdk=23304d0710327c07c2c4a303230dbb22d6b14f651af3363cdef910b4916b65b9';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d901;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["GiftCardNotification"]:c0(),["GiftCardNotificationDeliveryAttempt"]:c1(),["GiftCardNotificationListResponse"]:c2(),["GiftCardNotificationProviderOutcome"]:c3(),["MoneyValue"]:c4(),["NextAction"]:c5(),["NextActionMerchantAccountSession"]:c6(),["ResponseMeta"]:c7(),["ResponseWarning"]:c8(),["SharedCodec1"]:c9(),["SharedCodec279"]:c10(),["SharedCodec280"]:c11(),["SharedCodec487"]:c12()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeGiftCardNotificationListResponse(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
