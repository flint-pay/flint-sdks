import { d7807 as c0 } from '../descriptors/data/331.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { d7807 as d7807 } from '../descriptors/data/331.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d7807;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["UpdateTicketRequest"]:c0()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeUpdateTicketRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
