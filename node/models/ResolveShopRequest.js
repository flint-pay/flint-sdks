import { d10352 as c0, d10353 as c1, d10356 as c2 } from '../descriptors/data/485.js?sdk=9fc2ad28758ecb3836861aa4a55c027f918b2a3c68d2a2ab563c8b7345819552';
import { d11024 as c3 } from '../descriptors/data/524.js?sdk=9fc2ad28758ecb3836861aa4a55c027f918b2a3c68d2a2ab563c8b7345819552';
import { d1780 as c4 } from '../descriptors/data/88.js?sdk=9fc2ad28758ecb3836861aa4a55c027f918b2a3c68d2a2ab563c8b7345819552';
import { d10363 as c5, d10364 as c6 } from '../descriptors/data/486.js?sdk=9fc2ad28758ecb3836861aa4a55c027f918b2a3c68d2a2ab563c8b7345819552';
import { d8808 as c7, d8809 as c8, d8810 as c9 } from '../descriptors/data/394.js?sdk=9fc2ad28758ecb3836861aa4a55c027f918b2a3c68d2a2ab563c8b7345819552';
import { d1780 as d1780 } from '../descriptors/data/88.js?sdk=9fc2ad28758ecb3836861aa4a55c027f918b2a3c68d2a2ab563c8b7345819552';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1780;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["PaymentLinkResolvePrefillRequest"]:c0(),["PublicCatalogModifierRequest"]:c1(),["PublicCatalogTextModifierRequest"]:c2(),["ResolveShopLineItemRequest"]:c3(),["ResolveShopRequest"]:c4(),["SharedCodec2540"]:c5(),["SharedCodec2541"]:c6(),["SharedCodec493"]:c7(),["SharedCodec495"]:c8(),["SharedCodec496"]:c9()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeResolveShopRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
