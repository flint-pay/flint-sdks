import { d1695 as c0 } from '../descriptors/data/84.js?sdk=4bd39e0afc590f9c2d1ce732a52fb628d9f934ea237d2b464d4157caa3c5129d';
import { d10356 as c1 } from '../descriptors/data/486.js?sdk=4bd39e0afc590f9c2d1ce732a52fb628d9f934ea237d2b464d4157caa3c5129d';
import { d8809 as c2, d8810 as c3 } from '../descriptors/data/395.js?sdk=4bd39e0afc590f9c2d1ce732a52fb628d9f934ea237d2b464d4157caa3c5129d';
import { d1695 as d1695 } from '../descriptors/data/84.js?sdk=4bd39e0afc590f9c2d1ce732a52fb628d9f934ea237d2b464d4157caa3c5129d';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1695;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["PublicCatalogModifierInputText"]:c0(),["PublicCatalogTextModifierRequest"]:c1(),["SharedCodec495"]:c2(),["SharedCodec496"]:c3()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makePublicCatalogModifierInputText(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
