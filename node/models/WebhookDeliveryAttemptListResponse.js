import { d74 as c0, d1784 as c1, d1783 as c2, d2118 as c3, d2119 as c4, d2543 as c5, d2544 as c6 } from '../descriptors/data.js?sdk=a6b376902242b69271e8ff7d7046c24b4e5476233434e4180a046d09fed7dde4';
import { d2544 } from '../descriptors/data.js?sdk=a6b376902242b69271e8ff7d7046c24b4e5476233434e4180a046d09fed7dde4';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2544;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["NextAction"]:c1(),["NextActionMerchantAccountSession"]:c2(),["ResponseMeta"]:c3(),["ResponseWarning"]:c4(),["WebhookDeliveryAttempt"]:c5(),["WebhookDeliveryAttemptListResponse"]:c6()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeWebhookDeliveryAttemptListResponse(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
