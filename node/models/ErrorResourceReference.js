import { d777 as c0 } from '../descriptors/data.js?sdk=7603172525e41200d4f73e10915d0ae5669c2ee7108f266f11ac6495c50c1bfa';
import { d777 } from '../descriptors/data.js?sdk=7603172525e41200d4f73e10915d0ae5669c2ee7108f266f11ac6495c50c1bfa';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d777;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["ErrorResourceReference"]:c0()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeErrorResourceReference(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
