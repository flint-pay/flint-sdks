import { d917 as c0, d916 as c1, d1519 as c2, d1514 as c3, d1516 as c4, d1515 as c5, d1517 as c6, d1518 as c7, d1520 as c8 } from '../descriptors/data.js?sdk=1062b2a87ddfc25f3a8458c3e67aea98a29a33dcad943f63dceff9390190307c';
import { d1520 } from '../descriptors/data.js?sdk=1062b2a87ddfc25f3a8458c3e67aea98a29a33dcad943f63dceff9390190307c';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1520;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["PartnerWebhookEnvelope"]:c0(),["SharedCodec280"]:c1(),["SharedCodec403"]:c2(),["SharedCodec404"]:c3(),["SharedCodec405"]:c4(),["SharedCodec406"]:c5(),["SharedCodec407"]:c6(),["SharedCodec408"]:c7(),["Webhook_report_succeeded_installed_merchants"]:c8()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeWebhook_report_succeeded_installed_merchants(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
