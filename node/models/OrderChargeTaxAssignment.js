import { d5790 as c0 } from '../descriptors/data/259.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d7709 as c1 } from '../descriptors/data/371.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d7812 as c2 } from '../descriptors/data/376.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d7263 as c3, d7264 as c4 } from '../descriptors/data/343.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d7709 as d7709 } from '../descriptors/data/371.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d7709;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["OrderChargeTaxAssignment"]:c1(),["TaxCalculationRequestModel"]:c2(),["TaxComponentRequestModel"]:c3(),["TaxJurisdictionRequestModel"]:c4()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeOrderChargeTaxAssignment(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
