import { d5067 as c0 } from '../descriptors/data/232.js?sdk=ebff27e81aec9bdd0f095cae8c1add08bcdfa885028bf0eb87e3396a43a44aab';
import { d5067 as d5067 } from '../descriptors/data/232.js?sdk=ebff27e81aec9bdd0f095cae8c1add08bcdfa885028bf0eb87e3396a43a44aab';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d5067;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CustomerAccountPresentation"]:c0()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCustomerAccountPresentation(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
