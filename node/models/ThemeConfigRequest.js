import { d3143 as c0 } from '../descriptors/data/124.js?sdk=ebff27e81aec9bdd0f095cae8c1add08bcdfa885028bf0eb87e3396a43a44aab';
import { d3143 as d3143 } from '../descriptors/data/124.js?sdk=ebff27e81aec9bdd0f095cae8c1add08bcdfa885028bf0eb87e3396a43a44aab';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d3143;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["ThemeConfigRequest"]:c0()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeThemeConfigRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
