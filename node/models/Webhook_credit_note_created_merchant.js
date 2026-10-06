import { d527 as c0, d536 as c1, d774 as c2, d930 as c3, d77 as c4, d73 as c5, d76 as c6, d74 as c7, d525 as c8, d929 as c9, d75 as c10, d1220 as c11 } from '../descriptors/data.js?sdk=527d9352908a453ad41ae99b8ef20015f463fff9697dd74e49111f49715fee29';
import { d1220 } from '../descriptors/data.js?sdk=527d9352908a453ad41ae99b8ef20015f463fff9697dd74e49111f49715fee29';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1220;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreditNote"]:c0(),["CreditNoteLine"]:c1(),["DocumentTaxID"]:c2(),["MerchantWebhookEnvelope"]:c3(),["MoneyValue"]:c4(),["PostalAddress"]:c5(),["SharedCodec18"]:c6(),["SharedCodec19"]:c7(),["SharedCodec199"]:c8(),["SharedCodec282"]:c9(),["TaxIdentity"]:c10(),["Webhook_credit_note_created_merchant"]:c11()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeWebhook_credit_note_created_merchant(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
