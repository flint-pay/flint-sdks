import { d4659 as c0 } from '../descriptors/data/207.js?sdk=ebff27e81aec9bdd0f095cae8c1add08bcdfa885028bf0eb87e3396a43a44aab';
import { d4659 as d4659 } from '../descriptors/data/207.js?sdk=ebff27e81aec9bdd0f095cae8c1add08bcdfa885028bf0eb87e3396a43a44aab';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d4659;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["PaymentLinkLegalPatchRequest"]:c0()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makePaymentLinkLegalPatchRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
