# !/usr/bin/env python
# -*- coding: utf-8 -*-

def quicksort(array):
  if len(array) < 2:
    return array
  else:
    pivot = array[0]

    _min = [i for i in array[1:] if i <= pivot]
    _max = [i for i in array[1:] if i > pivot]
    
    return quicksort(_min) + [pivot] + quicksort(_max)

print quicksort([11, 20, 5, 2])   # [2, 5, 11, 20]

