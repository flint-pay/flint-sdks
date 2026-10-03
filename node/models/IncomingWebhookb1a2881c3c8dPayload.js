import { d1373 as c0, d909 as c1, d917 as c2, d515 as c3, d908 as c4, d916 as c5, d1371 as c6, d1372 as c7, d1370 as c8 } from '../descriptors/data.js?sdk=a6b376902242b69271e8ff7d7046c24b4e5476233434e4180a046d09fed7dde4';
import { d1373 } from '../descriptors/data.js?sdk=a6b376902242b69271e8ff7d7046c24b4e5476233434e4180a046d09fed7dde4';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1373;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["IncomingWebhookb1a2881c3c8dPayload"]:c0(),["MerchantWebhookEnvelope"]:c1(),["PartnerWebhookEnvelope"]:c2(),["SharedCodec197"]:c3(),["SharedCodec275"]:c4(),["SharedCodec280"]:c5(),["SharedCodec383"]:c6(),["Webhook_checkout_session_completed_installed_merchants"]:c7(),["Webhook_checkout_session_completed_merchant"]:c8()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeIncomingWebhookb1a2881c3c8dPayload(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
