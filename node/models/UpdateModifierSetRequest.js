import { d7622 as c0, d7623 as c2, d7617 as c3, d7618 as c14 } from '../descriptors/data/363.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { d5918 as c1, d5920 as c8, d5921 as c9, d5919 as c10 } from '../descriptors/data/265.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { d7625 as c4, d7626 as c6, d7627 as c7, d7628 as c11, d7633 as c12, d7634 as c13 } from '../descriptors/data/364.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { d5789 as c5 } from '../descriptors/data/256.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { d5680 as c15 } from '../descriptors/data/249.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { d5680 as d5680 } from '../descriptors/data/249.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d5680;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["InlineModifierGroupRequest"]:c0(),["MetadataRequest"]:c1(),["ModifierOverrideRequest"]:c2(),["ModifierRequest"]:c3(),["ModifierSetGroupRequest"]:c4(),["MoneyValue"]:c5(),["SharedCodec1033"]:c6(),["SharedCodec1034"]:c7(),["SharedCodec1695"]:c8(),["SharedCodec1696"]:c9(),["SharedCodec1697"]:c10(),["SharedCodec1751"]:c11(),["SharedCodec328"]:c12(),["SharedCodec329"]:c13(),["TextModifierConfigRequest"]:c14(),["UpdateModifierSetRequest"]:c15()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeUpdateModifierSetRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
