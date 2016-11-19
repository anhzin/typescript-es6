var s = new Set();
s.add("hello").add("goodbye").add("hello");
s.size === 2;
s.has("hello") === true;
for (var _i = 0, _a = s.values(); _i < _a.length; _i++) {
    var key = _a[_i];
    console.log(key);
}
//# sourceMappingURL=lesson29.js.map