import { d77 as c0, d2089 as c1, d2090 as c2, d2091 as c3 } from '../descriptors/data.js?sdk=d22cce0575f7bd583ca524a14ee93e300c9f48000162d4e1926fedd9f4c37501';
import { d2089 } from '../descriptors/data.js?sdk=d22cce0575f7bd583ca524a14ee93e300c9f48000162d4e1926fedd9f4c37501';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2089;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["PublicResolvedModifierGroup"]:c1(),["PublicResolvedModifierOption"]:c2(),["PublicResolvedTextModifier"]:c3()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makePublicResolvedModifierGroup(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
