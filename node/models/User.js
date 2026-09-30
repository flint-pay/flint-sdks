import { d54 as c0, d2305 as c1 } from '../descriptors/data.js?sdk=bef5952824dbe0867acb5a07673ca91102b136eda21794fff718a3addd296a2a';
import { d2305 } from '../descriptors/data.js?sdk=bef5952824dbe0867acb5a07673ca91102b136eda21794fff718a3addd296a2a';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2305;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["Banner"]:c0(),["User"]:c1()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeUser(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
