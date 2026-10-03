import { d909 as c0, d2101 as c1, d515 as c2, d908 as c3, d1514 as c4, d1516 as c5, d1515 as c6, d1517 as c7, d1518 as c8, d1540 as c9 } from '../descriptors/data.js?sdk=1062b2a87ddfc25f3a8458c3e67aea98a29a33dcad943f63dceff9390190307c';
import { d1540 } from '../descriptors/data.js?sdk=1062b2a87ddfc25f3a8458c3e67aea98a29a33dcad943f63dceff9390190307c';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1540;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MerchantWebhookEnvelope"]:c0(),["Report"]:c1(),["SharedCodec197"]:c2(),["SharedCodec275"]:c3(),["SharedCodec404"]:c4(),["SharedCodec405"]:c5(),["SharedCodec406"]:c6(),["SharedCodec407"]:c7(),["SharedCodec408"]:c8(),["Webhook_report_failed_merchant"]:c9()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeWebhook_report_failed_merchant(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
