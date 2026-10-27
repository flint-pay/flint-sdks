import { d3312 as c0 } from '../descriptors/data/133.js?sdk=ebff27e81aec9bdd0f095cae8c1add08bcdfa885028bf0eb87e3396a43a44aab';
import { d3312 as d3312 } from '../descriptors/data/133.js?sdk=ebff27e81aec9bdd0f095cae8c1add08bcdfa885028bf0eb87e3396a43a44aab';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d3312;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CheckoutTaxConfig"]:c0()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCheckoutTaxConfig(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
