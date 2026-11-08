import { d4312 as c0 } from '../descriptors/data/181.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d5681 as c1, d5682 as c2, d5683 as c3, d5684 as c4, d5685 as c5, d5686 as c6, d5687 as c7, d5692 as c9, d5693 as c10, d5694 as c11, d5695 as c12, d5696 as c13, d5697 as c14, d5698 as c15 } from '../descriptors/data/256.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d5381 as c8 } from '../descriptors/data/241.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d5687 as d5687 } from '../descriptors/data/256.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d5687;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["OrderTaxCalculationRequest"]:c1(),["OrderTaxComponentRequest"]:c2(),["OrderTaxJurisdictionRequest"]:c3(),["OrderTaxLocationFullAddressRequest"]:c4(),["OrderTaxLocationPostalAddressRequest"]:c5(),["OrderTaxLocationRequest"]:c6(),["OrderTaxRequest"]:c7(),["SharedCodec221"]:c8(),["SharedCodec928"]:c9(),["SharedCodec929"]:c10(),["SharedCodec930"]:c11(),["SharedCodec931"]:c12(),["SharedCodec932"]:c13(),["SharedCodec933"]:c14(),["SharedCodec934"]:c15()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeOrderTaxRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
