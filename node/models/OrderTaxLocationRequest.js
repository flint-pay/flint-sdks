import { d9472 as c0, d9473 as c1, d9474 as c2 } from '../descriptors/data/431.js?sdk=4bd39e0afc590f9c2d1ce732a52fb628d9f934ea237d2b464d4157caa3c5129d';
import { d9485 as c3, d9486 as c4, d9487 as c5, d9488 as c6 } from '../descriptors/data/432.js?sdk=4bd39e0afc590f9c2d1ce732a52fb628d9f934ea237d2b464d4157caa3c5129d';
import { d9474 as d9474 } from '../descriptors/data/431.js?sdk=4bd39e0afc590f9c2d1ce732a52fb628d9f934ea237d2b464d4157caa3c5129d';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d9474;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["OrderTaxLocationFullAddressRequest"]:c0(),["OrderTaxLocationPostalAddressRequest"]:c1(),["OrderTaxLocationRequest"]:c2(),["SharedCodec2008"]:c3(),["SharedCodec2009"]:c4(),["SharedCodec2012"]:c5(),["SharedCodec2013"]:c6()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeOrderTaxLocationRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
