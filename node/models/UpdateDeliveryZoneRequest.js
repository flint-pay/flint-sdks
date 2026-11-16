import { d6459 as c0, d6460 as c1, d6461 as c2, d6462 as c3, d6463 as c4, d6464 as c5, d6465 as c6 } from '../descriptors/data/297.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d6777 as c7 } from '../descriptors/data/315.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d5942 as c8 } from '../descriptors/data/268.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d6038 as c9 } from '../descriptors/data/274.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d6369 as c10 } from '../descriptors/data/292.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d6784 as c11, d6785 as c12 } from '../descriptors/data/316.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d5672 as c13 } from '../descriptors/data/247.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d5672 as d5672 } from '../descriptors/data/247.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d5672;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["DeliveryCountryConditionRequest"]:c0(),["DeliveryDistanceRequest"]:c1(),["DeliveryPostalCodeConditionRequest"]:c2(),["DeliveryPostalCodeValueRequest"]:c3(),["DeliveryRadiusConditionRequest"]:c4(),["DeliveryRadiusOrigin"]:c5(),["DeliveryStateConditionRequest"]:c6(),["DeliveryZoneConfigurationRequest"]:c7(),["SharedCodec1687"]:c8(),["SharedCodec1690"]:c9(),["SharedCodec1698"]:c10(),["SharedCodec665"]:c11(),["SharedCodec666"]:c12(),["UpdateDeliveryZoneRequest"]:c13()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeUpdateDeliveryZoneRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
