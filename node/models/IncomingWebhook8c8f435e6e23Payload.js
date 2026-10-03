import { d1269 as c0, d911 as c1, d919 as c2, d517 as c3, d910 as c4, d913 as c5, d918 as c6, d1265 as c7, d1267 as c8, d1268 as c9, d1266 as c10 } from '../descriptors/data.js?sdk=7603172525e41200d4f73e10915d0ae5669c2ee7108f266f11ac6495c50c1bfa';
import { d1269 } from '../descriptors/data.js?sdk=7603172525e41200d4f73e10915d0ae5669c2ee7108f266f11ac6495c50c1bfa';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1269;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["IncomingWebhook8c8f435e6e23Payload"]:c0(),["MerchantWebhookEnvelope"]:c1(),["PartnerWebhookEnvelope"]:c2(),["SharedCodec197"]:c3(),["SharedCodec275"]:c4(),["SharedCodec278"]:c5(),["SharedCodec280"]:c6(),["SharedCodec353"]:c7(),["SharedCodec354"]:c8(),["Webhook_invoice_updated_installed_merchants"]:c9(),["Webhook_invoice_updated_merchant"]:c10()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeIncomingWebhook8c8f435e6e23Payload(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
