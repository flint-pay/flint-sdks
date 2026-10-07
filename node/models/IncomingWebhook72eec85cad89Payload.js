import { d1187 as c0, d872 as c1, d314 as c2, d880 as c3, d469 as c4, d871 as c5, d879 as c6, d1183 as c7, d1185 as c8, d1186 as c9, d1184 as c10 } from '../descriptors/data.js?sdk=94d0201d0d4794f7d38785f27620d8e5bb6163ea5be7d564a21c40eb38a1581b';
import { d1187 } from '../descriptors/data.js?sdk=94d0201d0d4794f7d38785f27620d8e5bb6163ea5be7d564a21c40eb38a1581b';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1187;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["IncomingWebhook72eec85cad89Payload"]:c0(),["MerchantWebhookEnvelope"]:c1(),["MoneyValue"]:c2(),["PartnerWebhookEnvelope"]:c3(),["SharedCodec161"]:c4(),["SharedCodec237"]:c5(),["SharedCodec242"]:c6(),["SharedCodec310"]:c7(),["SharedCodec311"]:c8(),["Webhook_invoice_late_fee_waived_installed_merchants"]:c9(),["Webhook_invoice_late_fee_waived_merchant"]:c10()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeIncomingWebhook72eec85cad89Payload(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
