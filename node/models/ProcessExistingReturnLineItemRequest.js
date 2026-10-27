import { d3013 as c0 } from '../descriptors/data/116.js?sdk=f95cd788a8ba3731ebe91694701a8a5cdceec0ac429cf23d16edc2f61220fbab';
import { d4959 as c1 } from '../descriptors/data/226.js?sdk=f95cd788a8ba3731ebe91694701a8a5cdceec0ac429cf23d16edc2f61220fbab';
import { d4967 as c2, d4968 as c3, d4969 as c4, d4971 as c5 } from '../descriptors/data/227.js?sdk=f95cd788a8ba3731ebe91694701a8a5cdceec0ac429cf23d16edc2f61220fbab';
import { d4924 as c6, d4916 as c9, d4917 as c10, d4918 as c11, d4919 as c12, d4920 as c13 } from '../descriptors/data/223.js?sdk=f95cd788a8ba3731ebe91694701a8a5cdceec0ac429cf23d16edc2f61220fbab';
import { d4977 as c7, d4978 as c8 } from '../descriptors/data/228.js?sdk=f95cd788a8ba3731ebe91694701a8a5cdceec0ac429cf23d16edc2f61220fbab';
import { d4926 as c14, d4927 as c15, d4928 as c16 } from '../descriptors/data/224.js?sdk=f95cd788a8ba3731ebe91694701a8a5cdceec0ac429cf23d16edc2f61220fbab';
import { d5007 as c17 } from '../descriptors/data/229.js?sdk=f95cd788a8ba3731ebe91694701a8a5cdceec0ac429cf23d16edc2f61220fbab';
import { d3250 as c18 } from '../descriptors/data/130.js?sdk=f95cd788a8ba3731ebe91694701a8a5cdceec0ac429cf23d16edc2f61220fbab';
import { d4959 as d4959 } from '../descriptors/data/226.js?sdk=f95cd788a8ba3731ebe91694701a8a5cdceec0ac429cf23d16edc2f61220fbab';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d4959;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["ProcessExistingReturnLineItemRequest"]:c1(),["ReturnProcessDecision"]:c2(),["ReturnProcessDispositionRequest"]:c3(),["ReturnProcessInspectionRequest"]:c4(),["ReturnProcessResolutionRequest"]:c5(),["ReturnReplacementLineItemRequest"]:c6(),["SharedCodec1078"]:c7(),["SharedCodec1079"]:c8(),["SharedCodec1104"]:c9(),["SharedCodec1105"]:c10(),["SharedCodec1106"]:c11(),["SharedCodec1107"]:c12(),["SharedCodec1108"]:c13(),["SharedCodec1109"]:c14(),["SharedCodec1110"]:c15(),["SharedCodec1111"]:c16(),["SharedCodec210"]:c17(),["SharedCodec38"]:c18()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeProcessExistingReturnLineItemRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
