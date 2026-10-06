import { d36 as c0, d37 as c1, d38 as c2, d77 as c3, d2378 as c4 } from '../descriptors/data.js?sdk=527d9352908a453ad41ae99b8ef20015f463fff9697dd74e49111f49715fee29';
import { d37 } from '../descriptors/data.js?sdk=527d9352908a453ad41ae99b8ef20015f463fff9697dd74e49111f49715fee29';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d37;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["AvailableModifier"]:c0(),["AvailableModifierGroup"]:c1(),["AvailableModifierSelection"]:c2(),["MoneyValue"]:c3(),["TextModifierConfig"]:c4()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeAvailableModifierGroup(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
