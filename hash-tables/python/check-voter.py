# !/usr/bin/env python
# -*- coding: utf-8 -*-

voted = {}

def check_voter(name):
  if voted.get(name):
    print "{%s}: kick them out!" % name
  else:
    voted[name] = True
    print "{%s}: let them vote!" % name

check_voter("tom")    # let them vote!
check_voter("mike")   # let them vote!
check_voter("mike")   # kick them out!!

