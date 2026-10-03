import { d1544 as c0, d911 as c1, d919 as c2, d2104 as c3, d517 as c4, d910 as c5, d918 as c6, d1521 as c7, d1516 as c8, d1518 as c9, d1517 as c10, d1519 as c11, d1520 as c12, d1543 as c13, d1542 as c14 } from '../descriptors/data.js?sdk=40abaf2a2616e8b74370ab25f8d4a8faced3f68b7d58057fcd11631bbc8038f0';
import { d1544 } from '../descriptors/data.js?sdk=40abaf2a2616e8b74370ab25f8d4a8faced3f68b7d58057fcd11631bbc8038f0';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1544;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["IncomingWebhookf6f719ba2af4Payload"]:c0(),["MerchantWebhookEnvelope"]:c1(),["PartnerWebhookEnvelope"]:c2(),["Report"]:c3(),["SharedCodec197"]:c4(),["SharedCodec275"]:c5(),["SharedCodec280"]:c6(),["SharedCodec403"]:c7(),["SharedCodec404"]:c8(),["SharedCodec405"]:c9(),["SharedCodec406"]:c10(),["SharedCodec407"]:c11(),["SharedCodec408"]:c12(),["Webhook_report_failed_installed_merchants"]:c13(),["Webhook_report_failed_merchant"]:c14()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeIncomingWebhookf6f719ba2af4Payload(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
