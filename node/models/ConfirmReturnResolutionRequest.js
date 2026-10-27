import { d109 as c0 } from '../descriptors/data/4.js?sdk=ebff27e81aec9bdd0f095cae8c1add08bcdfa885028bf0eb87e3396a43a44aab';
import { d109 as d109 } from '../descriptors/data/4.js?sdk=ebff27e81aec9bdd0f095cae8c1add08bcdfa885028bf0eb87e3396a43a44aab';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d109;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["ConfirmReturnResolutionRequest"]:c0()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeConfirmReturnResolutionRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
