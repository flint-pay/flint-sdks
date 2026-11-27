import { d10353 as c0, d10356 as c1 } from '../descriptors/data/486.js?sdk=4bd39e0afc590f9c2d1ce732a52fb628d9f934ea237d2b464d4157caa3c5129d';
import { d10363 as c2, d10364 as c3 } from '../descriptors/data/487.js?sdk=4bd39e0afc590f9c2d1ce732a52fb628d9f934ea237d2b464d4157caa3c5129d';
import { d8808 as c4, d8809 as c5, d8810 as c6 } from '../descriptors/data/395.js?sdk=4bd39e0afc590f9c2d1ce732a52fb628d9f934ea237d2b464d4157caa3c5129d';
import { d10353 as d10353 } from '../descriptors/data/486.js?sdk=4bd39e0afc590f9c2d1ce732a52fb628d9f934ea237d2b464d4157caa3c5129d';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d10353;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["PublicCatalogModifierRequest"]:c0(),["PublicCatalogTextModifierRequest"]:c1(),["SharedCodec2540"]:c2(),["SharedCodec2541"]:c3(),["SharedCodec493"]:c4(),["SharedCodec495"]:c5(),["SharedCodec496"]:c6()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makePublicCatalogModifierRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
