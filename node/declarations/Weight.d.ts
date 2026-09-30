


export type Weight = { /** Weight unit. Use gram, kilogram, ounce, or pound. */ "unit": "gram" | "kilogram" | "ounce" | "pound" | (string & {}); /** Use an exact numeric string, not a floating-point number. Format: int64. */ "value": string; };
