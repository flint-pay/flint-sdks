import { d7705 as c0, d7706 as c1, d7695 as c3 } from '../descriptors/data/331.js?sdk=abe56d712be8582bd6fe7e6a4f88e467c3974bdb0d8c7e6c49831dc69255cb96';
import { d7719 as c2, d7720 as c4, d7721 as c5 } from '../descriptors/data/332.js?sdk=abe56d712be8582bd6fe7e6a4f88e467c3974bdb0d8c7e6c49831dc69255cb96';
import { d7484 as c6 } from '../descriptors/data/314.js?sdk=abe56d712be8582bd6fe7e6a4f88e467c3974bdb0d8c7e6c49831dc69255cb96';
import { d7484 as d7484 } from '../descriptors/data/314.js?sdk=abe56d712be8582bd6fe7e6a4f88e467c3974bdb0d8c7e6c49831dc69255cb96';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d7484;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["SharedCodec2973"]:c0(),["SharedCodec2974"]:c1(),["SharedCodec332"]:c2(),["SharedCodec5"]:c3(),["SharedCodec565"]:c4(),["SharedCodec566"]:c5(),["UpdateAPIKeyRequest"]:c6()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeUpdateAPIKeyRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
