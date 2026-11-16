import { d242 as c0 } from '../descriptors/data/11.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d6459 as c1, d6460 as c2, d6461 as c3, d6462 as c4, d6463 as c5, d6464 as c6, d6465 as c7 } from '../descriptors/data/297.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d6777 as c8 } from '../descriptors/data/315.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d5941 as c9 } from '../descriptors/data/268.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d6784 as c10, d6785 as c11 } from '../descriptors/data/316.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d242 as d242 } from '../descriptors/data/11.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d242;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateDeliveryZoneRequest"]:c0(),["DeliveryCountryConditionRequest"]:c1(),["DeliveryDistanceRequest"]:c2(),["DeliveryPostalCodeConditionRequest"]:c3(),["DeliveryPostalCodeValueRequest"]:c4(),["DeliveryRadiusConditionRequest"]:c5(),["DeliveryRadiusOrigin"]:c6(),["DeliveryStateConditionRequest"]:c7(),["DeliveryZoneConfigurationRequest"]:c8(),["MetadataRequest"]:c9(),["SharedCodec665"]:c10(),["SharedCodec666"]:c11()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateDeliveryZoneRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
