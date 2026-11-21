import { d283 as c0 } from '../descriptors/data/14.js?sdk=6b6c9c7504997706af80698ebf5c1134152c5d05e2ad1b214f18b1a37d7a234e';
import { d8581 as c1, d8582 as c2, d8583 as c3, d8584 as c4, d8585 as c5, d8586 as c6, d8587 as c7 } from '../descriptors/data/382.js?sdk=6b6c9c7504997706af80698ebf5c1134152c5d05e2ad1b214f18b1a37d7a234e';
import { d8905 as c8, d8908 as c10, d8909 as c11 } from '../descriptors/data/400.js?sdk=6b6c9c7504997706af80698ebf5c1134152c5d05e2ad1b214f18b1a37d7a234e';
import { d8056 as c9 } from '../descriptors/data/352.js?sdk=6b6c9c7504997706af80698ebf5c1134152c5d05e2ad1b214f18b1a37d7a234e';
import { d283 as d283 } from '../descriptors/data/14.js?sdk=6b6c9c7504997706af80698ebf5c1134152c5d05e2ad1b214f18b1a37d7a234e';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d283;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateDeliveryZoneRequest"]:c0(),["DeliveryCountryConditionRequest"]:c1(),["DeliveryDistanceRequest"]:c2(),["DeliveryPostalCodeConditionRequest"]:c3(),["DeliveryPostalCodeValueRequest"]:c4(),["DeliveryRadiusConditionRequest"]:c5(),["DeliveryRadiusOrigin"]:c6(),["DeliveryStateConditionRequest"]:c7(),["DeliveryZoneConfigurationRequest"]:c8(),["MetadataRequest"]:c9(),["SharedCodec1098"]:c10(),["SharedCodec1099"]:c11()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateDeliveryZoneRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
