import { d319 as c0 } from '../descriptors/data/19.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d8087 as c1 } from '../descriptors/data/392.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d319 as d319 } from '../descriptors/data/19.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d319;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreatePaymentMethodDomainRequest"]:c0(),["SharedCodec376"]:c1()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreatePaymentMethodDomainRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
