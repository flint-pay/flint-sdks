import { d930 as c0, d2140 as c1, d525 as c2, d929 as c3, d1546 as c4, d1548 as c5, d1547 as c6, d1549 as c7, d1550 as c8, d1572 as c9 } from '../descriptors/data.js?sdk=d22cce0575f7bd583ca524a14ee93e300c9f48000162d4e1926fedd9f4c37501';
import { d1572 } from '../descriptors/data.js?sdk=d22cce0575f7bd583ca524a14ee93e300c9f48000162d4e1926fedd9f4c37501';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1572;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MerchantWebhookEnvelope"]:c0(),["Report"]:c1(),["SharedCodec199"]:c2(),["SharedCodec282"]:c3(),["SharedCodec412"]:c4(),["SharedCodec413"]:c5(),["SharedCodec414"]:c6(),["SharedCodec415"]:c7(),["SharedCodec416"]:c8(),["Webhook_report_failed_merchant"]:c9()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeWebhook_report_failed_merchant(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
