import { d634 as c0 } from '../descriptors/data/36.js?sdk=abe56d712be8582bd6fe7e6a4f88e467c3974bdb0d8c7e6c49831dc69255cb96';
import { d8449 as c1 } from '../descriptors/data/373.js?sdk=abe56d712be8582bd6fe7e6a4f88e467c3974bdb0d8c7e6c49831dc69255cb96';
import { d8460 as c2, d8461 as c3, d8464 as c4, d8465 as c5, d8466 as c6, d8469 as c7, d8470 as c8, d8471 as c9 } from '../descriptors/data/374.js?sdk=abe56d712be8582bd6fe7e6a4f88e467c3974bdb0d8c7e6c49831dc69255cb96';
import { d8472 as c10, d8473 as c11 } from '../descriptors/data/375.js?sdk=abe56d712be8582bd6fe7e6a4f88e467c3974bdb0d8c7e6c49831dc69255cb96';
import { d634 as d634 } from '../descriptors/data/36.js?sdk=abe56d712be8582bd6fe7e6a4f88e467c3974bdb0d8c7e6c49831dc69255cb96';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d634;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["DeliveryProfileConfigurationInputRequired"]:c0(),["DeliveryProfileOriginPolicyRequest"]:c1(),["SharedCodec960"]:c2(),["SharedCodec961"]:c3(),["SharedCodec964"]:c4(),["SharedCodec965"]:c5(),["SharedCodec966"]:c6(),["SharedCodec977"]:c7(),["SharedCodec978"]:c8(),["SharedCodec980"]:c9(),["SharedCodec981"]:c10(),["SharedCodec982"]:c11()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeDeliveryProfileConfigurationInputRequired(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
