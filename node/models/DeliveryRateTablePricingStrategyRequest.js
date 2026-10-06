import { d598 as c0, d599 as c1, d600 as c2, d601 as c3, d605 as c4, d651 as c5, d652 as c6, d662 as c7, d691 as c8, d692 as c9, d705 as c10, d732 as c11, d742 as c12, d744 as c13, d77 as c14, d604 as c15, d283 as c16 } from '../descriptors/data.js?sdk=ba066cb5d42061b50ddb74a9a955bfa66adbe16252255af2a884092ee5130eba';
import { d705 } from '../descriptors/data.js?sdk=ba066cb5d42061b50ddb74a9a955bfa66adbe16252255af2a884092ee5130eba';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d705;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["DeliveryCountryCondition"]:c0(),["DeliveryCustomerBooleanCondition"]:c1(),["DeliveryCustomerGroupCondition"]:c2(),["DeliveryDistance"]:c3(),["DeliveryEligibilityExpression"]:c4(),["DeliveryPostalCodeCondition"]:c5(),["DeliveryPostalCodeValue"]:c6(),["DeliveryPricingRateRequest"]:c7(),["DeliveryRadiusCondition"]:c8(),["DeliveryRadiusOrigin"]:c9(),["DeliveryRateTablePricingStrategyRequest"]:c10(),["DeliveryStateCondition"]:c11(),["DeliveryWindowTimeCondition"]:c12(),["DeliveryZoneCondition"]:c13(),["MoneyValue"]:c14(),["SharedCodec206"]:c15(),["SharedCodec74"]:c16()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeDeliveryRateTablePricingStrategyRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
