import { d6260 as c0 } from '../descriptors/data/290.js?sdk=d1fbdc9ae03748db4df89d58da8fba32d0ff2e9fa5c15cee69be90b031712c30';
import { d4330 as c1 } from '../descriptors/data/183.js?sdk=d1fbdc9ae03748db4df89d58da8fba32d0ff2e9fa5c15cee69be90b031712c30';
import { d6260 as d6260 } from '../descriptors/data/290.js?sdk=d1fbdc9ae03748db4df89d58da8fba32d0ff2e9fa5c15cee69be90b031712c30';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d6260;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["ResolvePaymentLinkTextModifierRequest"]:c0(),["TextModifierRequest"]:c1()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeResolvePaymentLinkTextModifierRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
