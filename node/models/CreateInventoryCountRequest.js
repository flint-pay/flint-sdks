import { d172 as c0 } from '../descriptors/data/8.js?sdk=ebff27e81aec9bdd0f095cae8c1add08bcdfa885028bf0eb87e3396a43a44aab';
import { d172 as d172 } from '../descriptors/data/8.js?sdk=ebff27e81aec9bdd0f095cae8c1add08bcdfa885028bf0eb87e3396a43a44aab';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d172;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateInventoryCountRequest"]:c0()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateInventoryCountRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
