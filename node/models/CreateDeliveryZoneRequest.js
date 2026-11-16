import { d242 as c0 } from '../descriptors/data/11.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { d7262 as c1, d7263 as c2, d7264 as c3, d7265 as c4, d7266 as c5, d7267 as c6, d7268 as c7 } from '../descriptors/data/332.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { d7580 as c8 } from '../descriptors/data/350.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { d6744 as c9 } from '../descriptors/data/303.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { d7587 as c10, d7588 as c11 } from '../descriptors/data/351.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { d242 as d242 } from '../descriptors/data/11.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d242;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateDeliveryZoneRequest"]:c0(),["DeliveryCountryConditionRequest"]:c1(),["DeliveryDistanceRequest"]:c2(),["DeliveryPostalCodeConditionRequest"]:c3(),["DeliveryPostalCodeValueRequest"]:c4(),["DeliveryRadiusConditionRequest"]:c5(),["DeliveryRadiusOrigin"]:c6(),["DeliveryStateConditionRequest"]:c7(),["DeliveryZoneConfigurationRequest"]:c8(),["MetadataRequest"]:c9(),["SharedCodec835"]:c10(),["SharedCodec836"]:c11()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateDeliveryZoneRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
