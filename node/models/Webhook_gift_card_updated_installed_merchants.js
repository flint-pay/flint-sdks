import { d917 as c0, d857 as c1, d916 as c2, d1092 as c3, d1093 as c4 } from '../descriptors/data.js?sdk=a6b376902242b69271e8ff7d7046c24b4e5476233434e4180a046d09fed7dde4';
import { d1093 } from '../descriptors/data.js?sdk=a6b376902242b69271e8ff7d7046c24b4e5476233434e4180a046d09fed7dde4';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1093;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["PartnerWebhookEnvelope"]:c0(),["SharedCodec265"]:c1(),["SharedCodec280"]:c2(),["SharedCodec323"]:c3(),["Webhook_gift_card_updated_installed_merchants"]:c4()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeWebhook_gift_card_updated_installed_merchants(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
