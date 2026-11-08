import { d4429 as c0, d4430 as c4 } from '../descriptors/data/188.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d4312 as c1 } from '../descriptors/data/181.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d4649 as c2 } from '../descriptors/data/200.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d957 as c3 } from '../descriptors/data/45.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d4542 as c5, d4536 as c20, d4537 as c21, d4538 as c22 } from '../descriptors/data/194.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d6087 as c6, d6088 as c7, d6089 as c8, d6090 as c9, d6091 as c10 } from '../descriptors/data/280.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d6092 as c11, d6093 as c13 } from '../descriptors/data/281.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d5998 as c12 } from '../descriptors/data/275.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d5062 as c14, d5063 as c16 } from '../descriptors/data/223.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d5082 as c15, d5083 as c17, d5084 as c18 } from '../descriptors/data/224.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d4578 as c19 } from '../descriptors/data/196.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d4361 as c23 } from '../descriptors/data/184.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d4199 as c24 } from '../descriptors/data/174.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d4199 as d4199 } from '../descriptors/data/174.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d4199;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MetadataRequest"]:c0(),["MoneyValue"]:c1(),["OrderCalculatedLineItemTax"]:c2(),["OrderLineItemModifierRequest"]:c3(),["SharedCodec1368"]:c4(),["SharedCodec1371"]:c5(),["SharedCodec1400"]:c6(),["SharedCodec1401"]:c7(),["SharedCodec1402"]:c8(),["SharedCodec1403"]:c9(),["SharedCodec1404"]:c10(),["SharedCodec1405"]:c11(),["SharedCodec1406"]:c12(),["SharedCodec1407"]:c13(),["SharedCodec255"]:c14(),["SharedCodec256"]:c15(),["SharedCodec257"]:c16(),["SharedCodec258"]:c17(),["SharedCodec259"]:c18(),["SharedCodec604"]:c19(),["TaxCalculationRequest"]:c20(),["TaxComponentRequest"]:c21(),["TaxJurisdiction"]:c22(),["TextModifierRequest"]:c23(),["UpdateLineItemRequest"]:c24()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeUpdateLineItemRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
