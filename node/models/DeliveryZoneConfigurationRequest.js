import { d6459 as c0, d6460 as c1, d6461 as c2, d6462 as c3, d6463 as c4, d6464 as c5, d6465 as c6 } from '../descriptors/data/297.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d6777 as c7 } from '../descriptors/data/315.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d6784 as c8, d6785 as c9 } from '../descriptors/data/316.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d6777 as d6777 } from '../descriptors/data/315.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d6777;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["DeliveryCountryConditionRequest"]:c0(),["DeliveryDistanceRequest"]:c1(),["DeliveryPostalCodeConditionRequest"]:c2(),["DeliveryPostalCodeValueRequest"]:c3(),["DeliveryRadiusConditionRequest"]:c4(),["DeliveryRadiusOrigin"]:c5(),["DeliveryStateConditionRequest"]:c6(),["DeliveryZoneConfigurationRequest"]:c7(),["SharedCodec665"]:c8(),["SharedCodec666"]:c9()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeDeliveryZoneConfigurationRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
