import { d4312 as c0 } from '../descriptors/data/181.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d4649 as c1 } from '../descriptors/data/200.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d4536 as c2, d4537 as c3, d4538 as c4 } from '../descriptors/data/194.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d4649 as d4649 } from '../descriptors/data/200.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d4649;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["OrderCalculatedLineItemTax"]:c1(),["TaxCalculationRequest"]:c2(),["TaxComponentRequest"]:c3(),["TaxJurisdiction"]:c4()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeOrderCalculatedLineItemTax(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
