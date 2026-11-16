import { d8291 as c0 } from '../descriptors/data/365.js?sdk=abe56d712be8582bd6fe7e6a4f88e467c3974bdb0d8c7e6c49831dc69255cb96';
import { d8291 as d8291 } from '../descriptors/data/365.js?sdk=abe56d712be8582bd6fe7e6a4f88e467c3974bdb0d8c7e6c49831dc69255cb96';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d8291;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["DeliveryStateConditionRequest"]:c0()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeDeliveryStateConditionRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
