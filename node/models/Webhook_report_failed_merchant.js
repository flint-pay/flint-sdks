import { d930 as c0, d2139 as c1, d525 as c2, d929 as c3, d1545 as c4, d1547 as c5, d1546 as c6, d1548 as c7, d1549 as c8, d1571 as c9 } from '../descriptors/data.js?sdk=23304d0710327c07c2c4a303230dbb22d6b14f651af3363cdef910b4916b65b9';
import { d1571 } from '../descriptors/data.js?sdk=23304d0710327c07c2c4a303230dbb22d6b14f651af3363cdef910b4916b65b9';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1571;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MerchantWebhookEnvelope"]:c0(),["Report"]:c1(),["SharedCodec199"]:c2(),["SharedCodec282"]:c3(),["SharedCodec411"]:c4(),["SharedCodec412"]:c5(),["SharedCodec413"]:c6(),["SharedCodec414"]:c7(),["SharedCodec415"]:c8(),["Webhook_report_failed_merchant"]:c9()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeWebhook_report_failed_merchant(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
