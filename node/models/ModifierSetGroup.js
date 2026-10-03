import { d1770 as c0, d1771 as c1, d1774 as c2, d1777 as c3, d74 as c4, d399 as c5, d1776 as c6, d2340 as c7 } from '../descriptors/data.js?sdk=7603172525e41200d4f73e10915d0ae5669c2ee7108f266f11ac6495c50c1bfa';
import { d1777 } from '../descriptors/data.js?sdk=7603172525e41200d4f73e10915d0ae5669c2ee7108f266f11ac6495c50c1bfa';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1777;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["Modifier"]:c0(),["ModifierGroup"]:c1(),["ModifierOverride"]:c2(),["ModifierSetGroup"]:c3(),["MoneyValue"]:c4(),["SharedCodec145"]:c5(),["SharedCodec478"]:c6(),["TextModifierConfig"]:c7()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeModifierSetGroup(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
