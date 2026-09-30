import { d2009 as c0, d1982 as c1, d1983 as c2, d1986 as c3, d1985 as c4, d1984 as c5, d1989 as c6, d1988 as c7, d1987 as c8, d1992 as c9, d1991 as c10, d1990 as c11, d1995 as c12, d1994 as c13, d1993 as c14, d1997 as c15, d1996 as c16, d2008 as c17, d2000 as c18, d1998 as c19, d1999 as c20, d2002 as c21, d2001 as c22, d2005 as c23, d2003 as c24, d2004 as c25, d2007 as c26, d2006 as c27 } from '../descriptors/data.js?sdk=bef5952824dbe0867acb5a07673ca91102b136eda21794fff718a3addd296a2a';
import { d2009 } from '../descriptors/data.js?sdk=bef5952824dbe0867acb5a07673ca91102b136eda21794fff718a3addd296a2a';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2009;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["ReturnLineDecision"]:c0(),["SharedCodec486"]:c1(),["SharedCodec487"]:c2(),["SharedCodec488"]:c3(),["SharedCodec489"]:c4(),["SharedCodec490"]:c5(),["SharedCodec491"]:c6(),["SharedCodec492"]:c7(),["SharedCodec493"]:c8(),["SharedCodec494"]:c9(),["SharedCodec495"]:c10(),["SharedCodec496"]:c11(),["SharedCodec497"]:c12(),["SharedCodec498"]:c13(),["SharedCodec499"]:c14(),["SharedCodec500"]:c15(),["SharedCodec501"]:c16(),["SharedCodec502"]:c17(),["SharedCodec503"]:c18(),["SharedCodec504"]:c19(),["SharedCodec505"]:c20(),["SharedCodec506"]:c21(),["SharedCodec507"]:c22(),["SharedCodec508"]:c23(),["SharedCodec509"]:c24(),["SharedCodec510"]:c25(),["SharedCodec511"]:c26(),["SharedCodec512"]:c27()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeReturnLineDecision(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
