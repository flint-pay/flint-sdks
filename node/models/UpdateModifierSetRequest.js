import { d4493 as c0, d4488 as c2, d4494 as c3, d4495 as c5, d4498 as c6, d4489 as c10 } from '../descriptors/data/197.js?sdk=fac4b718d892e7da91e9078fbe8a70d0df1d443420d01e46d9daffedbb5651c4';
import { d3086 as c1, d3089 as c7 } from '../descriptors/data/121.js?sdk=fac4b718d892e7da91e9078fbe8a70d0df1d443420d01e46d9daffedbb5651c4';
import { d3013 as c4 } from '../descriptors/data/116.js?sdk=fac4b718d892e7da91e9078fbe8a70d0df1d443420d01e46d9daffedbb5651c4';
import { d4503 as c8, d4504 as c9 } from '../descriptors/data/198.js?sdk=fac4b718d892e7da91e9078fbe8a70d0df1d443420d01e46d9daffedbb5651c4';
import { d2460 as c11 } from '../descriptors/data/99.js?sdk=fac4b718d892e7da91e9078fbe8a70d0df1d443420d01e46d9daffedbb5651c4';
import { d2460 as d2460 } from '../descriptors/data/99.js?sdk=fac4b718d892e7da91e9078fbe8a70d0df1d443420d01e46d9daffedbb5651c4';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2460;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["InlineModifierGroupRequest"]:c0(),["ModifierOverride"]:c1(),["ModifierRequest"]:c2(),["ModifierSetGroupRequest"]:c3(),["MoneyValue"]:c4(),["SharedCodec1207"]:c5(),["SharedCodec164"]:c6(),["SharedCodec165"]:c7(),["SharedCodec966"]:c8(),["SharedCodec967"]:c9(),["TextModifierConfigRequest"]:c10(),["UpdateModifierSetRequest"]:c11()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeUpdateModifierSetRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
