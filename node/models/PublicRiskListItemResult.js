import { d2058 as c0, d2243 as c1 } from '../descriptors/data.js?sdk=7603172525e41200d4f73e10915d0ae5669c2ee7108f266f11ac6495c50c1bfa';
import { d2058 } from '../descriptors/data.js?sdk=7603172525e41200d4f73e10915d0ae5669c2ee7108f266f11ac6495c50c1bfa';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2058;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["PublicRiskListItemResult"]:c0(),["RiskListItem"]:c1()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makePublicRiskListItemResult(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
