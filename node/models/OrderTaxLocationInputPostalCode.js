import { d979 as c0 } from '../descriptors/data/46.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d5685 as c1 } from '../descriptors/data/256.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d979 as d979 } from '../descriptors/data/46.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d979;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["OrderTaxLocationInputPostalCode"]:c0(),["OrderTaxLocationPostalAddressRequest"]:c1()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeOrderTaxLocationInputPostalCode(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
