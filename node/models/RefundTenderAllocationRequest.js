import { d77 as c0, d2126 as c1, d366 as c2, d2124 as c3, d2123 as c4, d2125 as c5 } from '../descriptors/data.js?sdk=527d9352908a453ad41ae99b8ef20015f463fff9697dd74e49111f49715fee29';
import { d2126 } from '../descriptors/data.js?sdk=527d9352908a453ad41ae99b8ef20015f463fff9697dd74e49111f49715fee29';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2126;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["RefundTenderAllocationRequest"]:c1(),["SharedCodec128"]:c2(),["SharedCodec539"]:c3(),["SharedCodec540"]:c4(),["SharedCodec541"]:c5()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeRefundTenderAllocationRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
