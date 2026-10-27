import { d921 as c0 } from '../descriptors/data/41.js?sdk=ebff27e81aec9bdd0f095cae8c1add08bcdfa885028bf0eb87e3396a43a44aab';
import { d4890 as c1 } from '../descriptors/data/221.js?sdk=ebff27e81aec9bdd0f095cae8c1add08bcdfa885028bf0eb87e3396a43a44aab';
import { d921 as d921 } from '../descriptors/data/41.js?sdk=ebff27e81aec9bdd0f095cae8c1add08bcdfa885028bf0eb87e3396a43a44aab';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d921;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["ReturnPolicyScopeAll"]:c0(),["SharedCodec1095"]:c1()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeReturnPolicyScopeAll(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
