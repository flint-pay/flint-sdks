import { d519 as c0, d528 as c1, d759 as c2, d911 as c3, d74 as c4, d70 as c5, d73 as c6, d71 as c7, d517 as c8, d910 as c9, d72 as c10, d1026 as c11 } from '../descriptors/data.js?sdk=7603172525e41200d4f73e10915d0ae5669c2ee7108f266f11ac6495c50c1bfa';
import { d1026 } from '../descriptors/data.js?sdk=7603172525e41200d4f73e10915d0ae5669c2ee7108f266f11ac6495c50c1bfa';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1026;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreditNote"]:c0(),["CreditNoteLine"]:c1(),["DocumentTaxID"]:c2(),["MerchantWebhookEnvelope"]:c3(),["MoneyValue"]:c4(),["PostalAddress"]:c5(),["SharedCodec17"]:c6(),["SharedCodec18"]:c7(),["SharedCodec197"]:c8(),["SharedCodec275"]:c9(),["TaxIdentity"]:c10(),["Webhook_credit_note_updated_merchant"]:c11()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeWebhook_credit_note_updated_merchant(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
