import types
import pytest

from compute_max_sum import compute_max_sum

class TestComputeMaxSum(object):
    def test_compute_max_sum_is_a_function(self):
        assert isinstance(compute_max_sum, types.FunctionType) == True

    def test_compute_max_sum_returns_the_correct_awnser_with_triangle_1(self):
        assert compute_max_sum('./data/triangle_1.txt') == 1074

    def test_compute_max_sum_returns_the_correct_awnser_with_triangle_2(self):
        assert compute_max_sum('./data/triangle_2.txt') == 7273
