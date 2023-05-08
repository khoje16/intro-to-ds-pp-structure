function dot_product(v1, v2) {
    let ps = 0;
    for (let i = 0; i < v1.length; i++) {
      ps += v1[i] * v2[i];
    }
    return ps;
  }

  function isOrthogonal(vectors) {
    for (let i = 0; i < vectors.length; i += 2) {
      let v1 = vectors[i];
      let v2 = vectors[i+1];
      let dot_product_result = dot_product(v1, v2);
      if (dot_product_result != 0) {
        return false;
      }
    }
    return true;
  }

  let vectors = [[1, 0, 0], [0, 1, 0], [0, 0, 1], [1, 1, 0], [1, 0, 1], [0, 1, 1]];
console.log(isOrthogonal(vectors)); // Output: true
