# !/usr/bin/env python
# -*- coding: utf-8 -*-

def sum(list):
  if len(list) == 0:
    return 0
  else:
    return list[0] + sum(list[1:]) 

print sum([1, 3, 5, 4, 6, 5])    # 24

