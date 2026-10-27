import { d4493 as c0, d4488 as c2, d4494 as c3, d4498 as c5, d4489 as c9 } from '../descriptors/data/197.js?sdk=ebff27e81aec9bdd0f095cae8c1add08bcdfa885028bf0eb87e3396a43a44aab';
import { d3086 as c1, d3089 as c6 } from '../descriptors/data/121.js?sdk=ebff27e81aec9bdd0f095cae8c1add08bcdfa885028bf0eb87e3396a43a44aab';
import { d3013 as c4 } from '../descriptors/data/116.js?sdk=ebff27e81aec9bdd0f095cae8c1add08bcdfa885028bf0eb87e3396a43a44aab';
import { d4503 as c7, d4504 as c8 } from '../descriptors/data/198.js?sdk=ebff27e81aec9bdd0f095cae8c1add08bcdfa885028bf0eb87e3396a43a44aab';
import { d4494 as d4494 } from '../descriptors/data/197.js?sdk=ebff27e81aec9bdd0f095cae8c1add08bcdfa885028bf0eb87e3396a43a44aab';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d4494;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["InlineModifierGroupRequest"]:c0(),["ModifierOverride"]:c1(),["ModifierRequest"]:c2(),["ModifierSetGroupRequest"]:c3(),["MoneyValue"]:c4(),["SharedCodec164"]:c5(),["SharedCodec165"]:c6(),["SharedCodec966"]:c7(),["SharedCodec967"]:c8(),["TextModifierConfigRequest"]:c9()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeModifierSetGroupRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
