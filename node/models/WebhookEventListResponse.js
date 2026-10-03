import { d74 as c0, d1784 as c1, d1783 as c2, d2118 as c3, d2119 as c4, d916 as c5, d2550 as c6, d2551 as c7, d2552 as c8 } from '../descriptors/data.js?sdk=1062b2a87ddfc25f3a8458c3e67aea98a29a33dcad943f63dceff9390190307c';
import { d2552 } from '../descriptors/data.js?sdk=1062b2a87ddfc25f3a8458c3e67aea98a29a33dcad943f63dceff9390190307c';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2552;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["NextAction"]:c1(),["NextActionMerchantAccountSession"]:c2(),["ResponseMeta"]:c3(),["ResponseWarning"]:c4(),["SharedCodec280"]:c5(),["SharedCodec657"]:c6(),["WebhookEvent"]:c7(),["WebhookEventListResponse"]:c8()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeWebhookEventListResponse(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
