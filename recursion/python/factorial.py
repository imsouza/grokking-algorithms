# !/usr/bin/env python
# -*- coding: utf-8 -*-

def factorial(num):
  if num == 0 or num == 1:
    return 1
  else:
    return num * factorial(num - 1)
    
print factorial(5)	# 120
print factorial(4)	# 24
print factorial(3)	# 6

