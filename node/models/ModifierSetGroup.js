import { d1806 as c0, d1807 as c1, d1810 as c2, d1813 as c3, d77 as c4, d408 as c5, d1812 as c6, d2378 as c7 } from '../descriptors/data.js?sdk=527d9352908a453ad41ae99b8ef20015f463fff9697dd74e49111f49715fee29';
import { d1813 } from '../descriptors/data.js?sdk=527d9352908a453ad41ae99b8ef20015f463fff9697dd74e49111f49715fee29';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1813;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["Modifier"]:c0(),["ModifierGroup"]:c1(),["ModifierOverride"]:c2(),["ModifierSetGroup"]:c3(),["MoneyValue"]:c4(),["SharedCodec148"]:c5(),["SharedCodec486"]:c6(),["TextModifierConfig"]:c7()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeModifierSetGroup(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
