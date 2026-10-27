import { d3537 as c0, d3551 as c1, d3552 as c2, d3538 as c3, d3554 as c4, d3539 as c5, d3540 as c6, d3541 as c8, d3542 as c9, d3543 as c10 } from '../descriptors/data/145.js?sdk=f0eb82b41cb4679bc6f0e94219007f92dfd5df456c2b498bcbb5018ebf3da812';
import { d3480 as c7 } from '../descriptors/data/142.js?sdk=f0eb82b41cb4679bc6f0e94219007f92dfd5df456c2b498bcbb5018ebf3da812';
import { d3567 as c11, d3568 as c12 } from '../descriptors/data/146.js?sdk=f0eb82b41cb4679bc6f0e94219007f92dfd5df456c2b498bcbb5018ebf3da812';
import { d3013 as c13 } from '../descriptors/data/116.js?sdk=f0eb82b41cb4679bc6f0e94219007f92dfd5df456c2b498bcbb5018ebf3da812';
import { d3580 as c14, d3581 as c15 } from '../descriptors/data/147.js?sdk=f0eb82b41cb4679bc6f0e94219007f92dfd5df456c2b498bcbb5018ebf3da812';
import { d3480 as d3480 } from '../descriptors/data/142.js?sdk=f0eb82b41cb4679bc6f0e94219007f92dfd5df456c2b498bcbb5018ebf3da812';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d3480;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["DeliveryCountryCondition"]:c0(),["DeliveryCustomerBooleanCondition"]:c1(),["DeliveryCustomerSegmentCondition"]:c2(),["DeliveryDistance"]:c3(),["DeliveryEligibilityExpression"]:c4(),["DeliveryPostalCodeCondition"]:c5(),["DeliveryPostalCodeValue"]:c6(),["DeliveryPricingRateCreateRequest"]:c7(),["DeliveryRadiusCondition"]:c8(),["DeliveryRadiusOrigin"]:c9(),["DeliveryStateCondition"]:c10(),["DeliveryWindowTimeCondition"]:c11(),["DeliveryZoneCondition"]:c12(),["MoneyValue"]:c13(),["SharedCodec257"]:c14(),["SharedCodec258"]:c15()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeDeliveryPricingRateCreateRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
