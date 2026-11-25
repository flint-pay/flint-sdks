import { d1695 as c0 } from '../descriptors/data/84.js?sdk=9fc2ad28758ecb3836861aa4a55c027f918b2a3c68d2a2ab563c8b7345819552';
import { d10356 as c1 } from '../descriptors/data/485.js?sdk=9fc2ad28758ecb3836861aa4a55c027f918b2a3c68d2a2ab563c8b7345819552';
import { d8809 as c2, d8810 as c3 } from '../descriptors/data/394.js?sdk=9fc2ad28758ecb3836861aa4a55c027f918b2a3c68d2a2ab563c8b7345819552';
import { d1695 as d1695 } from '../descriptors/data/84.js?sdk=9fc2ad28758ecb3836861aa4a55c027f918b2a3c68d2a2ab563c8b7345819552';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1695;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["PublicCatalogModifierInputText"]:c0(),["PublicCatalogTextModifierRequest"]:c1(),["SharedCodec495"]:c2(),["SharedCodec496"]:c3()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makePublicCatalogModifierInputText(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
