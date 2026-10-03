import { d1775 as c0, d74 as c1, d2341 as c2, d2420 as c3 } from '../descriptors/data.js?sdk=7603172525e41200d4f73e10915d0ae5669c2ee7108f266f11ac6495c50c1bfa';
import { d2420 } from '../descriptors/data.js?sdk=7603172525e41200d4f73e10915d0ae5669c2ee7108f266f11ac6495c50c1bfa';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2420;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["ModifierRequest"]:c0(),["MoneyValue"]:c1(),["TextModifierConfigRequest"]:c2(),["UpdateModifierGroupRequest"]:c3()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeUpdateModifierGroupRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
