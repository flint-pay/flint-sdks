import { d3076 as c0 } from '../descriptors/data/120.js?sdk=ebff27e81aec9bdd0f095cae8c1add08bcdfa885028bf0eb87e3396a43a44aab';
import { d3076 as d3076 } from '../descriptors/data/120.js?sdk=ebff27e81aec9bdd0f095cae8c1add08bcdfa885028bf0eb87e3396a43a44aab';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d3076;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["UpdateBundleComponentRequest"]:c0()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeUpdateBundleComponentRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
