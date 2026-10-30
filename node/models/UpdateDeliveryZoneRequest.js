import { d4923 as c0, d4924 as c1, d4925 as c2 } from '../descriptors/data/216.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d4926 as c3, d4927 as c4, d4928 as c9, d4929 as c10 } from '../descriptors/data/217.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d5162 as c5 } from '../descriptors/data/229.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d4399 as c6 } from '../descriptors/data/187.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d4511 as c7 } from '../descriptors/data/193.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d4842 as c8 } from '../descriptors/data/212.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d5167 as c11, d5168 as c12 } from '../descriptors/data/230.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d4155 as c13 } from '../descriptors/data/172.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d4155 as d4155 } from '../descriptors/data/172.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d4155;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["DeliveryCountryCondition"]:c0(),["DeliveryDistance"]:c1(),["DeliveryPostalCodeCondition"]:c2(),["DeliveryPostalCodeValue"]:c3(),["DeliveryStateCondition"]:c4(),["DeliveryZoneConfiguration"]:c5(),["SharedCodec1350"]:c6(),["SharedCodec1353"]:c7(),["SharedCodec1360"]:c8(),["SharedCodec387"]:c9(),["SharedCodec388"]:c10(),["SharedCodec520"]:c11(),["SharedCodec521"]:c12(),["UpdateDeliveryZoneRequest"]:c13()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeUpdateDeliveryZoneRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
