import { d917 as c0, d916 as c1, d1519 as c2, d1514 as c3, d1516 as c4, d1515 as c5, d1517 as c6, d1518 as c7, d1541 as c8 } from '../descriptors/data.js?sdk=a6b376902242b69271e8ff7d7046c24b4e5476233434e4180a046d09fed7dde4';
import { d1541 } from '../descriptors/data.js?sdk=a6b376902242b69271e8ff7d7046c24b4e5476233434e4180a046d09fed7dde4';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1541;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["PartnerWebhookEnvelope"]:c0(),["SharedCodec280"]:c1(),["SharedCodec403"]:c2(),["SharedCodec404"]:c3(),["SharedCodec405"]:c4(),["SharedCodec406"]:c5(),["SharedCodec407"]:c6(),["SharedCodec408"]:c7(),["Webhook_report_failed_installed_merchants"]:c8()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeWebhook_report_failed_installed_merchants(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
