import { d1459 as c0, d909 as c1, d917 as c2, d515 as c3, d908 as c4, d913 as c5, d912 as c6, d911 as c7, d915 as c8, d916 as c9, d1458 as c10, d1457 as c11 } from '../descriptors/data.js?sdk=a6b376902242b69271e8ff7d7046c24b4e5476233434e4180a046d09fed7dde4';
import { d1459 } from '../descriptors/data.js?sdk=a6b376902242b69271e8ff7d7046c24b4e5476233434e4180a046d09fed7dde4';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1459;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["IncomingWebhookdb74c29bf1ffPayload"]:c0(),["MerchantWebhookEnvelope"]:c1(),["PartnerWebhookEnvelope"]:c2(),["SharedCodec197"]:c3(),["SharedCodec275"]:c4(),["SharedCodec276"]:c5(),["SharedCodec277"]:c6(),["SharedCodec278"]:c7(),["SharedCodec279"]:c8(),["SharedCodec280"]:c9(),["Webhook_payment_intent_processing_installed_merchants"]:c10(),["Webhook_payment_intent_processing_merchant"]:c11()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeIncomingWebhookdb74c29bf1ffPayload(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
