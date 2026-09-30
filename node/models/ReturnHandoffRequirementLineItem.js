import { d1976 as c0, d2071 as c1 } from '../descriptors/data.js?sdk=bef5952824dbe0867acb5a07673ca91102b136eda21794fff718a3addd296a2a';
import { d1976 } from '../descriptors/data.js?sdk=bef5952824dbe0867acb5a07673ca91102b136eda21794fff718a3addd296a2a';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1976;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["ReturnHandoffRequirementLineItem"]:c0(),["ReturnShipmentLineItemAllocation"]:c1()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeReturnHandoffRequirementLineItem(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
