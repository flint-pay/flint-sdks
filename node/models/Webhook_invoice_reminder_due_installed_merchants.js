import { d917 as c0, d911 as c1, d916 as c2, d1474 as c3, d1475 as c4 } from '../descriptors/data.js?sdk=a6b376902242b69271e8ff7d7046c24b4e5476233434e4180a046d09fed7dde4';
import { d1475 } from '../descriptors/data.js?sdk=a6b376902242b69271e8ff7d7046c24b4e5476233434e4180a046d09fed7dde4';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1475;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["PartnerWebhookEnvelope"]:c0(),["SharedCodec278"]:c1(),["SharedCodec280"]:c2(),["SharedCodec393"]:c3(),["Webhook_invoice_reminder_due_installed_merchants"]:c4()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeWebhook_invoice_reminder_due_installed_merchants(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
