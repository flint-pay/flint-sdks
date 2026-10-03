import { d775 as c0 } from '../descriptors/data.js?sdk=41ea09ad124ffa3bdfba4a8208bd0391cd6fb609c70d062a00cb64936b55a83b';
import { d775 } from '../descriptors/data.js?sdk=41ea09ad124ffa3bdfba4a8208bd0391cd6fb609c70d062a00cb64936b55a83b';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d775;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["ErrorResourceReference"]:c0()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeErrorResourceReference(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
