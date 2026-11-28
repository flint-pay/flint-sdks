import { d8661 as c0, d8662 as c1, d8663 as c2, d8664 as c3, d8665 as c4, d8666 as c5, d8667 as c6 } from '../descriptors/data/387.js?sdk=4bd39e0afc590f9c2d1ce732a52fb628d9f934ea237d2b464d4157caa3c5129d';
import { d8985 as c7, d8988 as c8, d8989 as c9 } from '../descriptors/data/405.js?sdk=4bd39e0afc590f9c2d1ce732a52fb628d9f934ea237d2b464d4157caa3c5129d';
import { d8132 as c10 } from '../descriptors/data/357.js?sdk=4bd39e0afc590f9c2d1ce732a52fb628d9f934ea237d2b464d4157caa3c5129d';
import { d8234 as c11 } from '../descriptors/data/364.js?sdk=4bd39e0afc590f9c2d1ce732a52fb628d9f934ea237d2b464d4157caa3c5129d';
import { d8571 as c12 } from '../descriptors/data/382.js?sdk=4bd39e0afc590f9c2d1ce732a52fb628d9f934ea237d2b464d4157caa3c5129d';
import { d7833 as c13 } from '../descriptors/data/331.js?sdk=4bd39e0afc590f9c2d1ce732a52fb628d9f934ea237d2b464d4157caa3c5129d';
import { d7833 as d7833 } from '../descriptors/data/331.js?sdk=4bd39e0afc590f9c2d1ce732a52fb628d9f934ea237d2b464d4157caa3c5129d';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d7833;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["DeliveryCountryConditionRequest"]:c0(),["DeliveryDistanceRequest"]:c1(),["DeliveryPostalCodeConditionRequest"]:c2(),["DeliveryPostalCodeValueRequest"]:c3(),["DeliveryRadiusConditionRequest"]:c4(),["DeliveryRadiusOrigin"]:c5(),["DeliveryStateConditionRequest"]:c6(),["DeliveryZoneConfigurationRequest"]:c7(),["SharedCodec1128"]:c8(),["SharedCodec1129"]:c9(),["SharedCodec3128"]:c10(),["SharedCodec3131"]:c11(),["SharedCodec3139"]:c12(),["UpdateDeliveryZoneRequest"]:c13()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeUpdateDeliveryZoneRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
