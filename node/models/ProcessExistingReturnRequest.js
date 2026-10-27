import { d3013 as c0 } from '../descriptors/data/116.js?sdk=f95cd788a8ba3731ebe91694701a8a5cdceec0ac429cf23d16edc2f61220fbab';
import { d4959 as c1 } from '../descriptors/data/226.js?sdk=f95cd788a8ba3731ebe91694701a8a5cdceec0ac429cf23d16edc2f61220fbab';
import { d860 as c2 } from '../descriptors/data/37.js?sdk=f95cd788a8ba3731ebe91694701a8a5cdceec0ac429cf23d16edc2f61220fbab';
import { d4967 as c3, d4968 as c4, d4969 as c5, d4970 as c6, d4971 as c7 } from '../descriptors/data/227.js?sdk=f95cd788a8ba3731ebe91694701a8a5cdceec0ac429cf23d16edc2f61220fbab';
import { d4924 as c8, d4916 as c15, d4917 as c16, d4918 as c17, d4919 as c18, d4920 as c19 } from '../descriptors/data/223.js?sdk=f95cd788a8ba3731ebe91694701a8a5cdceec0ac429cf23d16edc2f61220fbab';
import { d4862 as c9, d4864 as c10, d4865 as c11, d4866 as c12 } from '../descriptors/data/219.js?sdk=f95cd788a8ba3731ebe91694701a8a5cdceec0ac429cf23d16edc2f61220fbab';
import { d4977 as c13, d4978 as c14 } from '../descriptors/data/228.js?sdk=f95cd788a8ba3731ebe91694701a8a5cdceec0ac429cf23d16edc2f61220fbab';
import { d4926 as c20, d4927 as c21, d4928 as c22 } from '../descriptors/data/224.js?sdk=f95cd788a8ba3731ebe91694701a8a5cdceec0ac429cf23d16edc2f61220fbab';
import { d4011 as c23 } from '../descriptors/data/170.js?sdk=f95cd788a8ba3731ebe91694701a8a5cdceec0ac429cf23d16edc2f61220fbab';
import { d5007 as c24 } from '../descriptors/data/229.js?sdk=f95cd788a8ba3731ebe91694701a8a5cdceec0ac429cf23d16edc2f61220fbab';
import { d3250 as c25 } from '../descriptors/data/130.js?sdk=f95cd788a8ba3731ebe91694701a8a5cdceec0ac429cf23d16edc2f61220fbab';
import { d860 as d860 } from '../descriptors/data/37.js?sdk=f95cd788a8ba3731ebe91694701a8a5cdceec0ac429cf23d16edc2f61220fbab';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d860;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["ProcessExistingReturnLineItemRequest"]:c1(),["ProcessExistingReturnRequest"]:c2(),["ReturnProcessDecision"]:c3(),["ReturnProcessDispositionRequest"]:c4(),["ReturnProcessInspectionRequest"]:c5(),["ReturnProcessReceiptRequest"]:c6(),["ReturnProcessResolutionRequest"]:c7(),["ReturnReplacementLineItemRequest"]:c8(),["ReturnSourceSystem"]:c9(),["SharedCodec1075"]:c10(),["SharedCodec1076"]:c11(),["SharedCodec1077"]:c12(),["SharedCodec1078"]:c13(),["SharedCodec1079"]:c14(),["SharedCodec1104"]:c15(),["SharedCodec1105"]:c16(),["SharedCodec1106"]:c17(),["SharedCodec1107"]:c18(),["SharedCodec1108"]:c19(),["SharedCodec1109"]:c20(),["SharedCodec1110"]:c21(),["SharedCodec1111"]:c22(),["SharedCodec150"]:c23(),["SharedCodec210"]:c24(),["SharedCodec38"]:c25()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeProcessExistingReturnRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
