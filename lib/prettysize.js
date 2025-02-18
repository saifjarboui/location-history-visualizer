/* https://github.com/davglass/prettysize */
(function () {
  var sizes = ["Bytes", "kB", "MB", "GB", "TB", "PB", "EB"];
  window.prettySize = function (e, s, i) {
    var t, n;
    return (
      sizes.forEach(function (n, o) {
        i && (n = n.slice(0, 1));
        var r,
          B = Math.pow(1024, o);
        B > e ||
          ((r = (e / B).toFixed(1) + ""),
          r.indexOf(".0") === r.length - 2 && (r = r.slice(0, -2)),
          (t = r + (s ? "" : " ") + n));
      }),
      t ||
        ((n = i ? sizes[0].slice(0, 1) : sizes[0]),
        (t = "0" + (s ? "" : " ") + n)),
      t
    );
  };
})();
