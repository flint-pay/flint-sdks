import { d525 as c0 } from '../descriptors/data.js?sdk=245b7fb11d6174517fe5d194b5fb87c42348ace248a5c84bbab9ef7bfe2b9e5e';
import { d525 } from '../descriptors/data.js?sdk=245b7fb11d6174517fe5d194b5fb87c42348ace248a5c84bbab9ef7bfe2b9e5e';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d525;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CustomerEmailPreferences"]:c0()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCustomerEmailPreferences(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
