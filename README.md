# Instructions

## Install the excercise

### If you are using node

```sh
npm i
```

### If you are using python

```sh
virtualenv test_env
source test_env/bin/activate
pip install -r requirements.txt
```

## The problem

By starting at the top of the triangle below and moving to adjacent numbers on the row below, the maximum total from top to bottom is 23.

![Triangle Image](./image.png)

That is, 3 + 7 + 4 + 9 = 23.

Our goal is to find the maximum total from top to bottom in the two triangles contained in the data folder:
 - [Triangle 1 (small - 15 rows)](./data/triangle_1.txt)
 - [Triangle 2 (big - 100 rows)](./data/triangle_2.txt)

## The expected solution

### If you are using node

To solve this problem, write the body of the [computeMaxSum function](./computeMaxSum.js).

To test your function, run:

```sh
npm test
```

This will run the [compliance tests](./computeMaxSum.test.js)

### If you are using python

To solve this problem, write the body of the [compute_max_sum function](./compute_max_sum.py).

To test your function, run:

```sh
pytest
```

This will run the [compliance tests](./test_compute_max_sum.py)
