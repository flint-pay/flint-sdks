import { d5951 as c0, d5952 as c1, d5943 as c3, d5944 as c4, d5942 as c5 } from '../descriptors/data/268.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d5958 as c2, d5963 as c6 } from '../descriptors/data/269.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d8184 as c7, d8185 as c8 } from '../descriptors/data/398.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d8203 as c9, d8204 as c10 } from '../descriptors/data/399.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d5706 as c11 } from '../descriptors/data/250.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d5706 as d5706 } from '../descriptors/data/250.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d5706;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["ImageInputFile"]:c0(),["ImageInputSourceURL"]:c1(),["ImageRequest"]:c2(),["SharedCodec1685"]:c3(),["SharedCodec1686"]:c4(),["SharedCodec1687"]:c5(),["SharedCodec1689"]:c6(),["SharedCodec1776"]:c7(),["SharedCodec1777"]:c8(),["UpdateProductOptionRequest"]:c9(),["UpdateProductOptionValueRequest"]:c10(),["UpdateProductRequest"]:c11()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeUpdateProductRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
