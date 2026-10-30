import { d4923 as c0, d4924 as c1, d4925 as c2 } from '../descriptors/data/216.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d4926 as c3, d4927 as c4, d4928 as c6, d4929 as c7 } from '../descriptors/data/217.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d5162 as c5 } from '../descriptors/data/229.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d5167 as c8, d5168 as c9 } from '../descriptors/data/230.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d5162 as d5162 } from '../descriptors/data/229.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d5162;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["DeliveryCountryCondition"]:c0(),["DeliveryDistance"]:c1(),["DeliveryPostalCodeCondition"]:c2(),["DeliveryPostalCodeValue"]:c3(),["DeliveryStateCondition"]:c4(),["DeliveryZoneConfiguration"]:c5(),["SharedCodec387"]:c6(),["SharedCodec388"]:c7(),["SharedCodec520"]:c8(),["SharedCodec521"]:c9()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeDeliveryZoneConfiguration(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
