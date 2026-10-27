import { d4730 as c0 } from '../descriptors/data/211.js?sdk=ebff27e81aec9bdd0f095cae8c1add08bcdfa885028bf0eb87e3396a43a44aab';
import { d4730 as d4730 } from '../descriptors/data/211.js?sdk=ebff27e81aec9bdd0f095cae8c1add08bcdfa885028bf0eb87e3396a43a44aab';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d4730;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateProductOptionValueRequest"]:c0()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateProductOptionValueRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
