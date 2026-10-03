import { d584 as c0, d585 as c1, d586 as c2, d587 as c3, d591 as c4, d638 as c5, d639 as c6, d675 as c7, d676 as c8, d716 as c9, d726 as c10, d728 as c11, d590 as c12, d276 as c13 } from '../descriptors/data.js?sdk=7603172525e41200d4f73e10915d0ae5669c2ee7108f266f11ac6495c50c1bfa';
import { d591 } from '../descriptors/data.js?sdk=7603172525e41200d4f73e10915d0ae5669c2ee7108f266f11ac6495c50c1bfa';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d591;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["DeliveryCountryCondition"]:c0(),["DeliveryCustomerBooleanCondition"]:c1(),["DeliveryCustomerGroupCondition"]:c2(),["DeliveryDistance"]:c3(),["DeliveryEligibilityExpression"]:c4(),["DeliveryPostalCodeCondition"]:c5(),["DeliveryPostalCodeValue"]:c6(),["DeliveryRadiusCondition"]:c7(),["DeliveryRadiusOrigin"]:c8(),["DeliveryStateCondition"]:c9(),["DeliveryWindowTimeCondition"]:c10(),["DeliveryZoneCondition"]:c11(),["SharedCodec202"]:c12(),["SharedCodec73"]:c13()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeDeliveryEligibilityExpression(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
