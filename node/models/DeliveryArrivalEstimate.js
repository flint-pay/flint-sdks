import { d522 as c0 } from '../descriptors/data.js?sdk=bef5952824dbe0867acb5a07673ca91102b136eda21794fff718a3addd296a2a';
import { d522 } from '../descriptors/data.js?sdk=bef5952824dbe0867acb5a07673ca91102b136eda21794fff718a3addd296a2a';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d522;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["DeliveryArrivalEstimate"]:c0()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeDeliveryArrivalEstimate(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
