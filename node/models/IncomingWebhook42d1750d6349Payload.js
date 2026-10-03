import { d860 as c0, d1096 as c1, d911 as c2, d919 as c3, d517 as c4, d859 as c5, d910 as c6, d918 as c7, d1094 as c8, d1095 as c9, d1093 as c10 } from '../descriptors/data.js?sdk=7603172525e41200d4f73e10915d0ae5669c2ee7108f266f11ac6495c50c1bfa';
import { d1096 } from '../descriptors/data.js?sdk=7603172525e41200d4f73e10915d0ae5669c2ee7108f266f11ac6495c50c1bfa';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1096;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["GiftCard"]:c0(),["IncomingWebhook42d1750d6349Payload"]:c1(),["MerchantWebhookEnvelope"]:c2(),["PartnerWebhookEnvelope"]:c3(),["SharedCodec197"]:c4(),["SharedCodec265"]:c5(),["SharedCodec275"]:c6(),["SharedCodec280"]:c7(),["SharedCodec323"]:c8(),["Webhook_gift_card_updated_installed_merchants"]:c9(),["Webhook_gift_card_updated_merchant"]:c10()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeIncomingWebhook42d1750d6349Payload(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
