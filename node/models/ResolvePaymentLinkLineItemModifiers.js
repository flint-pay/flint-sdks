import { d4678 as c0, d4679 as c1, d4680 as c2 } from '../descriptors/data/208.js?sdk=f0eb82b41cb4679bc6f0e94219007f92dfd5df456c2b498bcbb5018ebf3da812';
import { d4679 as d4679 } from '../descriptors/data/208.js?sdk=f0eb82b41cb4679bc6f0e94219007f92dfd5df456c2b498bcbb5018ebf3da812';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d4679;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["ResolvePaymentLinkLineItemModifierRequest"]:c0(),["ResolvePaymentLinkLineItemModifiers"]:c1(),["ResolvePaymentLinkTextModifierRequest"]:c2()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeResolvePaymentLinkLineItemModifiers(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
