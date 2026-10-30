import { d199 as c0 } from '../descriptors/data/9.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d4923 as c1, d4924 as c2, d4925 as c3 } from '../descriptors/data/216.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d4926 as c4, d4927 as c7, d4928 as c11, d4929 as c12 } from '../descriptors/data/217.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d4951 as c5, d4952 as c6 } from '../descriptors/data/218.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d5162 as c8 } from '../descriptors/data/229.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d4398 as c9 } from '../descriptors/data/187.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d1484 as c10 } from '../descriptors/data/68.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d5167 as c13, d5168 as c14 } from '../descriptors/data/230.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d199 as d199 } from '../descriptors/data/9.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d199;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateDeliveryZoneRequest"]:c0(),["DeliveryCountryCondition"]:c1(),["DeliveryDistance"]:c2(),["DeliveryPostalCodeCondition"]:c3(),["DeliveryPostalCodeValue"]:c4(),["DeliveryRadiusCondition"]:c5(),["DeliveryRadiusOrigin"]:c6(),["DeliveryStateCondition"]:c7(),["DeliveryZoneConfiguration"]:c8(),["MetadataRequest"]:c9(),["SharedCodec190"]:c10(),["SharedCodec387"]:c11(),["SharedCodec388"]:c12(),["SharedCodec520"]:c13(),["SharedCodec521"]:c14()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateDeliveryZoneRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
