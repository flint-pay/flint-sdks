import { d8446 as c0, d8449 as c1 } from '../descriptors/data/373.js?sdk=abe56d712be8582bd6fe7e6a4f88e467c3974bdb0d8c7e6c49831dc69255cb96';
import { d7768 as c2 } from '../descriptors/data/336.js?sdk=abe56d712be8582bd6fe7e6a4f88e467c3974bdb0d8c7e6c49831dc69255cb96';
import { d7864 as c3 } from '../descriptors/data/342.js?sdk=abe56d712be8582bd6fe7e6a4f88e467c3974bdb0d8c7e6c49831dc69255cb96';
import { d8195 as c4 } from '../descriptors/data/360.js?sdk=abe56d712be8582bd6fe7e6a4f88e467c3974bdb0d8c7e6c49831dc69255cb96';
import { d8460 as c5, d8461 as c6, d8462 as c7, d8463 as c8, d8464 as c9, d8465 as c10, d8466 as c11, d8467 as c12, d8468 as c13, d8469 as c14, d8470 as c15, d8471 as c16 } from '../descriptors/data/374.js?sdk=abe56d712be8582bd6fe7e6a4f88e467c3974bdb0d8c7e6c49831dc69255cb96';
import { d8472 as c17, d8473 as c18 } from '../descriptors/data/375.js?sdk=abe56d712be8582bd6fe7e6a4f88e467c3974bdb0d8c7e6c49831dc69255cb96';
import { d7495 as c19 } from '../descriptors/data/315.js?sdk=abe56d712be8582bd6fe7e6a4f88e467c3974bdb0d8c7e6c49831dc69255cb96';
import { d7495 as d7495 } from '../descriptors/data/315.js?sdk=abe56d712be8582bd6fe7e6a4f88e467c3974bdb0d8c7e6c49831dc69255cb96';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d7495;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["DeliveryProfileConfigurationRequest"]:c0(),["DeliveryProfileOriginPolicyRequest"]:c1(),["SharedCodec2977"]:c2(),["SharedCodec2980"]:c3(),["SharedCodec2988"]:c4(),["SharedCodec960"]:c5(),["SharedCodec961"]:c6(),["SharedCodec962"]:c7(),["SharedCodec963"]:c8(),["SharedCodec964"]:c9(),["SharedCodec965"]:c10(),["SharedCodec966"]:c11(),["SharedCodec973"]:c12(),["SharedCodec974"]:c13(),["SharedCodec977"]:c14(),["SharedCodec978"]:c15(),["SharedCodec980"]:c16(),["SharedCodec981"]:c17(),["SharedCodec982"]:c18(),["UpdateDeliveryProfileRequest"]:c19()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeUpdateDeliveryProfileRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
