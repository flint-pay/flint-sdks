import { d7262 as c0, d7263 as c1, d7264 as c2, d7265 as c3, d7266 as c4, d7267 as c5, d7268 as c6 } from '../descriptors/data/332.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { d7580 as c7 } from '../descriptors/data/350.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { d7587 as c8, d7588 as c9 } from '../descriptors/data/351.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { d7580 as d7580 } from '../descriptors/data/350.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d7580;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["DeliveryCountryConditionRequest"]:c0(),["DeliveryDistanceRequest"]:c1(),["DeliveryPostalCodeConditionRequest"]:c2(),["DeliveryPostalCodeValueRequest"]:c3(),["DeliveryRadiusConditionRequest"]:c4(),["DeliveryRadiusOrigin"]:c5(),["DeliveryStateConditionRequest"]:c6(),["DeliveryZoneConfigurationRequest"]:c7(),["SharedCodec835"]:c8(),["SharedCodec836"]:c9()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeDeliveryZoneConfigurationRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
