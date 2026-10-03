import { d1542 as c0, d909 as c1, d917 as c2, d2101 as c3, d515 as c4, d908 as c5, d916 as c6, d1519 as c7, d1514 as c8, d1516 as c9, d1515 as c10, d1517 as c11, d1518 as c12, d1541 as c13, d1540 as c14 } from '../descriptors/data.js?sdk=a6b376902242b69271e8ff7d7046c24b4e5476233434e4180a046d09fed7dde4';
import { d1542 } from '../descriptors/data.js?sdk=a6b376902242b69271e8ff7d7046c24b4e5476233434e4180a046d09fed7dde4';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1542;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["IncomingWebhookf6f719ba2af4Payload"]:c0(),["MerchantWebhookEnvelope"]:c1(),["PartnerWebhookEnvelope"]:c2(),["Report"]:c3(),["SharedCodec197"]:c4(),["SharedCodec275"]:c5(),["SharedCodec280"]:c6(),["SharedCodec403"]:c7(),["SharedCodec404"]:c8(),["SharedCodec405"]:c9(),["SharedCodec406"]:c10(),["SharedCodec407"]:c11(),["SharedCodec408"]:c12(),["Webhook_report_failed_installed_merchants"]:c13(),["Webhook_report_failed_merchant"]:c14()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeIncomingWebhookf6f719ba2af4Payload(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
