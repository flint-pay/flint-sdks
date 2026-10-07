import { d314 as c0, d1775 as c1, d1776 as c2, d2112 as c3, d2113 as c4, d14 as c5, d879 as c6, d1774 as c7, d2544 as c8, d2545 as c9, d2547 as c10 } from '../descriptors/data.js?sdk=94d0201d0d4794f7d38785f27620d8e5bb6163ea5be7d564a21c40eb38a1581b';
import { d2547 } from '../descriptors/data.js?sdk=94d0201d0d4794f7d38785f27620d8e5bb6163ea5be7d564a21c40eb38a1581b';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2547;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["NextAction"]:c1(),["NextActionMerchantAccountSession"]:c2(),["ResponseMeta"]:c3(),["ResponseWarning"]:c4(),["SharedCodec1"]:c5(),["SharedCodec242"]:c6(),["SharedCodec448"]:c7(),["SharedCodec623"]:c8(),["WebhookEvent"]:c9(),["WebhookEventResponse"]:c10()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeWebhookEventResponse(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
