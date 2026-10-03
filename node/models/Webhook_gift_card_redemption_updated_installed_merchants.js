import { d919 as c0, d859 as c1, d918 as c2, d960 as c3, d961 as c4 } from '../descriptors/data.js?sdk=7603172525e41200d4f73e10915d0ae5669c2ee7108f266f11ac6495c50c1bfa';
import { d961 } from '../descriptors/data.js?sdk=7603172525e41200d4f73e10915d0ae5669c2ee7108f266f11ac6495c50c1bfa';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d961;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["PartnerWebhookEnvelope"]:c0(),["SharedCodec265"]:c1(),["SharedCodec280"]:c2(),["SharedCodec299"]:c3(),["Webhook_gift_card_redemption_updated_installed_merchants"]:c4()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeWebhook_gift_card_redemption_updated_installed_merchants(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
