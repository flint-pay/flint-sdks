import { d7768 as c0 } from '../descriptors/data/336.js?sdk=abe56d712be8582bd6fe7e6a4f88e467c3974bdb0d8c7e6c49831dc69255cb96';
import { d7864 as c1 } from '../descriptors/data/342.js?sdk=abe56d712be8582bd6fe7e6a4f88e467c3974bdb0d8c7e6c49831dc69255cb96';
import { d9692 as c2, d9693 as c3, d9694 as c4, d9695 as c5 } from '../descriptors/data/446.js?sdk=abe56d712be8582bd6fe7e6a4f88e467c3974bdb0d8c7e6c49831dc69255cb96';
import { d7521 as c6 } from '../descriptors/data/317.js?sdk=abe56d712be8582bd6fe7e6a4f88e467c3974bdb0d8c7e6c49831dc69255cb96';
import { d7521 as d7521 } from '../descriptors/data/317.js?sdk=abe56d712be8582bd6fe7e6a4f88e467c3974bdb0d8c7e6c49831dc69255cb96';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d7521;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["SharedCodec2977"]:c0(),["SharedCodec2980"]:c1(),["SharedCodec3040"]:c2(),["SharedCodec3041"]:c3(),["SharedCodec3042"]:c4(),["SharedCodec3043"]:c5(),["UpdatePackageRequest"]:c6()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeUpdatePackageRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
