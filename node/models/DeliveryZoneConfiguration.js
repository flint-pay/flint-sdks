import { d4954 as c0, d4955 as c1, d4956 as c2 } from '../descriptors/data/217.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d4957 as c3, d4958 as c4, d4959 as c6, d4960 as c7 } from '../descriptors/data/218.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d5193 as c5 } from '../descriptors/data/230.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d5198 as c8, d5199 as c9 } from '../descriptors/data/231.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d5193 as d5193 } from '../descriptors/data/230.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d5193;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["DeliveryCountryCondition"]:c0(),["DeliveryDistance"]:c1(),["DeliveryPostalCodeCondition"]:c2(),["DeliveryPostalCodeValue"]:c3(),["DeliveryStateCondition"]:c4(),["DeliveryZoneConfiguration"]:c5(),["SharedCodec389"]:c6(),["SharedCodec390"]:c7(),["SharedCodec522"]:c8(),["SharedCodec523"]:c9()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeDeliveryZoneConfiguration(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
