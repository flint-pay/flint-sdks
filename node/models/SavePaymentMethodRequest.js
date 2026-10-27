import { d956 as c0 } from '../descriptors/data/43.js?sdk=ebff27e81aec9bdd0f095cae8c1add08bcdfa885028bf0eb87e3396a43a44aab';
import { d956 as d956 } from '../descriptors/data/43.js?sdk=ebff27e81aec9bdd0f095cae8c1add08bcdfa885028bf0eb87e3396a43a44aab';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d956;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["SavePaymentMethodRequest"]:c0()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeSavePaymentMethodRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
