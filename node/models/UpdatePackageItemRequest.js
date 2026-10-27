import { d2464 as c0 } from '../descriptors/data/99.js?sdk=ebff27e81aec9bdd0f095cae8c1add08bcdfa885028bf0eb87e3396a43a44aab';
import { d2464 as d2464 } from '../descriptors/data/99.js?sdk=ebff27e81aec9bdd0f095cae8c1add08bcdfa885028bf0eb87e3396a43a44aab';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2464;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["UpdatePackageItemRequest"]:c0()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeUpdatePackageItemRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
