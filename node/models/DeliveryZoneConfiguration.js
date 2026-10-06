import { d589 as c0, d592 as c1, d642 as c2, d643 as c3, d682 as c4, d683 as c5, d723 as c6, d737 as c7, d331 as c8, d736 as c9 } from '../descriptors/data.js?sdk=f67f6eaf1051f21ec6ba8a2fb3534a619d1f5d2afe43c079dcee44663fec8859';
import { d737 } from '../descriptors/data.js?sdk=f67f6eaf1051f21ec6ba8a2fb3534a619d1f5d2afe43c079dcee44663fec8859';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d737;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["DeliveryCountryCondition"]:c0(),["DeliveryDistance"]:c1(),["DeliveryPostalCodeCondition"]:c2(),["DeliveryPostalCodeValue"]:c3(),["DeliveryRadiusCondition"]:c4(),["DeliveryRadiusOrigin"]:c5(),["DeliveryStateCondition"]:c6(),["DeliveryZoneConfiguration"]:c7(),["SharedCodec113"]:c8(),["SharedCodec239"]:c9()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeDeliveryZoneConfiguration(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
