import { d204 as c0 } from '../descriptors/data/9.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d4954 as c1, d4955 as c2, d4956 as c3 } from '../descriptors/data/217.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d4957 as c4, d4958 as c7, d4959 as c11, d4960 as c12 } from '../descriptors/data/218.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d4982 as c5, d4983 as c6 } from '../descriptors/data/219.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d5193 as c8 } from '../descriptors/data/230.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d4429 as c9 } from '../descriptors/data/188.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d1498 as c10 } from '../descriptors/data/69.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d5198 as c13, d5199 as c14 } from '../descriptors/data/231.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d204 as d204 } from '../descriptors/data/9.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d204;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateDeliveryZoneRequest"]:c0(),["DeliveryCountryCondition"]:c1(),["DeliveryDistance"]:c2(),["DeliveryPostalCodeCondition"]:c3(),["DeliveryPostalCodeValue"]:c4(),["DeliveryRadiusCondition"]:c5(),["DeliveryRadiusOrigin"]:c6(),["DeliveryStateCondition"]:c7(),["DeliveryZoneConfiguration"]:c8(),["MetadataRequest"]:c9(),["SharedCodec192"]:c10(),["SharedCodec389"]:c11(),["SharedCodec390"]:c12(),["SharedCodec522"]:c13(),["SharedCodec523"]:c14()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateDeliveryZoneRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
