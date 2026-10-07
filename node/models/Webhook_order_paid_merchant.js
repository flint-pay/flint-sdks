import { d930 as c0, d525 as c1, d929 as c2, d932 as c3, d1563 as c4, d1562 as c5, d1555 as c6, d1554 as c7, d1557 as c8, d1556 as c9, d1559 as c10, d1558 as c11, d1561 as c12, d1560 as c13, d1575 as c14, d1576 as c15 } from '../descriptors/data.js?sdk=d22cce0575f7bd583ca524a14ee93e300c9f48000162d4e1926fedd9f4c37501';
import { d1576 } from '../descriptors/data.js?sdk=d22cce0575f7bd583ca524a14ee93e300c9f48000162d4e1926fedd9f4c37501';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1576;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MerchantWebhookEnvelope"]:c0(),["SharedCodec199"]:c1(),["SharedCodec282"]:c2(),["SharedCodec285"]:c3(),["SharedCodec418"]:c4(),["SharedCodec419"]:c5(),["SharedCodec420"]:c6(),["SharedCodec421"]:c7(),["SharedCodec422"]:c8(),["SharedCodec423"]:c9(),["SharedCodec424"]:c10(),["SharedCodec425"]:c11(),["SharedCodec426"]:c12(),["SharedCodec427"]:c13(),["SharedCodec429"]:c14(),["Webhook_order_paid_merchant"]:c15()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeWebhook_order_paid_merchant(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
