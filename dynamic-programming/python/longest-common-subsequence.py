# !/usr/bin/env python
# -*- coding: utf-8 -*-

def create_matrix(lines, columns):
  matrix = []

  for i in range(columns):
    line = []
    for j in range(lines):
      line.append(0)
    matrix.append(line)
  
  return matrix

def substring(string_a, string_b):
  cell = create_matrix(len(string_a) + 1, len(string_b) + 1)
  
  longest_commom_subsequence = 0
  last_sub_index= 0
  
  for i in range(len(string_a)):
    for j in range(len(string_b)):
      if (string_a[i] == string_b[j]):
        cell[i][j] = cell[i - 1][j - 1] + 1
        if cell[i][j] > longest_commom_subsequence:
          longest_commom_subsequence = cell[i][j]
          last_sub_index = i
      else:
        cell[i][j] = 0

  return string_a[last_sub_index - longest_commom_subsequence + 1: last_sub_index + 1]

def subsequence(string_a, string_b):
  cell = create_matrix(len(string_a) + 1, len(string_b) + 1)
  
  for i in range(len(string_a)):
    for j in range(len(string_b)):
      if string_a[i] == string_b[j]:
        cell[i][j] = cell[i - 1][j - 1] + 1
      else:
        cell[i][j] = max(cell[i - 1][j], cell[i][j - 1])
  
  return cell[len(string_a) - 1][len(string_b) - 1]

print substring("vista", "hish");     # "is
print substring("fish", "hish");      # "ish"
print subsequence("fish", "fosh");    # 3
print subsequence("fort", "fosh");    # 2

