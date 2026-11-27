import { d8553 as c0 } from '../descriptors/data/381.js?sdk=4bd39e0afc590f9c2d1ce732a52fb628d9f934ea237d2b464d4157caa3c5129d';
import { d9470 as c1 } from '../descriptors/data/431.js?sdk=4bd39e0afc590f9c2d1ce732a52fb628d9f934ea237d2b464d4157caa3c5129d';
import { d9478 as c2, d9479 as c3, d9480 as c4, d9481 as c5, d9482 as c6, d9483 as c7, d9484 as c8 } from '../descriptors/data/432.js?sdk=4bd39e0afc590f9c2d1ce732a52fb628d9f934ea237d2b464d4157caa3c5129d';
import { d8388 as c9, d8389 as c10, d8390 as c11, d8391 as c12 } from '../descriptors/data/372.js?sdk=4bd39e0afc590f9c2d1ce732a52fb628d9f934ea237d2b464d4157caa3c5129d';
import { d9470 as d9470 } from '../descriptors/data/431.js?sdk=4bd39e0afc590f9c2d1ce732a52fb628d9f934ea237d2b464d4157caa3c5129d';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d9470;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CustomerTaxExemptionCoverageRequest"]:c0(),["OrderTaxExemptionRequest"]:c1(),["SharedCodec1998"]:c2(),["SharedCodec1999"]:c3(),["SharedCodec2000"]:c4(),["SharedCodec2001"]:c5(),["SharedCodec2005"]:c6(),["SharedCodec2006"]:c7(),["SharedCodec2007"]:c8(),["SharedCodec719"]:c9(),["SharedCodec720"]:c10(),["SharedCodec721"]:c11(),["SharedCodec722"]:c12()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeOrderTaxExemptionRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
