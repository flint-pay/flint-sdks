import { d4657 as c0 } from '../descriptors/data/207.js?sdk=ebff27e81aec9bdd0f095cae8c1add08bcdfa885028bf0eb87e3396a43a44aab';
import { d4657 as d4657 } from '../descriptors/data/207.js?sdk=ebff27e81aec9bdd0f095cae8c1add08bcdfa885028bf0eb87e3396a43a44aab';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d4657;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["PaymentLinkEventConfigRequest"]:c0()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makePaymentLinkEventConfigRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
