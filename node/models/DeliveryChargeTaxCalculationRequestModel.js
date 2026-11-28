import { d9464 as c0 } from '../descriptors/data/431.js?sdk=4bd39e0afc590f9c2d1ce732a52fb628d9f934ea237d2b464d4157caa3c5129d';
import { d8003 as c1 } from '../descriptors/data/348.js?sdk=4bd39e0afc590f9c2d1ce732a52fb628d9f934ea237d2b464d4157caa3c5129d';
import { d9497 as c2, d9498 as c3 } from '../descriptors/data/432.js?sdk=4bd39e0afc590f9c2d1ce732a52fb628d9f934ea237d2b464d4157caa3c5129d';
import { d9464 as d9464 } from '../descriptors/data/431.js?sdk=4bd39e0afc590f9c2d1ce732a52fb628d9f934ea237d2b464d4157caa3c5129d';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d9464;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["DeliveryChargeTaxCalculationRequestModel"]:c0(),["MoneyValue"]:c1(),["TaxComponentRequestModel"]:c2(),["TaxJurisdictionRequestModel"]:c3()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeDeliveryChargeTaxCalculationRequestModel(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
