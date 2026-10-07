import { d1469 as c0, d872 as c1, d880 as c2, d469 as c3, d871 as c4, d874 as c5, d879 as c6, d1465 as c7, d1467 as c8, d1468 as c9, d1466 as c10 } from '../descriptors/data.js?sdk=94d0201d0d4794f7d38785f27620d8e5bb6163ea5be7d564a21c40eb38a1581b';
import { d1469 } from '../descriptors/data.js?sdk=94d0201d0d4794f7d38785f27620d8e5bb6163ea5be7d564a21c40eb38a1581b';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1469;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["IncomingWebhooke8c8a6153ca1Payload"]:c0(),["MerchantWebhookEnvelope"]:c1(),["PartnerWebhookEnvelope"]:c2(),["SharedCodec161"]:c3(),["SharedCodec237"]:c4(),["SharedCodec240"]:c5(),["SharedCodec242"]:c6(),["SharedCodec362"]:c7(),["SharedCodec363"]:c8(),["Webhook_invoice_payment_processing_installed_merchants"]:c9(),["Webhook_invoice_payment_processing_merchant"]:c10()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeIncomingWebhooke8c8a6153ca1Payload(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
