import { d405 as c0, d406 as c1, d77 as c2, d2379 as c3 } from '../descriptors/data.js?sdk=ba066cb5d42061b50ddb74a9a955bfa66adbe16252255af2a884092ee5130eba';
import { d405 } from '../descriptors/data.js?sdk=ba066cb5d42061b50ddb74a9a955bfa66adbe16252255af2a884092ee5130eba';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d405;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateModifierGroupRequest"]:c0(),["CreateModifierRequest"]:c1(),["MoneyValue"]:c2(),["TextModifierConfigRequest"]:c3()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateModifierGroupRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
