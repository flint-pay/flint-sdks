import { d10353 as c0, d10356 as c1 } from '../descriptors/data/486.js?sdk=4bd39e0afc590f9c2d1ce732a52fb628d9f934ea237d2b464d4157caa3c5129d';
import { d10303 as c2 } from '../descriptors/data/482.js?sdk=4bd39e0afc590f9c2d1ce732a52fb628d9f934ea237d2b464d4157caa3c5129d';
import { d10363 as c3, d10364 as c4 } from '../descriptors/data/487.js?sdk=4bd39e0afc590f9c2d1ce732a52fb628d9f934ea237d2b464d4157caa3c5129d';
import { d8808 as c5, d8809 as c6, d8810 as c7 } from '../descriptors/data/395.js?sdk=4bd39e0afc590f9c2d1ce732a52fb628d9f934ea237d2b464d4157caa3c5129d';
import { d10303 as d10303 } from '../descriptors/data/482.js?sdk=4bd39e0afc590f9c2d1ce732a52fb628d9f934ea237d2b464d4157caa3c5129d';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d10303;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["PublicCatalogModifierRequest"]:c0(),["PublicCatalogTextModifierRequest"]:c1(),["ResolvePaymentLinkLineItemModifiers"]:c2(),["SharedCodec2540"]:c3(),["SharedCodec2541"]:c4(),["SharedCodec493"]:c5(),["SharedCodec495"]:c6(),["SharedCodec496"]:c7()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeResolvePaymentLinkLineItemModifiers(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
