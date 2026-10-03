import { d1382 as c0, d909 as c1, d917 as c2, d515 as c3, d908 as c4, d911 as c5, d916 as c6, d1378 as c7, d1380 as c8, d1381 as c9, d1379 as c10 } from '../descriptors/data.js?sdk=a6b376902242b69271e8ff7d7046c24b4e5476233434e4180a046d09fed7dde4';
import { d1382 } from '../descriptors/data.js?sdk=a6b376902242b69271e8ff7d7046c24b4e5476233434e4180a046d09fed7dde4';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1382;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["IncomingWebhookb65376063a56Payload"]:c0(),["MerchantWebhookEnvelope"]:c1(),["PartnerWebhookEnvelope"]:c2(),["SharedCodec197"]:c3(),["SharedCodec275"]:c4(),["SharedCodec278"]:c5(),["SharedCodec280"]:c6(),["SharedCodec384"]:c7(),["SharedCodec385"]:c8(),["Webhook_invoice_issue_failed_installed_merchants"]:c9(),["Webhook_invoice_issue_failed_merchant"]:c10()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeIncomingWebhookb65376063a56Payload(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
