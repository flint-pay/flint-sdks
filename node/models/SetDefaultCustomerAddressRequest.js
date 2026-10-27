import { d960 as c0 } from '../descriptors/data/43.js?sdk=ebff27e81aec9bdd0f095cae8c1add08bcdfa885028bf0eb87e3396a43a44aab';
import { d960 as d960 } from '../descriptors/data/43.js?sdk=ebff27e81aec9bdd0f095cae8c1add08bcdfa885028bf0eb87e3396a43a44aab';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d960;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["SetDefaultCustomerAddressRequest"]:c0()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeSetDefaultCustomerAddressRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
