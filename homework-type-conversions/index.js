// Number("\n"); => ? 0
// (символ \n игнорируется при преобразовании в число, по этому выводит как пустую строку , а это 0)
// Number(" 12$ "); => ? NaN// число с символом приводит к NaN
// " 5$ " + undefined + " 6$ " => ?" 5$ undefined 6$ " - конкатенация строки, все пробелы остаються
// "123" / false => ? infinity
// из-за оператора деления выражение преобразовывается в число 123/0 - выражение деление на 0 - infinity
// "\t 12 \n" / "6 \n" => ? 2
// т.к. присутствует оператор деления выражение преобразов. в число, также символы \t и \n
// игнорируются при переводе в число, получаем 12/6=2
// "55 \n" + NaN => ? "55 NaN" - \n -( переновит на новую строку)
// Number().parseInt(" 8$ ") / Number.parseInt(" 2$ ") * Number.parseInt(" 2% ") => ? error ?
// (Number().parseInt(" 8$ ") - не правильный синтаксис)
// 1 + 2 + 1 + NaN => ? NaN
// 1 + 2 +1 + undefined => ? NaN  (undefined == NaN)
// 1 + 2 +1 + null => ? 4 (null == 0)

console.log(Number("\n"));
console.log(Number(" 12$ "));
console.log(" 5$ " + undefined + " 6$ ");
console.log("123" / false);
console.log("\t 12 \n" / "6 \n");
console.log("55 \n" + NaN);
// console.log(Number().parseInt(" 8$ ") / Number.parseInt(" 2$ ") * Number.parseInt(" 2% "));
console.log(1 + 2 + 1 + NaN);
console.log(1 + 2 +1 + undefined);
console.log(1 + 2 +1 + null);