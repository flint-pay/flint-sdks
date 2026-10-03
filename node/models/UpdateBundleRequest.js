import { d909 as c0, d74 as c1, d2357 as c2, d2358 as c3, d2359 as c4, d2356 as c5, d2360 as c6 } from '../descriptors/data.js?sdk=7603172525e41200d4f73e10915d0ae5669c2ee7108f266f11ac6495c50c1bfa';
import { d2360 } from '../descriptors/data.js?sdk=7603172525e41200d4f73e10915d0ae5669c2ee7108f266f11ac6495c50c1bfa';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2360;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["ImageRequest"]:c0(),["MoneyValue"]:c1(),["SharedCodec609"]:c2(),["SharedCodec610"]:c3(),["SharedCodec611"]:c4(),["UpdateBundleComponentRequest"]:c5(),["UpdateBundleRequest"]:c6()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeUpdateBundleRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
