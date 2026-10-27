import { d3220 as c0 } from '../descriptors/data/128.js?sdk=ebff27e81aec9bdd0f095cae8c1add08bcdfa885028bf0eb87e3396a43a44aab';
import { d3220 as d3220 } from '../descriptors/data/128.js?sdk=ebff27e81aec9bdd0f095cae8c1add08bcdfa885028bf0eb87e3396a43a44aab';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d3220;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CheckoutBuyerFields"]:c0()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCheckoutBuyerFields(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
