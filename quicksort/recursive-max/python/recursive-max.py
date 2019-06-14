# !/usr/bin/env python
# -*- coding: utf-8 -*-

def highest_value(list):
  if len(list) == 0:
    return 0
  
  _max = highest_value(list[1:])
  
  if list[0] > _max:
    _max = list[0]
  
  return _max

print highest_value([1, 3, 5, 4, 6, 5])   # 6

