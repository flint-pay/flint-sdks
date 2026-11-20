import { d282 as c0 } from '../descriptors/data/14.js?sdk=4332f5ca21c6bbffd15e6df46b751e70fcfa9bb8907edf04e783727091a6296b';
import { d8571 as c1, d8572 as c2, d8573 as c3, d8574 as c4, d8575 as c5, d8576 as c6, d8577 as c7 } from '../descriptors/data/382.js?sdk=4332f5ca21c6bbffd15e6df46b751e70fcfa9bb8907edf04e783727091a6296b';
import { d8893 as c8, d8896 as c10, d8897 as c11 } from '../descriptors/data/400.js?sdk=4332f5ca21c6bbffd15e6df46b751e70fcfa9bb8907edf04e783727091a6296b';
import { d8048 as c9 } from '../descriptors/data/352.js?sdk=4332f5ca21c6bbffd15e6df46b751e70fcfa9bb8907edf04e783727091a6296b';
import { d282 as d282 } from '../descriptors/data/14.js?sdk=4332f5ca21c6bbffd15e6df46b751e70fcfa9bb8907edf04e783727091a6296b';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d282;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateDeliveryZoneRequest"]:c0(),["DeliveryCountryConditionRequest"]:c1(),["DeliveryDistanceRequest"]:c2(),["DeliveryPostalCodeConditionRequest"]:c3(),["DeliveryPostalCodeValueRequest"]:c4(),["DeliveryRadiusConditionRequest"]:c5(),["DeliveryRadiusOrigin"]:c6(),["DeliveryStateConditionRequest"]:c7(),["DeliveryZoneConfigurationRequest"]:c8(),["MetadataRequest"]:c9(),["SharedCodec1093"]:c10(),["SharedCodec1094"]:c11()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateDeliveryZoneRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
