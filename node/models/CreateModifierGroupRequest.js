import { d405 as c0, d406 as c1, d77 as c2, d2379 as c3 } from '../descriptors/data.js?sdk=527d9352908a453ad41ae99b8ef20015f463fff9697dd74e49111f49715fee29';
import { d405 } from '../descriptors/data.js?sdk=527d9352908a453ad41ae99b8ef20015f463fff9697dd74e49111f49715fee29';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d405;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateModifierGroupRequest"]:c0(),["CreateModifierRequest"]:c1(),["MoneyValue"]:c2(),["TextModifierConfigRequest"]:c3()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateModifierGroupRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
