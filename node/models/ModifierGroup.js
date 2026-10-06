import { d1806 as c0, d1807 as c1, d77 as c2, d2378 as c3 } from '../descriptors/data.js?sdk=527d9352908a453ad41ae99b8ef20015f463fff9697dd74e49111f49715fee29';
import { d1807 } from '../descriptors/data.js?sdk=527d9352908a453ad41ae99b8ef20015f463fff9697dd74e49111f49715fee29';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1807;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["Modifier"]:c0(),["ModifierGroup"]:c1(),["MoneyValue"]:c2(),["TextModifierConfig"]:c3()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeModifierGroup(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
