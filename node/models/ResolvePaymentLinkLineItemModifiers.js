import { d10353 as c0, d10356 as c1 } from '../descriptors/data/485.js?sdk=9fc2ad28758ecb3836861aa4a55c027f918b2a3c68d2a2ab563c8b7345819552';
import { d10303 as c2 } from '../descriptors/data/481.js?sdk=9fc2ad28758ecb3836861aa4a55c027f918b2a3c68d2a2ab563c8b7345819552';
import { d10363 as c3, d10364 as c4 } from '../descriptors/data/486.js?sdk=9fc2ad28758ecb3836861aa4a55c027f918b2a3c68d2a2ab563c8b7345819552';
import { d8808 as c5, d8809 as c6, d8810 as c7 } from '../descriptors/data/394.js?sdk=9fc2ad28758ecb3836861aa4a55c027f918b2a3c68d2a2ab563c8b7345819552';
import { d10303 as d10303 } from '../descriptors/data/481.js?sdk=9fc2ad28758ecb3836861aa4a55c027f918b2a3c68d2a2ab563c8b7345819552';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d10303;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["PublicCatalogModifierRequest"]:c0(),["PublicCatalogTextModifierRequest"]:c1(),["ResolvePaymentLinkLineItemModifiers"]:c2(),["SharedCodec2540"]:c3(),["SharedCodec2541"]:c4(),["SharedCodec493"]:c5(),["SharedCodec495"]:c6(),["SharedCodec496"]:c7()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeResolvePaymentLinkLineItemModifiers(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
