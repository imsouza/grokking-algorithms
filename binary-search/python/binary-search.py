# !/usr/bin/env python
# -*- coding: utf-8 -*-

def binarySearch(list, item):
  lowerValue = 0
  highestValue = len(list) - 1

  while lowerValue <= highestValue:
    middle = (lowerValue + highestValue) / 2
  
    if list[middle] == item:
      return middle
    elif list[middle] > item:
      highestValue = middle - 1
    else:
      lowerValue = middle + 1
  
  return None
  
list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

print binarySearch(list, 11)    # None
print binarySearch(list, 4)     # 3
print binarySearch(list, 8)     # 7

