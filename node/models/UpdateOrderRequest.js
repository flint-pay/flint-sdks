import { d4541 as c0, d4539 as c14, d4540 as c15, d4542 as c17 } from '../descriptors/data/194.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d4429 as c1, d4430 as c16 } from '../descriptors/data/188.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d4312 as c2 } from '../descriptors/data/181.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d945 as c3, d958 as c6 } from '../descriptors/data/45.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d5679 as c4, d5681 as c7, d5682 as c8, d5683 as c9, d5684 as c10, d5685 as c11, d5686 as c12, d5688 as c23, d5689 as c24, d5690 as c25, d5691 as c26, d5692 as c27, d5693 as c28, d5694 as c29, d5695 as c30 } from '../descriptors/data/256.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d5606 as c5 } from '../descriptors/data/252.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d980 as c13 } from '../descriptors/data/46.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d6094 as c18, d6095 as c19, d6096 as c20, d6097 as c21 } from '../descriptors/data/281.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d5381 as c22 } from '../descriptors/data/241.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d6163 as c31, d6164 as c32, d6165 as c33, d6166 as c34, d6168 as c35, d6169 as c36, d6170 as c37 } from '../descriptors/data/285.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d4208 as c38 } from '../descriptors/data/174.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d4208 as d4208 } from '../descriptors/data/174.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d4208;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["AddressRequest"]:c0(),["MetadataRequest"]:c1(),["MoneyValue"]:c2(),["OrderChargeTaxAssignment"]:c3(),["OrderDeliveryDestinationRecipientRequest"]:c4(),["OrderInventoryRoutingSourceRequest"]:c5(),["OrderLineItemTaxAssignment"]:c6(),["OrderTaxCalculationRequest"]:c7(),["OrderTaxComponentRequest"]:c8(),["OrderTaxJurisdictionRequest"]:c9(),["OrderTaxLocationFullAddressRequest"]:c10(),["OrderTaxLocationPostalAddressRequest"]:c11(),["OrderTaxLocationRequest"]:c12(),["OrderTaxUpdateRequest"]:c13(),["SharedCodec0"]:c14(),["SharedCodec1"]:c15(),["SharedCodec1368"]:c16(),["SharedCodec1371"]:c17(),["SharedCodec1417"]:c18(),["SharedCodec1418"]:c19(),["SharedCodec1419"]:c20(),["SharedCodec1420"]:c21(),["SharedCodec221"]:c22(),["SharedCodec274"]:c23(),["SharedCodec275"]:c24(),["SharedCodec276"]:c25(),["SharedCodec277"]:c26(),["SharedCodec928"]:c27(),["SharedCodec929"]:c28(),["SharedCodec930"]:c29(),["SharedCodec931"]:c30(),["SharedCodec935"]:c31(),["SharedCodec936"]:c32(),["SharedCodec937"]:c33(),["SharedCodec938"]:c34(),["TaxCalculationRequestModel"]:c35(),["TaxComponentRequestModel"]:c36(),["TaxJurisdictionRequest"]:c37(),["UpdateOrderRequest"]:c38()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeUpdateOrderRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
