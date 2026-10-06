import { d885 as c0, d887 as c1, d888 as c2, d889 as c3, d77 as c4, d1797 as c5, d1796 as c6, d2131 as c7, d2132 as c8, d14 as c9, d883 as c10, d884 as c11, d1795 as c12 } from '../descriptors/data.js?sdk=f67f6eaf1051f21ec6ba8a2fb3534a619d1f5d2afe43c079dcee44663fec8859';
import { d888 } from '../descriptors/data.js?sdk=f67f6eaf1051f21ec6ba8a2fb3534a619d1f5d2afe43c079dcee44663fec8859';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d888;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["GiftCardNotification"]:c0(),["GiftCardNotificationDeliveryAttempt"]:c1(),["GiftCardNotificationListResponse"]:c2(),["GiftCardNotificationProviderOutcome"]:c3(),["MoneyValue"]:c4(),["NextAction"]:c5(),["NextActionMerchantAccountSession"]:c6(),["ResponseMeta"]:c7(),["ResponseWarning"]:c8(),["SharedCodec1"]:c9(),["SharedCodec278"]:c10(),["SharedCodec279"]:c11(),["SharedCodec485"]:c12()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeGiftCardNotificationListResponse(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
