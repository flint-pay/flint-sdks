import { d1901 as c0, d2173 as c1 } from '../descriptors/data.js?sdk=bef5952824dbe0867acb5a07673ca91102b136eda21794fff718a3addd296a2a';
import { d1901 } from '../descriptors/data.js?sdk=bef5952824dbe0867acb5a07673ca91102b136eda21794fff718a3addd296a2a';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1901;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["PublicResolvedTextModifier"]:c0(),["TextModifierConfigRequest"]:c1()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makePublicResolvedTextModifier(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
