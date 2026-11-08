import { d298 as c0 } from '../descriptors/data/17.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d1257 as c1 } from '../descriptors/data/59.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d6735 as c2, d6743 as c7 } from '../descriptors/data/320.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d6692 as c3 } from '../descriptors/data/317.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d6600 as c4, d6601 as c5, d6602 as c6 } from '../descriptors/data/311.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d6744 as c8, d6745 as c9, d6746 as c10, d6747 as c11, d6748 as c12 } from '../descriptors/data/321.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d5450 as c13 } from '../descriptors/data/244.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d298 as d298 } from '../descriptors/data/17.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d298;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateReturnReceiptRequest"]:c0(),["ReturnReceiptLineItemRequest"]:c1(),["ReturnSourceSystemRequest"]:c2(),["ReturnUnverifiedItem"]:c3(),["SharedCodec1177"]:c4(),["SharedCodec1178"]:c5(),["SharedCodec1179"]:c6(),["SharedCodec1210"]:c7(),["SharedCodec1211"]:c8(),["SharedCodec1212"]:c9(),["SharedCodec1213"]:c10(),["SharedCodec1214"]:c11(),["SharedCodec1215"]:c12(),["SharedCodec233"]:c13()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateReturnReceiptRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
