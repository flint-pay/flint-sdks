import { d565 as c0, d568 as c1, d624 as c2, d625 as c3, d662 as c4, d663 as c5, d705 as c6, d719 as c7, d718 as c8, d306 as c9 } from '../descriptors/data.js?sdk=245b7fb11d6174517fe5d194b5fb87c42348ace248a5c84bbab9ef7bfe2b9e5e';
import { d719 } from '../descriptors/data.js?sdk=245b7fb11d6174517fe5d194b5fb87c42348ace248a5c84bbab9ef7bfe2b9e5e';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d719;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["DeliveryCountryCondition"]:c0(),["DeliveryDistance"]:c1(),["DeliveryPostalCodeCondition"]:c2(),["DeliveryPostalCodeValue"]:c3(),["DeliveryRadiusCondition"]:c4(),["DeliveryRadiusOrigin"]:c5(),["DeliveryStateCondition"]:c6(),["DeliveryZoneConfiguration"]:c7(),["SharedCodec216"]:c8(),["SharedCodec89"]:c9()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeDeliveryZoneConfiguration(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
