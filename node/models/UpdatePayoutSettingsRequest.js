import { d7640 as c0 } from '../descriptors/data/327.js?sdk=abe56d712be8582bd6fe7e6a4f88e467c3974bdb0d8c7e6c49831dc69255cb96';
import { d8793 as c1 } from '../descriptors/data/395.js?sdk=abe56d712be8582bd6fe7e6a4f88e467c3974bdb0d8c7e6c49831dc69255cb96';
import { d9942 as c2, d9943 as c3, d9944 as c4, d9945 as c5, d9946 as c6, d9947 as c7 } from '../descriptors/data/462.js?sdk=abe56d712be8582bd6fe7e6a4f88e467c3974bdb0d8c7e6c49831dc69255cb96';
import { d7527 as c8 } from '../descriptors/data/317.js?sdk=abe56d712be8582bd6fe7e6a4f88e467c3974bdb0d8c7e6c49831dc69255cb96';
import { d7527 as d7527 } from '../descriptors/data/317.js?sdk=abe56d712be8582bd6fe7e6a4f88e467c3974bdb0d8c7e6c49831dc69255cb96';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d7527;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["SharedCodec134"]:c1(),["SharedCodec3058"]:c2(),["SharedCodec3059"]:c3(),["SharedCodec3060"]:c4(),["SharedCodec3061"]:c5(),["SharedCodec3062"]:c6(),["SharedCodec3063"]:c7(),["UpdatePayoutSettingsRequest"]:c8()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeUpdatePayoutSettingsRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
