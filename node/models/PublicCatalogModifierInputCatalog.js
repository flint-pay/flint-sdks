import { d1694 as c0 } from '../descriptors/data/84.js?sdk=4bd39e0afc590f9c2d1ce732a52fb628d9f934ea237d2b464d4157caa3c5129d';
import { d10356 as c1 } from '../descriptors/data/486.js?sdk=4bd39e0afc590f9c2d1ce732a52fb628d9f934ea237d2b464d4157caa3c5129d';
import { d8808 as c2 } from '../descriptors/data/395.js?sdk=4bd39e0afc590f9c2d1ce732a52fb628d9f934ea237d2b464d4157caa3c5129d';
import { d1694 as d1694 } from '../descriptors/data/84.js?sdk=4bd39e0afc590f9c2d1ce732a52fb628d9f934ea237d2b464d4157caa3c5129d';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1694;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["PublicCatalogModifierInputCatalog"]:c0(),["PublicCatalogTextModifierRequest"]:c1(),["SharedCodec493"]:c2()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makePublicCatalogModifierInputCatalog(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
