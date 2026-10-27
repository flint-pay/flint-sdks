import { d959 as c0 } from '../descriptors/data/43.js?sdk=ebff27e81aec9bdd0f095cae8c1add08bcdfa885028bf0eb87e3396a43a44aab';
import { d959 as d959 } from '../descriptors/data/43.js?sdk=ebff27e81aec9bdd0f095cae8c1add08bcdfa885028bf0eb87e3396a43a44aab';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d959;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["SendPaymentIntentReceiptRequest"]:c0()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeSendPaymentIntentReceiptRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
