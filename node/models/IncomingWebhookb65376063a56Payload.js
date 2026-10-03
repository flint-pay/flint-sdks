import { d1384 as c0, d911 as c1, d919 as c2, d517 as c3, d910 as c4, d913 as c5, d918 as c6, d1380 as c7, d1382 as c8, d1383 as c9, d1381 as c10 } from '../descriptors/data.js?sdk=7603172525e41200d4f73e10915d0ae5669c2ee7108f266f11ac6495c50c1bfa';
import { d1384 } from '../descriptors/data.js?sdk=7603172525e41200d4f73e10915d0ae5669c2ee7108f266f11ac6495c50c1bfa';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1384;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["IncomingWebhookb65376063a56Payload"]:c0(),["MerchantWebhookEnvelope"]:c1(),["PartnerWebhookEnvelope"]:c2(),["SharedCodec197"]:c3(),["SharedCodec275"]:c4(),["SharedCodec278"]:c5(),["SharedCodec280"]:c6(),["SharedCodec384"]:c7(),["SharedCodec385"]:c8(),["Webhook_invoice_issue_failed_installed_merchants"]:c9(),["Webhook_invoice_issue_failed_merchant"]:c10()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeIncomingWebhookb65376063a56Payload(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
