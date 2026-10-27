import { d71 as c0 } from '../descriptors/data/2.js?sdk=ebff27e81aec9bdd0f095cae8c1add08bcdfa885028bf0eb87e3396a43a44aab';
import { d71 as d71 } from '../descriptors/data/2.js?sdk=ebff27e81aec9bdd0f095cae8c1add08bcdfa885028bf0eb87e3396a43a44aab';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d71;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CancelPaymentIntentRequest"]:c0()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCancelPaymentIntentRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
