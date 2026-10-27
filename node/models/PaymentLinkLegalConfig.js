import { d4658 as c0 } from '../descriptors/data/207.js?sdk=ebff27e81aec9bdd0f095cae8c1add08bcdfa885028bf0eb87e3396a43a44aab';
import { d4658 as d4658 } from '../descriptors/data/207.js?sdk=ebff27e81aec9bdd0f095cae8c1add08bcdfa885028bf0eb87e3396a43a44aab';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d4658;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["PaymentLinkLegalConfig"]:c0()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makePaymentLinkLegalConfig(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
