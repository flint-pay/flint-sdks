import { d925 as c0, d936 as c1, d526 as c2, d935 as c3, d40 as c4, d41 as c5, d953 as c6 } from '../descriptors/data.js?sdk=1d377b406cf4feb3f1c2665a879357eb94a4280792cb4955cdbef8af750adf8d';
import { d953 } from '../descriptors/data.js?sdk=1d377b406cf4feb3f1c2665a879357eb94a4280792cb4955cdbef8af750adf8d';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d953;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["GiftCardTransaction"]:c0(),["MerchantWebhookEnvelope"]:c1(),["SharedCodec199"]:c2(),["SharedCodec286"]:c3(),["SharedCodec5"]:c4(),["SharedCodec6"]:c5(),["Webhook_gift_card_transaction_created_merchant"]:c6()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeWebhook_gift_card_transaction_created_merchant(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
