import { d919 as c0, d914 as c1, d913 as c2, d917 as c3, d918 as c4, d1508 as c5 } from '../descriptors/data.js?sdk=7603172525e41200d4f73e10915d0ae5669c2ee7108f266f11ac6495c50c1bfa';
import { d1508 } from '../descriptors/data.js?sdk=7603172525e41200d4f73e10915d0ae5669c2ee7108f266f11ac6495c50c1bfa';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1508;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["PartnerWebhookEnvelope"]:c0(),["SharedCodec277"]:c1(),["SharedCodec278"]:c2(),["SharedCodec279"]:c3(),["SharedCodec280"]:c4(),["Webhook_payment_intent_canceled_installed_merchants"]:c5()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeWebhook_payment_intent_canceled_installed_merchants(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
