import { d4876 as c0 } from '../descriptors/data/220.js?sdk=ebff27e81aec9bdd0f095cae8c1add08bcdfa885028bf0eb87e3396a43a44aab';
import { d4876 as d4876 } from '../descriptors/data/220.js?sdk=ebff27e81aec9bdd0f095cae8c1add08bcdfa885028bf0eb87e3396a43a44aab';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d4876;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["ReturnWindow"]:c0()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeReturnWindow(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
