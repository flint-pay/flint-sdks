import { d4923 as c0, d4924 as c1, d4925 as c2 } from '../descriptors/data/216.js?sdk=d1fbdc9ae03748db4df89d58da8fba32d0ff2e9fa5c15cee69be90b031712c30';
import { d4926 as c3, d4927 as c4, d4928 as c6, d4929 as c7 } from '../descriptors/data/217.js?sdk=d1fbdc9ae03748db4df89d58da8fba32d0ff2e9fa5c15cee69be90b031712c30';
import { d5162 as c5 } from '../descriptors/data/229.js?sdk=d1fbdc9ae03748db4df89d58da8fba32d0ff2e9fa5c15cee69be90b031712c30';
import { d5167 as c8, d5168 as c9 } from '../descriptors/data/230.js?sdk=d1fbdc9ae03748db4df89d58da8fba32d0ff2e9fa5c15cee69be90b031712c30';
import { d5162 as d5162 } from '../descriptors/data/229.js?sdk=d1fbdc9ae03748db4df89d58da8fba32d0ff2e9fa5c15cee69be90b031712c30';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d5162;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["DeliveryCountryCondition"]:c0(),["DeliveryDistance"]:c1(),["DeliveryPostalCodeCondition"]:c2(),["DeliveryPostalCodeValue"]:c3(),["DeliveryStateCondition"]:c4(),["DeliveryZoneConfiguration"]:c5(),["SharedCodec387"]:c6(),["SharedCodec388"]:c7(),["SharedCodec520"]:c8(),["SharedCodec521"]:c9()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeDeliveryZoneConfiguration(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
