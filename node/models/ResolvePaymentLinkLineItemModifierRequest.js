import { d4662 as c0, d4664 as c1 } from '../descriptors/data/207.js?sdk=94d3dafcb454caf78a11dff3f62c8571a61273fd7185b71866d728c7984ecec1';
import { d4662 as d4662 } from '../descriptors/data/207.js?sdk=94d3dafcb454caf78a11dff3f62c8571a61273fd7185b71866d728c7984ecec1';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d4662;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["ResolvePaymentLinkLineItemModifierRequest"]:c0(),["ResolvePaymentLinkTextModifierRequest"]:c1()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeResolvePaymentLinkLineItemModifierRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
