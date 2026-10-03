import { d911 as c0, d74 as c1, d517 as c2, d910 as c3, d1215 as c4, d1220 as c5 } from '../descriptors/data.js?sdk=7603172525e41200d4f73e10915d0ae5669c2ee7108f266f11ac6495c50c1bfa';
import { d1220 } from '../descriptors/data.js?sdk=7603172525e41200d4f73e10915d0ae5669c2ee7108f266f11ac6495c50c1bfa';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1220;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MerchantWebhookEnvelope"]:c0(),["MoneyValue"]:c1(),["SharedCodec197"]:c2(),["SharedCodec275"]:c3(),["SharedCodec347"]:c4(),["Webhook_invoice_late_fee_assessed_merchant"]:c5()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeWebhook_invoice_late_fee_assessed_merchant(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
