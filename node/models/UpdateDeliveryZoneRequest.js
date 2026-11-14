import { d6427 as c0, d6428 as c1, d6429 as c2, d6430 as c3, d6431 as c4, d6432 as c5, d6433 as c6 } from '../descriptors/data/296.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d6749 as c7 } from '../descriptors/data/315.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d5920 as c8 } from '../descriptors/data/268.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d6018 as c9 } from '../descriptors/data/274.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d6337 as c10 } from '../descriptors/data/291.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d6756 as c11, d6757 as c12 } from '../descriptors/data/316.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d5648 as c13 } from '../descriptors/data/248.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d5648 as d5648 } from '../descriptors/data/248.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d5648;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["DeliveryCountryConditionRequest"]:c0(),["DeliveryDistanceRequest"]:c1(),["DeliveryPostalCodeConditionRequest"]:c2(),["DeliveryPostalCodeValueRequest"]:c3(),["DeliveryRadiusConditionRequest"]:c4(),["DeliveryRadiusOrigin"]:c5(),["DeliveryStateConditionRequest"]:c6(),["DeliveryZoneConfigurationRequest"]:c7(),["SharedCodec1692"]:c8(),["SharedCodec1695"]:c9(),["SharedCodec1703"]:c10(),["SharedCodec667"]:c11(),["SharedCodec668"]:c12(),["UpdateDeliveryZoneRequest"]:c13()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeUpdateDeliveryZoneRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
