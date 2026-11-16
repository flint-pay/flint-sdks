import { d8981 as c0, d8982 as c1, d8983 as c2 } from '../descriptors/data/404.js?sdk=abe56d712be8582bd6fe7e6a4f88e467c3974bdb0d8c7e6c49831dc69255cb96';
import { d7507 as c3 } from '../descriptors/data/315.js?sdk=abe56d712be8582bd6fe7e6a4f88e467c3974bdb0d8c7e6c49831dc69255cb96';
import { d7507 as d7507 } from '../descriptors/data/315.js?sdk=abe56d712be8582bd6fe7e6a4f88e467c3974bdb0d8c7e6c49831dc69255cb96';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d7507;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["SharedCodec3006"]:c0(),["SharedCodec3007"]:c1(),["SharedCodec3008"]:c2(),["UpdateInventoryTransferRequest"]:c3()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeUpdateInventoryTransferRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
