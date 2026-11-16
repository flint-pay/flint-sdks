import { d7766 as c0 } from '../descriptors/data/336.js?sdk=abe56d712be8582bd6fe7e6a4f88e467c3974bdb0d8c7e6c49831dc69255cb96';
import { d7766 as d7766 } from '../descriptors/data/336.js?sdk=abe56d712be8582bd6fe7e6a4f88e467c3974bdb0d8c7e6c49831dc69255cb96';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d7766;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["UpdateBundleComponentRequest"]:c0()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeUpdateBundleComponentRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
