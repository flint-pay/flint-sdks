import { d4923 as c0, d4924 as c3, d4925 as c5 } from '../descriptors/data/216.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d4937 as c1, d4938 as c2, d4940 as c4, d4926 as c6, d4927 as c11, d4928 as c17, d4929 as c18 } from '../descriptors/data/217.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d4948 as c7, d4951 as c8, d4952 as c9, d4953 as c10, d4959 as c12, d4960 as c13 } from '../descriptors/data/218.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d4281 as c14 } from '../descriptors/data/180.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d4976 as c15, d4977 as c16, d4978 as c19, d4981 as c20 } from '../descriptors/data/219.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d4953 as d4953 } from '../descriptors/data/218.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d4953;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["DeliveryCountryCondition"]:c0(),["DeliveryCustomerBooleanCondition"]:c1(),["DeliveryCustomerSegmentCondition"]:c2(),["DeliveryDistance"]:c3(),["DeliveryEligibilityExpression"]:c4(),["DeliveryPostalCodeCondition"]:c5(),["DeliveryPostalCodeValue"]:c6(),["DeliveryPricingRateRequest"]:c7(),["DeliveryRadiusCondition"]:c8(),["DeliveryRadiusOrigin"]:c9(),["DeliveryRateTablePricingStrategyRequest"]:c10(),["DeliveryStateCondition"]:c11(),["DeliveryWindowTimeCondition"]:c12(),["DeliveryZoneCondition"]:c13(),["MoneyValue"]:c14(),["SharedCodec385"]:c15(),["SharedCodec386"]:c16(),["SharedCodec387"]:c17(),["SharedCodec388"]:c18(),["SharedCodec389"]:c19(),["SharedCodec408"]:c20()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeDeliveryRateTablePricingStrategyRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
