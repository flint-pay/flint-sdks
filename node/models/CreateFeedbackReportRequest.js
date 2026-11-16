import { d248 as c0 } from '../descriptors/data/12.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { d7627 as c1, d7631 as c2, d7632 as c3 } from '../descriptors/data/353.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { d248 as d248 } from '../descriptors/data/12.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d248;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateFeedbackReportRequest"]:c0(),["FeedbackReportingClientRequest"]:c1(),["SharedCodec349"]:c2(),["SharedCodec350"]:c3()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateFeedbackReportRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
