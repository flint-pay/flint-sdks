import { d2479 as c0 } from '../descriptors/data/100.js?sdk=ebff27e81aec9bdd0f095cae8c1add08bcdfa885028bf0eb87e3396a43a44aab';
import { d2479 as d2479 } from '../descriptors/data/100.js?sdk=ebff27e81aec9bdd0f095cae8c1add08bcdfa885028bf0eb87e3396a43a44aab';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2479;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["UpdateReturnPolicyRequest"]:c0()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeUpdateReturnPolicyRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
