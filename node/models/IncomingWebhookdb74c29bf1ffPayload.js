import { d1461 as c0, d911 as c1, d919 as c2, d517 as c3, d910 as c4, d915 as c5, d914 as c6, d913 as c7, d917 as c8, d918 as c9, d1460 as c10, d1459 as c11 } from '../descriptors/data.js?sdk=7603172525e41200d4f73e10915d0ae5669c2ee7108f266f11ac6495c50c1bfa';
import { d1461 } from '../descriptors/data.js?sdk=7603172525e41200d4f73e10915d0ae5669c2ee7108f266f11ac6495c50c1bfa';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1461;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["IncomingWebhookdb74c29bf1ffPayload"]:c0(),["MerchantWebhookEnvelope"]:c1(),["PartnerWebhookEnvelope"]:c2(),["SharedCodec197"]:c3(),["SharedCodec275"]:c4(),["SharedCodec276"]:c5(),["SharedCodec277"]:c6(),["SharedCodec278"]:c7(),["SharedCodec279"]:c8(),["SharedCodec280"]:c9(),["Webhook_payment_intent_processing_installed_merchants"]:c10(),["Webhook_payment_intent_processing_merchant"]:c11()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeIncomingWebhookdb74c29bf1ffPayload(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
