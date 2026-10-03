import { d2033 as c0, d2031 as c1, d2032 as c2 } from '../descriptors/data.js?sdk=7603172525e41200d4f73e10915d0ae5669c2ee7108f266f11ac6495c50c1bfa';
import { d2033 } from '../descriptors/data.js?sdk=7603172525e41200d4f73e10915d0ae5669c2ee7108f266f11ac6495c50c1bfa';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2033;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["PromotionRefRequest"]:c0(),["SharedCodec520"]:c1(),["SharedCodec521"]:c2()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makePromotionRefRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
