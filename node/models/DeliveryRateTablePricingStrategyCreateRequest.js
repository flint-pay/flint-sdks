import { d4954 as c0, d4955 as c3, d4956 as c5 } from '../descriptors/data/217.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d4968 as c1, d4969 as c2, d4971 as c4, d4957 as c6, d4958 as c11, d4959 as c17, d4960 as c18 } from '../descriptors/data/218.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d446 as c7 } from '../descriptors/data/24.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d4982 as c8, d4983 as c9, d4990 as c12, d4991 as c13 } from '../descriptors/data/219.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d503 as c10 } from '../descriptors/data/27.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d4312 as c14 } from '../descriptors/data/181.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d5007 as c15, d5008 as c16, d5009 as c19, d5012 as c20 } from '../descriptors/data/220.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d503 as d503 } from '../descriptors/data/27.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d503;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["DeliveryCountryCondition"]:c0(),["DeliveryCustomerBooleanCondition"]:c1(),["DeliveryCustomerSegmentCondition"]:c2(),["DeliveryDistance"]:c3(),["DeliveryEligibilityExpression"]:c4(),["DeliveryPostalCodeCondition"]:c5(),["DeliveryPostalCodeValue"]:c6(),["DeliveryPricingRateCreateRequest"]:c7(),["DeliveryRadiusCondition"]:c8(),["DeliveryRadiusOrigin"]:c9(),["DeliveryRateTablePricingStrategyCreateRequest"]:c10(),["DeliveryStateCondition"]:c11(),["DeliveryWindowTimeCondition"]:c12(),["DeliveryZoneCondition"]:c13(),["MoneyValue"]:c14(),["SharedCodec387"]:c15(),["SharedCodec388"]:c16(),["SharedCodec389"]:c17(),["SharedCodec390"]:c18(),["SharedCodec391"]:c19(),["SharedCodec410"]:c20()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeDeliveryRateTablePricingStrategyCreateRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
