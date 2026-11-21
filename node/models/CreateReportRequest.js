import { d377 as c0 } from '../descriptors/data/22.js?sdk=78adcb94b2744b6fa493f7c5d1140994ead990994beb58e0d98f51ce65e8f253';
import { d10546 as c1 } from '../descriptors/data/496.js?sdk=78adcb94b2744b6fa493f7c5d1140994ead990994beb58e0d98f51ce65e8f253';
import { d10547 as c2 } from '../descriptors/data/497.js?sdk=78adcb94b2744b6fa493f7c5d1140994ead990994beb58e0d98f51ce65e8f253';
import { d377 as d377 } from '../descriptors/data/22.js?sdk=78adcb94b2744b6fa493f7c5d1140994ead990994beb58e0d98f51ce65e8f253';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d377;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateReportRequest"]:c0(),["SharedCodec552"]:c1(),["SharedCodec553"]:c2()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateReportRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
