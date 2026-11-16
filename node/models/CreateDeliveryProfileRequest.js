import { d265 as c0 } from '../descriptors/data/12.js?sdk=abe56d712be8582bd6fe7e6a4f88e467c3974bdb0d8c7e6c49831dc69255cb96';
import { d8446 as c1, d8449 as c2 } from '../descriptors/data/373.js?sdk=abe56d712be8582bd6fe7e6a4f88e467c3974bdb0d8c7e6c49831dc69255cb96';
import { d7767 as c3 } from '../descriptors/data/336.js?sdk=abe56d712be8582bd6fe7e6a4f88e467c3974bdb0d8c7e6c49831dc69255cb96';
import { d8460 as c4, d8461 as c5, d8462 as c6, d8463 as c7, d8464 as c8, d8465 as c9, d8466 as c10, d8467 as c11, d8468 as c12, d8469 as c13, d8470 as c14, d8471 as c15 } from '../descriptors/data/374.js?sdk=abe56d712be8582bd6fe7e6a4f88e467c3974bdb0d8c7e6c49831dc69255cb96';
import { d8472 as c16, d8473 as c17 } from '../descriptors/data/375.js?sdk=abe56d712be8582bd6fe7e6a4f88e467c3974bdb0d8c7e6c49831dc69255cb96';
import { d265 as d265 } from '../descriptors/data/12.js?sdk=abe56d712be8582bd6fe7e6a4f88e467c3974bdb0d8c7e6c49831dc69255cb96';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d265;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateDeliveryProfileRequest"]:c0(),["DeliveryProfileConfigurationRequest"]:c1(),["DeliveryProfileOriginPolicyRequest"]:c2(),["MetadataRequest"]:c3(),["SharedCodec960"]:c4(),["SharedCodec961"]:c5(),["SharedCodec962"]:c6(),["SharedCodec963"]:c7(),["SharedCodec964"]:c8(),["SharedCodec965"]:c9(),["SharedCodec966"]:c10(),["SharedCodec973"]:c11(),["SharedCodec974"]:c12(),["SharedCodec977"]:c13(),["SharedCodec978"]:c14(),["SharedCodec980"]:c15(),["SharedCodec981"]:c16(),["SharedCodec982"]:c17()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateDeliveryProfileRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
