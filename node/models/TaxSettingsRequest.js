import { d5113 as c0 } from '../descriptors/data/234.js?sdk=ebff27e81aec9bdd0f095cae8c1add08bcdfa885028bf0eb87e3396a43a44aab';
import { d5113 as d5113 } from '../descriptors/data/234.js?sdk=ebff27e81aec9bdd0f095cae8c1add08bcdfa885028bf0eb87e3396a43a44aab';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d5113;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["TaxSettingsRequest"]:c0()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeTaxSettingsRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
