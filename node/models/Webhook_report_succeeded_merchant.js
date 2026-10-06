import { d930 as c0, d2139 as c1, d525 as c2, d929 as c3, d1545 as c4, d1547 as c5, d1546 as c6, d1548 as c7, d1549 as c8, d1544 as c9 } from '../descriptors/data.js?sdk=d3e94df4e2b3092877185e2938463692374ebf68487770c61d779ced93b5901e';
import { d1544 } from '../descriptors/data.js?sdk=d3e94df4e2b3092877185e2938463692374ebf68487770c61d779ced93b5901e';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1544;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MerchantWebhookEnvelope"]:c0(),["Report"]:c1(),["SharedCodec199"]:c2(),["SharedCodec282"]:c3(),["SharedCodec411"]:c4(),["SharedCodec412"]:c5(),["SharedCodec413"]:c6(),["SharedCodec414"]:c7(),["SharedCodec415"]:c8(),["Webhook_report_succeeded_merchant"]:c9()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeWebhook_report_succeeded_merchant(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
