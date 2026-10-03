import { d2299 as c0, d2300 as c1, d2301 as c2 } from '../descriptors/data.js?sdk=7603172525e41200d4f73e10915d0ae5669c2ee7108f266f11ac6495c50c1bfa';
import { d2301 } from '../descriptors/data.js?sdk=7603172525e41200d4f73e10915d0ae5669c2ee7108f266f11ac6495c50c1bfa';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2301;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["SharedCodec592"]:c0(),["SharedCodec593"]:c1(),["SubscriptionBillingStartRequest"]:c2()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeSubscriptionBillingStartRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
