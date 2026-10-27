import { d4875 as c0 } from '../descriptors/data/220.js?sdk=ebff27e81aec9bdd0f095cae8c1add08bcdfa885028bf0eb87e3396a43a44aab';
import { d4875 as d4875 } from '../descriptors/data/220.js?sdk=ebff27e81aec9bdd0f095cae8c1add08bcdfa885028bf0eb87e3396a43a44aab';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d4875;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["ReturnShippingPolicy"]:c0()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeReturnShippingPolicy(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
