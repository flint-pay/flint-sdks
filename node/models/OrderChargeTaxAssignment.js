import { d4312 as c0 } from '../descriptors/data/181.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d945 as c1 } from '../descriptors/data/45.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d6168 as c2, d6169 as c3, d6170 as c4 } from '../descriptors/data/285.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d945 as d945 } from '../descriptors/data/45.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d945;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["OrderChargeTaxAssignment"]:c1(),["TaxCalculationRequestModel"]:c2(),["TaxComponentRequestModel"]:c3(),["TaxJurisdictionRequest"]:c4()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeOrderChargeTaxAssignment(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
