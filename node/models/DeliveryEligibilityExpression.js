import { d4954 as c0, d4955 as c3, d4956 as c5 } from '../descriptors/data/217.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d4968 as c1, d4969 as c2, d4971 as c4, d4957 as c6, d4958 as c7, d4959 as c11, d4960 as c12 } from '../descriptors/data/218.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d4990 as c8 } from '../descriptors/data/219.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d5007 as c9, d5008 as c10, d5009 as c13 } from '../descriptors/data/220.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d4971 as d4971 } from '../descriptors/data/218.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d4971;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["DeliveryCountryCondition"]:c0(),["DeliveryCustomerBooleanCondition"]:c1(),["DeliveryCustomerSegmentCondition"]:c2(),["DeliveryDistance"]:c3(),["DeliveryEligibilityExpression"]:c4(),["DeliveryPostalCodeCondition"]:c5(),["DeliveryPostalCodeValue"]:c6(),["DeliveryStateCondition"]:c7(),["DeliveryWindowTimeCondition"]:c8(),["SharedCodec387"]:c9(),["SharedCodec388"]:c10(),["SharedCodec389"]:c11(),["SharedCodec390"]:c12(),["SharedCodec391"]:c13()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeDeliveryEligibilityExpression(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
