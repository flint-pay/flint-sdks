import { d6458 as c0 } from '../descriptors/data/297.js?sdk=bb0d7e74351abfed942ea144dbe99f50da6117785add7c8de338b21bf11fbc5a';
import { d6458 as d6458 } from '../descriptors/data/297.js?sdk=bb0d7e74351abfed942ea144dbe99f50da6117785add7c8de338b21bf11fbc5a';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d6458;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["DeliveryRecipientRequirementRequest"]:c0()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeDeliveryRecipientRequirementRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
