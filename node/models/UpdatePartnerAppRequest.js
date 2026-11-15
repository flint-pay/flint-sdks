import { d5784 as c0 } from '../descriptors/data/258.js?sdk=bb0d7e74351abfed942ea144dbe99f50da6117785add7c8de338b21bf11fbc5a';
import { d7860 as c1 } from '../descriptors/data/378.js?sdk=bb0d7e74351abfed942ea144dbe99f50da6117785add7c8de338b21bf11fbc5a';
import { d7884 as c2, d7885 as c3, d7886 as c4, d7887 as c5, d7888 as c6, d7889 as c7, d7890 as c8, d7891 as c9, d7892 as c10, d7893 as c11, d7894 as c12, d7895 as c13 } from '../descriptors/data/379.js?sdk=bb0d7e74351abfed942ea144dbe99f50da6117785add7c8de338b21bf11fbc5a';
import { d5667 as c14 } from '../descriptors/data/248.js?sdk=bb0d7e74351abfed942ea144dbe99f50da6117785add7c8de338b21bf11fbc5a';
import { d5667 as d5667 } from '../descriptors/data/248.js?sdk=bb0d7e74351abfed942ea144dbe99f50da6117785add7c8de338b21bf11fbc5a';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d5667;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["PartnerAppPermissionManifestEntryRequest"]:c1(),["SharedCodec1747"]:c2(),["SharedCodec1748"]:c3(),["SharedCodec1749"]:c4(),["SharedCodec1750"]:c5(),["SharedCodec1751"]:c6(),["SharedCodec1752"]:c7(),["SharedCodec1753"]:c8(),["SharedCodec1754"]:c9(),["SharedCodec1755"]:c10(),["SharedCodec1756"]:c11(),["SharedCodec1757"]:c12(),["SharedCodec1758"]:c13(),["UpdatePartnerAppRequest"]:c14()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeUpdatePartnerAppRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
