import { d925 as c0, d956 as c1, d936 as c2, d944 as c3, d526 as c4, d935 as c5, d943 as c6, d954 as c7, d40 as c8, d41 as c9, d955 as c10, d953 as c11 } from '../descriptors/data.js?sdk=1d377b406cf4feb3f1c2665a879357eb94a4280792cb4955cdbef8af750adf8d';
import { d956 } from '../descriptors/data.js?sdk=1d377b406cf4feb3f1c2665a879357eb94a4280792cb4955cdbef8af750adf8d';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d956;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["GiftCardTransaction"]:c0(),["IncomingWebhook067bab7c655aPayload"]:c1(),["MerchantWebhookEnvelope"]:c2(),["PartnerWebhookEnvelope"]:c3(),["SharedCodec199"]:c4(),["SharedCodec286"]:c5(),["SharedCodec291"]:c6(),["SharedCodec295"]:c7(),["SharedCodec5"]:c8(),["SharedCodec6"]:c9(),["Webhook_gift_card_transaction_created_installed_merchants"]:c10(),["Webhook_gift_card_transaction_created_merchant"]:c11()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeIncomingWebhook067bab7c655aPayload(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
