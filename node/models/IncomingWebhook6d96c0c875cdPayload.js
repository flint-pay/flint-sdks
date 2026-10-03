import { d519 as c0, d528 as c1, d759 as c2, d1196 as c3, d911 as c4, d74 as c5, d919 as c6, d70 as c7, d73 as c8, d71 as c9, d517 as c10, d910 as c11, d918 as c12, d1027 as c13, d72 as c14, d1195 as c15, d1194 as c16 } from '../descriptors/data.js?sdk=7603172525e41200d4f73e10915d0ae5669c2ee7108f266f11ac6495c50c1bfa';
import { d1196 } from '../descriptors/data.js?sdk=7603172525e41200d4f73e10915d0ae5669c2ee7108f266f11ac6495c50c1bfa';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1196;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreditNote"]:c0(),["CreditNoteLine"]:c1(),["DocumentTaxID"]:c2(),["IncomingWebhook6d96c0c875cdPayload"]:c3(),["MerchantWebhookEnvelope"]:c4(),["MoneyValue"]:c5(),["PartnerWebhookEnvelope"]:c6(),["PostalAddress"]:c7(),["SharedCodec17"]:c8(),["SharedCodec18"]:c9(),["SharedCodec197"]:c10(),["SharedCodec275"]:c11(),["SharedCodec280"]:c12(),["SharedCodec313"]:c13(),["TaxIdentity"]:c14(),["Webhook_credit_note_created_installed_merchants"]:c15(),["Webhook_credit_note_created_merchant"]:c16()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeIncomingWebhook6d96c0c875cdPayload(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
