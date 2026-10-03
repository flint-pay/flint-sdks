import { d909 as c0, d2101 as c1, d515 as c2, d908 as c3, d1514 as c4, d1516 as c5, d1515 as c6, d1517 as c7, d1518 as c8, d1513 as c9 } from '../descriptors/data.js?sdk=a6b376902242b69271e8ff7d7046c24b4e5476233434e4180a046d09fed7dde4';
import { d1513 } from '../descriptors/data.js?sdk=a6b376902242b69271e8ff7d7046c24b4e5476233434e4180a046d09fed7dde4';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1513;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MerchantWebhookEnvelope"]:c0(),["Report"]:c1(),["SharedCodec197"]:c2(),["SharedCodec275"]:c3(),["SharedCodec404"]:c4(),["SharedCodec405"]:c5(),["SharedCodec406"]:c6(),["SharedCodec407"]:c7(),["SharedCodec408"]:c8(),["Webhook_report_succeeded_merchant"]:c9()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeWebhook_report_succeeded_merchant(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
