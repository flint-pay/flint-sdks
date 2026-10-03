import { d566 as c0 } from '../descriptors/data.js?sdk=7603172525e41200d4f73e10915d0ae5669c2ee7108f266f11ac6495c50c1bfa';
import { d566 } from '../descriptors/data.js?sdk=7603172525e41200d4f73e10915d0ae5669c2ee7108f266f11ac6495c50c1bfa';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d566;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["DeletePayoutDestinationRequest"]:c0()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeDeletePayoutDestinationRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
