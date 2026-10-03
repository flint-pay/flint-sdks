import { d1135 as c0, d909 as c1, d515 as c2, d908 as c3, d2538 as c4 } from '../descriptors/data.js?sdk=a6b376902242b69271e8ff7d7046c24b4e5476233434e4180a046d09fed7dde4';
import { d1135 } from '../descriptors/data.js?sdk=a6b376902242b69271e8ff7d7046c24b4e5476233434e4180a046d09fed7dde4';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1135;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["IncomingWebhook587b04e915e2Payload"]:c0(),["MerchantWebhookEnvelope"]:c1(),["SharedCodec197"]:c2(),["SharedCodec275"]:c3(),["Webhook_payout_settings_updated_merchant"]:c4()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeIncomingWebhook587b04e915e2Payload(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
