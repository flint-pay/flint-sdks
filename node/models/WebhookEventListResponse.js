import { d74 as c0, d1784 as c1, d1783 as c2, d2119 as c3, d2120 as c4, d916 as c5, d2551 as c6, d2552 as c7, d2553 as c8 } from '../descriptors/data.js?sdk=41ea09ad124ffa3bdfba4a8208bd0391cd6fb609c70d062a00cb64936b55a83b';
import { d2553 } from '../descriptors/data.js?sdk=41ea09ad124ffa3bdfba4a8208bd0391cd6fb609c70d062a00cb64936b55a83b';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2553;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["NextAction"]:c1(),["NextActionMerchantAccountSession"]:c2(),["ResponseMeta"]:c3(),["ResponseWarning"]:c4(),["SharedCodec280"]:c5(),["SharedCodec657"]:c6(),["WebhookEvent"]:c7(),["WebhookEventListResponse"]:c8()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeWebhookEventListResponse(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
