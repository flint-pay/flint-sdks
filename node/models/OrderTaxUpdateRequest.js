import { d4312 as c0 } from '../descriptors/data/181.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d945 as c1, d958 as c2 } from '../descriptors/data/45.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d5681 as c3, d5682 as c4, d5683 as c5, d5684 as c6, d5685 as c7, d5686 as c8, d5692 as c11, d5693 as c12, d5694 as c13, d5695 as c14 } from '../descriptors/data/256.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d980 as c9 } from '../descriptors/data/46.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d5381 as c10 } from '../descriptors/data/241.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d6163 as c15, d6164 as c16, d6165 as c17, d6166 as c18, d6168 as c19, d6169 as c20, d6170 as c21 } from '../descriptors/data/285.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d980 as d980 } from '../descriptors/data/46.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d980;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["OrderChargeTaxAssignment"]:c1(),["OrderLineItemTaxAssignment"]:c2(),["OrderTaxCalculationRequest"]:c3(),["OrderTaxComponentRequest"]:c4(),["OrderTaxJurisdictionRequest"]:c5(),["OrderTaxLocationFullAddressRequest"]:c6(),["OrderTaxLocationPostalAddressRequest"]:c7(),["OrderTaxLocationRequest"]:c8(),["OrderTaxUpdateRequest"]:c9(),["SharedCodec221"]:c10(),["SharedCodec928"]:c11(),["SharedCodec929"]:c12(),["SharedCodec930"]:c13(),["SharedCodec931"]:c14(),["SharedCodec935"]:c15(),["SharedCodec936"]:c16(),["SharedCodec937"]:c17(),["SharedCodec938"]:c18(),["TaxCalculationRequestModel"]:c19(),["TaxComponentRequestModel"]:c20(),["TaxJurisdictionRequest"]:c21()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeOrderTaxUpdateRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
