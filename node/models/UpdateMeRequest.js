import { d2455 as c0 } from '../descriptors/data/98.js?sdk=ebff27e81aec9bdd0f095cae8c1add08bcdfa885028bf0eb87e3396a43a44aab';
import { d2455 as d2455 } from '../descriptors/data/98.js?sdk=ebff27e81aec9bdd0f095cae8c1add08bcdfa885028bf0eb87e3396a43a44aab';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2455;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["UpdateMeRequest"]:c0()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeUpdateMeRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
