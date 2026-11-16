import { d135 as c0 } from '../descriptors/data/6.js?sdk=abe56d712be8582bd6fe7e6a4f88e467c3974bdb0d8c7e6c49831dc69255cb96';
import { d135 as d135 } from '../descriptors/data/6.js?sdk=abe56d712be8582bd6fe7e6a4f88e467c3974bdb0d8c7e6c49831dc69255cb96';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d135;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CancelOrderEditRequest"]:c0()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCancelOrderEditRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
