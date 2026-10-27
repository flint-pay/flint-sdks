import { d4678 as c0, d4680 as c1 } from '../descriptors/data/208.js?sdk=ebff27e81aec9bdd0f095cae8c1add08bcdfa885028bf0eb87e3396a43a44aab';
import { d4678 as d4678 } from '../descriptors/data/208.js?sdk=ebff27e81aec9bdd0f095cae8c1add08bcdfa885028bf0eb87e3396a43a44aab';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d4678;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["ResolvePaymentLinkLineItemModifierRequest"]:c0(),["ResolvePaymentLinkTextModifierRequest"]:c1()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeResolvePaymentLinkLineItemModifierRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
