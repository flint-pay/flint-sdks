import { d7838 as c0 } from '../descriptors/data/375.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d7838 as d7838 } from '../descriptors/data/375.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d7838;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["ReaderPaymentSourceTip"]:c0()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeReaderPaymentSourceTip(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
