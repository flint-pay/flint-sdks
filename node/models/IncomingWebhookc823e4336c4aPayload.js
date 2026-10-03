import { d1414 as c0, d911 as c1, d919 as c2, d517 as c3, d910 as c4, d918 as c5, d950 as c6, d1413 as c7, d1412 as c8 } from '../descriptors/data.js?sdk=7603172525e41200d4f73e10915d0ae5669c2ee7108f266f11ac6495c50c1bfa';
import { d1414 } from '../descriptors/data.js?sdk=7603172525e41200d4f73e10915d0ae5669c2ee7108f266f11ac6495c50c1bfa';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1414;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["IncomingWebhookc823e4336c4aPayload"]:c0(),["MerchantWebhookEnvelope"]:c1(),["PartnerWebhookEnvelope"]:c2(),["SharedCodec197"]:c3(),["SharedCodec275"]:c4(),["SharedCodec280"]:c5(),["SharedCodec296"]:c6(),["Webhook_delivery_rate_callback_archived_installed_merchants"]:c7(),["Webhook_delivery_rate_callback_archived_merchant"]:c8()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeIncomingWebhookc823e4336c4aPayload(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
