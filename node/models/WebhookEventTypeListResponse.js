import { d77 as c0, d1824 as c1, d1823 as c2, d2158 as c3, d2159 as c4, d14 as c5, d937 as c6, d1822 as c7, d2597 as c8, d2598 as c9 } from '../descriptors/data.js?sdk=d22cce0575f7bd583ca524a14ee93e300c9f48000162d4e1926fedd9f4c37501';
import { d2598 } from '../descriptors/data.js?sdk=d22cce0575f7bd583ca524a14ee93e300c9f48000162d4e1926fedd9f4c37501';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2598;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["NextAction"]:c1(),["NextActionMerchantAccountSession"]:c2(),["ResponseMeta"]:c3(),["ResponseWarning"]:c4(),["SharedCodec1"]:c5(),["SharedCodec287"]:c6(),["SharedCodec488"]:c7(),["WebhookEventType"]:c8(),["WebhookEventTypeListResponse"]:c9()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeWebhookEventTypeListResponse(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
