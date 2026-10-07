import { d938 as c0, d932 as c1, d937 as c2, d1563 as c3, d1562 as c4, d1555 as c5, d1554 as c6, d1557 as c7, d1556 as c8, d1559 as c9, d1558 as c10, d1561 as c11, d1560 as c12, d1566 as c13, d1567 as c14 } from '../descriptors/data.js?sdk=d22cce0575f7bd583ca524a14ee93e300c9f48000162d4e1926fedd9f4c37501';
import { d1567 } from '../descriptors/data.js?sdk=d22cce0575f7bd583ca524a14ee93e300c9f48000162d4e1926fedd9f4c37501';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1567;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["PartnerWebhookEnvelope"]:c0(),["SharedCodec285"]:c1(),["SharedCodec287"]:c2(),["SharedCodec418"]:c3(),["SharedCodec419"]:c4(),["SharedCodec420"]:c5(),["SharedCodec421"]:c6(),["SharedCodec422"]:c7(),["SharedCodec423"]:c8(),["SharedCodec424"]:c9(),["SharedCodec425"]:c10(),["SharedCodec426"]:c11(),["SharedCodec427"]:c12(),["SharedCodec428"]:c13(),["Webhook_order_partially_paid_installed_merchants"]:c14()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeWebhook_order_partially_paid_installed_merchants(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
