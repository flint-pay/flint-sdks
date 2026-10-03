import { d918 as c0, d2553 as c1, d2554 as c2 } from '../descriptors/data.js?sdk=7603172525e41200d4f73e10915d0ae5669c2ee7108f266f11ac6495c50c1bfa';
import { d2554 } from '../descriptors/data.js?sdk=7603172525e41200d4f73e10915d0ae5669c2ee7108f266f11ac6495c50c1bfa';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2554;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["SharedCodec280"]:c0(),["SharedCodec657"]:c1(),["WebhookEvent"]:c2()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeWebhookEvent(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
