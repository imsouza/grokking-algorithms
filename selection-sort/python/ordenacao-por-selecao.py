# !/usr/bin/env python
# -*- coding: utf-8 -*-

def find_smallest_index(array):
  smallest_element = array[0]
  smallest_index = 0
  
  for i in range(1, len(array)):
    if array[i] < smallest_element:
      smallest_element = array[i]
      smallest_index = i
    
  return smallest_index

def selection_sort(array):
  sorted_array = []
  
  for i in range(len(array)):
    smallest_element = find_smallest_index(array)
    sorted_array.append(array.pop(smallest_element))
  
  return sorted_array

print selection_sort([5, 4, 6, 2, 3, 9, 8])		# [2, 3, 4, 5, 6, 8, 9]

