import { d927 as c0, d911 as c1, d919 as c2, d517 as c3, d910 as c4, d918 as c5, d923 as c6, d922 as c7, d925 as c8, d926 as c9, d924 as c10 } from '../descriptors/data.js?sdk=7603172525e41200d4f73e10915d0ae5669c2ee7108f266f11ac6495c50c1bfa';
import { d927 } from '../descriptors/data.js?sdk=7603172525e41200d4f73e10915d0ae5669c2ee7108f266f11ac6495c50c1bfa';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d927;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["IncomingWebhook05810405f7d2Payload"]:c0(),["MerchantWebhookEnvelope"]:c1(),["PartnerWebhookEnvelope"]:c2(),["SharedCodec197"]:c3(),["SharedCodec275"]:c4(),["SharedCodec280"]:c5(),["SharedCodec281"]:c6(),["SharedCodec282"]:c7(),["SharedCodec283"]:c8(),["Webhook_order_fulfillment_event_created_installed_merchants"]:c9(),["Webhook_order_fulfillment_event_created_merchant"]:c10()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeIncomingWebhook05810405f7d2Payload(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
