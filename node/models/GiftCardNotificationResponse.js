import { d877 as c0, d879 as c1, d881 as c2, d882 as c3, d74 as c4, d1784 as c5, d1783 as c6, d2118 as c7, d2119 as c8, d875 as c9, d876 as c10 } from '../descriptors/data.js?sdk=1062b2a87ddfc25f3a8458c3e67aea98a29a33dcad943f63dceff9390190307c';
import { d882 } from '../descriptors/data.js?sdk=1062b2a87ddfc25f3a8458c3e67aea98a29a33dcad943f63dceff9390190307c';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d882;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["GiftCardNotification"]:c0(),["GiftCardNotificationDeliveryAttempt"]:c1(),["GiftCardNotificationProviderOutcome"]:c2(),["GiftCardNotificationResponse"]:c3(),["MoneyValue"]:c4(),["NextAction"]:c5(),["NextActionMerchantAccountSession"]:c6(),["ResponseMeta"]:c7(),["ResponseWarning"]:c8(),["SharedCodec272"]:c9(),["SharedCodec273"]:c10()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeGiftCardNotificationResponse(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
