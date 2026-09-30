import { d69 as c0, d1646 as c1, d1645 as c2, d1959 as c3, d1960 as c4, d822 as c5, d2378 as c6, d2379 as c7, d2380 as c8 } from '../descriptors/data.js?sdk=bef5952824dbe0867acb5a07673ca91102b136eda21794fff718a3addd296a2a';
import { d2380 } from '../descriptors/data.js?sdk=bef5952824dbe0867acb5a07673ca91102b136eda21794fff718a3addd296a2a';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2380;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["NextAction"]:c1(),["NextActionMerchantAccountSession"]:c2(),["ResponseMeta"]:c3(),["ResponseWarning"]:c4(),["SharedCodec249"]:c5(),["SharedCodec603"]:c6(),["WebhookEvent"]:c7(),["WebhookEventListResponse"]:c8()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeWebhookEventListResponse(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
