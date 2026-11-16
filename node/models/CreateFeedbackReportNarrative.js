import { d246 as c0 } from '../descriptors/data/11.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { d7627 as c1 } from '../descriptors/data/353.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { d246 as d246 } from '../descriptors/data/11.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d246;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateFeedbackReportNarrative"]:c0(),["FeedbackReportingClientRequest"]:c1()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateFeedbackReportNarrative(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
