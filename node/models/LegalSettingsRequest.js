import { d5080 as c0 } from '../descriptors/data/232.js?sdk=ebff27e81aec9bdd0f095cae8c1add08bcdfa885028bf0eb87e3396a43a44aab';
import { d5080 as d5080 } from '../descriptors/data/232.js?sdk=ebff27e81aec9bdd0f095cae8c1add08bcdfa885028bf0eb87e3396a43a44aab';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d5080;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["LegalSettingsRequest"]:c0()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeLegalSettingsRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
