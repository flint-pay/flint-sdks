import { d355 as c0 } from '../descriptors/data/22.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d5814 as c1 } from '../descriptors/data/259.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d8433 as c2, d8435 as c4, d8436 as c5 } from '../descriptors/data/413.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d8447 as c3 } from '../descriptors/data/414.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d7547 as c6 } from '../descriptors/data/360.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d355 as d355 } from '../descriptors/data/22.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d355;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateReturnResolutionPreviewRequestCorrection"]:c0(),["MoneyValue"]:c1(),["ReturnResolutionAdjustmentRequest"]:c2(),["SharedCodec398"]:c3(),["SharedCodec402"]:c4(),["SharedCodec403"]:c5(),["SharedCodec54"]:c6()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateReturnResolutionPreviewRequestCorrection(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
