import { d3448 as c0 } from '../descriptors/data/140.js?sdk=ebff27e81aec9bdd0f095cae8c1add08bcdfa885028bf0eb87e3396a43a44aab';
import { d3448 as d3448 } from '../descriptors/data/140.js?sdk=ebff27e81aec9bdd0f095cae8c1add08bcdfa885028bf0eb87e3396a43a44aab';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d3448;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["PostalAddress"]:c0()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makePostalAddress(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
