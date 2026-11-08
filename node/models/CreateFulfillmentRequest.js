import { d4541 as c0, d4539 as c13, d4540 as c14 } from '../descriptors/data/194.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d6065 as c1, d6066 as c2, d6067 as c4, d6068 as c5 } from '../descriptors/data/279.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d213 as c3 } from '../descriptors/data/10.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d6069 as c6, d6070 as c9, d6071 as c10, d6076 as c12, d6085 as c15, d6086 as c16 } from '../descriptors/data/280.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d4299 as c7 } from '../descriptors/data/180.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d593 as c8 } from '../descriptors/data/31.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d4429 as c11 } from '../descriptors/data/188.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d1499 as c17 } from '../descriptors/data/69.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d1500 as c18, d1501 as c19, d1502 as c20, d1503 as c21 } from '../descriptors/data/70.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d5309 as c22 } from '../descriptors/data/237.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d6147 as c23, d6148 as c24, d6149 as c25, d6150 as c26, d6151 as c27, d6152 as c28, d6153 as c29 } from '../descriptors/data/284.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d6167 as c30 } from '../descriptors/data/285.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d4362 as c31 } from '../descriptors/data/184.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d213 as d213 } from '../descriptors/data/10.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d213;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["AddressRequest"]:c0(),["CreateDeliveryFulfillmentDetails"]:c1(),["CreateDigitalFulfillmentDetails"]:c2(),["CreateFulfillmentRequest"]:c3(),["CreatePackageItemRequest"]:c4(),["CreatePickupFulfillmentDetails"]:c5(),["CreateServiceFulfillmentDetails"]:c6(),["Dimensions"]:c7(),["FulfillmentLineItemRequest"]:c8(),["FulfillmentPackagingRequest"]:c9(),["FulfillmentRecipientRequest"]:c10(),["MetadataRequest"]:c11(),["ReturnShipmentLineItemAllocationRequest"]:c12(),["SharedCodec0"]:c13(),["SharedCodec1"]:c14(),["SharedCodec1271"]:c15(),["SharedCodec1272"]:c16(),["SharedCodec195"]:c17(),["SharedCodec196"]:c18(),["SharedCodec197"]:c19(),["SharedCodec198"]:c20(),["SharedCodec199"]:c21(),["SharedCodec324"]:c22(),["SharedCodec579"]:c23(),["SharedCodec580"]:c24(),["SharedCodec581"]:c25(),["SharedCodec582"]:c26(),["SharedCodec583"]:c27(),["SharedCodec584"]:c28(),["SharedCodec585"]:c29(),["SinglePackageCreateRequest"]:c30(),["Weight"]:c31()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateFulfillmentRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
