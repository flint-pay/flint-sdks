import { d10356 as c0 } from '../descriptors/data/486.js?sdk=4bd39e0afc590f9c2d1ce732a52fb628d9f934ea237d2b464d4157caa3c5129d';
import { d8061 as c1 } from '../descriptors/data/352.js?sdk=4bd39e0afc590f9c2d1ce732a52fb628d9f934ea237d2b464d4157caa3c5129d';
import { d10356 as d10356 } from '../descriptors/data/486.js?sdk=4bd39e0afc590f9c2d1ce732a52fb628d9f934ea237d2b464d4157caa3c5129d';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d10356;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["PublicCatalogTextModifierRequest"]:c0(),["TextModifierRequest"]:c1()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makePublicCatalogTextModifierRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
