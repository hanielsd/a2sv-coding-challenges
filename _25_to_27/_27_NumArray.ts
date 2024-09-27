class NumArray {
  private nums: number[];
  constructor(nums: number[]) {
    this.nums = nums;
  }

  sumRange(left: number, right: number): number {
    return this.nums.slice(left, right + 1).reduce((sum, num) => sum + num, 0);
  }
}

/**
 * Your NumArray object will be instantiated and called as such:
 * let obj = new NumArray(nums)
 * let param_1 = obj.sumRange(left,right)
 */
