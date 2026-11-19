import { d7807 as c0 } from '../descriptors/data/331.js?sdk=d3c76bf16b3cbedefee26daadf6e0346518a62c461a7867b1008aa91b458e940';
import { d7807 as d7807 } from '../descriptors/data/331.js?sdk=d3c76bf16b3cbedefee26daadf6e0346518a62c461a7867b1008aa91b458e940';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d7807;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["UpdateTicketRequest"]:c0()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeUpdateTicketRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
