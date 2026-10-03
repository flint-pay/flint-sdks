import { d528 as c0, d759 as c1, d74 as c2, d919 as c3, d70 as c4, d73 as c5, d71 as c6, d918 as c7, d1027 as c8, d72 as c9, d1195 as c10 } from '../descriptors/data.js?sdk=7603172525e41200d4f73e10915d0ae5669c2ee7108f266f11ac6495c50c1bfa';
import { d1195 } from '../descriptors/data.js?sdk=7603172525e41200d4f73e10915d0ae5669c2ee7108f266f11ac6495c50c1bfa';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1195;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreditNoteLine"]:c0(),["DocumentTaxID"]:c1(),["MoneyValue"]:c2(),["PartnerWebhookEnvelope"]:c3(),["PostalAddress"]:c4(),["SharedCodec17"]:c5(),["SharedCodec18"]:c6(),["SharedCodec280"]:c7(),["SharedCodec313"]:c8(),["TaxIdentity"]:c9(),["Webhook_credit_note_created_installed_merchants"]:c10()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeWebhook_credit_note_created_installed_merchants(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
