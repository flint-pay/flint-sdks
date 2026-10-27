import { d2432 as c0 } from '../descriptors/data/96.js?sdk=ebff27e81aec9bdd0f095cae8c1add08bcdfa885028bf0eb87e3396a43a44aab';
import { d2432 as d2432 } from '../descriptors/data/96.js?sdk=ebff27e81aec9bdd0f095cae8c1add08bcdfa885028bf0eb87e3396a43a44aab';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2432;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["UpdateCategoryRequest"]:c0()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeUpdateCategoryRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
