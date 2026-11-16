import { d441 as c0 } from '../descriptors/data/26.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d441 as d441 } from '../descriptors/data/26.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d441;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CustomerEmailDeliverySettingsRequest"]:c0()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCustomerEmailDeliverySettingsRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
