import { d7474 as c0 } from '../descriptors/data/313.js?sdk=abe56d712be8582bd6fe7e6a4f88e467c3974bdb0d8c7e6c49831dc69255cb96';
import { d7474 as d7474 } from '../descriptors/data/313.js?sdk=abe56d712be8582bd6fe7e6a4f88e467c3974bdb0d8c7e6c49831dc69255cb96';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d7474;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["TicketVersionRequest"]:c0()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeTicketVersionRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
