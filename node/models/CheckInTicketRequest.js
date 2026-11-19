import { d175 as c0 } from '../descriptors/data/8.js?sdk=d3c76bf16b3cbedefee26daadf6e0346518a62c461a7867b1008aa91b458e940';
import { d175 as d175 } from '../descriptors/data/8.js?sdk=d3c76bf16b3cbedefee26daadf6e0346518a62c461a7867b1008aa91b458e940';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d175;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CheckInTicketRequest"]:c0()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCheckInTicketRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
