import { d6067 as c0 } from '../descriptors/data/279.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d4299 as c1 } from '../descriptors/data/180.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d599 as c2 } from '../descriptors/data/31.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d4429 as c3 } from '../descriptors/data/188.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d6076 as c4, d6085 as c5, d6086 as c6 } from '../descriptors/data/280.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d5309 as c7 } from '../descriptors/data/237.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d6147 as c8, d6148 as c9, d6149 as c10, d6150 as c11, d6151 as c12 } from '../descriptors/data/284.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d6167 as c13 } from '../descriptors/data/285.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d4362 as c14 } from '../descriptors/data/184.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d599 as d599 } from '../descriptors/data/31.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d599;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreatePackageItemRequest"]:c0(),["Dimensions"]:c1(),["FulfillmentSinglePackageRequest"]:c2(),["MetadataRequest"]:c3(),["ReturnShipmentLineItemAllocationRequest"]:c4(),["SharedCodec1271"]:c5(),["SharedCodec1272"]:c6(),["SharedCodec324"]:c7(),["SharedCodec579"]:c8(),["SharedCodec580"]:c9(),["SharedCodec581"]:c10(),["SharedCodec582"]:c11(),["SharedCodec583"]:c12(),["SinglePackageCreateRequest"]:c13(),["Weight"]:c14()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeFulfillmentSinglePackageRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
